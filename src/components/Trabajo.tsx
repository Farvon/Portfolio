"use client";

import {
  Building2,
  Calendar,
  MapPin,
  Briefcase,
  Code,
  SquareCode,
  MonitorCheck,
  Combine,
} from "lucide-react";

interface ExperienciaLaboral {
  id: string;
  empresa: string;
  puesto: string;
  ubicacion: string;
  fechaInicio: string;
  fechaFin: string | null; // null si es trabajo actual
  descripcion: string;
  tareas: string[];
  tecnologias?: string[];
  tipo: "tiempo-completo" | "freelance";
  icon: string;
}

const experienciasLaborales: ExperienciaLaboral[] = [
  {
    id: "1",
    empresa: "Santa Lucia Seguros",
    puesto: "Developer / Soporte IT",
    ubicacion: "Buenos Aires",
    fechaInicio: "2025",
    fechaFin: null, // Trabajo actual
    descripcion:
      "Desarrollo y mantenimiento de aplicaciones web usando React, Node.js y PostgreSQL. Servicio IT.",
    tareas: [
      "Desarrollo de nueva aplicación web",
      "Mantenimiento de infraestructura",
      "Soporte a usuarios",
    ],
    tecnologias: ["React", "Node.js", "PostgreSQL", "MongoDB", "Docker"],
    tipo: "freelance",
    icon: "developer",
  },
  {
    id: "2",
    empresa: "Particular",
    puesto: "Desarrollador web",
    ubicacion: "San Nicolás de los Arroyos",
    fechaInicio: "2022",
    fechaFin: null,
    descripcion: "Desarrollo de aplicaciones para proyectos personales",
    tareas: [
      "Desarrollo web",
      "Estudio de tecnologías",
      "Desarrollo profecional",
    ],
    tecnologias: [
      "React",
      "TypeScript",
      "Tailwind",
      "Axios",
      "PostgreSQL",
      "MongoDB",
      "Postman",
      "Node.Js",
    ],
    tipo: "freelance",
    icon: "developer2",
  },
  {
    id: "3",
    empresa: "Ternium / Cider S.A / Accenture",
    puesto: "Operador del Centro de Cómputos",
    ubicacion: "Ramallo",
    fechaInicio: "2013",
    fechaFin: null,
    descripcion: "Operador del centro de cómputos - Analista",
    tareas: [
      "Gestión y planificación de jobs en Control-M",
      "Resolución de problemas, toma de decisiones y seguimiento de alertas.",
      "Contacto fluido y constante con implementadores.",
      "Generación de reportes y seguimientos de tareas.",
      "Control y seguimiento de problemáticas en equipos dentro del Data Center.",
    ],
    tecnologias: [
      "BMC",
      "Control-M",
      "SAP",
      "Grafana",
      "Nagios",
      "Orion",
      "Scom",
    ],
    tipo: "tiempo-completo",
    icon: "operador",
  },
  {
    id: "4",
    empresa: "FAIC S.A.",
    puesto: "Encargado",
    ubicacion: "Rosario",
    fechaInicio: "2011",
    fechaFin: "2012",
    descripcion:
      "Encargado de prototipos, diseño y desarrollo de acientos para colectivos",
    tareas: [
      "Realización de prototipos y moldes",
      "Creacion de programas para corte o mecanizado",
      "Escaneo, diseño e impresion 3D de piezas",
      "Seguimiento y construcción de los acientos",
    ],
    tecnologias: ["Solidwork", "Autocad"],
    tipo: "tiempo-completo",
    icon: "encargado",
  },
];

const getTipoColor = (tipo: ExperienciaLaboral["tipo"]) => {
  switch (tipo) {
    case "tiempo-completo":
      return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
    case "freelance":
      return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300";
    default:
      return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300";
  }
};

const getTipoIcon = (icon: ExperienciaLaboral["icon"]) => {
  switch (icon) {
    case "developer":
      return <Code />;
    case "developer2":
      return <SquareCode />;
    case "operador":
      return <MonitorCheck />;
    case "encargado":
      return <Combine />;
  }
};

const calcularDuracion = (inicio: string, fin: string | null) => {
  const fechaInicio = new Date(inicio);
  const fechaFin = fin ? new Date(fin) : new Date();

  const diffTime = Math.abs(fechaFin.getTime() - fechaInicio.getTime());
  const diffMonths = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 30));

  if (diffMonths < 12) {
    return `${diffMonths} ${diffMonths === 1 ? "mes" : "meses"}`;
  } else {
    const years = Math.floor(diffMonths / 12);
    const months = diffMonths % 12;
    if (months === 0) {
      return `${years} ${years === 1 ? "año" : "años"}`;
    }
    return `${years} ${years === 1 ? "año" : "años"} ${months} ${
      months === 1 ? "mes" : "meses"
    }`;
  }
};

export default function Trabajo() {
  return (
    <div id="trabajo" className="w-full max-w-4xl mx-auto p-6 border-t-2">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold tracking-tight mb-2">
          Experiencia Laboral
        </h2>
      </div>

      <div className="relative">
        {/* Línea vertical de la cronología */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700"></div>

        <div className="space-y-8">
          {experienciasLaborales.map((experiencia, index) => (
            <div
              key={experiencia.id}
              className="relative flex items-start gap-6"
            >
              {/* Punto de la cronología */}
              <div className="relative z-10 flex items-center justify-center w-16 h-16 bg-white dark:bg-gray-900 border-4 border-blue-100 rounded-full shadow-lg">
                {getTipoIcon(experiencia.icon)}
                {/* <Briefcase className="w-6 h-6 text-blue-600" /> */}
              </div>

              {/* Contenido de la experiencia */}
              <div className="flex-1 min-w-0">
                <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
                  <div className="p-6">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                      <div className="space-y-1">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                          {experiencia.puesto}
                        </h3>
                        <div className="flex items-center gap-2 text-base text-gray-600 dark:text-gray-400">
                          <Building2 className="w-4 h-4" />
                          {experiencia.empresa}
                        </div>
                      </div>
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getTipoColor(
                          experiencia.tipo
                        )}`}
                      >
                        {experiencia.tipo.replace("-", " ")}
                      </span>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>
                          {experiencia.fechaInicio} -
                          {experiencia.fechaFin
                            ? experiencia.fechaFin
                            : "Presente"}
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{experiencia.ubicacion}</span>
                      </div>
                      <div className="font-medium">
                        {calcularDuracion(
                          experiencia.fechaInicio,
                          experiencia.fechaFin
                        )}
                      </div>
                    </div>

                    <div className="space-y-4">
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        {experiencia.descripcion}
                      </p>

                      <div>
                        <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">
                          tareas principales:
                        </h4>
                        <ul className="space-y-1">
                          {experiencia.tareas.map((tarea, tareaIndex) => (
                            <li
                              key={tareaIndex}
                              className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400"
                            >
                              <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                              <span>{tarea}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {experiencia.tecnologias &&
                        experiencia.tecnologias.length > 0 && (
                          <>
                            <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                              <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">
                                Tecnologías utilizadas:
                              </h4>
                              <div className="flex flex-wrap gap-2">
                                {experiencia.tecnologias.map(
                                  (tech, techIndex) => (
                                    <span
                                      key={techIndex}
                                      className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-300"
                                    >
                                      {tech}
                                    </span>
                                  )
                                )}
                              </div>
                            </div>
                          </>
                        )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
