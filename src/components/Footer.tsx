import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <div
      className="pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 w-full overflow-hidden"
      id="footer"
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start">
        <div className="w-full md:w-1/3 mb-8 md:mb-0">
          <img src={assets.logo_dark} alt="" className="" />
          <p className="text-center md:text-left text-gray-400 mt-4 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            impedit incidunt repellendus praesentium officiis, quam facere,
            minima nam animi possimus repellat nemo dolorum quo dolor saepe
            nihil ut ex maiores.
          </p>
        </div>
        <div className="w-full md:w-1/5 mb-8 md:mb-0">
          <h3 className="text-white text-lg font-bold mb-4">Company</h3>
          <ul className="flex flex-col gap-2 text-gray-400">
            <a href="#header" className="hover:text-white">
              Home
            </a>
            <a href="#about" className="hover:text-white">
              About us
            </a>{' '}
            <a href="#contact" className="hover:text-white">
              Contact us
            </a>{' '}
            <a href="#" className="hover:text-white">
              Privacy policy
            </a>
          </ul>
        </div>
        <div className="w-full md:w-1/3">
          <h3 className="text-white text-lg font-bold mb-4">
            Subscribe to our newsletter
          </h3>
          <p className="text-gray-400 mb-4 max-w-80">
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none w-full md:w-auto"
            />
            <button className="bg-blue-600 text-white py-2 px-4 rounded">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 py-4 flex justify-center items-center mt-10">
        <p className="text-gray-400">
          Copyright {new Date().getFullYear()} &copy;{' '}
          <a href="https://finzyphinzy.vercel.app" className="underline">
            finzyphinzy
          </a>
          . All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
