import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { faSchool } from "@fortawesome/free-solid-svg-icons";
import { faPersonMilitaryPointing } from "@fortawesome/free-solid-svg-icons";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../assets/styles/Timeline.scss";

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career and Education</h1>
        <VerticalTimeline>
          {/* My Hope */}
          {/* <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2020 - 2022"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Full Stack Engineer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Laie, HI</h4>
            <p>
              {" "}
              Full-stack Web Development, GenAI/LLM, Project Management,
              Business Development{" "}
            </p>
          </VerticalTimelineElement> */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2023 - PRESENT"
            iconStyle={{ background: "#C70039", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faSchool} />}
          >
            <h3 className="vertical-timeline-element-title">
              Computer Science Technology (Diploma)
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Burnaby, Canada
            </h4>
            <p>Algorithms and data structures, Operating Systems, Networking</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2014 - 2022"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Operations Manager
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Seoul, Korea</h4>
            <p>
              Process Optimization, Resource Management, Quality Control,
              Strategic Planning
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2010 - 2013"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Business Strategy Consultant
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Seoul, South Korea
            </h4>
            <p>
              Project Management, Automation, Data Governance, Statistical
              Analysis
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2005 - 2007"
            iconStyle={{ background: "#297d27", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faPersonMilitaryPointing} />}
          >
            <h3 className="vertical-timeline-element-title">Armed Force</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Daejeon, South Korea
            </h4>
            {/* <p>
              Project Management, Automation, Data Governance, Statistical
              Analysis
            </p> */}
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2004 - 2010"
            iconStyle={{ background: "#C70039", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faSchool} />}
          >
            <h3 className="vertical-timeline-element-title">
              Economics (Degree)
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              University of Washington, Seattle, USA
            </h4>
            {/* <p>
              Project Management, Automation, Data Governance, Statistical
              Analysis
            </p> */}
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
