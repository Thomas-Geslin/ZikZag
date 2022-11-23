import Image from 'next/image'
import { useEffect } from 'react';

import { useContext } from "react";
import { ColorContext } from "../../context/colorContext";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

//Assets Benefits
import benefitsLine from '../../public/assets/Home02/benefits_line.png'
import benefitsMan01 from '../../public/assets/Home02/benefits_man_01.png'
import benefitsMan02 from '../../public/assets/Home02/benefits_man_02.png'
import benefitsStonks from '../../public/assets/Home02/benefits_stonks.png'
import benefitsTarget from '../../public/assets/Home02/benefits_target.png'


export default function Benefits() {
  const { color } = useContext(ColorContext);


  useEffect(() => {
    // Intersection Obeserver for fixed GoToTop
    const target = document.getElementById('benefitsReveal1');
    const target2 = document.getElementById('benefitsReveal2');
    const target3 = document.getElementById('benefitsReveal3');
    const target4 = document.getElementById('benefitsReveal4');
    const target5 = document.getElementById('benefitsReveal5');

    const viewport = document.getElementById('benefitsViewport');

    const options = {
      root: null,
      treshold: 0.5
    }

    const observer = new IntersectionObserver(function (entries) {
      entries.forEach((entry) => {
          if(entry.isIntersecting) { 
            target.classList.add('revealBenefitsHome02-1');
            target2.classList.add('revealBenefitsHome02-2');
            target3.classList.add('revealBenefitsHome02-3');
            target4.classList.add('revealBenefitsHome02-4');
            target5.classList.add('revealBenefitsHome02-5');
          }
      })
    }, options);
    observer.observe(viewport);
  },[])

  return(
    <section id='benefitsViewport' className='flex relative mx-[13%] mb-10 max-xl:flex-col 850:-mb-14'>
      <div className='mr-16 top-10 relative 850:min-w-[90%] 850:mr-0'>
        <Image id='benefitsReveal1' src={benefitsMan01} alt='personne tarvaillant derrière un ordinateur' className='opacity-0 absolute -top-20 overflow-hidden' />
        <Image id='benefitsReveal2' src={benefitsStonks} alt='dessin de graphique allant vers le haut' className='opacity-0 absolute -top-24' />
        <Image id='benefitsReveal3' src={benefitsMan02} alt='personne sur un canapé' className='opacity-0 absolute -top-20 z-10' />
        <Image id='benefitsReveal4' src={benefitsTarget} alt='dessin de cible' className='opacity-0 absolute -top-20 z-0' />
        <Image id='benefitsReveal5' src={benefitsLine} alt='ligne de décoration' className='opacity-0 relative bottom-20' />
      </div>

      <div className='font-NunitoSans w-5/12 max-xl:w-auto'>
        <h2 className={`text-${color} font-bold mb-2 relative`}>OUR BENEFITS<span className={`absolute top-5 ml-1 bg-${color} h-0.5 w-2`}></span></h2>
        <h3 className='text-slightGrey font-Amiri text-5xl leading-tight mb-4'>Few Resons Why<br></br>You Should Choose Us</h3>
        <p className='text-greyText text-lg mb-5'>Our people define us and show who we are. When we put people to work with the client, they take with them not only our knowledge:</p>

        <div className='flex items-center mb-5 group'>
          <div className={`p-2 rounded-full shadow-[6px_5px_16px_0px_rgb(0,0,0,0.15)] mr-6 group-hover-bg-${color} ease-in-out duration-300`}><FontAwesomeIcon icon={faCheck} className={`w-5 text-${color} group-hover:opacity-100 group-hover:text-white ease-in-out duration-300`} /></div>
          <p className='text-greyText text-lg'>High standards of professionalism, integrity. Establishment of close working relationships.</p>
        </div>

        <div className='flex items-center mb-5 group'>
          <div className={`p-2 rounded-full shadow-[6px_5px_16px_0px_rgb(0,0,0,0.15)] mr-6 group-hover-bg-${color} ease-in-out duration-300`}><FontAwesomeIcon icon={faCheck} className={`w-5 text-${color} group-hover:opacity-100 group-hover:text-white ease-in-out duration-300`} /></div>
          <p className='text-greyText text-lg'>We do not have to be the best, we do ave to give our best. Ability to learn. Multicultural competence and cross-border operability.</p>
        </div>

        <div className='flex items-center 850:mb-20 group'>
          <div className={`p-2 rounded-full shadow-[6px_5px_16px_0px_rgb(0,0,0,0.15)] mr-6 group-hover-bg-${color} ease-in-out duration-300`}><FontAwesomeIcon icon={faCheck} className={`w-5 text-${color} group-hover:opacity-100 group-hover:text-white ease-in-out duration-300`} /></div>
          <p className='text-greyText text-lg'>A different way of thinking, both inside and outside box. We do not have the best, we do have to give our best.</p>
        </div>
      </div>
    </section>
  )
}