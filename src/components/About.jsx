import { useState } from "react";
import bannerImage from "../assets/bi1.png";

const About = () => {
  const [data, setData] = useState({
    image: bannerImage,
    title: "Java Developer & Web Developer",
    desc0: `I am proficient in C, OOPs, Java, Advance Java, Hibernate, Basic JDBC, SQL and also familiar with HTML/CSS/JavaScript. and Starting to learn "Spring Boot" and "React". I can learn any skill very quickly. Effective time management skills to meet deadlines. I would like to start my career as an entry level software engineer with a reputed firm driven by technology.`,
    desc1: `[PERSONAL PROJECTS]`,
    desc2: `1 - Note-Taker (Web Application) (Dec '23 – Feb '24)
    Developed a dynamic web application for creating, editing, and deleting notes. Implemented user account creation, login, to-do list, and authentication.
    Technologies Used: HTML, CSS, Bootstrap (frontend); Java (Servlet), JSP, JDBC, Hibernate (backend); MySQL (database)`,
    desc3: `2 - Chat Application (Desktop App) (12/2022 - 01/2023)-
    After completing Java I created a GUI desktop app project using Swing. I am using core Java concepts like threading, exception handling and networking concepts. Using this project we can easily chat between client to server and server to client.`,
    desc4: `3 - Gym Web (Website) (2021)-
    By using this website, you can give all the information about yourself online in Delhi Gym Club, register, login and create a profile. https://github.com/Rishisingh96/GymWebJava we have used frontend and backend technology and connected it to the server - HTML, CSS, Java(servlet), JSP, JDBC`,
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
      <div className="main-container bg-gray-100 border py-8 lg:py-16 px-4 lg:px-0">
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
