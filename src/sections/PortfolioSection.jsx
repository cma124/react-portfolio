import ProjectCard from "../components/ProjectCard";
import YSH from "../assets/projects/YSH.svg";
import HeinekenMyanmar from "../assets/projects/HeinekenMyanmar.jpg";
import GRG from "../assets/projects/GRG.png";
import AYABank from "../assets/projects/AYABank.png";
import AYASOMPO from "../assets/projects/AYASOMPO.png";
import ProximityDesigns from "../assets/projects/ProximityDesigns.png";
import RoomsManagement from "../assets/projects/RoomsManagement.png";
import ChangeRequest from "../assets/projects/ChangeRequest.png";
import Wordle from "../assets/projects/Wordle.png";

const PortfolioSection = () => {
  const projects = [
    {
      project_img: YSH,
      project_title: "YSH Proforma Invoice App",
      project_text:
        "A proforma invoice approval application built for Sales and Finance teams to streamline invoice submission, review, and approval workflows.",
      roles: [
        "Designed the data storage schema",
        "Developed user-friendly interfaces",
        "Created customized PDF templates using HTML and CSS",
        "Built in-app approval workflow",
        "Implemented email notifications",
        "Enabled PDF and Excel file generation",
      ],
      skills: [
        "Power Apps",
        "Power Automate",
        "SharePoint",
        "Microsoft 365",
        "HTML",
        "CSS",
      ],
      companyLink: "https://yomastrategic.com/",
    },

    {
      project_img: HeinekenMyanmar,
      project_title: "Heineken Assessment App",
      project_text:
        "An assessment application for multiple departments, featuring both user and admin views to take and manage assessments efficiently.",
      roles: [
        "Designed the data storage schema",
        "Developed user and admin interfaces",
        "Implemented file content viewing from SharePoint libraries",
        "Built Power Automate flows to retrieve PDF content",
        "Implemented email notifications",
        "Enabled Excel file generation",
      ],
      skills: ["Power Apps", "Power Automate", "SharePoint", "Microsoft 365"],
      companyLink: "https://heinekenmyanmar.com/",
    },

    {
      project_img: GRG,
      project_title: "GRG IT Asset Management App",
      project_text:
        "An IT asset management application developed for GRG to manage and track organizational IT assets.",
      roles: [
        "Contributed to the Asset Replacement feature",
        "Designed the data storage schema for asset replacement",
        "Developed user-friendly interfaces",
        "Built automated approval workflows",
        "Implemented email notifications",
        "Enabled Excel file generation",
      ],
      skills: ["Power Apps", "Power Automate", "SharePoint", "Microsoft 365"],
      companyLink: "https://www.grandroyal-group.com/",
    },

    {
      project_img: AYABank,
      project_title: "AYA Bank Projects",
      project_text:
        "Contributed to internal applications, including a Project Management App and a Credit Advice App, supporting business operations and process automation.",
      roles: [
        "Provided application support and handled change requests for the Project Management App",
        "Developed customized PDF view using HTML and CSS for the Credit Advice App",
        "Implemented SharePoint and third-party API integration flow",
        "Built and managed permission flows for SharePoint",
        "Provided application support for the Credit Advice App",
      ],
      skills: [
        "Power Apps",
        "Power Automate",
        "SharePoint",
        "API Integration",
        "Microsoft 365",
        "HTML",
        "CSS",
      ],
      companyLink: "https://www.ayabank.com/",
    },

    {
      project_img: AYASOMPO,
      project_title: "AYA SOMPO Insurance CRM System",
      project_text:
        "A large-scale insurance CRM system supporting 500+ daily transactions and operational processes.",
      roles: [
        "Provided application support to ensure system stability and continuity",
        "Handled change requests and enhancements based on business requirements",
        "Designed, built, and maintained standard and custom CRM features",
        "Integrated third-party APIs and Microsoft services (Teams) into CRM solutions",
        "Developed custom UI components and extended CRM functionalities using JavaScript and Tailwind CSS",
      ],
      skills: [
        "Power Apps",
        "Power Automate",
        "Dataverse",
        "API Integration",
        "Microsoft 365",
        "Dynamics CRM",
        "HTML",
        "CSS",
        "JavaScript",
        "Tailwind CSS",
      ],
      companyLink: "https://ayasompo.com/",
    },

    {
      project_img: ProximityDesigns,
      project_title: "Proximity Designs Approval App",
      project_text:
        "An approval application built for Proximity Designs, handling 500+ daily transactions to support high-volume operational workflows.",
      roles: [
        "Provided ongoing application support",
        "Handled change requests and feature enhancements based on customer requests",
        "Resolved application and user-related issues",
        "Improved existing features to enhance usability and performance",
      ],
      skills: ["Power Apps", "Power Automate", "SharePoint", "Microsoft 365"],
      companyLink: "https://proximitydesigns.org/",
    },

    {
      project_img: RoomsManagement,
      project_title: "Rooms Management System",
      project_text:
        "A room management system featuring room and booking CRUD operations, a calendar-based booking schedule view, and user authentication.",
      roles: [
        "Personal project",
        "Built with React and Tailwind CSS for frontend",
        "Backend powered by Appwrite services",
      ],
      skills: ["React", "Tailwind CSS", "Appwrite"],
      liveLink: "https://smmd-rooms-management.netlify.app/",
      githubLink: "https://github.com/cma124/room_management",
    },

    {
      project_img: ChangeRequest,
      project_title: "Change Request System",
      project_text:
        "A change request management system featuring change request and user CRUD operations, authentication, approval workflows, and an admin dashboard.",
      roles: [
        "Personal project",
        "Frontend built with Laravel Blade and Tailwind CSS",
        "Backend developed using Laravel",
        "MySQL as Database",
      ],
      skills: ["Tailwind CSS", "Laravel", "MySQL"],
      githubLink: "https://github.com/cma124/change-request-system",
    },

    {
      project_img: Wordle,
      project_title: "Wordle App",
      project_text:
        "A Wordle-inspired clone app that replicates the core gameplay mechanics and user experience of the original game.",
      roles: [
        "Personal project",
        "Frontend built with React and Tailwind CSS",
        "Backend developed using Python",
      ],
      skills: ["React", "Tailwind CSS", "Python"],
      githubLink: "https://github.com/cma124/wordle",
    },
  ];

  return (
    <section id="portfolio" className="layout bg-darkblack">
      <h2 data-aos="fade-up" className="text-center">
        Portfolio
      </h2>

      <div className="portfolio-layout">
        {projects.map((project, index) => (
          <div key={index} data-aos="fade" data-aos-delay="500">
            <ProjectCard
              project_img={project.project_img}
              project_title={project.project_title}
              project_text={project.project_text}
              roles={project.roles}
              skills={project.skills}
              companyLink={project.companyLink}
              liveLink={project.liveLink}
              githubLink={project.githubLink}
            />
          </div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <a
          href="https://github.com/cma124"
          target="_blank"
          className="more-projects-btn"
        >
          More Projects
        </a>
      </div>
    </section>
  );
};

export default PortfolioSection;
