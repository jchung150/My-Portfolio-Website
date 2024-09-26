import gsl01 from "../assets/images/gsl01.png";
import gsl02 from "../assets/images/gsl02.png";
import mock03 from "../assets/images/mock03.png";
import mock04 from "../assets/images/mock04.png";
import mock05 from "../assets/images/mock05.png";
import mock06 from "../assets/images/mock06.png";
import mock07 from "../assets/images/mock07.png";
import mock08 from "../assets/images/mock08.png";
import "../assets/styles/Project.scss";

function Project() {
  return (
    <div className="projects-container" id="projects">
      <h1>Personal Projects</h1>
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
            As a member of a team of four, developed a community platform that
            connects writers and readers, enabling them to create unique stories
            with the help of the OpenAI Chat GPT.
          </p>
        </div>

        <div className="project">
          <a
            href="https://yujisatojr.itch.io/spacecraft"
            target="_blank"
            rel="noreferrer"
          >
            <img src={gsl01} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://yujisatojr.itch.io/spacecraft"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Astro Raiders</h2>
          </a>
          <p>
            Developed and released a 2D shooting game with C# and Unity. This
            project is hosted on the Itch.io public marketplace.
          </p>
        </div>

        <div className="project">
          <a
            href="https://www.datumlearn.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={gsl01} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://www.datumlearn.com/"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Datum: Integrated Learning Platform</h2>
          </a>
          <p>
            This is an online educational platform that provides high-quality,
            data science-focused learning resources in the Japanese language. I
            created the entire platform from scratch using Ruby on Rails.
          </p>
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
