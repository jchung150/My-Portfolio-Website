import gsl01 from "../assets/images/gsl01.png";
import gsl02 from "../assets/images/gsl02.jpg";
import gsl03 from "../assets/images/gsl03.jpg";
import gsl04 from "../assets/images/gsl04.png";

import "../assets/styles/Project.scss";
import Chip from "@mui/material/Chip";

const intelligentGroceryShoppingCart = [
  "Personal Project",
  "JavaScript",
  "React",
  "SWR",
  "Dexie",
  "React-Speech-Recognition",
  "Material UI",
];

const interactiveStoryPlatform = [
  "Team Project",
  "JavaScript",
  "React",
  "Next.js",
  "Node.js",
  "MongoDB",
  "Tailwind CSS",
];

const studyWithMe = [
  "Team Project",
  "TypeScript",
  "React",
  "Next.js",
  "Prisma",
  "Tailwind CSS",
  "Post CSS",
];

const testAutomation = ["Team Project", "TypeScript", "Cucumber", "Playwright"];

function Project() {
  return (
    <div className="projects-container" id="projects">
      <h1>Projects</h1>
      <div className="projects-grid">
        <div className="project">
          <a
            href="https://smart-grocery-shopping-app.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={gsl01} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://smart-grocery-shopping-app.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Intelligent Grocery Shopping Cart</h2>
          </a>
          <p>
            Intelligent Grocery Shopping Cart is an app for managing grocery
            lists. It allows users to create and modify lists, add items via
            voice control, and receive recipe suggestions based on cart items.
          </p>
          <div className="flex-chips">
            {intelligentGroceryShoppingCart.map((label, index) => (
              <Chip key={index} className="chip" label={label} />
            ))}
          </div>
        </div>

        <div className="project">
          <a
            href="https://2800-202310-bby-19.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={gsl02} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://2800-202310-bby-19.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Interactive Story Platform</h2>
          </a>
          <p>
            Created an innovative community platform connecting writers and
            readers, leveraging OpenAI's ChatGPT to facilitate collaborative
            storytelling. The project earned recognition as the Most Innovative
            Project.
          </p>
          <div className="flex-chips">
            {interactiveStoryPlatform.map((label, index) => (
              <Chip key={index} className="chip" label={label} />
            ))}
          </div>
        </div>

        <div className="project">
          <a
            href="https://www.youtube.com/watch?v=L-uHfkAf6Vc"
            target="_blank"
            rel="noreferrer"
          >
            <img src={gsl03} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://www.youtube.com/watch?v=L-uHfkAf6Vc"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Virtual Silent Study Rooms</h2>
          </a>
          <p>
            Designed and implemented a backend system for a community platform
            enabling focused, silent study sessions with like-minded students.
            This project earned second place in the 2024 QDS Hackathon.
          </p>
          <div className="flex-chips">
            {studyWithMe.map((label, index) => (
              <Chip key={index} className="chip" label={label} />
            ))}
          </div>
        </div>

        <div className="project">
          <a
            href="https://www.canadapost-prepaid.ca/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={gsl04} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://www.canadapost-prepaid.ca/"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Website Test Automation</h2>
          </a>
          <p>
            Developed and implemented automated testing code using Cucumber and
            Playwright, successfully automating 20+ critical test cases for the
            client's prepaid card website, enabling CI/CD of core
            functionalities.
          </p>
          <div className="flex-chips">
            {testAutomation.map((label, index) => (
              <Chip key={index} className="chip" label={label} />
            ))}
          </div>
        </div>

        <div className="project">
          <a href="http://www.wemanage.jp/" target="_blank" rel="noreferrer">
            <img src={gsl01} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a href="http://www.wemanage.jp/" target="_blank" rel="noreferrer">
            <h2>WeManage: Real Estate Asset Management</h2>
          </a>
          <p>
            This mobile application allows realtors in Japan to securely manage
            their property information and view future income predictions. This
            app is built with Ruby on Rails and JavaScript.
          </p>
        </div>
        <div className="project">
          <a
            href="https://www.byuh.edu/covid-19-case-management"
            target="_blank"
            rel="noreferrer"
          >
            <img src={gsl01} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://www.byuh.edu/covid-19-case-management"
            target="_blank"
            rel="noreferrer"
          >
            <h2>COVID-19 Case Management</h2>
          </a>
          <p>
            Built official charts for COVID/vaccination tracking for an
            educational institution using JavaScript and the Google Sheets API
            v4. The dashboard served the university's leadership in their
            decision-making processes.
          </p>
        </div>
        <div className="project">
          <a
            href="https://github.com/yujisatojr/multi-reg-analysis"
            target="_blank"
            rel="noreferrer"
          >
            <img src={gsl01} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://github.com/yujisatojr/multi-reg-analysis"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Multiple Regression Property Analysis</h2>
          </a>
          <p>
            Analyzed the real estate market in Japan and predicted property
            prices by implementing statistical methods such as OLS and
            multi-regression analysis. This project leveraged Python and various
            libraries such as Pandas, NumPy, Matplotlib, and Scikit-Learn.
          </p>
        </div>
        <div className="project">
          <a
            href="https://holokai.byuh.edu/programs-of-study"
            target="_blank"
            rel="noreferrer"
          >
            <img src={gsl01} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://holokai.byuh.edu/programs-of-study"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Programs of Study</h2>
          </a>
          <p>
            Designed and developed a custom component for a CMS-based platform
            (e.g., 'Brightspot') using Java, Handlebars, and LESS. University
            students can find their majors of interest through this module.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Project;
