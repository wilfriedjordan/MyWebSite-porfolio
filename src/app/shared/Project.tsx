import React from 'react'
import Image from 'next/image.js'

export default function Project() {
  return (
    <div>
      <section className="mt-5">
        <div className="w-full py-10 text-center">
          <h1 className="text-3xl font-bold p-3 ">
            Mes Differents{" "}
            <span className="text-3xl text-orange-500">projets</span>
          </h1>
        </div>
      </section>
      <section className="Projet bg-[#f7f9fb] w-full h-auto p-4  justify-center flex  ">
        <div className=" max-lg:flex max-lg:flex-wrap grid grid-cols-3 justify-center gap-3 ">
          <div className="w-[300px] max-ssm:w-full h-auto rounded-lg overflow-hidden border">
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
                Miaam est une application web de commande de nouriture en ligne
                facilitant ainsi la vie des utilisateur
              </p>
              <div className="flex justify-end items-center gap-3 flex-wrap text-orange-500 underline">
                <span>Angular</span>
                <span>tailwincss</span>
                <span>Expressjs</span>
                <span>MySQL</span>
                <span>FireBase</span>
              </div>
            </div>
          </div>
          <div className="w-[300px] max-ssm:w-full h-auto rounded-lg overflow-hidden shadow-xl">
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
              <div className="text-lg text-orange-400  ">Miaam</div>
              <p className="text-white text-sm opacity-60 ">
                Miaam est une application web de commande de nouriture en ligne
                facilitant ainsi la vie des utilisateur
              </p>
              <div className="flex justify-end items-center gap-3 flex-wrap text-orange-500 underline">
                <span>Angular</span>
                <span>tailwincss</span>
                <span>Expressjs</span>
                <span>MySQL</span>
                <span>FireBase</span>
              </div>
            </div>
          </div>
          <div className="w-[300px] max-ssm:w-full h-auto rounded-lg overflow-hidden">
            <div className="h-[200px] ">
              <Image
                src={"/assets/6.png"}
                alt=""
                width={200}
                height={200}
                className="rounded-lg h-full hover:scale-[1.1] w-full"
              ></Image>
            </div>
            <div className="text p-3  bg-primary">
              <div className="text-lg text-orange-400  ">Miaam</div>
              <p className="text-white text-sm opacity-60 ">
                Miaam est une application web de commande de nouriture en ligne
                facilitant ainsi la vie des utilisateur
              </p>
              <div className="flex justify-end items-center gap-3 flex-wrap text-orange-500 underline">
                <span>Nextjs</span>
                <span>tailwincss</span>
                <span>Expressjs</span>
                <span>MySQL</span>
                <span>FireBase</span>
              </div>
            </div>
          </div>
          <div className="w-[300px] max-ssm:w-full h-auto rounded-lg overflow-hidden">
            <div className="h-[200px] ">
              <Image
                src={"/assets/1.png"}
                alt=""
                width={200}
                height={200}
                className="rounded-lg h-full hover:scale-[1.1] w-full"
              ></Image>
            </div>
            <div className="text p-3  bg-primary">
              <div className="text-lg text-orange-400  ">Miaam</div>
              <p className="text-white text-sm opacity-60 ">
                Miaam est une application web de commande de nouriture en ligne
                facilitant ainsi la vie des utilisateur
              </p>
              <div className="flex justify-end items-center gap-3 flex-wrap text-orange-500 underline">
                <span>Angular</span>
                <span>Expressjs</span>
                <span>MySQL</span>
                <span>FireBase</span>
              </div>
            </div>
          </div>
          <div className="w-[300px] max-ssm:w-full h-auto rounded-lg overflow-hidden">
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
              <div className="text-lg text-orange-400  ">Miaam</div>
              <p className="text-white text-sm opacity-60 ">
                Miaam est une application web de commande de nouriture en ligne
                facilitant ainsi la vie des utilisateur
              </p>
              <div className="flex justify-end items-center gap-3 flex-wrap text-orange-500 underline">
                <span>Angular</span>
                <span>Expressjs</span>
                <span>MySQL</span>
                <span>FireBase</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}