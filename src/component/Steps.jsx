const Steps = () => {
  return (
    <div className="py-16 bg-[#F9FAFC]">
      <h2 className="text-center text-2xl font-bold mb-5">
        Get Started In 3 Steps
      </h2>
      <h5 className="text-center mb-4 font-medium text-[20px]">Start using premium digital tools in minutes, not hours.</h5>

      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">

        <div className="bg-[#FFFFFF] p-6 text-center rounded-lg">
          <h3 className=" py-1 text-white px-2 border bg-[#4F39F6] w-[30px] rounded-full">01</h3>
          <div className="text-3xl mb-3 flex justify-center"><img src="/src/assets/user.png" alt="" /></div>
          <h3 className="font-semibold">Create Account</h3>
          <p className="text-sm text-gray-500 mt-2">
            Sign up in minutes with email and start exploring
          </p>
        </div>

        <div className="bg-[#FFFFFF] p-6 text-center rounded-lg">
          <h3 className=" py-1 text-white px-2 border bg-[#4F39F6] w-[30px] rounded-full">02</h3>
          <div className="text-3xl mb-3 flex justify-center"><img src="/src/assets/package.png" alt="" /></div>
          <h3 className="font-semibold">Choose Products</h3>
          <p className="text-sm text-gray-500 mt-2">
            Browse our catalog and select the tools that fit your needs
          </p>
        </div>

        <div className="bg-[#FFFFFF] p-6 text-center rounded-lg">
          <h3 className=" py-1 text-white px-2 border bg-[#4F39F6] w-[30px] rounded-full">03</h3>
          <div className="text-3xl mb-3 flex justify-center"><img src="/src/assets/rocket.png" alt="" /></div>
          <h3 className="font-semibold">Start Creating</h3>
          <p className="text-sm text-gray-500 mt-2">
            Download instantly and boost your productivity
          </p>
        </div>

      </div>
    </div>
  );
};

export default Steps;