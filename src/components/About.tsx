import { assets } from '../assets/assets';

export const About = () => {
  return (
    <div
      className="flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hiden"
      id="about"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2">
        About{' '}
        <span className="underline underline-offset-4 decoration-1 under font-light">
          Our Brand
        </span>
      </h1>
      <p className="text-gray-500 max-w-80 text-center mb-8">
        Passionate About Properties, Dedicated to Your Vision
      </p>

      <div className="flex flex-col md:flex-row items-center md:gap-20">
        <img
          src={assets.brand_img}
          alt="brand_img"
          className="w-full sm:w-1/2 max-w-lg"
        />

        <div className="flex flex-col items-center md:items-start mt-10 text-gray-600">
          <div className="grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28">
            <div className="">
              <p className="text-4xl font-medium text-gray-800">10+</p>
              <p className="">Years of Excellence</p>
            </div>
            <div className="">
              <p className="text-4xl font-medium text-gray-800">12+</p>
              <p className="">Projects Completed</p>
            </div>
            <div className="">
              <p className="text-4xl font-medium text-gray-800">20+</p>
              <p className="">Mn. Sq. Ft. Delivered</p>
            </div>
            <div className="">
              <p className="text-4xl font-medium text-gray-800">45+</p>
              <p className="">Ongoing Projects</p>
            </div>
          </div>

          <p className="my-10 max-w-lg text-center md:text-left">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro
            vitae libero architecto dolores eos consequuntur, sed maxime placeat
            nisi voluptate suscipit minus ea aspernatur quaerat.
          </p>
          <button className="bg-blue-600 text-white px-8 py-2 rounded">
            Learn more
          </button>
        </div>
      </div>
    </div>
  );
};
