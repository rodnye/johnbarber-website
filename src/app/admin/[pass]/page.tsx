import { notFound } from "next/navigation";
import {
  getAllVisits,
  getAllVisitsCount,
  getTotalPages,
  getVisitsCount,
  getVisitsWithFakeCount,
} from "@/services/visits";

export default async function AdminPage({
  params: asyncParams,
  searchParams: asyncSearchParams,
}: {
  params: Promise<{ pass: string }>;
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await asyncParams;
  const searchParams = await asyncSearchParams;

  if (process.env.ADMIN_PASS !== params.pass) {
    return notFound();
  }

  const page = searchParams?.page ? parseInt(searchParams.page as string) : 1;
  const limit = 10;

  // Obtener datos
  const [totalVisits, uniqueVisits, visitsWithFake, visits, totalPages] =
    await Promise.all([
      getAllVisitsCount(),
      getVisitsCount(),
      getVisitsWithFakeCount(),
      getAllVisits(page, limit),
      getTotalPages(limit),
    ]);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Panel de Administración
          </h1>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Métricas */}
        <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="overflow-hidden rounded-lg bg-white shadow">
            <div className="px-4 py-5 sm:p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0 rounded-md bg-indigo-500 p-3">
                  <svg
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="truncate text-sm font-medium text-gray-500">
                      Visitas Totales
                    </dt>
                    <dd className="flex items-baseline">
                      <div className="text-2xl font-semibold text-gray-900">
                        {totalVisits}
                      </div>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-lg bg-white shadow">
            <div className="px-4 py-5 sm:p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0 rounded-md bg-green-500 p-3">
                  <svg
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="truncate text-sm font-medium text-gray-500">
                      Visitantes Únicos
                    </dt>
                    <dd className="flex items-baseline">
                      <div className="text-2xl font-semibold text-gray-900">
                        {uniqueVisits}
                      </div>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-lg bg-white shadow">
            <div className="px-4 py-5 sm:p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0 rounded-md bg-yellow-500 p-3">
                  <svg
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="truncate text-sm font-medium text-gray-500">
                      Visitas Totales (con ajuste)
                    </dt>
                    <dd className="flex items-baseline">
                      <div className="text-2xl font-semibold text-gray-900">
                        {visitsWithFake}
                      </div>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Lista de visitas */}
        <div className="overflow-hidden rounded-lg bg-white shadow">
          <div className="border-b border-gray-200 px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Registro de Visitas
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              Lista de todas las visitas recientes al sitio.
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase"
                  >
                    User Agent
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase"
                  >
                    IP
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase"
                  >
                    Fecha y Hora
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {visits.map((visit) => (
                  <tr key={visit.id}>
                    <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-500">
                      <div className="max-w-xs truncate text-sm font-medium text-gray-900">
                        {visit.userAgent}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-500">
                      {visit.ip}
                    </td>
                    <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-500">
                      {new Date(visit.timestamp).toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Paginación */}
          <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
            <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
              <div>
                <p className="text-sm text-gray-700">
                  Mostrando{" "}
                  <span className="font-medium">{(page - 1) * limit + 1}</span>{" "}
                  a{" "}
                  <span className="font-medium">
                    {Math.min(page * limit, totalVisits)}
                  </span>{" "}
                  de <span className="font-medium">{totalVisits}</span>{" "}
                  resultados
                </p>
              </div>
              <div>
                <nav
                  className="relative z-0 inline-flex -space-x-px rounded-md shadow-sm"
                  aria-label="Pagination"
                >
                  {page > 1 && (
                    <a
                      href={`?page=${page - 1}`}
                      className="relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50"
                    >
                      <span className="sr-only">Anterior</span>
                      <svg
                        className="h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  )}

                  {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                    const pageNumber = i + 1;
                    const isCurrent = page === pageNumber;
                    return (
                      <a
                        key={pageNumber}
                        href={`?page=${pageNumber}`}
                        className={`relative inline-flex items-center border px-4 py-2 text-sm font-medium ${
                          isCurrent
                            ? "z-10 border-indigo-500 bg-indigo-50 text-indigo-600"
                            : "border-gray-300 bg-white text-gray-500 hover:bg-gray-50"
                        }`}
                      >
                        {pageNumber}
                      </a>
                    );
                  })}

                  {page < totalPages && (
                    <a
                      href={`?page=${page + 1}`}
                      className="relative inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50"
                    >
                      <span className="sr-only">Siguiente</span>
                      <svg
                        className="h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  )}
                </nav>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
