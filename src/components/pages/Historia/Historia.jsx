import './Historia.css';
export function Historia() {
    return (
        <>  
        <h3 className='text-center my-4'>Bitacora de Proyectos</h3>
        <section className="container my-4">
           
            <div className="row my-4 shadow project-container">
                <div className="col-12 col-md-4 d-flex align-items-center">
                    <img src="../../../../src/assets/img/viajes.jpg" alt="Página web de viajes" className='img-fluid project-image'/>
                </div>
                <div className="col-12 col-md-8 d-flex flex-column justify-content-center">
                    <h4>Pagina web Viajes</h4>
                    <p>Esta actividad consistió en revisar y mejorar una página web de viajes previamente creada con HTML y CSS, integrando el sistema de Flexbox para reorganizar el contenido de manera más flexible y moderna. El objetivo principal fue optimizar la estructura visual del sitio y adaptarlo a distintos tamaños de pantalla mediante un diseño responsive. Durante el proceso, se aplicaron media queries, se ajustaron secciones como el encabezado, los destinos turísticos y el pie de página, y se mejoró la experiencia del usuario en dispositivos móviles. La actividad me permitió reforzar conceptos de maquetación web moderna y buenas prácticas de diseño adaptable.</p>
                </div>
            </div>

            <div className="row my-4 shadow project-container">
                <div className="col-12 col-md-8 d-flex flex-column justify-content-center">
                    <h4>Base de datos Banco</h4>
                    <p>En este proyecto desarrollé una base de datos relacional utilizando Microsoft SQL Server, simulando el funcionamiento básico de un banco. El objetivo fue diseñar una estructura de datos que permitiera gestionar información de clientes, cuentas bancarias, transacciones y empleados. Aprendí a crear y relacionar tablas mediante claves primarias y foráneas, definir tipos de datos adecuados y mantener la integridad de los datos. Además, implementé operaciones CRUD (Crear, Leer, Actualizar, Eliminar) utilizando sentencias SQL, lo cual me permitió interactuar directamente con la base de datos y simular acciones comunes en un entorno bancario real.</p>
                </div>
                <div className="col-12 col-md-4 d-flex align-items-center">
                    <img src="../../../../src/assets/img/banco.png" alt="Base de datos Banco" className='img-fluid project-image'/>
                </div>
            </div>

            <div className="row my-4 shadow project-container">
                <div className="col-12 col-md-4 d-flex align-items-center">
                    <img src="../../../../src/assets/img/EPM.jpg" alt="Página web EPM" className='img-fluid project-image'/>
                </div>
                <div className="col-12 col-md-8 d-flex flex-column justify-content-center">
                    <h4>Pagina web EPM</h4>
                    <p>Este proyecto consistió en el desarrollo de una página web simulada para Empresas Públicas de Medellín (EPM), enfocada en la presentación de sus servicios, programas sociales y atención al cliente. Utilicé el framework Bootstrap para crear un diseño moderno, limpio y completamente responsive, optimizado para diferentes dispositivos. El sitio incluyó secciones como inicio, servicios, noticias, contacto y un portal simulado de atención al usuario. Implementé componentes de Bootstrap como carruseles, tarjetas, menús desplegables, formularios y grid system, lo que permitió agilizar el proceso de maquetación y mantener coherencia visual en todo el sitio.</p>
                </div>
            </div>

            <div className="row my-4 shadow project-container">
                <div className="col-12 col-md-8 d-flex flex-column justify-content-center">
                    <h4>Replica Netflix</h4>
                    <p>En este proyecto desarrollé una réplica funcional de la página de inicio de sesión de Netflix, enfocándome en el diseño visual y la interactividad básica. La interfaz fue creada utilizando HTML y CSS para lograr una apariencia fiel al diseño original de la plataforma. Para la funcionalidad del inicio de sesión, implementé JavaScript que detecta el evento de clic en el botón de "Iniciar sesión", valida los campos de entrada y redirige al usuario a una página simulada de contenido si se completa correctamente el formulario. Aunque no se conectó a una base de datos real, el proyecto sirvió como práctica de interactividad en páginas web y manejo del DOM.</p>
                </div>
                <div className="col-12 col-md-4 d-flex align-items-center">
                    <img src="../../../../src/assets/img/netflix.jpeg" alt="Replica Netflix" className='img-fluid project-image'/>
                </div>
            </div>

            <div className="row my-4 shadow project-container">
                <div className="col-12 col-md-4 d-flex align-items-center">
                    <img src="../../../../src/assets/img/tiendaropa.jpeg" alt="Tienda Virtual Ropa" className='img-fluid project-image'/>
                </div>
                <div className="col-12 col-md-8 d-flex flex-column justify-content-center">
                    <h4>Tienda Virtual Ropa</h4>
                    <p>Este proyecto consistió en el desarrollo de una página web para una tienda virtual especializada en ropa oversize con estética metalera, dirigida a un público alternativo. El sitio fue diseñado para mostrar productos destacados, categorías, descripciones llamativas y una experiencia de navegación fluida. Utilicé HTML, CSS y un poco de JavaScript para crear una interfaz visualmente impactante, con una paleta de colores oscuros, tipografías agresivas y elementos visuales que reflejan la identidad de la marca. También implementé botones interactivos, una sección de catálogo con fichas de productos y un formulario de contacto para pedidos personalizados.</p>
                </div>
            </div>
            
        </section>
        </>
    )
}