import { Cloud, Wifi, User } from 'lucide-react';

export const projects = [
    {
      id: 1,
      title: "Automatización con Google Workspace",
      description: "Desarrollo e implementación de soluciones para optimizar flujos de trabajo corporativos. Creación de scripts y configuraciones avanzadas para automatizar tareas repetitivas y mejorar la productividad del equipo.",
      fullDescription: "En este proyecto, desarrollé una serie de scripts personalizados utilizando Google Apps Script para automatizar procesos manuales. Esto incluyó la generación automática de informes a partir de datos en Hojas de cálculo de Google, la gestión de usuarios en Google Workspace y la creación de flujos de trabajo personalizados que integran Gmail, Calendar y Drive. El resultado fue una reducción significativa del tiempo dedicado a tareas administrativas rutinarias.",
      tags: ["Google Workspace", "Cloud Automation", "Scripting", "Optimización"],
      // icon: <Cloud size={24} />, // Icons can be problematic in plain JS data files if imported/rendered elsewhere, but let's try keep it simple or remove icon here and handle in component.
      iconName: "Cloud",
      status: "Completado",
      images: [
        "/placeholder-project.svg",
        "/placeholder-project.svg",
        "/placeholder-project.svg"
      ]
    },
    {
      id: 2,
      title: "Diseño de Red Local (Gaming focus)",
      description: "Configuración y optimización de una red de alto rendimiento diseñada específicamente para baja latencia y alta seguridad. Implementación de QoS, segmentación de tráfico y políticas de seguridad robustas.",
      fullDescription: "Este proyecto se centró en diseñar y simular una arquitectura de red optimizada para entornos de gaming competitivo, donde la latencia es crítica. Utilicé Cisco Packet Tracer para diseñar la topología, configurando VLANs para separar el tráfico, implementando QoS (Calidad de Servicio) para priorizar paquetes de juegos y estableciendo medidas de seguridad como listas de control de acceso (ACL) y seguridad de puertos para proteger la red contra accesos no autorizados.",
      tags: ["Cisco", "Networking", "Seguridad", "Optimización", "Low Latency"],
      iconName: "Wifi",
      status: "En Proceso",
      images: [
        "/placeholder-project.svg",
        "/placeholder-project.svg"
      ]
    },
    {
      id: 3,
      title: "Portfolio Profesional",
      description: "Desarrollo de portafolio personal responsive utilizando tecnologías modernas de frontend. Enfoque en diseño UX/UI limpio y accesibilidad.",
      fullDescription: "Diseñé y desarrollé mi portafolio profesional para mostrar mis habilidades y proyectos. Utilicé React para la estructura de componentes, Tailwind CSS para un diseño rápido y responsive, y Framer Motion para agregar animaciones suaves que mejoran la experiencia del usuario. El sitio está desplegado en Netlify y optimizado para rendimiento y SEO.",
      tags: ["React", "Tailwind CSS", "Frontend", "UX/UI"],
      iconName: "User",
      status: "Completado",
      images: [
        "/placeholder-project.svg",
        "/placeholder-project.svg",
        "/placeholder-project.svg",
        "/placeholder-project.svg"
      ]
    }
  ];