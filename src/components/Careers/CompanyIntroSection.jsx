const CompanyIntroSection = () => {
  return (
    <div className="w-full relative max-w-1260 py-12 grid grid-cols-1 xl:grid-cols-2 gap-8">
   
        <div className="h-96 relative rounded-[21px] overflow-hidden bg-blend-color-dodge bg-blue-3 bg-[url('https://res.cloudinary.com/dptwervy7/image/upload/v1754393714/team_l7q3vg.png')] bg-cover bg-no-repeat bg-center w-full"></div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 text-white">
        <div className="flex flex-col gap-6 items-center md:items-start justify-center text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold font-poppins">
            Hi! We’re DGMAR.COM
          </h1>
          <p className="text-base font-poppins">
            Welcome to a place where your talent meets opportunities for growth in a global, innovative, and diverse environment. Whether you’re just starting your career or looking for new challenges, here you can explore new possibilities, grow, and achieve success.
          </p>
          <a
            href="#"
            className="text-lg font-bold font-poppins text-[#0E71E2]"
          >
            See who we’re looking for
          </a>
        </div>

        <div className="flex flex-col gap-6 justify-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-poppins">
            400+
          </h1>
          <p className="text-base font-poppins">
            Talents working together to achieve ambitious goals. Want to learn more about DGMAR.COM? Discover our values, inclusive culture, and team:
          </p>
          <a
            href="#"
            className="text-lg font-bold font-poppins text-[#0E71E2]"
          >
            Discover our culture
          </a>
        </div>
      </div>
    </div>
  );
};

export default CompanyIntroSection;
