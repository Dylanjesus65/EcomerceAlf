const servicios: Record<string, { nombre: string; imagen: string; descripcion: string; precio: string; pregunta:string }> = {
"salud-ocupacional": {
    nombre: "Servicio Externo de Salud Ocupacional",
    imagen: "/servicio1.png",
    descripcion: "Nuestros médicos gestionan la Salud Ocupacional de tu empresa de manera permanente o mediante visitas periódicas.",
    precio: "$500",
    pregunta: "¿Cuántas horas del medico al mes requieres?"
  },
  "seguridad-e-higiene": {
    nombre: "Servicio Externo de Seguridad e Higiene",
    imagen: "/servicio2.png",
    descripcion: "Nuestros técnicos supervisan y gestionan la Seguridad e Higiene en el trabajo, asegurando el cumplimiento de la normativa vigente.",
    precio: "$500",
    pregunta: "¿Cuántas horas del técnico al mes requieres? ¿Incluimos mediciones?"
  },
  "confort-laboral": {
    nombre: "Actividades para el Confort Laboral",
    imagen: "/servicio3.png",
    descripcion: "Realizamos ajustes en iluminación, puestos de trabajo, sistemas eléctricos y otros factores para mejorar el ambiente laboral.",
    precio: "$500",
    pregunta: "Describe las actividades que realizaremos:"
  },
  "analisis-agua": {
    nombre: "Análisis de agua para consumo humano",
    imagen: "/servicio4.png",
    descripcion: "Evaluamos la calidad del agua para identificar riesgos biológicos y garantizar su aptitud para el consumo.",
    precio: "$500",
    pregunta: "¿Cuántos puntos de medición se requiere hacer? ¿De donde proviene el agua que se tomara de muestra? ¿En que ciudad y zona de esta se realizará la toma?"
  },
  "gestion-bodegas": {
    nombre: "Gestión en Bodegas",
    imagen: "/servicio5.png",
    descripcion: "Inspeccionamos el almacenamiento y manejo de productos químicos para asegurar el cumplimiento normativo y reducir riesgos.",
    precio: "$500",
    pregunta: "¿Cuál es el metraje total del área a inspeccionar?"
  },
  "campañas-seguridad-salud": {
    nombre: "Campañas en Seguridad y Salud en el Trabajo",
    imagen: "/servicio6.png",
    descripcion: "Organizamos campañas que cumplen con la normativa y promueven un ambiente laboral seguro y saludable.",
    precio: "$500",
    pregunta: "¿Cuál campaña deseas que realicemos? ¿Cuántas personas planificas que asistiran?"
  },
  "certificacion-riesgos-electricos": {
    nombre: "Certificación en Prevención de Riesgos Laborales en Energía Eléctrica",
    imagen: "/servicio7.png",
    descripcion: "Capacitamos y certificamos al personal para garantizar el cumplimiento de requisitos legales y de clientes.",
    precio: "$500",
    pregunta: "¿Cuántas personas requieren la certificación?"
  },
  "certificacion-riesgos-construccion": {
    nombre: "Certificación en Prevención de Riesgos Laborales en Construcción",
    imagen: "/servicio8.png",
    descripcion: "Brindamos capacitación y certificación de seguridad en construcción para cumplir con normativas y exigencias del sector.",
    precio: "$500",
    pregunta: "¿Cuántas personas requieren la certificación?"
  },
  "aptitud-medica": {
    nombre: "Certificados de Aptitud Médica",
    imagen: "/servicio9.png",
    descripcion: "Realizamos exámenes de ingreso, periódicos y de reintegro, certificando la aptitud laboral de los trabajadores.",
    precio: "$500",
    pregunta: "¿Cuántos trabajadores deben obtener su certificado de aptitud?"
  },
  "descriptivo-puestos": {
    nombre: "Descriptivo por Puesto de Trabajo con Enfoque SST",
    imagen: "/servicio10.png",
    descripcion: "Elaboramos documentos detallados sobre funciones, responsabilidades y riesgos de cada puesto de trabajo.",
    precio: "$500",
    pregunta: "¿Cuántos puestos de trabajo son?"
  },
  "diagramas-flujo": {
    nombre: "Diagramas de Flujo de Procesos Productivos",
    imagen: "/servicio11.png",
    descripcion: "Creamos representaciones gráficas de los procesos productivos para optimizar su gestión y seguridad.",
    precio: "$500",
    pregunta: "¿Cuándo podríamos tener una reunión para ampliar la información?"
  },
  "EPP y Ropa de Trabajo": {
    nombre: "EPP y Ropa de Trabajo",
    imagen: "/servicio12.png",
    descripcion: "Definimos los equipos de protección personal y ropa adecuada según los riesgos de cada puesto.",
    precio: "$500",
    pregunta: "¿Cuándo podríamos tener una reunión para ampliar la información?"
  },
  "evaluaciones-psicologicas": {
    nombre: "Evaluaciones Psicológicas",
    imagen: "/servicio13.png",
    descripcion: "Realizamos entrevistas y encuestas para evaluar la salud mental del personal y ofrecer recomendaciones.",
    precio: "$500",
    pregunta: "¿Cuántas entrevistas se requiere?"
  },
  "examenes-ocupacionales": {
    nombre: "Gestión de Exámenes Ocupacionales",
    imagen: "/servicio14.png",
    descripcion: "Diseñamos la matriz de exámenes ocupacionales, gestionamos su aplicación y presentamos resultados.",
    precio: "$500",
    pregunta: "¿Cuántos trabajadores son?"
  },
  "gestion-emergencias": {
    nombre: "Gestión de Emergencias",
    imagen: "/servicio15.png",
    descripcion: "Elaboramos planes de emergencia, realizamos simulacros y capacitamos brigadas para responder eficazmente.",
    precio: "$500",
    pregunta: "¿Cuándo podríamos tener una reunión para ampliar la información?"
  },
  "accidentes-incidentes-enfermedades": {
    nombre: "Gestión de Accidentes, Incidentes y Enfermedades Profesionales",
    imagen: "/servicio16.png",
    descripcion: "Implementamos protocolos para prevenir y gestionar accidentes, incidentes y enfermedades laborales.",
    precio: "$500",
    pregunta: "¿Cuándo podríamos tener una reunión para ampliar la información?"
  },
  "prevencion-alcohol-tabaco-drogas": {
    nombre: "Prevención del Consumo de Alcohol, Tabaco y Drogas",
    imagen: "/servicio17.png",
    descripcion: "Desarrollamos programas de concienciación, pruebas de consumo y acompañamiento en casos necesarios.",
    precio: "$500",
    pregunta: "¿Cuándo podríamos tener una reunión para ampliar la información? ¿Cuántos trabajadores son?"
  },
  "inducciones-personal": {
    nombre: "Inducciones al Personal",
    imagen: "/servicio18.png",
    descripcion: "Diseñamos y gestionamos programas de inducción en SST para nuevos trabajadores.",
    precio: "$500",
    pregunta: "¿Cuántos trabajadores son?"
  },
  "informes-agentes-fisicos": {
    nombre: "Informes de Agentes Físicos",
    imagen: "/servicio19.png",
    descripcion: "Analizamos condiciones físicas del entorno laboral y proponemos mejoras para reducir el estrés ocupacional.",
    precio: "$500",
    pregunta: "¿Cuál es el metraje total del área a inspeccionar?"
  },
  "inspecciones-locativas": {
    nombre: "Inspecciones Locativas",
    imagen: "/servicio20.png",
    descripcion: "Evaluamos los riesgos locativos, entregando informes con soluciones aplicables.",
    precio: "$500",
    pregunta: "¿Cuál es el metraje total del área a inspeccionar?"
  },
  "inspeccion-servicios-permanentes": {
    nombre: "Inspección de Servicios Permanentes",
    imagen: "/servicio21.png",
    descripcion: "Verificamos el estado de botiquines, comedores, duchas, abastecimiento de agua y otros servicios esenciales.",
    precio: "$500",
    pregunta: "¿Cuál es el metraje total del área a inspeccionar?"
  },
  "inspecciones-electricas": {
    nombre: "Inspecciones Eléctricas",
    imagen: "/servicio22.png",
    descripcion: "Evaluamos los riesgos eléctricos, entregando informes con soluciones aplicables.",
    precio: "$500",
    pregunta: "¿Cuál es el metraje total del área a inspeccionar?"
  },
  "inspecciones-mecanicas": {
    nombre: "Inspecciones Mecánicas",
    imagen: "/servicio23.png",
    descripcion: "Evaluamos los riesgos mecánicos, entregando informes con soluciones aplicables.",
    precio: "$500",
    pregunta: "¿Cuál es el metraje total del área a inspeccionar?"
  },
  "mediciones-quimicos": {
    nombre: "Mediciones de Químicos",
    imagen: "/servicio24.png",
    descripcion: "Evaluamos exposiciones al riesgo químico.",
    precio: "$500",
    pregunta: "¿Cuántos puntos de medición se requiere hacer?"
  },
  "mediciones-ruido": {
    nombre: "Mediciones de Ruido",
    imagen: "/servicio25.png",
    descripcion: "Evaluamos exposiciones al ruido.",
    precio: "$500",
    pregunta: "¿Cuántos puntos de medición se requiere hacer?"
  },
  "mediciones-vibraciones": {
    nombre: "Mediciones de Vibraciones",
    imagen: "/servicio26.png",
    descripcion: "Evaluamos exposiciones a las vibraciones en puestos de trabajo.",
    precio: "$500",
    pregunta: "¿Cuántos puntos de medición se requiere hacer?"
  },
  "plan-prevencion-riesgos-laborales": {
    nombre: "Plan de Prevención de Riesgos Laborales",
    imagen: "/servicio27.png",
    descripcion: "Desarrollamos un plan integral para la prevención de riesgos laborales.",
    precio: "$500",
    pregunta: "¿Cuándo podríamos tener una reunión para ampliar la información?"
  },
  "procedimientos-trabajos-especiales": {
    nombre: "Procedimientos para Trabajos Especiales",
    imagen: "/servicio28.png",
    descripcion: "Elaboramos protocolos de seguridad para tareas de alto riesgo y capacitamos al personal.",
    precio: "$500",
    pregunta: "¿Cuándo podríamos tener una reunión para ampliar la información?"
  },
  "programa-entrenamiento-capacitacion": {
    nombre: "Programa de Entrenamiento y Capacitación",
    imagen: "/servicio29.png",
    descripcion: "Diseñamos programas de capacitación según necesidades organizacionales y normativas.",
    precio: "$500",
    pregunta: "¿Cuándo podríamos tener una reunión para ampliar la información?"
  },
  "programa-riesgo-psicosocial": {
    nombre: "Programa de Riesgo Psicosocial",
    imagen: "/servicio30.png",
    descripcion: "Evaluamos el impacto psicosocial del trabajo y proponemos acciones correctivas.",
    precio: "$500",
    pregunta: "¿Cuándo podríamos tener una reunión para ampliar la información?"
  },
  "registro-documentacion-SUT": {
    nombre: "Registro de Documentación en el SUT",
    imagen: "/servicio31.png",
    descripcion: "Organizamos y actualizamos la documentación de SST en el SUT según normativas del MDT.",
    precio: "$500",
    pregunta: "¿Cuándo podríamos tener una reunión para ampliar la información?"
  },
  "reglamento-higiene-seguridad-trabajo": {
    nombre: "Reglamento de Higiene y Seguridad en el Trabajo",
    imagen: "/servicio32.png",
    descripcion: "Aprobación del Reglamento de  Higiene y Seguridad en el Trabajo.",
    precio: "$500",
    pregunta: "¿Cuándo podríamos tener una reunión para ampliar la información?"
  },
  "señaletica-seguridad": {
    nombre: "Señalética de Seguridad",
    imagen: "/servicio33.png",
    descripcion: "Diseñamos e instalamos señalización preventiva, informativa y de evacuación.",
    precio: "$500",
    pregunta: "¿Cuándo podríamos tener una reunión para ampliar la información?"
  },
  "consultoria-especifica-SST": {
    nombre: "Consultoría Específica en SST",
    imagen: "/servicio34.png",
    descripcion: "Brindamos asesoramiento especializado para resolver problemas específicos en SST.",
    precio: "$500",
    pregunta: "¿Cuéntanos un poco del caso?"
  },
  "gestion-permisos-ambientales": {
    nombre: "Gestión de Permisos Ambientales",
    imagen: "/servicio35.png",
    descripcion: "Gestionamos la tramitación de permisos ambientales para tu empresa.",
    precio: "$500",
    pregunta: "¿Área de la instalación, tipo de actividad, permiso o renovación?"
  },
  "asesoria-legal-SST": {
    nombre: "Asesoría Legal en SST",
    imagen: "/servicio36.png",
    descripcion: "Nuestros abogados te apoyan en la resolución de demandas y gestiones legales en SST.",
    precio: "$500",
    pregunta: "¿Cuéntanos un poco del caso?"
  },
  "mapa-riesgo": {
    nombre: "Mapa de Riesgo",
    imagen: "/servicio37.png",
    descripcion: "Identificamos y representamos los riesgos en un plano para facilitar su gestión.",
    precio: "$500",
    pregunta: "¿Cuándo podríamos tener una reunión para ampliar la información?"
  },
  "matriz-riesgo-criterio-residual": {
    nombre: "Matriz de Riesgo con Criterio Residual",
    imagen: "/servicio38.png",
    descripcion: "Elaboramos matrices de riesgos basadas en evaluaciones técnicas y observaciones en el lugar de trabajo.",
    precio: "$500",
    pregunta: "¿Cuándo podríamos tener una reunión para ampliar la información?"
  },
  "matriz-informe-medidas-prevencion": {
    nombre: "Matriz e Informe de Medidas de Prevención",
    imagen: "/servicio39.png",
    descripcion: "Diseñamos medidas de prevención en función de los riesgos identificados.",
    precio: "$500",
    pregunta: "¿Cuándo podríamos tener una reunión para ampliar la información?"
  },
  "mediciones-iluminacion": {
    nombre: "Mediciones de Iluminación",
    imagen: "/servicio40.png",
    descripcion: "Evaluamos exposiciones al riesgo de iluminación y entregamos informes con soluciones.",
    precio: "$500",
    pregunta: "¿Cuántos puntos de medición se requiere hacer?"
  },
  "muestreo-biologico-superficies-ambientes": {
    nombre: "Muestreo Biológico de Superficies y Ambientes",
    imagen: "/servicio41.png",
    descripcion: "Analizamos la presencia de contaminantes biológicos en las instalaciones.",
    precio: "$500",
    pregunta: "¿Cuántos puntos de medición se requiere hacer?"
  }
};

export default servicios;
