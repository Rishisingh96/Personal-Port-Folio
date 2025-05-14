import { useState } from "react";
import bannerImage from "../assets/bi1.png";

const About = () => {
  const [data, setData] = useState({
    image: bannerImage,
    title: "Java full stack Developer & Web Developer",
    desc0: `Motivated Java Full Stack Developer with hands-on experience in Spring Boot, RESTful APIs, MySQL, and HTML/CSS, JS. Passionate about building secure, scalable web applications and solving real-world problems using modern backend and frontend technologies. Eager to contribute to a dynamic development team and grow as a skilled software engineer.`,
    desc1: `[PERSONAL PROJECTS]`,
    desc2: `1 - RoomUnity - Room Partner Finder Web App (Web Application) (Apr 2025 – Present)
    •	Developed RoomUnity, a secure web app for matching roommates using smart filters (location, food, occupation, college, religion, age etc.) and after finding suitable roommate then also show nearest PGs/Rooms /Hostels. This project addresses a real -world problem by helping users find ideal roommates based on their preferences.
    •	Implemented OAuth2 login (Google/GitHub), email verification, and privacy-focused communication features (WhatsApp, call, email after match). 
    •	Integrated real-time notifications, Cloudinary image uploads, Google Maps to enhancing user engagement and trust.
    •	Tech Stack: Spring Boot, Spring Security, MySQL, Thymeleaf, Tailwind CSS, JavaScript – built with scalability, responsiveness, and user-first design.
      `,
    desc3: `2 - Electronic Store App |Backend RESTful API| (May 2024 - Nov 2024)-
   •	Developed a e-commerce web Restful API with 6 key modules like User, Product, Category, Role, Order, Cart) using Spring Boot (backend) and React with Axios (frontend) for seamless integration.
   •	Implemented JWT, OAuth (Google Login), refresh tokens, and RBAC to secure user authentication and admin functionalities like product and category management.
   •	Features include product CRUD, filtering, sorting, cart operations, and Swagger for API documentation. Used Spring Boot, Hibernate/JPA and MySQL for data management and Basic React.

`,
    desc4: `3 - Digital Contact Manager Web App | Full Stack App |-
    •	Developed a secure DCM Web Application with user authentication (email verification, Google & GitHub login) and cloud-based image storage using Cloudinary.
    •	Integrated features like advanced search, pagination, Excel export, dark/light themes, and direct email with attachments.
    •	Built using Spring Boot, Spring Security, Spring Data JPA, MySQL, Thymeleaf, JavaScript, and Tailwind CSS for a responsive user experience.
`,
    desc5: `4 - Oasis Infobyte Internship - Java and Web Development (Nov '23 – March '24)`,
    desc6: `Achievements/Tasks (Java Development GitHub) - (Nov '23 – Dec '23)
    Projects: Online Reservation System, Online Examination, Number guessing game, ATM Interface
    Achievements/Tasks (Web Development GitHub) - (Feb '24 – March '24)
    Projects: LEVEL 1: Landing Page, Portfolio Website
    LEVEL 2: Calculator, TO-DO List, Login Authentication`,
    desc7: `Projects: Online Reservation System, Online Examination, Number guessing game, ATM Interface`,
    desc8: `Projects: LEVEL 1: Landing Page, Portfolio Website
    LEVEL 2: Calculator, TO-DO List, Login Authentication`,
    actionButton: {
      title: "Read More..",
      link: "/readmore",
    },
    showAllProjects: false, // state to manage visibility of all projects
  });

  // Function to toggle visibility of all projects
  const toggleProjectsVisibility = () => {
    setData({ ...data, showAllProjects: !data.showAllProjects });
  };

  return (
    <>
      <div id="about" className="main-container bg-gray-100 border py-8 lg:py-16 px-4 lg:px-0">
        <h1 className="text-center pb-8 lg:pb-16 text-3xl lg:text-5xl underline font-bold">
          About My Projects and Internships
        </h1>

        <div className="flex flex-col items-center lg:flex-row">
          {/* text container  */}
          <div className="w-full lg:w-2/3 flex justify-center lg:justify-start">
            <div className="space-y-5 w-full max-w-lg lg:max-w-full">
              <h1 className="text-3xl lg:text-5xl font-semibold">
                {data.title}
              </h1>
              <p>{data.desc0}</p>
              <p>{data.desc1}</p>
              <p>{data.desc2}</p>
              <p>{data.desc3}</p>
              {!data.showAllProjects && (
                <>
                  <p>{data.desc4}</p>
                  <p>{data.desc5}</p>
                  <button
                    className="bg-orange-500 px-3 py-2 text-lg lg:text-2xl rounded-full shadow-lg"
                    onClick={toggleProjectsVisibility}
                  >
                    {data.actionButton.title}
                  </button>
                </>
              )}
              {data.showAllProjects && (
                <>
                  <p>{data.desc4}</p>
                  <p>{data.desc5}</p>
                  <p>{data.desc6}</p>
                  <p>{data.desc7}</p>
                  <p>{data.desc8}</p>
                </>
              )}
            </div>
          </div>

          {/* image container */}
          <div className="w-full lg:w-1/3 flex justify-center">
            <img
              className="rounded-full my-4 lg:my-2 shadow-lg h-auto w-auto"
              src={data.image}
              alt="Rishi singh"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
