const Carousel = () => {
  return (
    <div className="min-w-screen h-96 md:h-[600px] bg-gradient-to-b from-black to-red-700 flex justify-center items-center mb-12">
      <div className="flex">
        <div className=" text-white my-auto border-4 p-2 rounded-tr-xl md:w-[350px] md:h-[350px]">
          <div className="md:mt-20">
            <h1 className="text-9xl text-center">SL72</h1>
            <p className="text-center">Pain is Forgoten, Pride is Forever</p>
          </div>
        </div>
        <img
          className="w-64 md:w-[500px]"
          src="./sl72.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Carousel;
