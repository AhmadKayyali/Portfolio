import React, { useState, useEffect, useRef } from "react";
import Typed from 'typed.js';
import "./style.scss";
import "./about.css";

function App() {
  const el = useRef(null);

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
            <a href="http://www1.rmit.edu.au/courses/054079" target="_blank">Programming Bootcamp 1</a>
          </div>
          <div className="course-container">
            <a href="http://www1.rmit.edu.au/courses/054081" target="_blank">Programming Studio 1</a>
          </div>
          <div className="course-container">
           <a href="http://www1.rmit.edu.au/courses/054077" target="_blank">Data Analytics and Visualization</a>
          </div>

          <div className="course-container">
            <a href="http://www1.rmit.edu.au/courses/054080" target="_blank">Programming Bootcamp 2</a>
          </div>
          <div className="course-container">
            <a href="http://www1.rmit.edu.au/courses/054082" target="_blank">Programming Studio 2</a>
          </div>
          <div className="course-container">
            <a href="http://www1.rmit.edu.au/courses/054076" target="_blank">Discrete Mathematics</a>
          </div>

          <div className="course-container">
            <a href="http://www1.rmit.edu.au/courses/004309" target="_blank">Software Engineering Fundamentals</a>
          </div>
          <div className="course-container">
            <a href="http://www1.rmit.edu.au/courses/004302" target="_blank">Algorithms and Analysis</a>
          </div>
          <div className="course-container">
            <a href="http://www1.rmit.edu.au/courses/054229" target="_blank">Foundations of Artificial Intelligence</a>
          </div>
          <div className="course-container">
            <a href="http://www1.rmit.edu.au/courses/053172" target="_blank">Full Stack Development</a>
          </div>

          <div className="course-container">
            <a href="http://www1.rmit.edu.au/courses/053171" target="_blank">Foundations of Cloud Computing</a>
          </div>
          <div className="course-container">
            <a href="http://www1.rmit.edu.au/courses/054986" target="_blank">Introduction to Cyber Security</a>
          </div>
          <div className="course-container">
            <a href="http://www1.rmit.edu.au/courses/014052" target="_blank">Further Programming</a>
          </div>
          <div className="course-container">
            <a href="http://www1.rmit.edu.au/courses/051831" target="_blank">Machine Learning</a>
          </div>
        </div>

        );
      case "experience":
        return (
          <div className="tab-contents">
            <li>
              <span>RMIT Student Connect Concierge</span>
              <br />
              RMIT University
              <br />
              November 2023 - Present
            </li>
            <br />
            <li>
              <span>Burgertory Team Member</span>
              <br />
              Burgertory
              <br />
              October 2022 - November 2023
            </li>
            <br />
            <li>
              <span>RMIT Transition Support Officer</span>
              <br />
              RMIT University
              <br />
              July 2023
            </li>
            <br />
            <li>
              <span>Polling Assistant</span>
              <br />
              The Australian Electoral Commission
              <br />
              October 2023
            </li>
          </div>
        );
      case "volunteering":
        return (
          <div className="tab-contents">
            <li>
              <span>Olive Kids Foundation</span>
              <br />
              October 2022 - Present
            </li>
            <br />
            <li>
              <span>Australian Red Cross</span>
              <br />
              April 2023
            </li>
            <br />
            <li>
              <span>Crepes For Change</span>
              <br />
              July 2023
            </li>
            <br />
          </div>
        );
      default:
        return null;
    }
  }

  
  return (
    <html lang="en">
      <body>
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

      <div className="about-container">
        <div className="about-rows">
          <div className="about-row1"><img src="OrangeMan.png" /></div>
          <div className="about-row2">
            <h1 className="sub-title">About Me</h1>
          <p> Hi there! I'm Ahmad, a Software Engineer interested in pursuing a career in full stack web development. I'm a fast learner with an adaptable skill set confident in using a variety of languages and libraries. I have excelled in many advanced courses and electives at RMIT such as Full Stack Development, Machine Learning, Cloud Computing, Programming Studio, Algorithms & Analysis, and many more! I have attached course outlines for each course I had undertook along with the grade I scored. I also have extensive work experience in a variety of customer service and customer experience roles. I gained valuable communication and problem solving skills from these positions as I regularly had to problem solve quickly under pressure and constraints. I also learned the importance of communication to resolve issues quickly as to ensure businesses run smoothly. Overall, I find myself to be a confident and well rounded individual with a great work ethic and drive to be better and achieve outstanding outcomes. With that being said, I am also excited to keep learning and take on challenging tasks with the positions that come my way. Have a look through my qualifications and please contact me if you have any concerns or require any additional information from me.</p>
          <div className="tab-titles">
          <p className={`tab-links ${selectedTab === "education" ? "active-link" : ""}`} onClick={() => handleTab("education")}>Education</p>
              <p className={`tab-links ${selectedTab === "courses" ? "active-link" : ""}`} onClick={() => handleTab("courses")}>Courses</p>
              <p className={`tab-links ${selectedTab === "experience" ? "active-link" : ""}`} onClick={() => handleTab("experience")}>Experience</p>
              <p className={`tab-links ${selectedTab === "volunteering" ? "active-link" : ""}`} onClick={() => handleTab("volunteering")}>Volunteering</p>
          </div>
          {renderTabContent()}
          </div>
        </div>
      </div>


      <div className="projects-container">
        <h1 className="sub-title">Projects</h1>
        <div className="projects-list">
            <div>

            <div>
              <h2>Loop Cinemas</h2>
              <p>This project was a part of my Full Stack Development elective in which I built an extensive fully
functional webpage throughout the semester. I had used the React JavaScript library to code this webpage and used
the REST and GraphQL API architectures for different parts site. The client side of the Loop Cinemas site had
a fully functional log in, sign up, review, and booking functionalities. There was a different interface for admins
separate to that of the client. The Admin page allowed admins add, remove, or edit, movies showcased. They can
also block users and delete movie reviews posted by users.</p>
              <a href="#">Github Repository</a>
            </div>
            
              <h2>Closing the Gap</h2>
              <p>Built a webpage that allowed professionals to learn and visually see statistics about the ”gap”
between indigenous and non-indigenous Australians. The aim of this site was to highlight and visually show professionals
the difference in education, healthcare, welfare, and overall quality of life. This was my first project I
had showcased at RMIT and I had received a High Distinction grade for the project overall. I had used the JDBC
architecture to connect the database and handle SQL queries to showcase data in real time on the webpage.</p>
              <a href="#">Github Repository</a>
            </div>


            <div>
              <h2>Personal Portfolio</h2>
              <p></p>
              <a href="#">Github Repository</a>
            </div>
        </div>

      </div>

    </html>
  );
}

export default App;
