import { useState } from "react";
import bannerBackground from "../assets/banner_wallpaper.svg";

const Expertise = () => {
  const [skills] = useState([
    "Core Java",
    "C / C++",
    "J2EE (Servlet & JSP)",
    "Spring Framework (Core, MVC, AOP)",
    "Spring Boot",
    "Spring Security",
    "Hibernate (ORM Tool)",
    "JPA",
    "MySQL",
    "JDBC / SQL",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "JavaScript (ES6+)",
    "ReactJS",
    "Data Structures & Algorithms (DSA)",
    "Git & GitHub",
    "RESTful APIs",
    "Postman",
    "Docker",
    "Cloud Deployment(AWS EC2)",
    "Jenkins CI CD Pipeline",
    "Microservices",
    "JUnit and Mockito",
    "Node js"
  ]);

  return (
    <div id="skills" className="mt-2">
      <h1 className="mb-16 text-5xl font-bold underline text-center">
        My Expertise
      </h1>

      <div
        style={{
          backgroundImage: `url(${bannerBackground})`,
          backgroundSize: "cover",
        }}
        className="box-container items-center flex flex-col md:flex-row py-16"
      >
        {/* Text section */}
        <div className="flex text-white justify-center w-full md:w-1/2 px-4">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold">I love these technologies</h1>
            <p className="text-lg">
              I specialize in Java-based development using frameworks like{" "}
              <strong>Spring Boot</strong> and <strong>Hibernate</strong>, along with a
              solid grasp of <strong>J2EE</strong> components. On the front end, I build
              responsive and modern UIs with <strong>HTML5</strong>, <strong>Tailwind CSS</strong>,{" "}
              <strong>JavaScript (ES6+)</strong>, and <strong>React.js</strong>. I also
              work with <strong>MySQL</strong> databases and RESTful APIs, and have
              experience deploying apps to the cloud and using tools like{" "}
              <strong>Git, Postman,</strong> and <strong>Docker</strong>.
            </p>
            <button className="text-2xl px-4 py-2 bg-orange-500 rounded-full shadow-lg hover:bg-orange-600 transition">
              Hire Me
            </button>
          </div>
        </div>

        {/* Skills list */}
        <div className="flex justify-center w-full md:w-1/2 mt-8 md:mt-0 px-4">
          <div className="flex justify-center w-full flex-wrap gap-3">
            {skills.map((skill, index) => (
              <p
                key={index}
                className="bg-gray-300 w-fit px-4 py-2 rounded-full hover:bg-orange-500 hover:text-white cursor-pointer transition"
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
