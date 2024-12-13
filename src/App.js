// import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import React, { useEffect } from 'react';
import './App.css';
import './CSS/style.css';
import ContactForm from './components/ContactForm.tsx'
import TestimonialCarousel from './components/TestimonialCarousel.tsx';
import ProjectShowcase from './components/ProjectShowcase.tsx';
import Weather from './components/Weather.tsx';
import LatestCommit from './components/Github.tsx';
import ComingSoon from './pages/ComingSoon.js';
import VotingSystem from './components/VotingSystem.js';
import RandomMovies from './components/RandomMovies.js';




function App() {

  useEffect(() => {
    // Wait until botpressWebChat is defined
    if (window.botpressWebChat) {
      window.botpressWebChat.init({
        host: "https://cdn.botpress.cloud/webchat/v2.1/shareable.html",
        botId: process.env.REACT_APP_BOT_ID,
        botName: "Your Bot",
        showPoweredBy: false,
      });
    } else {
      console.error('Botpress WebChat is not available');
    }
  }, []);

  const openChat = () => {
    if (window.botpressWebChat) {
      window.botpressWebChat.sendEvent({ type: 'show' });
    } else {
      console.error('Botpress WebChat is not initialized');
    }
  };

  return (
    <div className="App">
      <nav id="nav">
        <div class="navbar__nav">
          <div class="navbar__container">
            <div class="navbar__row">
              <div class="navbar__logo">
                <img src={require('./img/logo-light.svg').default} />
              </div>

              <div class="navbar__listItem">
                <ul>
                  <li class="item item__active"><a href="#home">Home</a></li>
                  <li class="item"><a href="#about">About</a></li>
                  <li class="item"><a href="#summary">Resume</a></li>
                  <li class="item"><a href="#portfolio">Portfolio</a></li>
                  <li class="item"><a href="#testimonial">Client</a></li>
                  <li class="item"><a href="#contact">Contact</a></li>
                </ul>
              </div>
              <div class="navbar__listItem--mobile">
                <input type="checkbox" id="btnControl" />
                <label class="navbar__barIcon" for="btnControl"><i class="fas fa-bars"></i></label>

                <ul class="mobileList">
                  <li class="mobileItem"><a href="#home">Home</a></li>
                  <li class="mobileItem"><a href="#about">About</a></li>
                  <li class="mobileItem"><a href="#service">What I Do</a></li>
                  <li class="mobileItem"><a href="#summary">Resume</a></li>
                  <li class="mobileItem"><a href="#portfolio">Portfolio</a></li>
                  <li class="mobileItem"><a href="#testimonial">Client</a></li>
                  <li class="mobileItem"><a href="#contact">Contact</a></li>
                </ul>
              </div>
              <div class="navbar__socialItem">
                <ul>
                  {/* <li class="socialItem">
                    <Weather />
                  </li> */}
                  <li class="socialItem">
                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/domnguyen714/"
                    ><i class="fa-brands fa-linkedin"></i></a
                    ><span class="tooltiptext__fb">LinkedIn</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* <!-- Home --> */}
      <header id="home">
        <div class="home__Container">
          <div class="home__bgLayer">
            <div class="home__Caption">
              <h3 class="home__intro">Welcome</h3>
              <h1 class="home__title"></h1>
              {/* <h1 class="home__title">I'm Dom Nguyen</h1> */}
              <p class="home__desc">Based in Orange County, California</p>
              <Weather />
              <a href="mailto:domnguyen@gmail.com?subject=I%20See%20Great%20Potential%20Here%20%E2%80%93%20Care%20to%20Chat%3F" class="home__button">Hire Me</a>
              {/* <button onClick={openChat}>Chat with Us</button> */}
              <div class="home__arrow--click">
                <a href="#about"><i class="fa-solid fa-chevron-down"></i></a>
              </div>
            </div>
          </div>
        </div>
      </header>


      {/* <!-- about --> */}
      <section id="about">
        <div class="about__Container">
          <h2 class="titleBackground">
            About Me
            <p class="text__overlap">Know Me More</p>
          </h2>
          <div class="about__desc">
            <div class="about__parag">
              <h2 class="about__title">
                I'm <span class="aboutTitle__span">Dom Nguyen,</span> your next software dev expert.
              </h2>
              <p class="aboutParag__desc">
                A passionate software developer based in Orange County with an unconventional journey. I started my academic path majoring in Chemistry at UCSD, but it wasn’t long before I fell in love with coding and the thrill of problem-solving. Transitioning from labs to lines of code, I’ve built a strong foundation specializing in SQL Server, .NET, and React. Today, I get to do what I love every day: creating innovative solutions that make an impact.
              </p>
              <p class="aboutParag__desc">
                I view myself as a lifelong learner in the ever-evolving world of programming, constantly seeking new knowledge and skills to stay ahead. Each day brings fresh challenges and opportunities to grow, and I am committed to delivering meaningful value wherever I work. I believe that by embracing continuous learning, I can contribute even more to the projects and teams I’m part of.
              </p>
            </div>
            <div class="about__table">
              <ul>
                <li class="aboutTable__list"><b>Name:</b> Dom Nguyen</li>
                <li class="aboutTable__list">
                  <b>Email:</b>
                  <span class="aboutTable__list--active"> Domnguyen@gmail.com</span>
                </li>
                <li class="aboutTable__list">
                  <b>From:</b> Orange County, California
                </li>
              </ul>
            </div>
          </div>
          <div class="about__numbers">
            <div class="number__data">
              <h4 class="aboutData__number">5+</h4>
              <p class="aboutData__desc">Years Experiance</p>
            </div>
            <div class="number__data">
              <h4 class="aboutData__number">10+</h4>
              <p class="aboutData__desc">Happy Clients</p>
            </div>
            <div class="number__data">
              <h4 class="aboutData__number">10+</h4>
              <p class="aboutData__desc">Projects Done</p>
            </div>
            <div class="number__data">
              <h4 class="aboutData__number">1</h4>
              <p class="aboutData__desc">Awards</p>
            </div>
          </div>
        </div>
      </section>


      {/* <!-- Services -->
      <section id="service">
        <div class="services__Container">
          <h2 class="titleBackground">
            Services
            <p class="text__overlap">What I Do?</p>
          </h2>

          <div class="services__cards">
            <div class="service__row">
              <div class="services__card">
                <div class="icon__container">
                  <div class="card__icon">
                    <i class="fa-sharp fa-solid fa-palette"></i>
                  </div>
                </div>
                <div class="card__data">
                  <h3 class="card__title">Graphic Design</h3>
                  <p class="card__desc">
                    Lisque persius interesset his et, in quot quidam persequeris
                    vim, ad mea essent possim iriure.
                  </p>
                </div>
              </div>

              <div class="services__card">
                <div class="icon__container">
                  <div class="card__icon">
                    <i class="fa-solid fa-display"></i>
                  </div>
                </div>
                <div class="card__data">
                  <h3 class="card__title">Web Design</h3>
                  <p class="card__desc">
                    Lisque persius interesset his et, in quot quidam persequeris
                    vim, ad mea essent possim iriure.
                  </p>
                </div>
              </div>
            </div>

            <div class="service__row">
              <div class="services__card">
                <div class="icon__container">
                  <div class="card__icon">
                    <i class="fas fa-pencil-ruler"></i>
                  </div>
                </div>
                <div class="card__data">
                  <h3 class="card__title">UI/UX Design</h3>
                  <p class="card__desc">
                    Lisque persius interesset his et, in quot quidam persequeris
                    vim, ad mea essent possim iriure.
                  </p>
                </div>
              </div>

              <div class="services__card">
                <div class="icon__container">
                  <div class="card__icon"><i class="fas fa-paint-brush"></i></div>
                </div>
                <div class="card__data">
                  <h3 class="card__title">App Design & Develop</h3>
                  <p class="card__desc">
                    Lisque persius interesset his et, in quot quidam persequeris
                    vim, ad mea essent possim iriure.
                  </p>
                </div>
              </div>
            </div>

            <div class="service__row">
              <div class="services__card">
                <div class="icon__container">
                  <div class="card__icon"><i class="fas fa-chart-area"></i></div>
                </div>
                <div class="card__data">
                  <h3 class="card__title">Business Analysis</h3>
                  <p class="card__desc">
                    Lisque persius interesset his et, in quot quidam persequeris
                    vim, ad mea essent possim iriure.
                  </p>
                </div>
              </div>

              <div class="services__card">
                <div class="icon__container">
                  <div class="card__icon"><i class="fas fa-bullhorn"></i></div>
                </div>
                <div class="card__data">
                  <h3 class="card__title">SEO Marketing</h3>
                  <p class="card__desc">
                    Lisque persius interesset his et, in quot quidam persequeris
                    vim, ad mea essent possim iriure.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* <!-- Summary --> */}
      <section id="summary">
        <div class="summary__Container">
          <h2 class="titleBackground">
            Summary
            <p class="text__overlap">Resume</p>
          </h2>



          <div class="resume__column">
            <h2 class="resume__title">My Education</h2>
            <div class="resume__card">
              <h3 class="card__title">B.S. Chemistry</h3>
              <p class="card__subtitle">University Of California, San Diego</p>
              {/* <p class="card__desc">
                Lisque persius interesset his et, in quot quidam persequeris
                vim, ad mea essent possim iriure.
              </p> */}
            </div>
            <h2 class="resume__title">My Experience</h2>
            <div class="resume__card">
              <p class="card__year">2018 - 2019</p>
              <h3 class="card__title"> Full Stack Developer</h3>
              <p class="card__subtitle">Eleveight Inc.</p>
              <p class="card__desc">
                Eleveight is a HIPAA compliant, web-based, case management platform and mobile app that connects clients with jobs, scholarships and opportunities that match their needs, interests and location to support them in their long-term personal and professional success.
              </p>
            </div>
            <div class="resume__card">
              <p class="card__year">2019 - 2020</p>
              <h3 class="card__title">Web Developer</h3>
              <p class="card__subtitle">Extron</p>
              <p class="card__desc">
                Extron Control and Automation solutions simplify meetings, streamline presentations, and operate your core infrastructure across the enterprise.
              </p>
            </div>
            <div class="resume__card">
              <p class="card__year">2020 - Present</p>
              <h3 class="card__title">Software Developer</h3>
              <p class="card__subtitle">Eliant, Inc.</p>
              <p class="card__desc">
                Eliant has been the homebuilding industry’s premier reputation management firm, helping builders increase sales from referrals. Providing insights and best practices via our live workshops, webinars, and online learning university, over 1,800 builders in the US, Canada, and the Middle East
              </p>
            </div>

            <h2 class="resume__title">My Awards</h2>
            <div class="resume__card">
              <p class="card__year">2019</p>
              <h3 class="card__title">ADDIHacks Long Beach Hackathon [1st place winner]</h3>
              <p class="card__subtitle"><img src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*lotSgWr0HaJQ8Ze22gwA8Q.jpeg" style={{ maxWidth: "100%", height: "auto" }} ></img>
                <br></br></p>
              <p class="card__desc">
                Produced a web application in the span of 48 hours using the technologies provided by the City of Long Beach to create Good Neighbor.
                <br></br><br></br>
                The Good Neighbor app brings the community together by giving people the chance to report incidents or do good deeds by helping someone in need near them. Users will fill out a form to submit an incident that will include a photo. Local incidents will be show alongside with a map of where the incidents will have happened. Users will also be able to upvote or downvote an incident near them to validate those incidents. Google Maps and Long Beach Police Department API were used to display a map of where incidents have occurred and also where all Long Beach Police stations are located.
                <br></br><br></br>
                <a href="https://medium.com/digequity/addi-hackathon-2019-b5cc60ade6ec" target='_blank'>Read More Here</a>
              </p>
            </div>
          </div>

          {/* <h2 class="skills__title">My Skills</h2>
          <div class="resume__container">
            <div class="skills__column">
              <div class="skill__bar">
                <p class="bar__label">Web Design</p>
                <p class="bar__label--perc">65%</p>
                <div class="progress__wd">
                  <div class="progressValue__wd"></div>
                </div>
              </div>

              <div class="skill__bar">
                <p class="bar__label">HTML/CSS</p>
                <p class="bar__label--perc">95%</p>
                <div class="progress__htmlCSS">
                  <div class="progressValue__htmlCSS"></div>
                </div>
              </div>

              <div class="skill__bar">
                <p class="bar__label">JavaScript</p>
                <p class="bar__label--perc">80%</p>
                <div class="progress__js">
                  <div class="progressValue__js"></div>
                </div>
              </div>
            </div>
            <div class="skills__column">
              <div class="skill__bar">
                <p class="bar__label">React JS</p>
                <p class="bar__label--perc">70%</p>
                <div class="progress__react">
                  <div class="progressValue__react"></div>
                </div>
              </div>

              <div class="skill__bar">
                <p class="bar__label">Angular JS</p>
                <p class="bar__label--perc">60%</p>
                <div class="progress__angular">
                  <div class="progressValue__angular"></div>
                </div>
              </div>

              <div class="skill__bar">
                <p class="bar__label">bootstrap</p>
                <p class="bar__label--perc">99%</p>
                <div class="progress__bootstrap">
                  <div class="progressValue__bootstrap"></div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </section >
      <section>
        <h3 class="titleBackground">
          <LatestCommit />
        </h3>
      </section>

      {/* <!-- Portfolio --> */}
      < section id="portfolio" >
        <div class="portfolio__Container">
          <h2 class="titleBackground">
            Portfolio
            <p class="text__overlap">My Work</p>
          </h2>
        </div>

        {/* <ul class="portfolio__type">
          <li class="type__item item--active"><a href="#">All</a></li>
          <li class="type__item"><a href="#">Design</a></li>
          <li class="type__item"><a href="#">Brand</a></li>
          <li class="type__item"><a href="#">Photos</a></li>
        </ul> */}
        {/* <div class="portfolio__gallery">
          <div class="photo__item">
            <img
              class="gallery__photo"
              src="./Assets/img/project-1.jpg"
              alt="project 1 image"
            />
            <div class="project__desc">
              <div class="desc__container">
                <h3 class="project__title">Project Title</h3>
                <p class="project__category">Category</p>
              </div>
            </div>
          </div>
          <div class="photo__item">
            <img
              class="gallery__photo"
              src="./Assets/img/project-4.jpg"
              alt="project 4 image"
            />
            <div class="project__desc">
              <div class="desc__container">
                <h3 class="project__title">Project Title</h3>
                <p class="project__category">Category</p>
              </div>
            </div>
          </div>
          <div class="photo__item">
            <img
              class="gallery__photo"
              src="./Assets/img/project-2.jpg"
              alt="project 2 image"
            />
            <div class="project__desc">
              <div class="desc__container">
                <h3 class="project__title">Project Title</h3>
                <p class="project__category">Category</p>
              </div>
            </div>
          </div>
          <div class="photo__item">
            <img
              class="gallery__photo"
              src="./Assets/img/project-7.jpg"
              alt="project 7 image"
            />
            <div class="project__desc">
              <div class="desc__container">
                <h3 class="project__title">Project Title</h3>
                <p class="project__category">Category</p>
              </div>
            </div>
          </div>
          <div class="photo__item">
            <img
              class="gallery__photo"
              src="./Assets/img/project-3.jpg"
              alt="project 3 image"
            />
            <div class="project__desc">
              <div class="desc__container">
                <h3 class="project__title">Project Title</h3>
                <p class="project__category">Category</p>
              </div>
            </div>
          </div>
          <div class="photo__item">
            <img
              class="gallery__photo"
              src="./Assets/img/project-5.jpg"
              alt="project 5 image"
            />
            <div class="project__desc">
              <div class="desc__container">
                <h3 class="project__title">Project Title</h3>
                <p class="project__category">Category</p>
              </div>
            </div>
          </div>
          <div class="photo__item">
            <img
              class="gallery__photo"
              src="./Assets/img/project-6.jpg"
              alt="project 6 image"
            />
            <div class="project__desc">
              <div class="desc__container">
                <h3 class="project__title">Project Title</h3>
                <p class="project__category">Category</p>
              </div>
            </div>
          </div>
        </div> */}
        <ProjectShowcase />
      </section >
      <section>
        <div>
          <h2>Movies Recommendation</h2>
          <RandomMovies />
        </div>
      </section>
      {/* <!-- Testimonial --> */}
      < section id="testimonial" >
        <div class="testimonial__Container">
          <h2 class="titleBackground">
            Testimonial
            <p class="text__overlap">Client Speak</p>
          </h2>
          <div class="testimonial__wrap">
            <TestimonialCarousel />

            {/* <div class="testCard__container">
              <div class="card__info">
                <div class="card__img">
                  <img
                    class="cardInfo__img"
                    src="./Assets/img/client-sm-3.jpg"
                    alt="reviewer image 1"
                  />
                </div>
                <p class="cardInfo__desc">
                  <b class="testCard__name">Dennis Jacques</b> <br />
                  <span class="testCard__title">User from USA</span>
                </p>
              </div>
              <p class="testCard__desc">
                â€œOnly trying it out since a few days. But up to now excellent.
                Seems to work flawlessly. priced simply dummy text of the printing
                and typesetting industry.â€
              </p>
              <span class="test__rate">
                <i class="fas fa-star text-warning"></i>
                <i class="fas fa-star text-warning"></i>
                <i class="fas fa-star text-warning"></i>
                <i class="fas fa-star text-warning"></i>
                <i class="fas fa-star text-warning"></i>
              </span>
            </div> */}
            {/* <div class="testCard__container card__second">
              <div class="card__info">
                <div class="card__img">
                  <img
                    class="cardInfo__img"
                    src="./Assets/img/client-sm-4.jpg"
                    alt="reviewer image 2"
                  />
                </div>
                <p class="cardInfo__desc">
                  <b class="testCard__name">Chris Tom</b> <br />
                  <span class="testCard__title">User from UK</span>
                </p>
              </div>
              <p class="testCard__desc">
                â€œI have used them twice now. Good rates, very efficient service
                and priced simply dummy text of the printing and typesetting
                industry quidam interesset his et. Excellent.â€
              </p>
              <span class="test__rate">
                <i class="fas fa-star text-warning"></i>
                <i class="fas fa-star text-warning"></i>
                <i class="fas fa-star text-warning"></i>
                <i class="fas fa-star text-warning"></i>
                <i class="fas fa-star text-warning"></i>
              </span>
            </div> */}
          </div>

          {/* <div class="bullet__container--web">
            <i class="fa-regular fa-circle-dot"></i>
            <i class="fa-solid fa-circle"></i>
          </div>
          <div class="bullet__container--mobile">
            <i class="fa-regular fa-circle-dot"></i>
            <i class="fa-solid fa-circle"></i>
            <i class="fa-solid fa-circle"></i>
            <i class="fa-solid fa-circle"></i>
          </div> */}
        </div>
      </section >
      <section>
        <VotingSystem />
      </section>

      {/* <!-- Contact --> */}
      <section id="contact">
        <div class="contact__Container">
          <h2 class="titleBackground">
            Contact
            <p class="text__overlap">Get in Touch</p>
          </h2>

          <div class="contact__wrap">
            <ContactForm />
          </div>
        </div>
      </section>
      {/* <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/comingsoon">Coming Soon</Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path="/comingsoon" element={<ComingSoon />} />
          </Routes>
        </div>
      </Router> */}

      {/* <!-- footer --> */}
      {/*<footer class="footer__container">
         <p class="footer__desc">
          Copyright Rania Helmy© 2021 <a href="#" class="footer__link">Simone.</a> All
          Rights Reserved.
        </p>
        <ul class="footer__list">
          <li class="footer__linkItem">
            <a>Terms & Policy</a>
          </li>
          <li class="footer__linkItem">
            <a>Disclaimer</a>
          </li>
        </ul> 
      </footer>*/}
    </div >


  );
}

export default App;
