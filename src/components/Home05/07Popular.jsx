import Image from 'next/image'
import { useEffect, useState } from 'react';

// Awesome Reveal
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'

import person1 from '../../public/assets/Home05/popular_1.png'
import person2 from '../../public/assets/Home05/popular_2.png'
import person3 from '../../public/assets/Home05/popular_3.png'
import person4 from '../../public/assets/Home05/popular_4.png'
import person5 from '../../public/assets/Home05/popular_5.png'
import person6 from '../../public/assets/Home05/popular_6.png'
import line from '../../public/assets/Home05/popular_line.png'


// Keyframe for smooth reveal
const revealBottom = keyframes`
  from {
    transform: translatey(300px);
    opacity: 0;
  }

  to {
    transform: translateX(0);
    opacity: 1;
  }
`;


export default function PopularHome05() {
    const [faqResponse, setFaqResponse] = useState(null);

    function activeResponse(responseTarget) {
        let target = document.getElementById(responseTarget);
        let remove = document.getElementsByClassName('faqResponseActive');
        if(remove.length === 0) {
            target.classList.add('faqResponseActive');
        } else if(faqResponse === responseTarget) {
            remove[0].classList.remove('faqResponseActive');
        } else {
            remove[0].classList.remove('faqResponseActive');
            target.classList.add('faqResponseActive');
        }
    }


    return(
        <section className='mb-48 relative'>
            <div className='flex justify-center -mb-10'>
                <div className='relative w-1/3'>
                    <p className='font-Amiri text-[300px] text-greyBackground absolute top-0 right-72'>Rise</p>
                    <h2 className='text-orange font-bold mb-4 pt-10 relative relative'>POPULAR QUESTIONS<span className='absolute bottom-1 ml-1 bg-orange h-0.5 w-2'></span></h2>
                    <h3 className='font-Amiri text-5xl text-slightGrey relative w-10/12 mb-16'>Discover Frequently Asked Questions from Our Support</h3>
                    <button className="relative text-white text-sm font-bold bg-orange px-7 py-4 rounded hover:bg-darkBlueBackground ease-in-out duration-300">WORK TOGETHER</button>
                </div>

                <div className='w-[550px]'>
                    <div id='wrong' onClick={() => { activeResponse('wrong'); setFaqResponse('wrong'); }} className='mb-5'>
                        <div className='mb-5 flex items-center justify-between bg-greyBackground relative w-full p-4 rounded hover:bg-white hover:shadow-[3px_3px_20px_3px_#eae9e9] hover:cursor-pointer group ease-in-out duration-300'>
                            <p className='text-slightGrey font-bold group-hover:text-orange ease-in-out duration-300'>What if I pick the wrong plan?</p>
                            <FontAwesomeIcon icon={faArrowRightLong} className='w-5 rotate-45 text-[#bfbfbf] group-hover:text-orange group-hover:-rotate-45 group-hover:text-orange ease-in-out duration-500' />
                        </div>

                        <p className='w-11/12 m-auto text-greyText hidden h-0'>
                            We help companies generate real results today and build a strategy that will endure well into the future. Zikzag advanced manufacturing experts provide your company with deep experience in the aerospace.
                        </p>
                    </div>


                    <div id='marketing' onClick={() => { activeResponse('marketing'); setFaqResponse('marketing'); }} className='mb-5'>
                        <div className='mb-5 flex items-center justify-between bg-greyBackground relative w-full p-4 rounded hover:bg-white hover:shadow-[3px_3px_20px_3px_#eae9e9] hover:cursor-pointer group ease-in-out duration-300'>
                            <p className='text-slightGrey font-bold group-hover:text-orange ease-in-out duration-300'>Can you run online marketing campaigns for us?</p>
                            <FontAwesomeIcon icon={faArrowRightLong} className='w-5 rotate-45 text-[#bfbfbf] group-hover:text-orange group-hover:-rotate-45 group-hover:text-orange ease-in-out duration-500' />
                        </div>

                        <p className='w-11/12 m-auto text-greyText hidden h-0'>
                            We help companies generate real results today and build a strategy that will endure well into the future. Zikzag advanced manufacturing experts provide your company with deep experience in the aerospace.
                        </p>
                    </div>
                    

                    <div id='on-going' onClick={() => { activeResponse('on-going'); setFaqResponse('on-going'); }} className='mb-5'>
                        <div className='mb-5 flex items-center justify-between bg-greyBackground relative w-full p-4 rounded hover:bg-white hover:shadow-[3px_3px_20px_3px_#eae9e9] hover:cursor-pointer group ease-in-out duration-300'>
                            <p className='text-slightGrey font-bold group-hover:text-orange ease-in-out duration-300'>Do you offer on-going help with our new site?</p>
                            <FontAwesomeIcon icon={faArrowRightLong} className='w-5 rotate-45 text-[#bfbfbf] group-hover:text-orange group-hover:-rotate-45 group-hover:text-orange ease-in-out duration-500' />
                        </div>

                        <p className='w-11/12 m-auto text-greyText hidden h-0'>
                            We help companies generate real results today and build a strategy that will endure well into the future. Zikzag advanced manufacturing experts provide your company with deep experience in the aerospace.
                        </p>
                    </div>
                        

                    <div id='questions' onClick={() => { activeResponse('questions'); setFaqResponse('questions'); }} className='mb-5'>
                        <div className='mb-5 flex items-center justify-between bg-greyBackground relative w-full p-4 rounded hover:bg-white hover:shadow-[3px_3px_20px_3px_#eae9e9] hover:cursor-pointer group ease-in-out duration-300'>
                            <p className='text-slightGrey font-bold group-hover:text-orange ease-in-out duration-300'>If I have questions, where can I find answers?</p>
                            <FontAwesomeIcon icon={faArrowRightLong} className='w-5 rotate-45 text-[#bfbfbf] group-hover:text-orange group-hover:-rotate-45 group-hover:text-orange ease-in-out duration-500' />
                        </div>

                        <p className='w-11/12 m-auto text-greyText hidden h-0'>
                            We help companies generate real results today and build a strategy that will endure well into the future. Zikzag advanced manufacturing experts provide your company with deep experience in the aerospace.
                        </p>
                    </div>
                        

                    <div id='data' onClick={() => { activeResponse('data'); setFaqResponse('data'); }} className='mb-5'>
                        <div className='mb-5 flex items-center justify-between bg-greyBackground relative w-full p-4 rounded hover:bg-white hover:shadow-[3px_3px_20px_3px_#eae9e9] hover:cursor-pointer group ease-in-out duration-300'>
                            <p className='text-slightGrey font-bold group-hover:text-orange ease-in-out duration-300'>What happens to my data if I cancel?</p>
                            <FontAwesomeIcon icon={faArrowRightLong} className='w-5 rotate-45 text-[#bfbfbf] group-hover:text-orange group-hover:-rotate-45 group-hover:text-orange ease-in-out duration-500' />
                        </div>

                        <p className='w-11/12 m-auto text-greyText hidden h-0'>
                            We help companies generate real results today and build a strategy that will endure well into the future. Zikzag advanced manufacturing experts provide your company with deep experience in the aerospace.
                        </p>
                    </div>
                        

                    <div id='cancel' onClick={() => { activeResponse('cancel'); setFaqResponse('cancel'); }} className='mb-5'>
                        <div className='flex items-center justify-between bg-greyBackground relative w-full p-4 rounded hover:bg-white hover:shadow-[3px_3px_20px_3px_#eae9e9] hover:cursor-pointer group ease-in-out duration-300'>
                            <p className='text-slightGrey font-bold group-hover:text-orange ease-in-out duration-300'>What happens to my data if I cancel?</p>
                            <FontAwesomeIcon icon={faArrowRightLong} className='w-5 rotate-45 text-[#bfbfbf] group-hover:text-orange group-hover:-rotate-45 group-hover:text-orange ease-in-out duration-500' />
                        </div>

                        <p className='w-11/12 m-auto text-greyText hidden h-0'>
                            We help companies generate real results today and build a strategy that will endure well into the future. Zikzag advanced manufacturing experts provide your company with deep experience in the aerospace.
                        </p>
                    </div>
                </div>
            </div>

            <Image src={line} alt='ligne de décoration' className='absolute' />

            <div className='relative mt-64 flex justify-center'>
                <Reveal keyframes={revealBottom} duration={700} triggerOnce><Image src={person1} alt='portrait' /></Reveal>
                <Reveal keyframes={revealBottom} duration={700} delay={200} triggerOnce  className='absolute top-0'><Image src={person2} alt='portrait' /></Reveal>
                <Reveal keyframes={revealBottom} duration={700} delay={400} triggerOnce  className='absolute top-0'><Image src={person3} alt='portrait' /></Reveal>
                <Reveal keyframes={revealBottom} duration={700} delay={600} triggerOnce  className='absolute top-0'><Image src={person4} alt='portrait' /></Reveal>
                <Reveal keyframes={revealBottom} duration={700} delay={800} triggerOnce  className='absolute top-0'><Image src={person5} alt='portrait' /></Reveal>
                <Reveal keyframes={revealBottom} duration={700} delay={1000} triggerOnce  className='absolute top-0'><Image src={person6} alt='portrait' /></Reveal>
            </div>
        </section>
    )
}