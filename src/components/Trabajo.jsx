"use client";

import { useState, useEffect, useRef } from "react";
import {
  Calendar,
  MapPin,
  Building2,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Briefcase,
  Code,
  Zap,
  Trophy,
  TrendingUp,
} from "lucide-react";

const experienciaData = [
  {
    id: 1,
    empresa: "Tech Solutions Inc.",
    puesto: "Desarrollador Full Stack Senior",
    ubicacion: "Madrid, España",
    fechaInicio: "Enero 2022",
    fechaFin: "Presente",
    descripcion:
      "Lidero el desarrollo de aplicaciones web modernas utilizando React, Node.js y bases de datos NoSQL. Responsable de la arquitectura de microservicios y la implementación de mejores prácticas de desarrollo.",
    logros: [
      "Mejoré el rendimiento de la aplicación principal en un 40%",
      "Lideré un equipo de 5 desarrolladores junior",
      "Implementé sistema de CI/CD que redujo el tiempo de despliegue en un 60%",
    ],
    tecnologias: ["React", "Node.js", "MongoDB", "AWS", "Docker", "TypeScript"],
    sitioWeb: "https://techsolutions.com",
    activo: true,
    color: "from-blue-500 to-cyan-500",
    icon: Code,
    nivel: "Senior",
  },
  {
    id: 2,
    empresa: "StartupXYZ",
    puesto: "Desarrollador Frontend",
    ubicacion: "Barcelona, España",
    fechaInicio: "Marzo 2020",
    fechaFin: "Diciembre 2021",
    descripcion:
      "Desarrollé interfaces de usuario responsivas y accesibles para una plataforma de e-commerce. Colaboré estrechamente con el equipo de UX/UI para implementar diseños pixel-perfect.",
    logros: [
      "Desarrollé 15+ componentes reutilizables",
      "Aumenté la conversión del sitio web en un 25%",
      "Implementé testing automatizado con Jest y Cypress",
    ],
    tecnologias: ["Vue.js", "JavaScript", "SASS", "Webpack", "Jest", "Cypress"],
    sitioWeb: "https://startupxyz.com",
    activo: false,
    color: "from-green-500 to-emerald-500",
    icon: Zap,
    nivel: "Mid-Level",
  },
  {
    id: 3,
    empresa: "Freelance",
    puesto: "Desarrollador Web",
    ubicacion: "Remoto",
    fechaInicio: "Junio 2018",
    fechaFin: "Febrero 2020",
    descripcion:
      "Trabajé como freelancer desarrollando sitios web y aplicaciones para pequeñas y medianas empresas. Gestión completa de proyectos desde la conceptualización hasta el despliegue.",
    logros: [
      "Completé 20+ proyectos exitosos",
      "Mantuve una calificación de 5 estrellas en plataformas freelance",
      "Desarrollé soluciones personalizadas para diversos sectores",
    ],
    tecnologias: ["HTML", "CSS", "JavaScript", "PHP", "WordPress", "MySQL"],
    sitioWeb: null,
    activo: false,
    color: "from-purple-500 to-pink-500",
    icon: Briefcase,
    nivel: "Junior",
  },
];

// Hook personalizado para detectar cuando un elemento entra en viewport
function useIntersectionObserver(options = {}) {
  const [hasIntersected, setHasIntersected] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasIntersected) {
          setHasIntersected(true);
        }
      },
      {
        threshold: 0.2,
        rootMargin: "100px",
        ...options,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [hasIntersected]);

  return [elementRef, hasIntersected];
}

