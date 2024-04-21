const Footer = () => {
  return (
    <footer className="py-5 border bg-gray-100 px-4 md:px-8 lg:px-16 xl:px-32">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <p>
            @2024 Rishi Singh <span>All Rights Reserved</span>
          </p>
        </div>
        <div className="flex flex-wrap space-y-2 md:space-y-0 md:space-x-5">
          <p>
            Email:{" "}
            <a
              href="mailto:rishicoding9838@gmail.com"
              className="text-blue-700"
            >
              rishicoding9838@gmail.com
            </a>
          </p>
          <p>Address: Indore M.P</p>
          <p>Contact Number: 7800017055</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
