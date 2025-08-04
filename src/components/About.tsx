export default function About() {
  return (
    <section
      id="about"
      className="w-full h-full py-12 md:py-16 lg:py-20 flex items-center"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-8">
            {/* Foto circular centrada */}
            <div className="flex justify-center">
              <div className="relative w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48">
                <img
                  src="./imagen-perfil.webp"
                  alt="Foto de Facu"
                  className="rounded-full object-cover border-4 border-primary/10 shadow-lg w-[200px] h-[200px]"
                />
              </div>
            </div>

            {/* Contenido de texto */}
            <div className="bg-white/50 backdrop-blur-sm rounded-lg p-8 md:p-12 shadow-lg shadow-black/10">
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-6">
                  ¡Hola! Soy Facu.
                </h2>

                <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
                  <p className="mb-4">
                    Actualmente soy{" "}
                    <span className="font-semibold text-foreground">
                      Analista de Sistemas
                    </span>{" "}
                    con conocimientos en desarrollo web y diseño digital.
                  </p>

                  <p className="mb-4">
                    Me gustan los retos y disfruto creando y aprendiendo siempre
                    que puedo. Me siento muy cómodo trabajando tanto en grupo
                    como solo.
                  </p>

                  <p className="mb-4">
                    Si puedo ayudarte,
                    <span className="font-semibold text-primary">
                      ¡no dudes en{" "}
                      <a href="#contacto">
                        <span className="font-semibold text-primary  hover:[text-shadow:_3px_5px_3px_#d7eef9]">
                          contactarme!
                        </span>
                      </a>
                    </span>
                  </p>

                  <p className="text-lg font-medium text-foreground">
                    Saludos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
