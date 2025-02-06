import React from 'react'
import Image from 'next/image.js'

export default function Service() {
  return (
    <section className="w-full h-auto p-5 flex justify-center  flex-col items-center bg-[#f7f9fb]">
      <div className="w-full py-10 text-center mt-10">
        <h1 className="text-4xl font-bold p-3 ">
          Mes Differents{" "}
          <span className="text-4xl text-orange-500">services</span>{" "}
        </h1>
        <span className="opacity-70 text-[1.4em]">
          La conception et le développement Web sont mon pain et mon beurre
          depuis plus de 1 ans. Pendant ce temps, j&apos;ai découvert que je
          pouvais aider les startups et les entreprises avec les services
          suivants
        </span>
      </div>
      <br />
      <div className="flex items-center justify-center w-full p-3 gap-5  max-lg:flex-wrap">
        <div className="border p-8 rounded-lg  w-[380px] h-auto hover:bg-btnBackground hover:text-white ">
          <Image
            src={"assets/svg/code_33dp_0000F5_FILL0_wght400_GRAD0_opsz40.svg"}
            alt=""
            width={50}
            height={50}
          ></Image>
          <h3 className="font-bold mt-1 ">DEVELLOPEMENT WEB</h3>
          <p className="opacity-70 mt-2">
            Dans le domaine en constante évolution du développement web, je me
            concentre sur la création de sites qui ne sont pas seulement
            visuellement attractifs mais aussi fonctionnels et optimisés pour
            offrir une expérience utilisateur exceptionnelle. 
          </p>
        </div>
        <div className="border p-7 rounded-lg w-[380px] h-auto hover:bg-btnBackground hover:text-white">
          <Image
            src={
              "assets/svg/devices_33dp_0000F5_FILL0_wght400_GRAD0_opsz40.svg"
            }
            alt=""
            width={50}
            height={50}
          ></Image>
          <h3 className="font-bold mt-1">DEVELLOPEMENT MOBILE</h3>
          <p className="opacity-70 mt-2">Dans l&apos;univers en constante évolution du développement mobile,je me spécialise dans la création des applications performantes et intuitives conçues pour répondre aux besoins des utilisateursodernes. En maîtrisant différentes approches de développement
          </p>
        </div>
        <div className="border p-7 rounded-lg w-[380px] h-auto hover:bg-btnBackground hover:text-white">
          <Image
            src={
              "/assets/svg/language_33dp_0000F5_FILL0_wght400_GRAD0_opsz40.svg"
            }
            alt=""
            width={50}
            height={50}
          ></Image>

          <h3 className="font-bold mt-1 ">BASIC SEO</h3>
          <p className="opacity-70 mt-2">
            Dans un monde où la visibilité en ligne est cruciale, le SEO (Search
            Engine Optimization) joue un rôle clé pour améliorer la présence
            digitale des entreprises. je m&apos;efforce de hisser les sites web
            de mes clients aux premières places des résultats de recherche
            &rarr;
          </p>
        </div>
      </div>
    </section>
  );
}