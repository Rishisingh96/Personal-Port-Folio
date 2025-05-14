import bannerImage from "../assets/bi2.jpeg";
import bannerBackground from "../assets/banner_wallpaper.svg";
import { useRef, useEffect } from "react";
import Typed from "typed.js";

const Banner = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Java Full Stack Developer", "Java Backend Developer"],
      startDelay: 100,
      typeSpeed: 130,
      backSpeed: 10,
      backDelay: 100,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(${bannerBackground})`,
        backgroundSize: "cover",
      }}
      className="main-container flex items-center"
    >
      <div className="w-full flex items-center justify-center text-white">
        <div className="w-2/3 space-y-2 ms-10">
          <h3 className="text-3xl font-semibold">Hi, I am</h3>
          <h1 className="text-5xl font-bold">Rishi singh</h1>
          <h2 className="text-3xl ">
            I am <span className="font-bold underline" ref={el}></span>
          </h2>
          <p>
            I am currently pursuing my Master of Computer Applications (MCA)
            from SAGE University, Indore, with a strong foundation in backend
            and full stack development. My journey in software development began
            with a BCA degree, and since then, I’ve consistently expanded my
            technical skills through academic projects, internships, and
            self-learning. I have <strong>1+ years</strong> of hands-on
            experience in developing scalable applications using{" "}
            <strong>Core Java</strong>, <strong>J2EE</strong>,{" "}
            <strong>Spring Boot</strong>, <strong>Hibernate</strong>,{" "}
            <strong>JPA</strong>, <strong>Microservices</strong>,{" "}
            <strong>JUnit</strong>, <strong>Mockito</strong>, and{" "}
            <strong>Thymeleaf</strong>. On the front end, I build dynamic and
            responsive interfaces using <strong>React.js</strong>,{" "}
            <strong>Tailwind CSS</strong>, <strong>Bootstrap</strong>, and
            modern <strong>JavaScript (ES6+)</strong>. I’m proficient in working
            with <strong>MySQL</strong> databases, building{" "}
            <strong>RESTful APIs</strong>, and deploying applications on the
            cloud using platforms like <strong>AWS EC2</strong>. I’m also
            comfortable using <strong>Git</strong>, <strong>Postman</strong>,{" "}
            <strong>Docker</strong>, and{" "}
            <strong>Jenkins CI/CD pipelines</strong> for version control, API
            testing, and automation. Passionate about continuous learning and
            growth, I’m committed to building high-quality software solutions
            and contributing effectively as a full stack Java developer in a
            forward-thinking organization.{" "}
            <strong>📘 Currently learning Node.js and Microservices to enhance backend skills for MERN Stack development.</strong>
          </p>

          <div className="icons-container flex space-x-5">
            <a
              href="https://www.linkedin.com/in/rishi-singh-in"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:bg-orange-600 border cursor-pointer px-3 py-4 w-16 h-16 rounded-full flex justify-center items-center bg-gray-800"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
              </svg>
            </a>

            <a
              href="https://github.com/Rishisingh96"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:bg-orange-600 border cursor-pointer px-3 py-4 w-16 h-16 rounded-full flex justify-center items-center bg-gray-800"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M12 0c-6.628 0-12 5.372-12 12 0 5.303 3.438 9.798 8.208 11.385.6.11.792-.258.792-.577 0-.285-.01-1.04-.015-2.043-3.342.724-4.042-1.613-4.042-1.613-.546-1.386-1.332-1.756-1.332-1.756-1.089-.744.083-.729.083-.729 1.204.085 1.838 1.236 1.838 1.236 1.07 1.834 2.808 1.303 3.496.998.108-.776.42-1.305.764-1.605-2.672-.303-5.48-1.336-5.48-5.93 0-1.314.812-2.432 1.835-3.31-.182-.54-.796-2.64.172-5.494 0 0 1.738-.56 5.7 2.127 1.655-.456 3.417-.684 5.186-.694 1.769.01 3.531.238 5.186.694 3.962-2.687 5.7-2.127 5.7-2.127.968 2.854.354 4.954.172 5.494 1.024.878 1.835 1.996 1.835 3.31 0 4.58-2.79 5.921-5.422 6.229.426.391.803 1.165.803 2.345 0 1.693-.015 3.052-.015 3.462 0 .319.192.693.804.576 4.765-1.587 8.202-6.082 8.202-11.361C24 5.372 18.628 0 12 0z" />
              </svg>
            </a>

            <a
              href="https://www.instagram.com/rishi_singh9696/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:bg-pink-600 border cursor-pointer px-3 py-4 w-16 h-16 rounded-full flex justify-center items-center bg-gray-800"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                fill="white"
                width="24"
                height="24"
              >
                <path d="M224.1 141c-63.6 0-115 51.4-115 115s51.4 115 115 115 115-51.4 115-115-51.4-115-115-115zm0 190c-41.4 0-75-33.6-75-75s33.6-75 75-75 75 33.6 75 75-33.6 75-75 75zm146.4-194.1c0 14.9-12.1 27-27 27s-27-12.1-27-27 12.1-27 27-27 27 12.1 27 27zm76.1 27.2c-.9-19.6-5.1-37-17.6-54-12.5-17-29.3-30.6-50.3-37.2-19.6-6.2-40.4-7.6-121.6-7.6s-102 1.4-121.6 7.6c-21 6.6-37.8 20.2-50.3 37.2-12.5 17-16.7 34.4-17.6 54-.9 20.1-1.1 26.3-1.1 77.9s.2 57.8 1.1 77.9c.9 19.6 5.1 37 17.6 54 12.5 17 29.3 30.6 50.3 37.2 19.6 6.2 40.4 7.6 121.6 7.6s102-1.4 121.6-7.6c21-6.6 37.8-20.2 50.3-37.2 12.5-17 16.7-34.4 17.6-54 .9-20.1 1.1-26.3 1.1-77.9s-.2-57.8-1.1-77.9zM398.8 388c-7.8 19.5-22.9 34.6-42.4 42.4-29.4 11.7-99.2 9-132.4 9s-103 2.6-132.4-9c-19.5-7.8-34.6-22.9-42.4-42.4-11.7-29.4-9-99.2-9-132.4s-2.6-103 9-132.4c7.8-19.5 22.9-34.6 42.4-42.4 29.4-11.7 99.2-9 132.4-9s103-2.6 132.4 9c19.5 7.8 34.6 22.9 42.4 42.4 11.7 29.4 9 99.2 9 132.4s2.6 103-9 132.4z" />
              </svg>
            </a>
          </div>

          <br />
          <a
            className="text-2xl px-3 py-2 bg-orange-500 rounded-full shadow-lg"
            href="/contact"
          >
            Contact Me
          </a>
        </div>
      </div>

      <div className="w-full flex justify-center">
        <img
          className="rounded-full my-2 shadow-lg h-40 w-40 h-auto w-auto"
          src={bannerImage}
          alt="Rishi Singh"
        />
      </div>
    </div>
  );
};

export default Banner;
