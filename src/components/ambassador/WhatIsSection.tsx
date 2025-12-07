import networkNodeImg from "../../assets/Container.png";

export const WhatIsSection = () => {
  return (
    <section id="what-is" className="w-full py-20 md:py-32 bg-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-[1400px]">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column: Text */}
          <div className="text-left">
            <h2 className="text-3xl md:text-4xl font-medium mb-6 text-primary">
              What Is the Ulalo Ambassador Network?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              The Ulalo Ambassador Network is an exclusive community of healthcare professionals, patient advocates, and engaged individuals passionate about empowering patients through data ownership.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Ambassadors are leaders who educate their communities, build partnerships, and help direct patients to the Ulalo platform. In return, they earn rewards for their tangible contributions.
            </p>
          </div>

          {/* Right Column: Image */}
          <div className="flex justify-center lg:justify-end">
            <img
              src={networkNodeImg}
              alt="Network Node Graph"
              className="w-full max-w-md h-auto object-contain"
            />
          </div>
        </div>

      </div>
    </section>
  );
};




