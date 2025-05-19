import './Home.css'
 export function Home(){
    return(
        <>  
        <section className="container my-5">
            <div className="card shadow-lg">
                <div className="card-body p-4">
                    <h3 className="text-center mb-4">Leidy Jimena Noreña Quiceno</h3>
                    <hr className="mb-4" />
                    <div className="row justify-content-center align-items-center">
                        <div className="col-md-6 text-center">
                            <img src="./src/assets/img/mena.jpg" alt="foto" className="img-fluid rounded shadow foto mb-3"/>
                        </div>

                        <div className="col-md-6">
                            <p className="texto">
                            Soy Jimena, desarrolladora de software en formación, creadora y emprendedora apasionada por la tecnología, la educación consciente y el impacto social. Me especializo en proyectos que integran programación, inteligencia artificial, sostenibilidad y creatividad, con el propósito de construir soluciones humanas, accesibles y transformadoras que conecten saberes y generen bienestar.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}