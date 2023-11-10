import "./style.scss";
import React, { useEffect } from "react";
import Typed from 'typed.js';

function App() {
  const el = React.useRef(null);

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
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

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
    </html>
  );
}

export default App;
