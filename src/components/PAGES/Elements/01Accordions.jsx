import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'


export default function AccordionsElement() {
    const [faqResponse, setFaqResponse] = useState(null);

    function activeResponse(responseTarget) {
        let target = document.getElementById(responseTarget);
        let remove = document.getElementsByClassName('faqResponseActive');
        if(remove.length === 0) {
            target.classList.add('faqResponseActive');
            target.classList.add('mb-32');
        } else if(faqResponse === responseTarget) {
            remove[0].classList.remove('faqResponseActive', 'mb-32');
        } else {
            remove[0].classList.remove('faqResponseActive', 'mb-32');
            target.classList.add('faqResponseActive');
            target.classList.add('mb-32');
        }
    }

    function activeRectangle(categorie) {
        let currentCategorie = categorie;
        let remove = document.getElementsByClassName('home06-philosophy-active');
        remove[0].classList.remove('home06-philosophy-active');
        let target = document.getElementById(currentCategorie);
        target.classList.add('home06-philosophy-active');
    }


    return(
        <section className='mt-24 z-30 relative'>
            <p className='text-slightGrey font-Amiri text-4xl mb-5'>Accordions & Tabs</p>

            <div className='flex max-xl:flex-col max-xl:items-center'>
                <div className='w-[550px] z-10 max-xl:mb-10 650:w-[300px]'>
                    <div id='wrong' onClick={() => { activeResponse('wrong'); setFaqResponse('wrong'); }} className='mb-5 relative ease-in-out duration-500 top-2'>
                        <div className='mb-5 flex items-center justify-between bg-greyBackground relative w-full p-4 rounded hover:bg-white hover:shadow-[3px_3px_20px_3px_#eae9e9] hover:cursor-pointer group ease-in-out duration-300'>
                            <p className='text-slightGrey font-bold group-hover:text-orange ease-in-out duration-300'>What if I pick the wrong plan?</p>
                            <FontAwesomeIcon icon={faArrowRightLong} className='w-5 rotate-45 text-[#bfbfbf] group-hover:text-orange group-hover:-rotate-45 group-hover:text-orange ease-in-out duration-500' />
                        </div>

                        <p className='w-11/12 leading-7 m-auto text-greyText faqText'>
                            We help companies generate real results today and build a strategy that will endure well into the future. Zikzag advanced manufacturing experts provide your company with deep experience in the aerospace.
                        </p>
                    </div>


                    <div id='marketing' onClick={() => { activeResponse('marketing'); setFaqResponse('marketing'); }} className='mb-5 relative ease-in-out duration-500 top-2'>
                        <div className='mb-5 flex items-center justify-between bg-greyBackground relative w-full p-4 rounded hover:bg-white hover:shadow-[3px_3px_20px_3px_#eae9e9] hover:cursor-pointer group ease-in-out duration-300'>
                            <p className='text-slightGrey font-bold group-hover:text-orange ease-in-out duration-300'>Can you run online marketing campaigns for us?</p>
                            <FontAwesomeIcon icon={faArrowRightLong} className='w-5 rotate-45 text-[#bfbfbf] group-hover:text-orange group-hover:-rotate-45 group-hover:text-orange ease-in-out duration-500' />
                        </div>

                        <p className='w-11/12 leading-7 m-auto text-greyText faqText'>
                            We help companies generate real results today and build a strategy that will endure well into the future. Zikzag advanced manufacturing experts provide your company with deep experience in the aerospace.
                        </p>
                    </div>
                        

                    <div id='on-going' onClick={() => { activeResponse('on-going'); setFaqResponse('on-going'); }} className='mb-5 relative ease-in-out duration-500 top-2'>
                        <div className='mb-5 flex items-center justify-between bg-greyBackground relative w-full p-4 rounded hover:bg-white hover:shadow-[3px_3px_20px_3px_#eae9e9] hover:cursor-pointer group ease-in-out duration-300'>
                            <p className='text-slightGrey font-bold group-hover:text-orange ease-in-out duration-300'>Do you offer on-going help with our new site?</p>
                            <FontAwesomeIcon icon={faArrowRightLong} className='w-5 rotate-45 text-[#bfbfbf] group-hover:text-orange group-hover:-rotate-45 group-hover:text-orange ease-in-out duration-500' />
                        </div>

                        <p className='w-11/12 leading-7 m-auto text-greyText faqText'>
                            We help companies generate real results today and build a strategy that will endure well into the future. Zikzag advanced manufacturing experts provide your company with deep experience in the aerospace.
                        </p>
                    </div>
                </div>


                <div className='w-1/2 ml-8 850:w-full 850:ml-0'>
                    <div className='mb-6 850:flex 850:flex-col 850:items-center'>
                        <button id="quality" onClick={() => activeRectangle('quality')} className="home06-philosophy-active bg-greyBackground text-slightGrey font-bold text-sm py-3.5 px-8 rounded mr-2.5 hover:bg-darkBlueBackground hover:text-white hover:cursor-pointer ease-in-out duration-300 850:mb-4">Quality</button>
                        <button id="support" onClick={() => activeRectangle('support')} className="bg-greyBackground text-slightGrey font-bold text-sm py-3.5 px-8 rounded mr-2.5 hover:bg-darkBlueBackground hover:text-white hover:cursor-pointer ease-in-out duration-300 850:mb-4">Support</button>
                        <button id="people" onClick={() => activeRectangle('people')} className="bg-greyBackground text-slightGrey font-bold text-sm py-3.5 px-8 rounded hover:bg-darkBlueBackground hover:text-white hover:cursor-pointer ease-in-out duration-300 850:mb-4">People</button>
                    </div>
                    <p className='text-greyText mb-6 leading-7 850:w-11/12'>From implantables to wearables, embedded system software has become an integrated part of our lives. We help companies across all markets continue to push the boundaries of hardware and software design through our dedicated embedded system engineering practice</p>
                    <p className='text-greyText leading-7 850:w-11/12'>Since 2007 we have been a visionary and a reliable software engineering partner for world-class brands. We are a boutique digital transformation consultancy and software development company.</p>
                </div>
            </div>
        </section>
    )
}