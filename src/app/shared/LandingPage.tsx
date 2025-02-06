"use client"
import {useEffect} from 'react'
import Image from 'next/image.js'
import Link from 'next/link.js'


export default function LandingPage() {
  useEffect(()=>{
        const name = "Bienvenue Moi C'est Wilfied Tankwe"; // Remplace par ton nom
        const texte: string ="Developpeur Web Full-stack Js. Et Mobile, Passionner Par Le Digatale Et Les Nouvelles Technologies";
        const typewriterElement = document.getElementById("typewriter");
        const presentation = document.getElementById('presentation');
        let index = 0;
        let index2 = 0;


        function TextWrite() {
          if (index < name.length && typewriterElement) {
            // Ajoute une lettre à la fois
            typewriterElement.textContent += name.charAt(index);
            index++;
            setTimeout(TextWrite, 100); // Vitesse d'écriture (100ms par lettre)
          } else {
            // Efface le texte après un délai
            setTimeout(eraseText, 2000); // Attend 2 secondes avant d'effacer
          }
        }
        function eraseText() {
          if (index > 0 && typewriterElement) {
            // Efface une lettre à la fois
            typewriterElement.textContent = name.substring(
              0,
              index - 1
            );
            index--;
            setTimeout(eraseText, 50); // Vitesse d'effacement (50ms par lettre)
          } else {
            // Recommence à écrire après un délai
            setTimeout(TextWrite, 500); // Attend 0,5 seconde avant de recommencer
          }
        }
        
        function TextWrite2() {
          if (index2 < texte.length && presentation) {
            // Ajoute une lettre à la fois
            presentation.textContent += texte.charAt(index2);
            index2++;
            setTimeout(TextWrite2, 100); // Vitesse d'écriture (100ms par lettre)
          } else {
            // Efface le texte après un délai
            setTimeout(eraseText2, 2000); // Attend 2 secondes avant d'effacer
          }
        }
        function eraseText2() {
          if (index2 > 0 && presentation) {
            // Efface une lettre à la fois
            presentation.textContent = texte.substring(
              0,
              index2 - 1
            );
            index2--;
            setTimeout(eraseText2, 50); // Vitesse d'effacement (50ms par lettre)
          } else {
            // Recommence à écrire après un délai
            setTimeout(TextWrite2, 500); // Attend 0,5 seconde avant de recommencer
          }
        }


        // Démarre l'effet
        TextWrite();
        TextWrite2();
  },[])
  return (
    <div>
      <div className="landing-page bg-primary h-[100vh] w-full relative z-20 ">
        <div className="absolute h-auto w-full  bg-primary "></div>
        <div className="w-full h-full absolute  flex items-center justify-around ">
          <div>
            <div className='w-full flex justify-center sm:hidden '>
              <Image
                src={"/assets/image3.JPG"}
                alt=""
                width={200}
                height={200}
                className=" rounded-full w-[8rem] h-[8rem] object-cover"
              ></Image>
            </div>
            <div className=" text-white">
              <div className="w-auto max-w-[700px] mb-5 p-5">
                <h1 className="text-6xl max-ssm:text-4xl" id="typewriter">
                  {" "}
                </h1>
                <br />
                <p
                  className="text-4xl max-ssm:text-2xl text-orange-500"
                  id="presentation"
                ></p>
              </div>
              <div className="flex gap-2 w-full  pl-8">
                <a href="https://web.facebook.com/me/">
                  <Image
                    src={"/assets/svg/facebook.svg"}
                    alt=""
                    width={8}
                    height={5}
                    className=" bg-btnBackground w-8 h-8 p-1 rounded-xl"
                  ></Image>
                </a>
                <a href="https://www.linkedin.com/in/tankwe-diffo-wilfried-686638280/">
                  <Image
                    src={"/assets/svg/linkedin.svg"}
                    alt=""
                    width={8}
                    height={5}
                    className=" bg-btnBackground w-10 h-8 p-2 rounded-xl"
                  ></Image>
                </a>
                <a href="https://www.linkedin.com/in/tankwe-diffo-wilfried-686638280/">
                  <Image
                    src={
                      "/assets/svg/mail_33dp_FFFFFF_FILL0_wght400_GRAD0_opsz40.svg"
                    }
                    alt=""
                    width={8}
                    height={5}
                    className=" bg-btnBackground w-10 h-8 p-1 rounded-xl"
                  ></Image>
                </a>
              </div>
              <div className="mt-5 flex items-center flex-wrap gap-4 p-4">
                <button className="p-2 bg-btnBackground rounded-lg cursor-pointer w-[8rem] ">
                  Download Cv
                </button>
                <div className="">
                  <Link href="" className="flex items-center gap-1">
                    <Image
                      src={
                        "/assets/svg/person_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg"
                      }
                      alt=""
                      width={8}
                      height={5}
                      className=" bg-btnBackground w-10 h-8 p-1 rounded-xl"
                    ></Image>
                    Contact Me
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="image_bg h-[88vh] relative top-10 block ">
            <Image
              src={"/assets/wilfried.PNG"}
              alt=""
              width={300}
              height={25}
              className=" w-[32rem] h-full"
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
}