// Componente para cada item de experiencia
function ExperienciaItem({ experiencia, index }) {
  const [expandido, setExpandido] = useState(false);
  const [elementRef, hasIntersected] = useIntersectionObserver();
  const isEven = index % 2 === 0;
  const IconComponent = experiencia.icon;

  const toggleExpansion = () => {
    setExpandido(!expandido);
  };

  const calcularDuracion = (inicio, fin) => {
    const fechaInicio = new Date(inicio);
    const fechaFin = fin === "Presente" ? new Date() : new Date(fin);
    const meses =
      (fechaFin.getFullYear() - fechaInicio.getFullYear()) * 12 +
      (fechaFin.getMonth() - fechaInicio.getMonth());

    if (meses < 12) return `${meses} meses`;
    const años = Math.floor(meses / 12);
    const mesesRestantes = meses % 12;
    return mesesRestantes > 0
      ? `${años} años ${mesesRestantes} meses`
      : `${años} años`;
  };

  const getNivelColor = (nivel) => {
    switch (nivel) {
      case "Senior":
        return "bg-red-100 text-red-800 border-red-200";
      case "Mid-Level":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "Junior":
        return "bg-green-100 text-green-800 border-green-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <div
      ref={elementRef}
      className={`relative transition-all duration-1000 ease-out ${
        hasIntersected
          ? "opacity-100 translate-y-0 translate-x-0"
          : `opacity-0 translate-y-10 ${
              isEven ? "-translate-x-8" : "translate-x-8"
            }`
      }`}
      style={{
        transitionDelay: hasIntersected ? `${index * 300}ms` : "0ms",
      }}
    >
      {/* Nodo central con icono */}
      <div className="absolute left-1/2 top-8 transform -translate-x-1/2 -translate-y-1/2 z-10 hidden lg:block">
        <div
          className={`w-16 h-16 bg-gradient-to-r ${
            experiencia.color
          } rounded-full flex items-center justify-center shadow-lg border-4 border-white transition-all duration-700 ${
            hasIntersected ? "scale-100 rotate-0" : "scale-0 rotate-45"
          }`}
          style={{
            transitionDelay: hasIntersected ? `${index * 300 + 200}ms` : "0ms",
          }}
        >
          <IconComponent className="w-8 h-8 text-white" />
        </div>

        {/* Línea conectora */}
        <div
          className={`absolute top-1/2 ${
            isEven ? "right-full" : "left-full"
          } w-20 h-0.5 bg-gradient-to-r ${
            experiencia.color
          } transition-all duration-500 ${
            hasIntersected ? "scale-x-100" : "scale-x-0"
          }`}
          style={{
            transformOrigin: isEven ? "right" : "left",
            transitionDelay: hasIntersected ? `${index * 300 + 400}ms` : "0ms",
          }}
        >
          <div
            className={`absolute ${
              isEven ? "right-0" : "left-0"
            } top-1/2 w-3 h-3 bg-gradient-to-r ${
              experiencia.color
            } rounded-full transform -translate-y-1/2`}
          ></div>
        </div>
      </div>

      {/* Card de experiencia */}
      <div
        className={`lg:w-5/12 ${
          isEven ? "lg:mr-auto lg:pr-20" : "lg:ml-auto lg:pl-20"
        } w-full`}
      >
        {/* Card Container */}
        <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] border border-gray-100 overflow-hidden group">
          {/* Header con gradiente */}
          <div className={`h-1 bg-gradient-to-r ${experiencia.color}`}></div>

          {/* Card Header */}
          <div className="p-6 pb-4 relative">
            {/* Icono móvil */}
            <div className="lg:hidden absolute -top-4 left-6">
              <div
                className={`w-12 h-12 bg-gradient-to-r ${experiencia.color} rounded-full flex items-center justify-center shadow-lg`}
              >
                <IconComponent className="w-6 h-6 text-white" />
              </div>
            </div>

            <div className="space-y-4 pt-4 lg:pt-0">
              <div>
                {/* Card Title */}
                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-3">
                  {experiencia.puesto}
                </h3>

                <div className="flex items-center gap-3 flex-wrap mb-4">
                  {/* Badge Nivel */}
                  <span
                    className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border ${getNivelColor(
                      experiencia.nivel
                    )}`}
                  >
                    {experiencia.nivel}
                  </span>
                  {experiencia.activo && (
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-green-500 text-white">
                      ● En curso
                    </span>
                  )}
                </div>
              </div>

              {/* Empresa */}
              <div className="flex items-center gap-2 text-xl font-semibold">
                <Building2 className="w-5 h-5 text-blue-600" />
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {experiencia.empresa}
                </span>
                {experiencia.sitioWeb && (
                  <a
                    href={experiencia.sitioWeb}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-2 text-gray-400 hover:text-blue-600 transition-colors hover:scale-110 transform"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>

              {/* Información adicional */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-blue-500" />
                  <span>
                    {experiencia.fechaInicio} - {experiencia.fechaFin}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-green-500" />
                  <span>{experiencia.ubicacion}</span>
                </div>
                <div className="sm:col-span-2 flex items-center gap-2 font-medium text-purple-600">
                  <TrendingUp className="w-4 h-4" />
                  <span>
                    {calcularDuracion(
                      experiencia.fechaInicio,
                      experiencia.fechaFin
                    )}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Card Content */}
          <div className="px-6 pb-6 space-y-6">
            {/* Descripción */}
            <p className="text-base leading-relaxed text-gray-700">
              {experiencia.descripcion}
            </p>

            {/* Tecnologías */}
            <div className="space-y-3">
              <h4 className="font-semibold text-sm flex items-center gap-2 text-gray-800">
                <Code className="w-4 h-4" />
                Stack tecnológico:
              </h4>
              <div className="flex flex-wrap gap-2">
                {experiencia.tecnologias.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800 hover:bg-blue-100 hover:text-blue-800 transition-all cursor-default hover:scale-105 transform"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Botón para expandir logros */}
            <button
              onClick={toggleExpansion}
              className="w-full flex items-center justify-between p-3 text-left bg-transparent hover:bg-blue-50 rounded-lg transition-all group border border-gray-200 hover:border-blue-200"
            >
              <span className="font-medium flex items-center gap-2 text-gray-700">
                <Trophy className="w-4 h-4" />
                {expandido ? "Ocultar" : "Ver"} logros destacados
              </span>
              {expandido ? (
                <ChevronUp className="w-4 h-4 group-hover:text-blue-600 transition-colors" />
              ) : (
                <ChevronDown className="w-4 h-4 group-hover:text-blue-600 transition-colors" />
              )}
            </button>

            {/* Logros expandibles */}
            {expandido && (
              <div className="space-y-4 pt-4 border-t border-gray-100">
                <h4 className="font-semibold text-sm flex items-center gap-2 text-green-700">
                  <Trophy className="w-4 h-4" />
                  Logros principales:
                </h4>
                <div className="space-y-3">
                  {experiencia.logros.map((logro, logroIndex) => (
                    <div
                      key={logroIndex}
                      className="flex items-start gap-3 p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
                    >
                      <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <span className="text-sm leading-relaxed text-gray-700">
                        {logro}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Trabajo() {
  return (
    <div
      id="trabajo"
      className="w-full max-w-6xl mx-auto p-6 space-y-16 min-h-screen"
    >
      {/* Header */}
      <div className="text-center space-y-6 py-12">
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
          Mi Trayectoria Profesional
        </h1>
      </div>

      {/* Timeline */}
      <div className="relative py-8">
        {/* Línea central */}
        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 transform -translate-x-1/2 rounded-full hidden lg:block">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 rounded-full animate-pulse opacity-30"></div>
        </div>

        <div className="space-y-20">
          {experienciaData.map((experiencia, index) => (
            <ExperienciaItem
              key={experiencia.id}
              experiencia={experiencia}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
