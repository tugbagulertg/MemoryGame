import React from "react";
import github from "../../github.png";
import linkedin from "../../linkedin (1).png";

function Footer() {
  return (
    <div className="bottom-0 left-0  py-1 lg:py-2">
      <div className="flex justify-center gap-2">
        <a
          href="https://www.linkedin.com/in/tugbagulerr/"
          target="_blank"
          rel="noreferrer"
          onMouseOver={(e) => (e.target.style.opacity = "0.6")}
          onMouseOut={(e) => (e.target.style.opacity = "1")}
        >
          <img className="w-4 md:w-5 lg:w-6" alt="linkedin" src={linkedin} />
        </a>
        <a
          href="https://github.com/tugbagulertg"
          target="_blank"
          rel="noreferrer"
          onMouseOver={(e) => (e.target.style.opacity = "0.6")}
          onMouseOut={(e) => (e.target.style.opacity = "1")}
        >
          <img className="w-4 md:w-5 lg:w-6" alt="github" src={github} />
        </a>
      </div>

      <div className="text-center pt-1 text-sm sm:text-lg">
        Created By Tugba Guler
      </div>
    </div>
  );
}

export default Footer;
