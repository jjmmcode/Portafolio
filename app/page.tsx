import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { TechBadge } from "@/components/tech-badge"
import { ExperienceCard } from "@/components/experience-card"
import { ProjectCard } from "@/components/project-card"
import { EducationCard } from "@/components/education-card"
import { CertificateCard } from "@/components/certificate-card"
import { CertificatesCarousel } from "@/components/certificates-carousel"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-text-primary">
      <div className="mx-auto max-w-4xl px-6 py-16">
        {/* Header Section */}
        <div className="mb-12 flex flex-col items-start gap-6 md:flex-row md:items-center">
          <Avatar className="h-32 w-32 border-2 border-stone-light">
            <AvatarImage src="/avatar.jpeg" alt="Joel M. Morales" />
            <AvatarFallback>JM</AvatarFallback>
          </Avatar>
          
          <div className="flex-1">
            <h1 className="mb-2 text-4xl font-bold text-balance">Joel M. Morales</h1>
            <p className="mb-3 text-xl text-text-secondary">Programador</p>
            <div className="mb-4 flex items-center gap-2 text-text-muted">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              <span>Santiago, Chile</span>
            </div>
            
            <div className="flex flex-wrap gap-3">
              <Button
                variant="secondary"
                size="sm"
                className="bg-button-bg text-text-primary hover:bg-button-hover"
                asChild
              >
                <a href="mailto:joeljesus30030@gmail.com">
                  <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  joeljesus30030@gmail.com
                </a>
              </Button>
              
              <Button
                variant="ghost"
                size="icon"
                className="bg-button-bg hover:bg-button-hover text-button-icon"
                asChild
              >
                <a href="CV_Joel_Medina_ES.pdf" aria-label="CV" target="_blank">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </a>
              </Button>
              
              <Button
                variant="ghost"
                size="icon"
                className="bg-button-bg hover:bg-button-hover text-button-icon"
                asChild
              >
                <a href="https://github.com/jjmmcode" aria-label="GitHub" target="_blank">
                  <i className="devicon-github-original text-lg"></i>
                </a>
              </Button>
              
              <Button
                variant="ghost"
                size="icon"
                className="bg-button-bg hover:bg-button-hover text-button-icon"
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
            Desarrollador web y backend con pasión por crear soluciones eficientes. 
            Actualmente curso Ingeniería en Informática y me especializo en el uso de 
            tecnologías como Laravel, Python, y base de datos.
          </p>
        </section>

        <hr className="my-8 border-stone-light" />

        {/* Technologies Section */}
        <section>
          <h2 className="mb-6 text-2xl font-semibold">Tecnologías con las que trabajo</h2>
          
          {/* Frontend */}
          <div className="mb-6">
            <h3 className="mb-3 text-lg font-medium text-text-secondary">Frontend</h3>
            <div className="flex flex-wrap gap-2">
              <TechBadge icon="html5" label="HTML" />
              <TechBadge icon="css3" label="CSS" />
              <TechBadge icon="react" label="React" variant="original" />
            </div>
          </div>

          {/* Backend */}
          <div className="mb-6">
            <h3 className="mb-3 text-lg font-medium text-text-secondary">Backend</h3>
            <div className="flex flex-wrap gap-2">
              <TechBadge icon="php" label="PHP" />
              <TechBadge icon="python" label="Python" />
              <TechBadge icon="java" label="Java" />
              <TechBadge icon="csharp" label="C#" />
            </div>
          </div>

          {/* Base de Datos */}
          <div className="mb-6">
            <h3 className="mb-3 text-lg font-medium text-text-secondary">Base de Datos</h3>
            <div className="flex flex-wrap gap-2">
              <TechBadge icon="mysql" label="MySQL" />
              <TechBadge icon="postgresql" label="PostgreSQL" />
            </div>
          </div>

          {/* Frameworks */}
          <div className="mb-6">
            <h3 className="mb-3 text-lg font-medium text-text-secondary">Frameworks</h3>
            <div className="flex flex-wrap gap-2">
              <TechBadge icon="laravel" label="Laravel" />
              <TechBadge icon="nodejs" label="Node.js" />
              <TechBadge icon="ionic" label="Ionic" variant="original" />
            </div>
          </div>

          {/* Herramientas */}
          <div className="mb-6">
            <h3 className="mb-3 text-lg font-medium text-text-secondary">Herramientas</h3>
            <div className="flex flex-wrap gap-2">
              <TechBadge icon="git" label="Git" />
              <TechBadge icon="vscode" label="VS Code" />
              <TechBadge icon="visualstudio" label="Visual Studio" />
              <TechBadge icon="postman" label="Postman" />
              <TechBadge icon="docker" label="Docker" />
              <TechBadge icon="excel" label="Excel" />
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <hr className="my-12 border-stone-light" />

        <section className="mb-12">
          <h2 className="mb-8 text-2xl font-semibold">Experiencia</h2>
          
          <ExperienceCard
            title="Ejecutivo de Cobranzas Telefónicas"
            company="Invercard Ltda."
            period="ago. 2021 - mar. 2024"
            description="En esta primera experiencia profesional trabajé como ejecutivo de cobranzas telefónicas para Caja Compensación Los Andes. Además realicé reparaciones de computadoras y dispositivos. También recibí formación en back-office, que incluyó la gestión de tareas de mensajería masiva, carga y descarga de base de datos, y su configuración dentro del sistema de marcado automático utilizado por el equipo de cobranzas."
          />
          
          <ExperienceCard
            title="Ejecutivo Cobranzas Telefónicas"
            company="FASTCO"
            period="mar. 2024 - Actualidad"
            description="Trabajo como ejecutivo de cobranzas telefónicas, gestionando cuentas judiciales y castigados para clientes como CENCOSUD (segmento judicial/castigo). Mis responsabilidades incluyen la gestión de cuentas morosas, negociación de acuerdos de pago y asegurar el cumplimiento con los procedimientos legales de cobranza."
          />
        </section>

        {/* Projects Section */}
        <hr className="my-12 border-stone-light" />

        <section className="mb-12">
          <h2 className="mb-8 text-2xl font-semibold">Proyectos</h2>
          
          <ProjectCard
            title="Ferremas APPs"
            subtitle="Proyecto Ferremas"
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
            links={{
              demo: '#',
              github: 'https://github.com/markawaii/cl_ferremas_monolitico-laravel', // agregado enlace de GitHub de Ferremas
            }}
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
        </section>

        <hr className="my-12 border-stone-light" />

        <section className="mb-12">
          <h2 className="mb-8 text-2xl font-semibold">Formación</h2>
          
          <EducationCard
            institution="Duoc UC"
            degree="Ingeniería en Informática"
            period="2021 - Actualidad"
            description="Actualmente cursando el cuarto año de la carrera, desarrollando proyectos web y APIs utilizando tecnologías modernas como Laravel, Python y bases de datos relacionales."
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
                title: "Certificación en Análisis de Software y Desarrollo",
                description: "Certificado de Módulo emitido por DUOC UC.",
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
