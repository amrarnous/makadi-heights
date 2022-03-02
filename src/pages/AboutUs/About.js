import React from 'react'
import Button from "../../components/Base/Button/Button";

function About() {
  return (
    <section className="mh-about bg-[#21436E] pb-20 mt-[-93px]">
        <div className="container max-w-[85.69%] w-full mx-auto flex justify-center lg:justify-start flex-wrap lg:flex-nowrap">
          <div className="mh-about-photo w-full lg:w-1/2">
            <img src="imgs/family.png" alt="" />
          </div>
          <div className="mh-about-description lg:ml-14 w-full lg:w-1/2">
            <h1 className="text-[40px] lg:text-7xl text-white font-di-medium">
              The Place <br />
              <b className="font-di-medium">We Call Home</b>
            </h1>
            <p className="max-w-[585px] text-white text-sm lg:text-[22px] leading-6 lg:leading-9 mt-10 font-sharp-medium">
              Makadi Heights is a town built over 3.4 million square meters
              planned for development, with an elevation reaching 78 meters
              above sea level guaranteeing magnificent panoramic sea views
              residential units. Envisioned as a comprehensive town.
            </p>
            <div className="flex mt-8 justify-center lg:justify-start flex-wrap lg:flex-nowrap">
              <div className="download-brochure lg:mr-5">
                <Button text="Download Brochure" />
              </div>
              <div className="show-master-plan mt-3 md:mt-0 md:ml-1">
                <Button text="Show Master plan" />
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default About