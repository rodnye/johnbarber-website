import { addVisit } from "@/services/visits";
import { headers } from "next/headers";

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headersList = await headers();
  const userAgent = headersList.get("user-agent") || "Unknown";
  const ip =
    headersList.get("x-forwarded-for") ||
    headersList.get("x-real-ip") ||
    "Unknown";

  // async
  addVisit(userAgent, ip);

  return <>{children}</>;
}
