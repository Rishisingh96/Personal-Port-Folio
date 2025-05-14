import { useState } from "react";
import bannerImage from "../assets/bi1.png";

const About = () => {
  const [data, setData] = useState({
    image: bannerImage,
    title: "Java Full Stack Developer & Web Developer",
    desc0: `Motivated Java Full Stack Developer with hands-on experience in Spring Boot, RESTful APIs, MySQL, and HTML/CSS, JS , React js. Passionate about building secure, scalable web applications and solving real-world problems using modern backend and frontend technologies. Eager to contribute to a dynamic development team and grow as a skilled software engineer.
    📘 Currently learning Node.js to enhance backend skills for MERN Stack development.`,
    showAllProjects: false,
  });

  const toggleProjectsVisibility = () => {
    setData({ ...data, showAllProjects: !data.showAllProjects });
  };

  return (
    <div id="about" className="bg-gray-100 py-10 px-6 lg:px-24">
      <h1 className="text-center text-4xl lg:text-5xl font-extrabold underline mb-12 text-gray-800">
        About My Projects and Internships
      </h1>

      <div className="flex flex-col-reverse lg:flex-row gap-10">
        {/* Text Section */}
        <div className="lg:w-2/3 space-y-6">
          <h2 className="text-3xl font-bold text-orange-600">{data.title}</h2>
          <p className="text-gray-700">{data.desc0}</p>

          {/* --- Personal Projects Section --- */}
          <div className="bg-white rounded-xl shadow-md p-6 space-y-4">
            <h3 className="text-2xl font-semibold text-blue-600">
              🔹 Personal Projects
            </h3>

            <div>
              <h4 className="text-xl font-bold text-gray-800">
                1. RoomUnity - Room Partner Finder Web App
              </h4>
              <p className="text-gray-700">
                Developed a secure web app to match roommates using smart
                filters (location, food, college, religion, age, etc.) and
                nearby PG/Hostel suggestions. Includes Google Maps, real-time
                notifications, Cloudinary image uploads, and OAuth2 login with
                Google/GitHub.
              </p>
              <p className="text-sm text-gray-500">
                Tech Stack: Spring Boot, Thymeleaf, MySQL, JS, Tailwind CSS
              </p>
            </div>

            <div>
              <h4 className="text-xl font-bold text-gray-800">
                2. Electronic Store App - RESTful API
              </h4>
              <p className="text-gray-700">
                E-commerce backend app with JWT, OAuth2, refresh token auth,
                role-based access, CRUD for products/categories, cart
                operations, and Swagger docs. Frontend built using React +
                Axios.
              </p>
              <p className="text-sm text-gray-500">
                Tech Stack: Spring Boot, MySQL, Hibernate, React
              </p>
            </div>

            {data.showAllProjects && (
              <>
                <div>
                  <h4 className="text-xl font-bold text-gray-800">
                    3. Digital Contact Manager Web App
                  </h4>
                  <p className="text-gray-700">
                    A secure web app for managing contacts with email auth,
                    image upload to Cloudinary, Excel export, dark/light themes,
                    and Google/GitHub login.
                  </p>
                  <p className="text-sm text-gray-500">
                    Tech Stack: Spring Boot, Thymeleaf, MySQL, Tailwind CSS
                  </p>
                </div>
              </>
            )}
          </div>

          {/* --- Internship Section --- */}
          <div className="bg-white rounded-2xl shadow-xl p-6 space-y-8 border border-purple-300 mt-10">
            {/* Ypsilon Internship */}
            <div>
              <h3 className="text-2xl font-bold text-purple-700">
                🧑‍💻 Ypsilon IT Solutions Pvt. Ltd | Java Full Stack Internship
              </h3>
              <p className="text-sm text-gray-600 italic">
                Indore, M.P | Aug 2024 – Jan 2025
              </p>
              <ul className="list-disc list-inside text-gray-800 mt-2 space-y-1">
                <li>
                  Developed backend services using{" "}
                  <span className="font-semibold">
                    Java, Spring Boot, Hibernate
                  </span>{" "}
                  with <span className="font-semibold">MySQL</span>.
                </li>
                <li>
                  Implemented{" "}
                  <span className="font-semibold">JWT Authentication</span> &{" "}
                  <span className="font-semibold">OAuth-based login</span> using
                  Spring Security.
                </li>
                <li>
                  Built RESTful APIs using{" "}
                  <span className="font-semibold">Spring MVC</span> integrated
                  with{" "}
                  <span className="font-semibold">
                    Tailwind CSS, Thymeleaf, JavaScript
                  </span>{" "}
                  for frontend.
                </li>
              </ul>

              <div className="mt-4 ml-4 bg-gray-50 p-4 rounded-lg shadow-inner border">
                <h4 className="text-xl font-semibold text-indigo-600">
                  📌 Digital Contact Manager Web App
                </h4>
                <ul className="list-disc list-inside text-gray-700 mt-2">
                  <li>
                    Full Stack App with Google & GitHub login, email
                    verification, and Cloudinary image storage.
                  </li>
                  <li>
                    Advanced search, pagination, Excel export, dark/light
                    themes, and email attachment features.
                  </li>
                  <li>
                    <span className="font-semibold">Tech Stack:</span> Spring
                    Boot, Spring Security, JPA, MySQL, Thymeleaf, Tailwind CSS,
                    JavaScript.
                  </li>
                </ul>
              </div>
            </div>

            {/* Durgesh Course Projects */}
            <div>
              <h3 className="text-2xl font-bold text-purple-700">
                📚 Master Spring Boot with Real-time Projects – Learn Code With
                Durgesh
              </h3>
              <p className="text-sm text-gray-600 italic">
                Online | Feb 2024 – Nov 2024
              </p>
              <div className="mt-2 ml-4 bg-gray-50 p-4 rounded-lg shadow-inner border">
                <h4 className="text-xl font-semibold text-indigo-600">
                  📌 Electronic Store App | RESTful API
                </h4>
                <ul className="list-disc list-inside text-gray-700 mt-2">
                  <li>
                    6 Modules: User, Product, Category, Role, Order, Cart –
                    secured with JWT, OAuth (Google), and RBAC.
                  </li>
                  <li>
                    Product filtering, cart operations, Swagger documentation
                    with Spring Boot + Hibernate.
                  </li>
                  <li>
                    <span className="font-semibold">Tech Stack:</span> Spring
                    Boot, Spring MVC, Hibernate/JPA, MySQL, Swagger, React,
                    Axios.
                  </li>
                </ul>
              </div>
            </div>

            {/* Oasis Infobyte Internship */}
            <div>
              <h3 className="text-2xl font-bold text-purple-700">
                🔹 Oasis Infobyte Internship
              </h3>

              <div className="mt-2">
                <h4 className="text-xl font-semibold text-gray-800">
                  ☕ Java Development (Nov 2023 – Dec 2023)
                </h4>
                <ul className="list-disc list-inside text-gray-700 ml-4 mt-1">
                  <li>Online Reservation System</li>
                  <li>Online Examination</li>
                  <li>ATM Interface</li>
                  <li>Number Guessing Game</li>
                </ul>
              </div>

              {data.showAllProjects && (
                <div className="mt-4">
                  <h4 className="text-xl font-semibold text-gray-800">
                    🌐 Web Development (Feb 2024 – Mar 2024)
                  </h4>
                  <ul className="list-disc list-inside text-gray-700 ml-4 mt-1">
                    <li>Landing Page, Portfolio Website</li>
                    <li>Calculator, TO-DO List</li>
                    <li>Login Authentication System</li>
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Button */}
          <div className="pt-4">
            {!data.showAllProjects && (
              <button
                onClick={toggleProjectsVisibility}
                className="bg-orange-500 text-white px-6 py-2 text-lg rounded-full hover:bg-orange-600 transition shadow-md"
              >
                Read More..
              </button>
            )}
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/3 flex justify-center">
          <img
            // className="rounded-full my-4 lg:my-1 shadow-lg h-auto w-auto"
            className="rounded-full w-100 h-160 object-cover shadow-2xl border-4 border-orange-300"
            src={data.image}
            alt="Rishi Singh"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
