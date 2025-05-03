import {
    FaFacebookF,
    FaInstagram,
    FaYoutube,
    FaTiktok,
    FaTwitter,
  } from "react-icons/fa";
  
  export default function Footer() {
    return (
      <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
        <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <h1 className="text-3xl font-bold mb-4 tracking-wide">
              Hyper
              <span className="bg-white text-black px-2 py-0.5 text-base ml-2 rounded">
                eats
              </span>
            </h1>
            <div className="flex space-x-3 mt-4">
              <img
                src="src/assets/images/appstore.png"
                alt="App Store"
                className="h-10 rounded shadow-md"
              />
              <img
                src="src/assets/images/googleplay.png"
                alt="Google Play"
                className="h-10 rounded shadow-md"
              />
            </div>
            <p className="text-xs mt-4 text-gray-400">
              Company # 498039-445, Registered with House of Companies.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-lg tracking-wide mb-3">
              Get Exclusive Deals in your Inbox
            </h2>
            <div className="flex rounded-xl overflow-hidden bg-white/10 backdrop-blur-lg shadow-lg ring-1 ring-white/10">
              <input
                type="email"
                placeholder="youremail@gmail.com"
                className="p-3 text-white placeholder-gray-300 bg-transparent w-full focus:outline-none"
              />
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-5 transition duration-200">
                Subscribe
              </button>
            </div>
            <p className="text-xs mt-2 text-gray-400">
              We won't spam, read our email policy
            </p>
            <div className="flex space-x-4 mt-5 text-xl text-gray-300">
              <FaFacebookF className="hover:text-white transition transform hover:scale-110 duration-200" />
              <FaInstagram className="hover:text-white transition transform hover:scale-110 duration-200" />
              <FaYoutube className="hover:text-white transition transform hover:scale-110 duration-200" />
              <FaTiktok className="hover:text-white transition transform hover:scale-110 duration-200" />
              <FaTwitter className="hover:text-white transition transform hover:scale-110 duration-200" />
            </div>
          </div>
  

          <div>
            <h2 className="font-semibold text-lg tracking-wide mb-3">
              Legal Pages
            </h2>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-transform transform hover:scale-105 duration-200"
                >
                  Terms and conditions
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-transform transform hover:scale-105 duration-200"
                >
                  Privacy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-transform transform hover:scale-105 duration-200"
                >
                  Cookies
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-transform transform hover:scale-105 duration-200"
                >
                  Modern Slavery Statement
                </a>
              </li>
            </ul>
          </div>
  

          <div>
            <h2 className="font-semibold text-lg tracking-wide mb-3">
              Important Links
            </h2>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-transform transform hover:scale-105 duration-200"
                >
                  Get help
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-transform transform hover:scale-105 duration-200"
                >
                  Add your restaurant
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-transform transform hover:scale-105 duration-200"
                >
                  Sign up to deliver
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-transform transform hover:scale-105 duration-200"
                >
                  Create a business account
                </a>
              </li>
            </ul>
          </div>
        </div>
  
        {/* Bottom Bar */}
        <div className="bg-gray-950 border-t border-gray-700 text-gray-400 text-xs py-5 px-6 flex flex-col md:flex-row justify-between items-center">
          <span className="text-center">
            © 2025 Hypereats. All Rights Reserved.
          </span>
          <div className="flex flex-wrap gap-4 mt-3 md:mt-0 text-center justify-center">
            <a href="#" className="hover:text-white transition duration-150">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition duration-150">
              Terms
            </a>
            <a href="#" className="hover:text-white transition duration-150">
              Pricing
            </a>
            <a href="#" className="hover:text-white transition duration-150">
              Do not sell or share my personal information
            </a>
          </div>
        </div>
      </footer>
    );
  }
  