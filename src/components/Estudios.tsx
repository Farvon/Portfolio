import { GraduationCap, Calendar, MapPin } from "lucide-react";

interface Study {
  id: string;
  title: string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  type: "university" | "course" | "certification";
  status: "completed" | "in-progress";
}

const studies: Study[] = [
  {
    id: "1",
    title: "Ingeniería en Sistemas Computacionales",
    institution: "Universidad Tecnológica Nacional",
    location: "Buenos Aires, Argentina",
    startDate: "2020",
    endDate: "2024",
    description:
      "Carrera universitaria enfocada en desarrollo de software, bases de datos, redes y gestión de proyectos tecnológicos.",
    type: "university",
    status: "completed",
  },
  {
    id: "2",
    title: "Curso de React y Next.js",
    institution: "Platzi",
    location: "Online",
    startDate: "2023",
    endDate: "2023",
    description:
      "Curso especializado en desarrollo frontend moderno con React, Next.js, TypeScript y mejores prácticas.",
    type: "course",
    status: "completed",
  },
  {
    id: "3",
    title: "Certificación AWS Cloud Practitioner",
    institution: "Amazon Web Services",
    location: "Online",
    startDate: "2024",
    endDate: "En progreso",
    description:
      "Certificación fundamental de AWS que cubre conceptos básicos de cloud computing y servicios de Amazon.",
    type: "certification",
    status: "in-progress",
  },
  {
    id: "4",
    title: "Diplomado en Inteligencia Artificial",
    institution: "Instituto Tecnológico de Monterrey",
    location: "Online",
    startDate: "2024",
    endDate: "2025",
    description:
      "Programa especializado en machine learning, deep learning y aplicaciones prácticas de IA.",
    type: "course",
    status: "in-progress",
  },
];

const getTypeColor = (type: Study["type"]) => {
  switch (type) {
    case "university":
      return "bg-blue-500";
    case "course":
      return "bg-green-500";
    case "certification":
      return "bg-purple-500";
    default:
      return "bg-gray-500";
  }
};

const getTypeLabel = (type: Study["type"]) => {
  switch (type) {
    case "university":
      return "Universidad";
    case "course":
      return "Curso";
    case "certification":
      return "Certificación";
    default:
      return "Estudio";
  }
};

export default function Estudios() {
  return (
    <div id="estudios" className="max-w-6xl mx-auto p-6">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          Mi Formación Académica
        </h2>
        <p className="text-gray-600">
          Un recorrido cronológico por mis estudios y certificaciones
        </p>
      </div>

      <div className="relative">
        {/* Línea vertical central */}
        <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gray-300 hidden md:block"></div>
        {/* Línea vertical para móvil */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300 md:hidden"></div>

        <div className="space-y-12">
          {studies.map((study, index) => {
            const isLeft = index % 2 === 0;

            return (
              <div key={study.id} className="relative">
                {/* Layout para desktop */}
                <div className="hidden md:flex items-center">
                  {isLeft ? (
                    <>
                      {/* Tarjeta izquierda */}
                      <div className="w-1/2 pr-8">
                        <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300 ml-auto max-w-md">
                          <StudyCard study={study} />
                        </div>
                      </div>

                      {/* Círculo central */}
                      <div className="relative z-10 flex items-center justify-center w-16 h-16 rounded-full bg-white border-4 border-gray-300 shadow-lg">
                        <div
                          className={`w-12 h-12 rounded-full ${getTypeColor(
                            study.type
                          )} flex items-center justify-center`}
                        >
                          <GraduationCap className="w-6 h-6 text-white" />
                        </div>
                      </div>

                      {/* Espacio derecho */}
                      <div className="w-1/2 pl-8"></div>
                    </>
                  ) : (
                    <>
                      {/* Espacio izquierdo */}
                      <div className="w-1/2 pr-8"></div>

                      {/* Círculo central */}
                      <div className="relative z-10 flex items-center justify-center w-16 h-16 rounded-full bg-white border-4 border-gray-300 shadow-lg">
                        <div
                          className={`w-12 h-12 rounded-full ${getTypeColor(
                            study.type
                          )} flex items-center justify-center`}
                        >
                          <GraduationCap className="w-6 h-6 text-white" />
                        </div>
                      </div>

                      {/* Tarjeta derecha */}
                      <div className="w-1/2 pl-8">
                        <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300 mr-auto max-w-md">
                          <StudyCard study={study} />
                        </div>
                      </div>
                    </>
                  )}
                </div>

                {/* Layout para móvil */}
                <div className="md:hidden flex items-start">
                  <div
                    className={`relative z-10 flex items-center justify-center w-16 h-16 rounded-full ${getTypeColor(
                      study.type
                    )} shadow-lg`}
                  >
                    <GraduationCap className="w-8 h-8 text-white" />
                  </div>
                  <div className="ml-6 flex-1">
                    <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300">
                      <StudyCard study={study} />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// Componente separado para el contenido de la tarjeta
function StudyCard({ study }: { study: Study }) {
  return (
    <>
      {/* Header */}
      <div className="mb-3">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-lg font-semibold text-gray-900 flex-1">
            {study.title}
          </h3>
          <span
            className={`ml-2 inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
              study.status === "completed"
                ? "bg-green-100 text-green-800"
                : "bg-yellow-100 text-yellow-800"
            }`}
          >
            {study.status === "completed" ? "Completado" : "En progreso"}
          </span>
        </div>
        <p className="text-base text-gray-700 font-medium mb-2">
          {study.institution}
        </p>
        <span className="inline-flex items-center px-2 py-1 rounded text-xs bg-gray-100 text-gray-600">
          {getTypeLabel(study.type)}
        </span>
      </div>

      {/* Información adicional */}
      <div className="flex flex-col gap-2 mb-4 text-sm text-gray-600">
        <div className="flex items-center">
          <Calendar className="w-4 h-4 mr-2" />
          <span>
            {study.startDate} - {study.endDate}
          </span>
        </div>
        <div className="flex items-center">
          <MapPin className="w-4 h-4 mr-2" />
          <span>{study.location}</span>
        </div>
      </div>

      {/* Descripción */}
      <p className="text-gray-700 leading-relaxed text-sm">
        {study.description}
      </p>
    </>
  );
}
