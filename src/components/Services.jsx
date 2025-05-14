import { useState } from "react";
import { FaLaptopCode, FaServer, FaCloud } from "react-icons/fa";

const Services = () => {
  const [services] = useState([
    {
      id: 1,
      title: "Full Stack Web Development (Java and MERN)",
      icon: <FaLaptopCode className="text-5xl text-indigo-500" />,
      description:
        "Hands-on experience building full stack applications using Core Java, Spring Boot, Hibernate, JPA for backend, and React.js, Tailwind CSS, Bootstrap, HTML5, and modern JavaScript (ES6+) for frontend.📘 Currently learning Node.js to enhance backend skills for MERN Stack development.",
    },
    {
      id: 2,
      title: "Backend API Development",
      icon: <FaServer className="text-5xl text-green-600" />,
      description:
        "Strong backend development skills using Java, Spring Boot, Hibernate, JPA, and MySQL. Skilled in RESTful APIs, database integration, Microservices architecture, and testing with JUnit and Mockito.",
    },
    {
      id: 3,
      title: "DevOps & Cloud Basics",
      icon: <FaCloud className="text-5xl text-blue-600" />,
      description:
        "Basic knowledge of deploying apps on cloud platforms like AWS EC2. Familiar with Git, Postman, Docker, and CI/CD pipelines using Jenkins.",
    },
  ]);

  return (
    <section id="Service" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h1 className="text-5xl font-extrabold mb-12 underline decoration-4 decoration-indigo-500">
          My Services
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-slate-100 rounded-2xl p-8 shadow-md hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 ease-in-out"
            >
              <div className="flex justify-center mb-4">{service.icon}</div>
              <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <button className="px-6 py-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full text-lg font-semibold hover:scale-105 transition-transform">
                Check
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
