import ExperienceCard from "../components/ExperienceCard";

const ExperienceSection = () => {
  const experience = [
    {
      position: "Power Apps Developer",
      company: "BIM Group of Companies",
      period: "Feb 2026 - Present",
      description: [
        "Designed, developed, and maintained multiple end-to-end Power Platform solutions independently, covering requirement analysis, implementation, testing, and deployment.",
        "Architected and implemented data storage solutions using SharePoint and Dataverse, ensuring scalable, secure, and maintainable application designs.",
        "Built and automated business applications using Power Apps and Power Automate, reducing manual processes and improving operational efficiency.",
        "Developed multi-step approval workflows and applications, incorporating role-based access and validation with a strong focus on security and maintainability.",
        "Collaborated directly with customers and stakeholders to gather requirements, proposed technical solutions, and delivered enhancements aligned with business needs.",
        "Provided ongoing application support, issue resolution, and enhancements for live projects, ensuring system stability and user satisfaction.",
      ],
    },
    {
      position: "Junior Power Apps Developer",
      company: "BIM Group of Companies",
      period: "Jun 2025 - Jan 2026",
      description: [
        "Designed and developed business applications using Power Apps, Power Automate, and Microsoft SharePoint, delivering scalable and user-friendly solutions.",
        "Partnered with stakeholders to gather requirements and translate business needs into optimized apps, automated workflows, and integrated APIs.",
        "Developed and maintained data sources with SharePoint and Dataverse to improve system performance, storage, and reliability.",
        "Integrated third-party APIs and data services to extend app functionality using Power Automate flows and Connectors (standard and custom).",
        "Developed a custom PDF view using HTML and CSS, and implemented SharePoint and API integration flows in Power Automate to use data in JSON type coming from XML data source.",
        "Provided ongoing support, troubleshooting, and system optimization to ensure high availability and performance.",
      ],
    },
    {
      position: "Junior CRM Developer",
      company: "BIM Group of Companies",
      period: "Aug 2024 - Jan 2025",
      description: [
        "Developed and optimized Power Automate flows to streamline business operations and reduce manual workload.",
        "Troubleshot and enhanced Model-Driven Apps and CRM features by resolving issues and optimizing features.",
        "Designed, built, and maintained standard and custom CRM features using Power Apps, Power Automate, Dynamics 365, and Microsoft Dataverse.",
        "Integrated third-party APIs and Microsoft services (Teams) into CRM solutions to extend system capabilities.",
        "Optimized process flows for an Insurance CRM project handling 500+ daily transactions by improving system performance.",
        "Developed custom UI components and extended CRM functionalities using JavaScript and Tailwind CSS, resulting improved usability and user experience.",
      ],
    },
    {
      position: "Power Platform Intern (Power Apps)",
      company: "BIM Group of Companies",
      period: "May 2024 - July 2024",
      description: [
        "Developed an internal Expense Claim App using Power Apps, Power Automate, and Microsoft SharePoint.",
        "Built automated workflows with Power Automate to streamline delivery and approval processes.",
        "Collaborated with cross-functional teams including Power BI developers, Business Analysts, and Project Managers.",
        "Designed user-friendly interfaces to improve user experience and app usability.",
        "Supported data storage and integration through SharePoint Lists.",
        "Participated in testing and troubleshooting to ensure app functionality and performance.",
        "Contributed to the UI development of an external insurance CRM project using JavaScript and Tailwind CSS.",
      ],
    },
  ];

  return (
    <section id="experience" className="layout bg-lightblack">
      <h2 data-aos="fade-up" className="text-center md:text-start">
        Experience
      </h2>

      <div className="experience-layout">
        {experience.length &&
          experience.map((exp, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index === 0 && 500}
            >
              <ExperienceCard
                position={exp.position}
                company={exp.company}
                period={exp.period}
                description={exp.description}
              />
            </div>
          ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
