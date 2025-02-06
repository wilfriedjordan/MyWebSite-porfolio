import React from 'react'
import Image from 'next/image.js'


export default function Contact() {
  return (
    <div>
      <section className="conctact h-auto w-full bg-primary text-white p-5">
        <div className="w-full py-4 text-center">
          <h1 className="text-3xl font-bold p-3 underline text-white">
            Me <span className="text-3xl text-orange-500">Cantactez</span>
          </h1>
        </div>
        <div className=" w-full flex items-center justify-center gap-12 flex-wrap">
          <div className="w-[400px]">
            <h1 className="text-2xl font-bold py-2">Ngkoa Tech</h1>
            <p className="opacity-60 text-lg">
              🚀 Transformez vos idées en réalité, 🌟 💡 Innovons ensemble.
            </p>
            <p className="opacity-60 text-lg">
              💼 Envie de travailler ensemble ?{''}
              <a href="mailto:tankwewilfried5@gmail.com"
                className="text-orange-500 hover:underline  "
              >
                Envoyer-moi un Mail
              </a>
            </p>
            <div className="flex items-center py-3 ">
              <div className="w-10 h-10">
                <a href="https://www.linkedin.com/in/tankwe-diffo-wilfried-686638280/">
                  <Image
                    src={"/assets/svg/linkedin.svg"}
                    alt=""
                    width={20}
                    height={20}
                  ></Image>
                  
                </a>
              </div>
              <div className="w-10 h-10">
                <a href="https://web.facebook.com/me/">
                  <Image
                    src={"/assets/svg/facebook.svg"}
                    alt=""
                    width={20}
                    height={20}
                  ></Image>
                </a>
              </div>
              <div className="w-10 h-10">
                <a href="https://github.com/">
                  <Image
                    src={"/assets/github.png"}
                    alt=""
                    width={20}
                    height={20}
                    className="w-5 h-5"
                  ></Image>
                </a>
              </div>
            </div>
          </div>
          <div className="form">
            <form action="">
              <div className="flex gap-3">
                <input
                  type="text"
                  placeholder="Prenom"
                  className="w-full p-2 bg-black rounded-md border-2 border-none  focus:outline-none focus:border-primary"
                />
                <input
                  type="text"
                  placeholder="Nom"
                  className="w-full p-2 bg-black rounded-md border-2 border-none  focus:outline-none focus:border-primary"
                />
              </div>
              <div className="flex gap-3 mt-2">
                <input
                  type="text"
                  placeholder="Phone"
                  className="w-full p-2 bg-black rounded-md border-2 border-none  focus:outline-none focus:border-primary"
                />
                <input
                  type="text"
                  placeholder="suject"
                  className="w-full p-2 bg-black rounded-md border-2 border-none  focus:outline-none focus:border-primary"
                />
              </div>
              <div className="flex gap-3 mt-2">
                <input
                  type="text"
                  placeholder="Email"
                  className="w-full p-2 bg-black rounded-md border-2 border-none  focus:outline-none focus:border-primary"
                />
              </div>
              <div className="flex gap-3 mt-2">
                <textarea
                  name=""
                  id=""
                  placeholder="Message"
                  className="w-full p-2 bg-black rounded-md border-2 border-none  focus:outline-none focus:border-primary"
                ></textarea>
              </div>
              <div className="flex gap-3 mt-2">
                <button
                  type="submit"
                  className=" w-full p-2 bg-black rounded-md border-2 border-none  focus:outline-none focus:border-primary"
                >
                  {" "}
                  Envoyer
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}