import { ExternalLink, Code } from "lucide-react";
import GithubIcon from "../../public/github-icon.svg";

const Proyectos = () => {
  interface Proyecto {
    image: string;
    titulo: string;
    descripcion: string;
    githubLink: string;
    tecnologias: string[];
  }

  const proyectos: Proyecto[] = [
    {
      image: "./imagen-perfil.webp",
      titulo: "Portfolio",
      descripcion: "Portfolio personal actualizado",
      githubLink: "https://github.com/Farvon/Portfolio",
      tecnologias: ["Astro", "React", "Typescript", "Tailiwnd"],
    },
    {
      image:
        "https://media.licdn.com/dms/image/v2/D4D2DAQEEFFt1OcUHhQ/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1700060191143?e=1755154800&v=beta&t=zBothAWI32fHWAFYqR4phjFXAF2vi0t0uB909V2Hisk",
      titulo: "Bibliotecario",
      descripcion:
        "Gestor para Bibliotecas el cual permite llevar el control de los usuarios y sus reservas de libros así como los tiempos de reserva y las devoluciones.",
      githubLink: "https://github.com/Farvon/bibliotecario",
      tecnologias: [
        "React",
        "Supabase",
        "PostgreSQL",
        "Material UI",
        "Styled-Components",
      ],
    },
    {
      image: "./imagen-perfil.webp",
      titulo: "RegMed",
      descripcion:
        "Aplicación web para el registro y guardado de historiales médicos.",
      githubLink: "https://github.com/Farvon/regmed-react",
      tecnologias: [
        "React",
        "NodeJs",
        "MongoDB",
        "Material UI",
        "Styled-Components",
        "Axios",
        "Express",
        "Html",
        "Css",
      ],
    },
    {
      image: "./imagen-perfil.webp",
      titulo: "Pokedex",
      descripcion: "asdas",
      githubLink: "https://github.com/Farvon/pokedex",
      tecnologias: ["React", "Styled-Components", "Axios", "Html", "Css"],
    },
  ];

  return (
    <div
      id="proyectos"
      className="flex flex-col w-full items-center p-6 border-t-2 "
    >
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold tracking-tight mb-2">Proyectos</h2>
      </div>
      <div className="flex flex-wrap gap-8 justify-center ">
        {proyectos.map((proyecto, index) => (
          <div
            key={index}
            className="flex flex-col w-1/4  bg-white/50 backdrop-blur-sm rounded-lg p-8  shadow-lg shadow-black/10"
          >
            <img
              className="h-2/5 object-cover border-blue-100 border-2 rounded-lg "
              src={proyecto.image}
            />
            <h2 className="text-2xl  font-bold text-primary my-6">
              {proyecto.titulo}
            </h2>
            <span className="p-2 mb-2">{proyecto.descripcion}</span>
            <div className="flex flex-wrap gap-2 p-2 mt-2 ">
              {proyecto.tecnologias.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Proyectos;
