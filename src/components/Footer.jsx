const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 py-10 px-6 sm:px-12 md:px-20 lg:px-36">
      <div
        id="contact"
        className="flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left"
      >
        {/* Left Side - Copyright */}
        <div className="text-sm md:text-base font-medium">
          © 2025 <span className="text-indigo-600 font-semibold">Rishi Singh</span> — All Rights Reserved
        </div>

        {/* Right Side - Contact Info */}
        <div className="space-y-2 md:space-y-0 md:space-x-8 text-sm md:text-base">
          <p>
            📧 Email:{" "}
            <a
              href="mailto:rishicoding9838@gmail.com"
              className="text-blue-600 hover:underline font-medium"
            >
              rishicoding9838@gmail.com
            </a>
          </p>
          <p>📍 Address: Indore, M.P.</p>
          <p>📞 Contact: 7800017055</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
