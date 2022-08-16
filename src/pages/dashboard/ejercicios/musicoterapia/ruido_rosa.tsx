import type { NextPage } from "next";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import { stringify } from "querystring";
import Layout from "../../../../common/components/Layout";

import { requireAuth } from "../../../../common/requireAuth";

export const getServerSideProps = requireAuth(async (ctx) => {
  return { props: {} };
});

const Dashboard: NextPage = () => {
  const { data } = useSession();

  return (
    <Layout>
      <>
        <div className="bg-violet-300">
          <h1 className="text-4xl font-bold text-white">Ruido de Color</h1>{" "}
          <br />
          <h1 className="text-2xl font-bold text-white">Musica</h1>
          <br />
          <h1 className="text-2xl font-bold text-white">Ruido Rosa</h1>
          <br />
          <div className="bg-violet-300">
            <br />
            {/* div de ruido rosa */}
            <div className="flex justify-center">
              <div className="items-center object-fill w-4/6 bg-white rounded-lg shadow-lg">
                <br />
                <a className="justify-center" href="#!">
                  <img
                    className="justify-center mx-auto rounded-2xl rounded-w-lg"
                    src="https://i.ibb.co/3BPXGKV/2.png"
                    width="300px"
                    height="300px"
                    alt=""
                  />
                </a>
                <div className="p-6">
                  <h5 className="mb-2 text-2xl font-medium text-gray-900">
                    ¿Qué es el ruido rosa?
                  </h5>
                  <p className="mb-3 text-base text-gray-700 indent-5">
                    La mejor manera de explicar el ruido rosa es un ruido
                    ambiental que a menudo se reproduce de fondo para ayudar a
                    concentrarse y ahogar otros sonidos que pueden interferir
                    con la concentración o el sueño. Es una versión más suave y
                    leve del ruido blanco, que generalmente consideramos similar
                    a la estática de la radio. El ruido rosa enfatiza los
                    sonidos de baja frecuencia en lugar de los sonidos de alta
                    frecuencia. WebMD lo compara con “una lluvia constante, el
                    susurro del viento entre los árboles o las olas en la
                    playa”.
                  </p>
                  <p className="mb-3 text-base text-gray-700 indent-5">
                    Para muchas personas, esto es mucho más agradable de
                    escuchar durante un período de tiempo prolongado. El cuerpo
                    humano es increíble por muchas razones, pero seguramente una
                    de las más fascinantes es cómo nuestra comida capta el
                    sonido. Cada vez que escuchamos música o escuchamos el
                    portazo de un automóvil, el sonido crea vibraciones, que a
                    su vez crean ondas en el aire. Estas ondas entran en
                    nuestros tímpanos haciéndolos vibrar. Los diminutos cabellos
                    dentro de nuestros tímpanos pueden captar diferentes
                    frecuencias y tonos del patrón de vibraciones causado por
                    las ondas. Reproducir ruido rosa crea un sonido constante y
                    relajante para que el tímpano lo capte.
                  </p>
                  <h5 className="mb-2 text-2xl font-medium text-gray-900">
                    Cómo el ruido rosa te ayuda a dormir
                  </h5>
                  <p className="mb-3 text-base text-gray-700 indent-5">
                    La razón por la que el ruido rosa es tan ideal para
                    ayudarnos a dormir es que funciona para “enmascarar” otros
                    sonidos. Cuando dormimos en silencio, las ondas sonoras del
                    perro de un vecino que ladra en la oscuridad de la noche nos
                    despiertan debido al "cambio de sonido o en el ruido", y no
                    necesariamente al sonido en sí.
                  </p>
                  <p className="mb-3 text-base text-gray-700 indent-5">
                    El ruido rosa es efectivo porque crea un sonido de fondo
                    constante, lo que hace que un ruido fuerte y repentino no
                    sea tan discordante para nuestros cerebros dormidos. Como
                    mencionamos anteriormente, el énfasis en los sonidos de baja
                    frecuencia en el ruido rosa es más satisfactorio para
                    nuestros cerebros dormidos, pero hay otro aspecto que lo
                    convierte en un claro ganador cuando se trata de enmascarar
                    el ruido.
                  </p>
                  <p className="mb-3 text-base text-gray-700 indent-5">
                    En "The Many Colors of Sound", Meghan Neal describe el ruido
                    rosa como un "patrón" que se encuentra en algún lugar entre
                    "pura aleatoriedad y movimiento correlacionado". El hecho de
                    que el ruido rosa no sea totalmente aleatorio, pero tampoco
                    esté completamente estructurado, es parte de lo que calma
                    nuestro cerebro mientras dormimos.
                  </p>
                  <a
                    href="https://yogasleep.com/blogs/give-sleep-a-chance-blog/pink-noise-the-full-sound-spectrum"
                    className="text-blue-600 underline"
                  >
                    Fuente!
                  </a>
                  <div className="justify-center mx-auto rounded-2xl rounded-w-lg">
                    <br />
                    <img
                      className="justify-center mx-auto rounded-2xl rounded-w-lg"
                      src="https://i.ibb.co/BCm6Pr0/rosa.jpg"
                      alt=""
                    />
                    <br />
                  </div>
                  <div className="relative w-full justify-center embed-responsive embed-responsive-21by9 top-padding:42.857143%">
                    <iframe
                      width="275px"
                      height="275px"
                      className="justify-center mx-auto rounded-2xl rounded-w-lg"
                      src="https://www.youtube.com/embed/nYpjjLGSUNA"
                      title="Pink Noise Ambient Sound For Sleep for 5 hrs   Ruido Rosa sonido ambiental para dormir"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <br />
          </div>
        </div>
      </>
    </Layout>
  );
};

export default Dashboard;
