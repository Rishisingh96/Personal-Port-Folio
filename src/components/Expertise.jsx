import { useState } from "react";
import bannerBackground from "../assets/banner_wallpaper.svg";

const Expertise = () => {
  const [skills] = useState([
    "Core Java",
    "J2EE (Servlet and JSP)",
    "Spring Framework",
    "Familiarity with Spring Boot Framework",
    "Familiarity with Hibernate(ORM Tool)",
    "SQL/JDBC",
    "Swing",
    "Javascript",
    "ReactJS",
    "Tailwind CSS",
    "HTML:5",
    "CSS",
    "DSA",
    "Deploying on Cloud",
  ]);

  return (
    <div className="mt-2">
      <h1 className="mb-16 text-5xl font-bold underline text-center">
        My Expertise
      </h1>
      {/* box section */}

      <div
        style={{
          backgroundImage: `url(${bannerBackground})`,
          backgroundSize: "cover",
        }}
        className="box-container items-center flex py-16"
      >
        <div className="flex text-white justify-center">
          {/* text container */}
          <div className="w-2/3 text-center space-y-4">
            <h1 className="text-4xl font-bold">I love these technologies</h1>
            <p>
              Proficiency in Java programming language and related frameworks
              such as Spring Boot, Hibernate, and JPA. Strong understanding of
              front-end technologies including HTML, CSS, JavaScript, and modern
              JavaScript frameworks like React.js. frameworks like Spring MVC or
              JAX-RS. Knowledge of relational database concepts, SQL, and
              experience working with database systems such as MySQL, JDBC .
            </p>
            <button className="text-2xl px-4 py-2 bg-orange-500 rounded-full shadow-lg">
              Hire Me
            </button>
          </div>
        </div>
        <div className="flex justify-center">
          {/* skills container */}

          <div className="flex justify-center w-2/3 h-fit space-x-3 flex-wrap">
            {skills.map((skill, index) => (
              <p
                key={index}
                className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer"
              >
                {skill}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expertise;
