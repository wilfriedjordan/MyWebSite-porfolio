"use client";

import {useEffect} from 'react'
import Image from 'next/image.js';

export default function Skills() {
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
          entry.target.classList.add("revelationSkill-visible");
          observer.unobserve(entry.target);
        }
      });
    };
    const observer = new IntersectionObserver(observation, options);
    const ArryObser = document.querySelectorAll('[class*="revelationSkill-"]');
    if (ArryObser) {
      ArryObser.forEach(function (reveal) {
        observer.observe(reveal);
      });
    }
  }, []);
  return (
    <section className="Skill h-auto w-ful">
      <div className="w-full py-10 text-center">
        <h1 className="text-3xl font-bold p-3 revelationSkill-1">
          Mes Differents{" "}
          <span className="text-3xl text-orange-500">Skills</span>
        </h1>
      </div>
      <br />
      <div className="SoftShills w-full flex flex-wrap items-center justify-center gap-10">
        <div className="p-5 revelationSkill-2">
          <div className="card w-[500px] min-w-10 bg-primary p-4 rounded-xl max-ssm:w-full">
            <div className=" items-center justify-center w-[250px] h-[250px] object-cover rounded-full relative -top-16  p-1 bg-btnBackground">
              <Image
                src={"/assets/image2.JPG"}
                alt=""
                width={100}
                height={100}
                className="w-full h-full object-cover rounded-full"
              ></Image>
            </div>
            <div className=" min-w-10 p-2">
              <h1 className="text-white text-2xl">Tankwe Wilfied</h1>
              <p className="text-lg text-white opacity-75">
                Full Stack Developer
              </p>
              <p className="text-lg text-white opacity-75">
                Je suis familier et travaille au quotidien avec HTML, CSS,
                TypeScript Nextjs ,JavaScript, Tailwindcss et d&apos;autres
                frameworks modernes
              </p>
            </div>
          </div>
        </div>
        <div className="">
          <div className="w-[500px] min-w-10 p-5 max-ssm:w-full">
            <div>
              <h1 className="text-2xl font-bold uppercase revelationSkill-3">
                Pourquoi Travailler avec moi ?
              </h1>
              <p className="text-sm opacity-75 revelationSkill-4">
                Je suis un excellent communicateur et j&apos;aime investir le
                temps nécessaire pour très bien comprendre le problème du client
              </p>
            </div>
            <br />
            <div>
              <h1 className="text-2xl font-bold revelationSkill-5">
                DEVELOPMENT SKILLS
              </h1>
              <p className="text-sm opacity-75 revelationSkill-6 ">
                Je suis familier et travaille au quotidien avec HTML,
                CSS,TypeScript,Angular JavaScript, Tailwindcss et d&apos;autres
                frameworks modernes
              </p>
            </div>
            <br />
            <div className=" w-full flex gap-3 flex-wrap revelationSkill-7">
              <div className="w-14 h-14">
                <a href="https://angular.dev/">
                  <Image
                    src={"/assets/TS.png"}
                    alt=""
                    width={200}
                    height={200}
                  ></Image>
                </a>
              </div>
              <div className="w-14 h-14">
                <Image
                  src={"/assets/js.png"}
                  alt=""
                  width={200}
                  height={200}
                  className="w-18 h-18"
                ></Image>
              </div>
              <div className="w-16 h-16  p-1 flex justify-center">
                <a href="https://angular.dev">
                  <Image
                    src={"/assets/Angular.jpeg"}
                    alt=""
                    width={200}
                    height={200}
                    className="w-20 h-18"
                  ></Image>
                </a>
                <Image
                  src={"/assets/Angular.jpeg"}
                  alt=""
                  width={200}
                  height={200}
                  className="w-20 h-18"
                ></Image>
              </div>
              <div className="w-20 h-14 flex justify-center">
                <Image
                  src={"/assets/nextjs.png"}
                  alt=""
                  width={200}
                  height={200}
                  className="w-18 h-18"
                ></Image>
              </div>
              <div className="w-20 h-14 flex justify-center">
                <Image
                  src={"/assets/express.png"}
                  alt=""
                  width={200}
                  height={100}
                ></Image>
              </div>
              <div className="w-20 h-14 flex justify-center">
                <Image
                  src={"/assets/springBoot.png"}
                  alt=""
                  width={150}
                  height={150}
                ></Image>
              </div>
              <div className="w-20 h-14 flex justify-center">
                <Image
                  src={"/assets/tailwind.png"}
                  alt=""
                  width={150}
                  height={150}
                ></Image>
              </div>
              <div className="w-20 h-14 flex justify-center">
                <Image
                  src={"/assets/sass.png"}
                  alt=""
                  width={150}
                  height={150}
                ></Image>
              </div>
              <div className="w-20 h-14 flex justify-center">
                <Image
                  src={"/assets/html.png"}
                  alt=""
                  width={150}
                  height={150}
                ></Image>
              </div>
              <div className="w-20 h-14 flex justify-center">
                <Image
                  src={"/assets/css.png"}
                  alt=""
                  width={150}
                  height={150}
                ></Image>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}