"use client";

import {useEffect}from 'react'
import Image from 'next/image.js'
import Link from 'next/link.js';
export default function Project() {
  useEffect(() => {
    const ratio = 0.1;
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: ratio,
    };
    const observation: IntersectionObserverCallback = function (
      entries: IntersectionObserverEntry[],
      observer: IntersectionObserver
    ) {
      entries.forEach((entry: IntersectionObserverEntry) => {
        if (entry.intersectionRatio > ratio) {
          entry.target.classList.add("revelationProject-visible");
          observer.unobserve(entry.target);
        }
      });
    };
    const observer = new IntersectionObserver(observation, options);
    const ArryObser = document.querySelectorAll('[class*="revelationProject-"]');
    if (ArryObser) {
      ArryObser.forEach(function (reveal) {
        observer.observe(reveal);
      });
    }
  }, []);
  return (
    <div>
      <section className="mt-5">
        <div className="w-full py-10 text-center">
          <h1 className="text-3xl font-bold p-3 revelationProject-1 ">
            Mes Differents{" "}
            <span className="text-3xl text-orange-500">projets</span>
          </h1>
        </div>
      </section>
      <section className="Projet bg-[#f7f9fb] w-full h-auto p-4  justify-center flex  ">
        <div className=" max-lg:flex max-lg:flex-wrap grid grid-cols-3 justify-center gap-3 ">
          <div className="w-[300px] max-ssm:w-full h-auto rounded-lg overflow-hidden revelationProject-2">
            <Link href={"https://github.com/wilfriedjordan/TheAwekening.git"}>
              <div className="h-[200px]">
                <Image
                  src={"/assets/4.png"}
                  alt=""
                  width={200}
                  height={200}
                  className="rounded-lg h-full hover:scale-[1.1] w-full"
                ></Image>
              </div>
              <div className="text p-3  bg-primary">
                <div className="text-lg text-orange-400  ">Miaam</div>
                <p className="text-white text-sm opacity-60 ">
                  Miaam est une application web de commande de nouriture en
                  ligne facilitant ainsi la vie des utilisateur
                </p>
                <div className="flex justify-end items-center gap-3 flex-wrap text-orange-500 underline">
                  <span>Angular</span>
                  <span>tailwincss</span>
                  <span>Expressjs</span>
                  <span>MySQL</span>
                  <span>FireBase</span>
                </div>
              </div>
            </Link>
          </div>
          <div className="w-[300px] max-ssm:w-full h-auto rounded-lg overflow-hidden revelationProject-3">
            <Link href={"https://github.com/wilfriedjordan/TheAwekening.git"}>
              <div className="h-[200px]">
                <Image
                  src={"/assets/2.png"}
                  alt=""
                  width={200}
                  height={200}
                  className="rounded-lg h-full hover:scale-[1.1] w-full"
                ></Image>
              </div>
              <div className="text p-3  bg-primary">
                <div className="text-lg text-orange-400  ">TheAwekening</div>
                <p className="text-white text-sm opacity-60 ">
                  TheAwekening Est un blog qui vous permet de faire votre
                  veiller sur differents sujets et Technologies
                </p>
                <div className="flex justify-end items-center gap-3 flex-wrap text-orange-500 underline">
                  <span>Angular</span>
                  <span>tailwincss</span>
                  <span>Expressjs</span>
                  <span>MySQL</span>
                  <span>FireBase</span>
                </div>
              </div>
            </Link>
          </div>
          <div className="w-[300px] max-ssm:w-full h-auto rounded-lg overflow-hidden revelationProject-4">
            <Link href={"https://github.com/wilfriedjordan/SolutionMarket.git"}>
              <div className="h-[200px] ">
                <Image
                  src={"/assets/5.png"}
                  alt=""
                  width={200}
                  height={200}
                  className="rounded-lg h-full hover:scale-[1.1] w-full"
                ></Image>
              </div>
              <div className="text p-3  bg-primary">
                <div className="text-lg text-orange-400">ShopMaket</div>
                <p className="text-white text-sm opacity-60 ">
                  ShopMaket est une solution pour trouvée facilement des
                  produits donc vous avez besoin proche de chez vous!
                </p>
                <div className="flex justify-end items-center gap-3 flex-wrap text-orange-500 underline">
                  <span>Nextjs</span>
                  <span>MySQL</span>
                  <span>FireBase</span>
                  <span>tailwincss</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}