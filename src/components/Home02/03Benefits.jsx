import Image from 'next/image'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

// Reveal
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

//Assets Benefits
import benefitsLine from '../../public/assets/Home02/benefits_line.png'
import benefitsMan01 from '../../public/assets/Home02/benefits_man_01.png'
import benefitsMan02 from '../../public/assets/Home02/benefits_man_02.png'
import benefitsStonks from '../../public/assets/Home02/benefits_stonks.png'
import benefitsTarget from '../../public/assets/Home02/benefits_target.png'

const revealRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(400px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const revealLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-400px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const revealBottom= keyframes`
  from {
    opacity: 0;
    transform: translateY(300px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;


export default function Benefits() {
  return(
    <section className='flex relative mx-[13%] mb-10 max-xl:flex-col'>
      <div className='mr-16'>
        <Reveal keyframes={revealRight} triggerOnce duration={750} delay={250}><Image src={benefitsMan01} alt='personne tarvaillant derrière un ordinateur' className='absolute -top-20' /></Reveal>
        <Reveal keyframes={revealBottom} triggerOnce duration={750} delay={1500}><Image src={benefitsStonks} alt='dessin de graphique allant vers le haut' className='absolute -top-24' /></Reveal>
        <Reveal keyframes={revealLeft} triggerOnce duration={750} delay={1000}><Image src={benefitsMan02} alt='personne sur un canapé' className='absolute -top-20 z-10' /></Reveal>
        <Reveal keyframes={revealRight} triggerOnce duration={750} delay={2100}><Image src={benefitsTarget} alt='dessin de cible' className='absolute -top-20 z-0' /></Reveal>
        <Reveal keyframes={revealLeft} triggerOnce duration={750} delay={2500}><Image src={benefitsLine} alt='ligne de décoration' className='relative bottom-20' /></Reveal>
      </div>

      <div className='font-NunitoSans w-5/12 max-xl:w-auto'>
        <h2 className='text-orange font-bold mb-2 relative'>OUR BENEFITS<span className='absolute top-5 ml-1 bg-orange h-0.5 w-2'></span></h2>
        <h3 className='text-slightGrey font-Amiri text-5xl leading-tight mb-4'>Few Resons Why<br></br>You Should Choose Us</h3>
        <p className='text-greyText text-lg mb-5'>Our people define us and show who we are. When we put people to work with the client, they take with them not only our knowledge:</p>

        <div className='flex items-center mb-5 group'>
          <div className='p-2 rounded-full shadow-[6px_5px_16px_0px_rgb(0,0,0,0.15)] mr-6 group-hover:bg-orange ease-in-out duration-300'><FontAwesomeIcon icon={faCheck} className='w-5 text-orange group-hover:opacity-100 group-hover:text-white ease-in-out duration-300' /></div>
          <p className='text-greyText text-lg'>High standards of professionalism, integrity. Establishment of close working relationships.</p>
        </div>

        <div className='flex items-center mb-5 group'>
          <div className='p-2 rounded-full shadow-[6px_5px_16px_0px_rgb(0,0,0,0.15)] mr-6 group-hover:bg-orange ease-in-out duration-300'><FontAwesomeIcon icon={faCheck} className='w-5 text-orange group-hover:opacity-100 group-hover:text-white ease-in-out duration-300' /></div>
          <p className='text-greyText text-lg'>We do not have to be the best, we do ave to give our best. Ability to learn. Multicultural competence and cross-border operability.</p>
        </div>

        <div className='flex items-center 850:mb-20 group'>
          <div className='p-2 rounded-full shadow-[6px_5px_16px_0px_rgb(0,0,0,0.15)] mr-6 group-hover:bg-orange ease-in-out duration-300'><FontAwesomeIcon icon={faCheck} className='w-5 text-orange group-hover:opacity-100 group-hover:text-white ease-in-out duration-300' /></div>
          <p className='text-greyText text-lg'>A different way of thinking, both inside and outside box. We do not have the best, we do have to give our best.</p>
        </div>
      </div>
    </section>
  )
}