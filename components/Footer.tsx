import React from 'react';
import MagicButton from "@/components/ui/MagicButton";
import {FaLocationArrow} from "react-icons/fa";
import {socialMedia} from "@/data";

function Footer() {
  return (
    <footer className='w-full pt-20 pb-5 px-15 mb-[60px]' id="contact">
      <div className='flex flex-col items-center'>
        <h1 className='heading lg:max-w-[45vw]'>
          Ready to Take <span className='text-purple'>Your </span> digital presence to the next Level
        </h1>
        <p className='text-white-200 md:mt-10 my-5 text-center'>
          Reach out to me and Let's discuss how can help you achieve your goals.
        </p>
        <a href='mailto:mahmoudmajedalsheikhb@gmail.com'>
          <MagicButton title='Lets get in touch' icon={<FaLocationArrow/>}
                       postion='right'
          />
        </a>
      </div>

      <div className='flex mt-14 md:flex-row flex-col justify-evenly items-center mx-10'>
        <p className='md:text-base text-sm md:font-normal'>Copyright © 2024 Mahmoud</p>
        <div className='flex items-center md:gap-3  gap-6 mt-3'>
          {socialMedia.map((profile) => (
            <div key={profile.id} className='w-10 h-10 cursor-pointer
               flex justify-center items-center backdrop-blur-lg saturate-180
               bg-opacity-75 bg-black-200 rounded-lg border-black-300
               '>
              <img src={profile.img} alt={`social Media Icon`} width={20} height={20}/>
            </div>

          ))}
        </div>

      </div>

    </footer>
  );
}

export default Footer;