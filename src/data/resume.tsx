import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Vanessa",
  initials: "DV",
  url: "https://dillion.io",
  location: "Montería, Córdoba, Colombia",
  description: "Soy una profesional **altamente colaborativa**, apasionada por la innovación y con una sólida capacidad de comunicación. Mi experiencia en el ámbito tecnológico me ha permitido adquirir habilidades prácticas y construir una base sólida en el campo. Me destaco por mi adaptabilidad a diversos entornos y situaciones, lo que me permite enfrentar desafíos con confianza. Estoy comprometida con el aprendizaje continuo y la mejora personal, buscando siempre oportunidades para crecer y contribuir de manera significativa a los proyectos en los que participo.",
  summary: "Ingenieria industrial",
  avatarUrl: "/profile/profile.jpeg",
  skills: [
    "Trabajo en equipo",
    "Excel",
    "Comunicación",
    "Capacidad de adaptación",
    "Creatividad",
    "Liderazgo",
    "Innovación",
    "Autonomía"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "ortega19vanessa@gmail.com",
    tel: "+573002750183",
    social: {
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/vanessa-ortega-castro-854b09224/",
        icon: Icons.linkedin,
        navbar: true,
      },
      whatsapp: {
        name: "Whatsapp",
        url: "https://wa.link/n7kp59",
        icon: Icons.whatsapp,
        navbar: true,
      },
      email: {
        name: "Email",
        url: "mailto:ortega19vanessa@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Inserviones Gera SAS",
      href: "https://www.igera.co",
      badges: [],
      location: "Montería, CO",
      title: "Auxiliar de Inventarios y Compras",
      logoUrl: "/works/gera.png",
      start: "Ago. 2023",
      end: "Feb. 2024",
      description: "En el rol de Auxiliar de Inventarios y Compras, desarrollé habilidades clave en la gestión de inventarios y compras, incluyendo la asignación de recursos, la creación de documentos comerciales (remisiones y órdenes de compra) y la verificación de productos (IMEIS). Esta experiencia fortaleció mi capacidad para organizar y optimizar procesos administrativos, asegurando precisión y eficiencia en cada tarea",
    }
  ],
  education: [
    {
      school: "Universidad de Córdoba",
      href: "https://www.unicordoba.edu.co",
      degree: "Ingeniería industrial",
      logoUrl: "/education/unicordoba.png",
      start: "Feb. 2017",
      end: "Oct. 2024",
    }
  ],
  projects: [
    {
      title: "SISTEMA DE GESTION DE LA SEGURIDAD Y SALUD EN EL TRABAJO SG-SST",
      href: "",
      dates: "June 2023 - Present",
      active: true,
      description: "Desarrollar las actividades básicas establecidas en el sistema general de seguridad y salud en el trabajo (SGSST) según delegación y lineamientos establecidos.",
      technologies: [
        "SENA",
        "SG-SSt"
      ],
      links: [
        {
          type: "Ver más",
          href: "/documents/9115002417489CC1003451912C.pdf",
          icon: <Icons.globe className="size-3" />,
        }
      ],
      image: "",
      video: "",
    }
  ],
  hackathons: [],
} as const;
