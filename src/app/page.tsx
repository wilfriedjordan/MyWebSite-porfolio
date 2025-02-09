import Nav from './core/Nav';
import LandingPage from './shared/LandingPage';
import Service from './shared/Service';
import Skills from './shared/Skills';
import Project from './shared/Project';
import Contact from './shared/Contact';

export default function Home() {
  return (
    <div className="">
      <header>
        <Nav></Nav>
      </header>
      <main>
        <section className="landing-page">
          <LandingPage></LandingPage>
        </section>
        <div className="Service" id='services'>
          <Service></Service>
        </div>
        <div className="Skill" id='about'>
          <Skills></Skills>
        </div>
        <div className="projet" id='projet'>
          <Project></Project>
        </div>
        <div className="contact" id='contact'>
          <Contact></Contact>
        </div>
        <footer>
          <div className="text-center text-white bg-primary p-5">
            &copy; {new Date().getFullYear()} Wilfried |{" "}
            <span className="text-orange-500">
              &#34;Chaque ligne de code est une histoire, chaque projet une
              aventure.&#34;
            </span>
          </div>
        </footer>
      </main>
    </div>
  );
}
