const Banner = () => {
  return (
    <>
      <div className="grid md:grid-cols-2 items-center mx-auto max-w-[1200px] px-10 py-16">
        <div>
          <h1 className="text-4xl font-bold">
            Supercharge Your <br /> Digital Workflow
          </h1>
          <p className="text-gray-500 text-left mt-4">
            Access premium AI tools, design assets, templates, and productivity
            software—all in one place. Start creating faster today.
            Explore Products
          </p>

          <div className="mt-5 flex gap-3">
            <button className="bg-purple-600 text-white px-5 py-2 rounded-full">
              Explore Products
            </button>
            <button className="border-1 border-purple-900 px-5 py-2 flex gap-2 rounded-full"> <img width="20px" src="/src/assets/Play.png" alt="" />
              Watch Demo
            </button>
          </div>
        </div>

        <img src="/src/assets/banner.png" />
      </div>

      <div className="bg-gradient-to-r from-purple-700 to-pink-500 text-white py-8 grid grid-cols-3 text-center ">
        <div>
          <h2 className="text-xl font-bold">50K+</h2>
          <p> Active Users</p>
        </div>
        
        <div>
          <h2 className="text-xl font-bold">200+</h2>
          <p>Tools</p>
        </div>

        <div>
          <h2 className="text-xl font-bold">4.9</h2>
          <p>Rating</p>
        </div>
      </div>
    </>
  );
};
export default Banner;