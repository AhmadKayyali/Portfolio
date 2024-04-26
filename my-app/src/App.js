import React, { useState, useEffect, useRef } from "react";
import Typed from 'typed.js';
import "./style.scss";
import "./about.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSquarePhoneFlip, faPaperPlane, faFilm, faPeopleArrows, faUser, faSquareArrowUpRight} from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';
import Navbar from './Navbar'; 
import emailjs from '@emailjs/browser';

function App() {

  const form = useRef();

  const Popup = ({ message, closePopup }) => {
    return (
      <div className="popup">
        <div className="popup-content">
          <p>{message}</p>
          <button onClick={closePopup}>Close</button>
        </div>
      </div>
    );
  };
  
  const [showPopup, setShowPopup] = useState(false);
  

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('ahmadkayy@gmail.com', 'template_4691b3e', form.current, 'BC-R8YwccW3WZ4bYL')
      .then((result) => {
          console.log(result.text);
          setShowPopup(true);
          e.target.reset()
      }, (error) => {
          console.log(error.text);
      });
      setTimeout(() => {
        setShowPopup(false);
      }, 10000);
    }

    const closePopup = () => {
      setShowPopup(false);
    };

  const el = useRef(null);

  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Hi there, welcome to my website! ', 'My name is Ahmad, I\'m a Software Engineering student at RMIT University.', 'Have a look through my page and feel free to contact me for any opportunities!'],
      typeSpeed: 50,
      startDelay: 1000,
      backDelay: 1000,
      backSpeed: 50,
      showCursor: false,
      loop: true
    });

    return () => {
      typed.destroy();
    };
  }, []);


  const [selectedTab, setSelectedTab] = useState("education");

  function handleTab(tab) {
    setSelectedTab(tab);
  }

  function scrollToSection(refName) {
    const refs = {
      aboutRef,
      projectsRef,
      contactRef
    };
    refs[refName].current.scrollIntoView({ behavior: 'smooth' });
  }

  function renderTabContent() {
    switch (selectedTab) {
      case "education":
        return (
          <div className="tab-contents">
            <li>
              <span>Bachelor of Software Engineering</span>
              <br />
              RMIT University
              <br />
              2022 - Present
            </li>
            <br />
            <li>
              <span>American Highschool Diploma</span>
              <br />
              American International School of Abu Dhabi
              <br />
              2008 - 2022
            </li>
          </div>
        );
      case "courses":
        return (
        <div className="tab-contents-courses">
          <div className="course-container">
            <a href="http://www1.rmit.edu.au/courses/054079" rel="noreferrer" target="_blank">Programming Bootcamp 1</a>
          </div>
          <div className="course-container">
            <a href="http://www1.rmit.edu.au/courses/054081" rel="noreferrer" target="_blank">Programming Studio 1</a>
          </div>
          <div className="course-container">
           <a href="http://www1.rmit.edu.au/courses/054077" rel="noreferrer" target="_blank">Data Analytics and Visualization</a>
          </div>

          <div className="course-container">
            <a href="http://www1.rmit.edu.au/courses/054080" rel="noreferrer" target="_blank">Programming Bootcamp 2</a>
          </div>
          <div className="course-container">
            <a href="http://www1.rmit.edu.au/courses/054082" rel="noreferrer" target="_blank">Programming Studio 2</a>
          </div>
          <div className="course-container">
            <a href="http://www1.rmit.edu.au/courses/054076" rel="noreferrer" target="_blank">Discrete Mathematics</a>
          </div>

          <div className="course-container">
            <a href="http://www1.rmit.edu.au/courses/004309" rel="noreferrer" target="_blank">Software Engineering Fundamentals</a>
          </div>
          <div className="course-container">
            <a href="http://www1.rmit.edu.au/courses/004302" rel="noreferrer" target="_blank">Algorithms and Analysis</a>
          </div>
          <div className="course-container">
            <a href="http://www1.rmit.edu.au/courses/054229" rel="noreferrer" target="_blank">Foundations of Artificial Intelligence</a>
          </div>
          <div className="course-container">
            <a href="http://www1.rmit.edu.au/courses/053172" rel="noreferrer" target="_blank">Full Stack Development</a>
          </div>

          <div className="course-container">
            <a href="http://www1.rmit.edu.au/courses/053171" rel="noreferrer" target="_blank">Foundations of Cloud Computing</a>
          </div>
          <div className="course-container">
            <a href="http://www1.rmit.edu.au/courses/054986" rel="noreferrer" target="_blank">Introduction to Cyber Security</a>
          </div>
          <div className="course-container">
            <a href="http://www1.rmit.edu.au/courses/052739" rel="noreferrer" target="_blank">Practical Data Science</a>
          </div>
          <div className="course-container">
            <a href="http://www1.rmit.edu.au/courses/038407" rel="noreferrer" target="_blank">Cloud Security</a>
          </div>
        </div>

        );
      case "experience":
        return (
          <div className="tab-contents">
            <li>
              <span>RMIT Connect Concierge</span>
              <br />
              RMIT University
              <br />
              November 2023 - Present
            </li>
            <br />
            <li>
              <span>Contract RMIT Support Officer</span>
              <br />
              RMIT University
              <br />
              July 2023
            </li>
            <br />
            <li>
              <span>Contract Polling Assistant</span>
              <br />
              The Australian Electoral Commission
              <br />
              October 2023
            </li>
          </div>
        );
  }
}

  return (
    <html lang="en">
      <body>
      <Navbar scrollToSection={scrollToSection} />
        <div class="home-container">

        <div class="text-container">
        <span ref={el} />
        </div>

        <div className="gradient-bg">
          <svg xmlns="http://www.w3.org/2000/svg">
            <defs>
              <filter id="goo">
                <feGaussianBlur
                  in="SourceGraphic"
                  stdDeviation="10"
                  result="blur"
                />
                <feColorMatrix
                  in="blur"
                  mode="matrix"
                  values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
                  result="goo"
                />
                <feBlend in="SourceGraphic" in2="goo" />
              </filter>
            </defs>
          </svg>
          <div className="gradients-container">
            <div className="g1"></div>
            <div className="g2"></div>
            <div className="g3"></div>
            <div className="g4"></div>
            <div className="g5"></div>
          </div>
        </div>
      </div>
      </body>

      <div ref={aboutRef}>
      <div className="about-container">
        <div className="about-rows">
          <div className="about-row1"><img src="public/OrangeMan.png" alt="Friendly waving man" /></div>
          <div className="about-row2">
            <h1 className="sub-title">About Me</h1>
          <p> Hi there! I'm Ahmad, a motivated Software Engineering student at RMIT University with a passion for exploring diverse technologies. Team player with a strong work ethic eager to gain practical experience by working closely with stakeholders to solve business problems and achieve great outcomes. Equipped with a versatile skill set in various technologies and have a strong foundation in software engineering principles. Demonstrated ability to quickly grasp new concepts and adapt to evolving challenges. Committed to continuous learning and professional growth.</p>
          <div className="tab-titles">
          <p className={`tab-links ${selectedTab === "education" ? "active-link" : ""}`} onClick={() => handleTab("education")}>Education</p>
              <p className={`tab-links ${selectedTab === "courses" ? "active-link" : ""}`} onClick={() => handleTab("courses")}>Courses</p>
              <p className={`tab-links ${selectedTab === "experience" ? "active-link" : ""}`} onClick={() => handleTab("experience")}>Experience</p>
          </div>
          {renderTabContent()}
          </div>
        </div>
      </div>
      </div>

      <div ref={projectsRef}>
      <h1 className="sub-title-project">Projects</h1>

      <div className="projects-container">

        <div className="projects-list">

            <div className="projects-box">
              <h2>Loop Cinemas <FontAwesomeIcon icon={faFilm} size="xl" /></h2>
              <p>As part of my Full Stack Development elective, I undertook a semester-long project to create an extensive and fully functional webpage. Leveraging the React JavaScript library, I implemented both REST and GraphQL API architectures to enhance different aspects of the site. The client-side interface for Loop Cinemas featured robust functionalities, including seamless login, sign-up, review, and booking processes. Notably, administrators had a distinct interface equipped with the ability to add, remove, or edit showcased movies. Admins could also exercise control by blocking users and managing movie reviews posted by users, allowing for comprehensive site administration.</p>
              
              <a href="https://github.com/rmit-fwp-s2-23/Assignment1" target="_blank"><FontAwesomeIcon icon={faSquareArrowUpRight} beat size="2xl"/></a>

            </div>

            <div className="projects-box">
              <h2>Closing the Gap <FontAwesomeIcon icon={faPeopleArrows}  size="xl"/></h2>
              <p>I developed a webpage designed to provide professionals with a visual representation of the disparities between indigenous and non-indigenous Australians. The primary objective of this site was to spotlight and illustrate the variations in education, healthcare, welfare, and overall quality of life. This project marked my debut showcase at RMIT, earning a High Distinction grade for its comprehensive execution. Employing the JDBC architecture, I established a seamless connection to the database, utilizing SQL queries to dynamically present real-time data on the webpage.</p>
              <a href="https://github.com/rmit-computing-technologies/cosc2803-sep22-studio-project-team-023-cosc2803-sep22" target="_blank"><FontAwesomeIcon icon={faSquareArrowUpRight} beat size="2xl"/></a>
            </div>


            <div className="projects-box">
              <h2>Personal Portfolio <FontAwesomeIcon icon={faUser}  size="xl"/></h2>
              <p>This personal project serves as a showcase of both my artistic flair and technical proficiency. Crafted according to my preferences, the website embodies a harmonious blend of creativity and technical expertise. Utilizing the React JavaScript library, I seamlessly translated the knowledge acquired from my Full Stack course into the design and functionality of the webpage. The result is a digital portfolio that authentically represents my skills and reflects my unique approach to web development.</p>
              <a href="https://github.com/AhmadKayyali/Portfolio" target="_blank"><FontAwesomeIcon icon={faSquareArrowUpRight} beat size="2xl"/></a>
            </div>
            
        </div>

      </div>
</div>

<div ref={contactRef}>
      <h1 className="sub-title-project">Contact Me</h1>
      <div className="contact-container">
          <div className="contact-left">
         <p><FontAwesomeIcon icon={faPaperPlane} className="icon"  size="2xl"/> ahmadkayy@gmail.com</p>
         <p><FontAwesomeIcon icon={faSquarePhoneFlip} flip="horizontal" className="icon"  size="2xl"/> (+61) 413 918 228</p>
         <p><a href="https://www.linkedin.com/in/ahmad-kayyali/" target="_blank"><FontAwesomeIcon icon={faLinkedin} className="icon" size="2xl"/>LinkedIn</a></p>

         <a className="btn" href="https://drive.google.com/file/d/1e-_QxRAQTKFMU7Tfh61ytPepPtGF8UvV/view?usp=sharing" target="_blank" title="" download>Download CV</a>
          </div>

          <div className="contact-right">
            <form ref={form} onSubmit={sendEmail}>
              <input className="input" type="text" name="user_name" placeholder="Your Name" required></input>
              <input className="input" type="email" name="user_email" placeholder="Your Email" required></input>
              <textarea className="textarea"  name="message" rows="6" placeholder="Your Message"></textarea>
              <button type="submit" value="Send" >Submit</button>
            </form>
            {showPopup && <Popup message="Message sent successfully!" closePopup={closePopup} />}
        </div>
      </div>
      </div>
    </html>
  );
}

export default App;
