import SkillCard from "../components/SkillCard";
import PowerPlatform from "../assets/logos/PowerPlatform.svg";
import PowerApps from "../assets/logos/PowerApps.svg";
import PowerAutomate from "../assets/logos/PowerAutomate.svg";
import SharePoint from "../assets/logos/SharePoint.svg";
import Dataverse from "../assets/logos/Dataverse.svg";
import DynamicsCRM from "../assets/logos/DynamicsCRM.svg";
import Azure from "../assets/logos/Azure.svg";
import M365 from "../assets/logos/M365.svg";
import HTML from "../assets/logos/HTML.svg";
import CSS from "../assets/logos/CSS.svg";
import Tailwind from "../assets/logos/Tailwind.svg";
import JavaScript from "../assets/logos/JavaScript.svg";
import TypeScript from "../assets/logos/TypeScript.svg";
import React from "../assets/logos/React.svg";
import Nodejs from "../assets/logos/Nodejs.svg";
import PHP from "../assets/logos/PHP.svg";
import Laravel from "../assets/logos/Laravel.svg";
import MySQL from "../assets/logos/MySQL.svg";
import NoSQL from "../assets/logos/NoSQL.svg";
import Git from "../assets/logos/Git.svg";
import GitHub from "../assets/logos/GitHub.svg";
import Postman from "../assets/logos/Postman.svg";

const AboutSection = () => {
  const skills = [
    { logo: PowerPlatform, skill: "Power Platform" },
    { logo: PowerApps, skill: "Power Apps" },
    { logo: PowerAutomate, skill: "Power Automate" },
    { logo: SharePoint, skill: "SharePoint" },
    { logo: Dataverse, skill: "Dataverse" },
    { logo: DynamicsCRM, skill: "Dynamics CRM" },
    { logo: Azure, skill: "Azure" },
    { logo: M365, skill: "Microsoft 365" },
    { logo: HTML, skill: "HTML" },
    { logo: CSS, skill: "CSS" },
    { logo: Tailwind, skill: "Tailwind CSS" },
    { logo: JavaScript, skill: "JavaScript" },
    { logo: TypeScript, skill: "TypeScript" },
    { logo: React, skill: "React" },
    { logo: Nodejs, skill: "Node.js" },
    { logo: PHP, skill: "PHP" },
    { logo: Laravel, skill: "Laravel" },
    { logo: MySQL, skill: "MySQL" },
    { logo: NoSQL, skill: "NoSQL" },
    { logo: Git, skill: "Git" },
    { logo: GitHub, skill: "GitHub" },
    { logo: Postman, skill: "Postman" },
  ];

  return (
    <section id="about" className="layout bg-darkblack">
      <div className="mb-10">
        <h2 data-aos="fade-up" className="text-center md:text-start md:mb-3">
          About
        </h2>

        <div data-aos="fade-up" data-aos-delay="500" className="about-layout">
          <div className="pt-3">
            <hr className="w-20 h-0.5 bg-primary shrink-0 mx-auto" />
          </div>

          <p className="text-center md:text-start lg:text-lg">
            I am Chan Myae Aung, a{" "}
            <span className="text-primary">Software Developer</span> with over
            one year of experience in business application development using{" "}
            <span className="text-primary">Microsoft Power Platform</span>,
            along with hands-on full-stack web development experience using{" "}
            <span className="text-primary">React, Node.js, and Laravel</span>. I
            hold a Bachelor of Computer Science from the{" "}
            <a
              href="https://www.uit.edu.mm/"
              target="_blank"
              className="text-primary underline hover:text-gray-400"
            >
              University of Information Technology
            </a>{" "}
            and have worked on Insurance, Banking, and system integration
            projects. I specialize in building scalable applications, automating
            business processes, and delivering secure, user-centric solutions. I
            work closely with stakeholders to translate business requirements
            into efficient and reliable technical implementations.
          </p>
        </div>
      </div>

      <div>
        <h2
          data-aos="fade-up"
          data-aos-delay="1500"
          className="text-center mb-6"
        >
          My Skills
        </h2>

        <div data-aos="fade-up" data-aos-delay="2000" className="skill-layout">
          {skills.length &&
            skills.map((skill, index) => (
              <SkillCard key={index} logo={skill.logo} skill={skill.skill} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
