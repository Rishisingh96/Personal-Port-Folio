import { useState } from "react";
import bannerImage from "../assets/bi1.png";
const About = () => {
  const [data, setData] = useState({
    image: bannerImage,
    title: "Java Developer & WebDeveloper",
    desc0: `I am proficient in Java, Servlet, JSP, JavaScript, C, C++, CSS, HTML & SQL, JDBC. Starting to learn "Spring
    Framework". I can learn any skill very quickly. Effective
    time management skills to meet deadlines. I would
    like to start my career as an entry level software
    engineer with a reputed firm driven by technology.
    `,
    desc1: `[PERSONAL PROJECTS]`,
    desc2: `1 - Gym Web (Website) (2021)-
    By using this website, you can give all the information about yourself online
    in Delhi Gym Club, register, login and create a profile. https:https://github.com/Rishisingh96/GymWebJava we have used frontend and backend technology and connected it to the
    server - HTML, CSS, Java(servlet), JSP, JDBC
    `,

    desc3: ` 2 - Chat Application (Desktop App) (12/2022 - 01/2023)-
    After completing Java I created a GUI desktop app project using Swing. I am using core Java concepts like threading, exception handling and
networking concepts. Using this project we can easily chat between
client to server and server to client.`,

    desc4: `3 - [Oasis infobyt (JAVA) Internship] `,
    desc5: `1- Online_Reservation System , 2- Online_Examination, 3-
    Number_guessing_game, 4- ATM_Interface`,

    desc6: `4 - [Oasis infobyt Web Development Internship] `,
    desc7: `LEVEL 1 : Landing Page, Portfolio Website  LEVEL 2 : Calculator, TO-DO List , Login Authentication`,
    actionButton: {
      title: "Read More..",
      link: "/readmore",
    },
  });
  return (
    <>
      <div className="main-container bg-gray-100 border py-16">
        <h1 className="text-center pb-16  text-5xl underline font-bold">
          About Me
        </h1>

        <div className="flex items-center">
          {/* image container */}
          <div className="w-full flex justify-center">
            <img
              className=" rounded-full my-2 shadow-lg  h-auto w-auto;"
              src={data.image}
              alt="Rishi singh"
            />
          </div>

          {/* text container  */}
          <div className="w-full  flex justify-center">
            <div className="space-y-5   w-2/3">
              <h1 className="text-5xl  font-semibold ">{data.title}</h1>
              <p>{data.desc0}</p>
              <p>{data.desc1}</p>
              <p>{data.desc2}</p>
              <p>{data.desc3}</p>
              <p>{data.desc4}</p>
              <p>{data.desc5}</p>
              <p>{data.desc6}</p>
              <p>{data.desc7}</p>
              <button className="bg-orange-500 px-3 py-2 text-2xl rounded-full shadow-lg">
                {data.actionButton.title}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
