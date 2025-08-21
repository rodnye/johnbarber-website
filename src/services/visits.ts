import { Visit } from "@/@types/visit";
import { prisma } from "./db";

export const addVisit = async (userAgent: string, ip: string | string[]) => {
  try {
    const trackerDelay = new Date(Date.now() - 20 * 60 * 1000); // 20min
    const existingVisit = await prisma.visit.findFirst({
      where: {
        userAgent: userAgent,
        timestamp: {
          gte: trackerDelay,
        },
      },
      orderBy: {
        timestamp: "desc",
      },
    });

    // Si existe una visita reciente, no crear nueva visita
    if (existingVisit) {
      console.log(
        "Visit not recorded: User agent visited within last 20 minutes",
      );
      return null;
    }

    const visit = await prisma.visit.create({
      data: {
        userAgent: userAgent,
        ip: Array.isArray(ip) ? ip[0] : ip,
        timestamp: new Date(),
      },
    });

    console.log("New visit recorded:", visit.id);
    return visit;
  } catch (error) {
    console.error("Error tracking visit:", error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
};

export const getAllVisitsCount = async (): Promise<number> => {
  try {
    const totalVisits = await prisma.visit.count();
    return totalVisits;
  } catch (error) {
    console.error("Error getting total visits:", error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
};

export const getVisitsCount = async (): Promise<number> => {
  try {
    const uniqueUserAgents = await prisma.visit.groupBy({
      by: ["userAgent"],
      _count: {
        userAgent: true,
      },
    });

    return uniqueUserAgents.length;
  } catch (error) {
    console.error("Error getting unique user agents count:", error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
};

export const getVisitsWithFakeCount = async (): Promise<number> => {
  try {
    const realVisits = await getAllVisitsCount();
    const adjustedFakeCount = 50;

    return realVisits + adjustedFakeCount;
  } catch (error) {
    console.error("Error getting visits with fake count:", error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
};

export const getAllVisits = async (page: number = 1, limit: number = 10) => {
  try {
    const skip = (page - 1) * limit;
    const visits: Visit[] = await prisma.visit.findMany({
      skip,
      take: limit,
      orderBy: {
        timestamp: "desc",
      },
    });
    return visits;
  } catch (error) {
    console.error("Error getting visits:", error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
};

export const getTotalPages = async (limit: number = 10): Promise<number> => {
  try {
    const totalVisits = await prisma.visit.count();
    return Math.ceil(totalVisits / limit);
  } catch (error) {
    console.error("Error getting total pages:", error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
};
