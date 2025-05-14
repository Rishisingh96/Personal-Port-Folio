import { useState } from "react";

const Services = () => {
  const [services] = useState([
    {
      id: 1,
      title: "Web Development",
      description:
        "I am proficient in web development technology like JavaScript, CSS (Tailwind), HTML, and SQL. Currently learning React Framework.",
    },
    {
      id: 2,
      title: "Android Development",
      description:
        "Basic knowledge of android development. and Create a Basic project using Android studio.",
    },
    {
      id: 3,
      title: "Backend Development",
      description:
        "Proficient in Backend Development technology like Java, Servlet, JSP, C, C++, SQL, and JDBC. Currently learning Spring-Boot Framework and Hibernate.",
    },
  ]);

  return (
    <div  id="Service" className="main-container py-14">
      <h1 className="text-5xl font-bold text-center underline">My Services</h1>
      <div className="services-container space-y-8 md:space-y-0 md:flex md:flex-wrap md:justify-center md:-mx-4 mt-12">
        {services.map((service) => (
          <div
            key={service.id}
            className="cursor-pointer hover:bg-gray-100 bg-slate-100 p-5 text-center shadow-lg rounded-xl space-y-4 md:w-72 md:mx-4"
          >
            <i className="text-5xl fa-brands fa-aws"></i>
            <h1 className="text-4xl">{service.title}</h1>
            <p>{service.description}</p>
            <button className="px-3 py-2 bg-orange-500 text-2xl rounded-full shadow-lg">
              Check
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
