import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { TechBadge } from "@/components/tech-badge"
import { ExperienceCard } from "@/components/experience-card"
import { Database } from "lucide-react"
import { ProjectCard } from "@/components/project-card"
import { EducationCard } from "@/components/education-card"
import { CertificateCard } from "@/components/certificate-card"
import { CertificatesCarousel } from "@/components/certificates-carousel"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-text-primary">
      <div className="mx-auto max-w-4xl px-6 py-16">
        {/* Header Section */}
        <div className="mb-6 flex flex-col items-start gap-4 md:mb-12 md:flex-row md:items-center md:gap-6">
          <Avatar className="h-32 w-32 border-2 border-stone-light">
            <AvatarImage src="/avatar.jpeg" alt="Joel Medina" />
            <AvatarFallback>JM</AvatarFallback>
          </Avatar>
          
          <div className="flex-1">
            <h1 className="mb-1 text-4xl font-bold text-balance sm:mb-2">Joel Medina</h1>
            <p className="mb-2 text-xl text-text-secondary sm:mb-3">Junior Data Engineer &amp; Software Developer</p>
            <div className="mb-3 flex items-center gap-2 text-text-muted sm:mb-4">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              <span>Santiago, Chile</span>
            </div>
            
            <div className="flex max-w-full flex-wrap gap-2 sm:gap-3">
              <Button
                variant="secondary"
                size="sm"
                className="min-h-11 max-w-full bg-button-bg text-text-primary hover:bg-button-hover"
                asChild
              >
                <a className="min-w-0 max-w-full" href="mailto:joeljesus30030@gmail.com" aria-label="Email">
                  <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="hidden break-all sm:inline">joeljesus30030@gmail.com</span>
                  <span className="sm:hidden">Email</span>
                </a>
              </Button>
              
              <Button
                variant="ghost"
                size="icon"
                className="!h-11 !w-11 bg-button-bg text-button-icon hover:bg-button-hover sm:!h-9 sm:!w-9"
                asChild
              >
                <a href="CV_Joel_Medina.pdf" aria-label="CV" target="_blank">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </a>
              </Button>
              
              <Button
                variant="ghost"
                size="icon"
                className="!h-11 !w-11 bg-button-bg text-button-icon hover:bg-button-hover sm:!h-9 sm:!w-9"
                asChild
              >
                <a href="https://github.com/jjmmcode" aria-label="GitHub" target="_blank">
                  <i className="devicon-github-original text-lg"></i>
                </a>
              </Button>
              
              <Button
                variant="ghost"
                size="icon"
                className="!h-11 !w-11 bg-button-bg text-button-icon hover:bg-button-hover sm:!h-9 sm:!w-9"
                asChild
              >
                <a href="https://www.linkedin.com/in/jjmmcode/" aria-label="LinkedIn" target="_blank">
                  <i className="devicon-linkedin-plain text-lg"></i>
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* About Section */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-semibold">Sobre mí</h2>
          <p className="leading-relaxed text-text-secondary">
            Soy Ingeniero de Datos Jr. y desarrollador de software, con experiencia en el diseño, mantenimiento y monitoreo de pipelines de datos, automatización de procesos y desarrollo de aplicaciones. Me interesa construir soluciones eficientes, escalables y mantenibles utilizando tecnologías cloud y herramientas modernas de desarrollo.
          </p>
        </section>

        <hr className="my-8 border-stone-light" />

        {/* Technologies Section */}
        <section>
          <h2 className="mb-6 text-2xl font-semibold">Tecnologías con las que trabajo</h2>
          
          <div className="mb-6">
            <h3 className="mb-3 text-lg font-medium text-text-secondary">Data Engineering</h3>
            <div className="flex flex-wrap gap-2">
              <TechBadge icon="python" label="Python" />
              <TechBadge icon="mysql" label="SQL" />
              <TechBadge icon="airflow" label="Apache Airflow" />
              <TechBadge icon="amazonwebservices" label="AWS Glue" />
              <TechBadge icon="databricks" label="Databricks" />
              <TechBadge icon="python" label="ETL/ELT" />
            </div>
          </div>

          <div className="mb-6">
            <h3 className="mb-3 text-lg font-medium text-text-secondary">Cloud &amp; Monitoring</h3>
            <div className="flex flex-wrap gap-2">
              <TechBadge icon="amazonwebservices" label="AWS S3" />
              <TechBadge icon="amazonwebservices" label="Athena" />
              <TechBadge icon="amazonwebservices" label="IAM" />
              <TechBadge icon="grafana" label="Grafana" />
              <TechBadge icon="apachekafka" label="Kafka" />
            </div>
          </div>

          <div className="mb-6">
            <h3 className="mb-3 text-lg font-medium text-text-secondary">Software Development</h3>
            <div className="flex flex-wrap gap-2">
              <TechBadge icon="react" label="React" variant="original" />
              <TechBadge icon="nextjs" label="Next.js" />
              <TechBadge icon="typescript" label="TypeScript" />
              <TechBadge icon="javascript" label="JavaScript" />
              <TechBadge icon="laravel" label="Laravel" />
              <TechBadge icon="php" label="PHP" />
              <TechBadge icon="dotnetcore" label=".NET" />
              <TechBadge icon="rest" label="REST APIs" />
            </div>
          </div>

          <div className="mb-6">
            <h3 className="mb-3 text-lg font-medium text-text-secondary">Tools &amp; Databases</h3>
            <div className="flex flex-wrap gap-2">
              <TechBadge icon="git" label="Git" />
              <TechBadge icon="github" label="GitHub" />
              <TechBadge icon="docker" label="Docker" />
              <TechBadge icon="postman" label="Postman" />
              <TechBadge icon="mysql" label="MySQL" />
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <hr className="my-12 border-stone-light" />

        <section className="mb-12">
          <h2 className="mb-8 text-2xl font-semibold">Experiencia</h2>
          
          <ExperienceCard
            title="Ingeniero de Datos Jr."
            company="2STG"
            period="Diciembre 2025 – Actualidad"
            description="Desarrollo, mantenimiento y supervisión de pipelines ETL, integrando procesos de ingesta, transformación y consulta de datos mediante servicios de AWS como S3, Glue y Athena. Orquestación de flujos con Apache Airflow, procesamiento y validación mediante Python y SQL, monitoreo con Grafana y resolución de incidencias técnicas en procesos de datos."
            icon={Database}
            current
            modality="Remoto"
          />

          <ExperienceCard
            title="Ejecutivo Cobranzas Telefónicas"
            company="FASTCO"
            period="mar. 2024 - dic. 2025"
            description="Trabajé como ejecutivo de cobranzas telefónicas, gestionando cuentas judiciales y castigados para clientes como CENCOSUD (segmento judicial/castigo). Mis responsabilidades incluyen la gestión de cuentas morosas, negociación de acuerdos de pago y asegurar el cumplimiento con los procedimientos legales de cobranza."
          />
          <ExperienceCard
            title="Ejecutivo de Cobranzas Telefónicas"
            company="Invercard Ltda."
            period="ago. 2021 - mar. 2024"
            description="Trabajé como ejecutivo de cobranzas telefónicas para Caja Compensación Los Andes. Además realicé reparaciones de computadoras y dispositivos. También recibí formación en back-office, que incluyó la gestión de tareas de mensajería masiva, carga y descarga de base de datos, y su configuración dentro del sistema de marcado automático utilizado por el equipo de cobranzas."
          />         
        </section>

        {/* Projects Section */}
        <hr className="my-12 border-stone-light" />

        <section className="mb-12">
          <h2 className="mb-8 text-2xl font-semibold">Proyectos</h2>
          
          <ProjectCard
            title="Ferremas APPs"
            subtitle="Proyecto Ferremas · Repositorio privado"
            description="Aplicación web diseñada para gestionar productos, tipos de productos, marcas de productos y precios históricos, con funcionalidades CRUD completas y consumo de APIs REST."
            technologies={[
              { icon: 'laravel', label: 'Laravel' },
              { icon: 'html5', label: 'HTML' },
              { icon: 'css3', label: 'CSS' },
              { icon: 'php', label: 'PHP' },
              { icon: 'mysql', label: 'MySQL' },
              { icon: 'postman', label: 'Postman' },
            ]}
            image="/project_1.png"
          />
          
          <ProjectCard
            title="Golden Age Manager"
            subtitle="Discord Community Management &amp; Automation"
            description="Sistema de automatización desarrollado en Python para administrar comunidades de Discord, incluyendo procesamiento de solicitudes, sincronización de roles, gestión de personajes y mentores, generación de reportes y persistencia de estados."
            technologies={[
              { icon: 'python', label: 'Python' },
              { icon: 'python', label: 'discord.py' },
              { icon: 'python', label: 'asyncio' },
              { icon: 'json', label: 'JSON' },
  { icon: 'python', label: 'openpyxl' },
  ]}
  image="/golden-age-manager.png"
  imageAlt="Golden Age Manager — Discord automation bot for Dragon Mine Z"
  icon="bot"
  />

          <ProjectCard
            title="To-Do App"
            subtitle="PWA con React y .NET"
            description="Aplicación de lista de tareas desarrollada como PWA utilizando React en el frontend y .NET para el backend. Soporta operaciones CRUD y cuenta con autenticación JWT."
            technologies={[
              { icon: 'react', label: 'React' },
              { icon: 'csharp', label: 'C#' },
              { icon: 'nodejs', label: 'Node.js' },
              { icon: 'postman', label: 'Postman' },
            ]}
            image="/project_2.png"
            links={{
              demo: 'https://to-do-app-jet-one.vercel.app/',
              github: 'https://github.com/jjmmcode/To_Do_App', // agregado enlace de GitHub de To-Do App
            }}
            icon="check"
          />

          <ProjectCard
            title="Anvil of Ambition"
            subtitle="2D RPG · Proyecto de Título"
            description="Videojuego RPG 2D desarrollado en Godot como proyecto de título de Ingeniería en Informática en Duoc UC. Participé en el desarrollo de menús e interfaces, sistema de combate por turnos, estadísticas y progresión del jugador, y persistencia de opciones."
            technologies={[
              { icon: 'godot', label: 'Godot 4.7' },
              { icon: 'gdscript', label: 'GDScript' },
              { icon: 'gamepad-2', label: 'Game Development' },
              { icon: 'layout-dashboard', label: 'UI Development' },
              { icon: 'swords', label: 'Game Systems' },
            ]}
            links={{ evidence: 'https://github.com/jjmmcode/CAPSTONE-G6-2026-02' }}
            icon="hammer"
          />
        </section>

        <hr className="my-12 border-stone-light" />

        <section className="mb-12">
          <h2 className="mb-8 text-2xl font-semibold">Formación</h2>
          
          <EducationCard
            institution="Duoc UC"
            degree="Ingeniería en Informática"
            period="2021 – 2026"
            description="Plan de asignaturas completado en 2026, con formación en desarrollo de software, programación, bases de datos, integración de APIs y tecnologías cloud. Actualmente en proceso de titulación."
            status="Pendiente de titulación"
          />
        </section>

        <hr className="my-12 border-stone-light" />

        {/* Certificates Section */}
        <section className="mb-12">
          <h2 className="mb-8 text-2xl font-semibold">Certificados y Cursos</h2>
          
          <CertificatesCarousel
            certificates={[
              {
                title: "EF SET English Certificate - C1 Advanced",
                description: "Certificación de inglés con nivel C1 otorgada por EF SET.",
                image: "/cert_efset.png",
                pdfUrl: "/cert_efset.pdf"
              },
              {
                title: "Certificaciones de Módulos — Duoc UC",
                description:
                  "Certificado institucional emitido en noviembre de 2026 que acredita ocho módulos de Ingeniería en Informática.",
                image: "/CERT_JOEL_MEDINA_DUOC-1.png",
                pdfUrl: "/CERT_JOEL_MEDINA_DUOC.pdf"
              },
              {
                title: "Cisco - Python Essentials 1",
                description: "Certificado y Badge de Python Essentials 1 de CISCO.",
                image: "/CERT_PYTHON_CISCO.png",
                pdfUrl: "/CERT_PYTHON_CISCO.pdf"
              },
              {
                title: "TOEIC Certificate",
                description: "Certificación TOEIC de competencia en inglés.",
                image: "/CERT_TOEIC-1.png",
                pdfUrl: "/CERT_TOEIC.pdf"
              }
            ]}
          />
        </section>
      </div>
    </div>
  )
}
