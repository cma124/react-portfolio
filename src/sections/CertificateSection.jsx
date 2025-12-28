import { FaCertificate, FaFreeCodeCamp, FaMicrosoft } from "react-icons/fa6";

const CertificateSection = () => {
  const certificates = [
    {
      certificate:
        "Microsoft Applied Skills: Create and manage automated processes by using Power Automate",
      link: "https://learn.microsoft.com/api/credentials/share/en-us/ChanMyaeAung-7935/BC3DD263BCF8E7AF?sharingId",
      issuedFrom: "Microsoft",
      issuedDate: "Nov 2025",
    },

    {
      certificate:
        "Microsoft Applied Skills: Create and manage canvas apps with Power Apps",
      link: "https://learn.microsoft.com/api/credentials/share/en-us/ChanMyaeAung-7935/C27DE4CFDF8125AA?sharingId",
      issuedFrom: "Microsoft",
      issuedDate: "Nov 2025",
    },

    {
      certificate: "Getting Started with Azure DevOps Boards",
      link: "https://www.coursera.org/account/accomplishments/records/KFQTEDPWH0Y7",
      issuedFrom: "Coursera",
      issuedDate: "Jun 2025",
    },

    {
      certificate: "Create Power App for Adding Records to SharePoint List",
      link: "https://www.coursera.org/account/accomplishments/records/FSQ9P246M91M",
      issuedFrom: "Coursera",
      issuedDate: "May 2025",
    },

    {
      certificate: "Foundational C# with Microsoft",
      link: "https://freecodecamp.org/certification/chanmyaeaung/foundational-c-sharp-with-microsoft",
      issuedFrom: "freeCodeCamp",
      issuedDate: "Oct 2024",
    },

    {
      certificate: "Legacy JavaScript Algorithms and Data Structures",
      link: "https://freecodecamp.org/certification/chanmyaeaung/javascript-algorithms-and-data-structures",
      issuedFrom: "freeCodeCamp",
      issuedDate: "Aug 2024",
    },

    {
      certificate: "Create Model-driven Power App for Rental Company",
      link: "https://coursera.org/verify/GXVFJZYNL3FL",
      issuedFrom: "Coursera",
      issuedDate: "Jul 2024",
    },

    {
      certificate:
        "Fundamental Information Technology Engineer Examination (FE)",
      link: "https://cma124.github.io/resume/img/certificates/fe-exam-certificate.jpg",
      issuedFrom: "Myanmar Computer Federation (MCF)",
      issuedDate: "Feb 2020",
    },
  ];

  return (
    <section id="certificate" className="layout bg-secondary">
      <h2 data-aos="fade-up" className="text-center">
        Certificates
      </h2>

      <div className="certificate-layout">
        {certificates.length &&
          certificates.map((certificate, index) => (
            <div key={index} data-aos="fade" data-aos-delay={300 * (index + 1)}>
              <div className="certificate-card">
                <div className="pt-1 text-2xl text-primary">
                  {certificate.issuedFrom === "Microsoft" && <FaMicrosoft />}
                  {certificate.issuedFrom === "freeCodeCamp" && (
                    <FaFreeCodeCamp />
                  )}
                  {certificate.issuedFrom !== "Microsoft" &&
                    certificate.issuedFrom !== "freeCodeCamp" && (
                      <FaCertificate />
                    )}
                </div>

                <div className="grow flex flex-col justify-between gap-3">
                  <h3>{certificate.certificate}</h3>

                  <div className="flex justify-between items-center">
                    <div>
                      <h4>{certificate.issuedFrom}</h4>
                      <h4 className="mt-2 text-gray-400">
                        {certificate.issuedDate}
                      </h4>
                    </div>

                    <a
                      href={certificate.link}
                      target="_blank"
                      className="certificate-btn"
                    >
                      View
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default CertificateSection;
