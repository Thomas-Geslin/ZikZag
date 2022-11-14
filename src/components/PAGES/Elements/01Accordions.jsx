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
        } else if(faqResponse === responseTarget) {
            remove[0].classList.remove('faqResponseActive');
        } else {
            remove[0].classList.remove('faqResponseActive');
            target.classList.add('faqResponseActive');
        }
    }


    return(
        <section className='mt-24'>
            <p className='text-slightGrey font-Amiri text-4xl mb-5'>Accordions & Tabs</p>

            <div className='flex'>
                <div className='w-[550px]'>
                    <div id='wrong' onClick={() => { activeResponse('wrong'); setFaqResponse('wrong'); }} className='mb-5'>
                        <div className='mb-5 flex items-center justify-between bg-greyBackground relative w-full p-4 rounded hover:bg-white hover:shadow-[3px_3px_20px_3px_#eae9e9] hover:cursor-pointer group ease-in-out duration-300'>
                            <p className='text-slightGrey font-bold group-hover:text-orange ease-in-out duration-300'>When should I receive my money?</p>
                            <FontAwesomeIcon icon={faArrowRightLong} className='w-5 rotate-45 text-[#bfbfbf] group-hover:text-orange group-hover:-rotate-45 group-hover:text-orange ease-in-out duration-500' />
                        </div>

                        <p className='w-11/12 m-auto text-greyText hidden h-0'>
                            We help companies generate real results today and build a strategy that will endure well into the future. Zikzag advanced manufacturing experts provide your company with deep experience in the aerospace.
                        </p>
                    </div>


                    <div id='marketing' onClick={() => { activeResponse('marketing'); setFaqResponse('marketing'); }} className='mb-5'>
                        <div className='mb-5 flex items-center justify-between bg-greyBackground relative w-full p-4 rounded hover:bg-white hover:shadow-[3px_3px_20px_3px_#eae9e9] hover:cursor-pointer group ease-in-out duration-300'>
                            <p className='text-slightGrey font-bold group-hover:text-orange ease-in-out duration-300'>Why should I subscribe to newsletter?</p>
                            <FontAwesomeIcon icon={faArrowRightLong} className='w-5 rotate-45 text-[#bfbfbf] group-hover:text-orange group-hover:-rotate-45 group-hover:text-orange ease-in-out duration-500' />
                        </div>

                        <p className='w-11/12 m-auto text-greyText hidden h-0'>
                            We help companies generate real results today and build a strategy that will endure well into the future. Zikzag advanced manufacturing experts provide your company with deep experience in the aerospace.
                        </p>
                    </div>
                    

                    <div id='on-going' onClick={() => { activeResponse('on-going'); setFaqResponse('on-going'); }} className='mb-5'>
                        <div className='mb-5 flex items-center justify-between bg-greyBackground relative w-full p-4 rounded hover:bg-white hover:shadow-[3px_3px_20px_3px_#eae9e9] hover:cursor-pointer group ease-in-out duration-300'>
                            <p className='text-slightGrey font-bold group-hover:text-orange ease-in-out duration-300'>Why my card payment is failing?</p>
                            <FontAwesomeIcon icon={faArrowRightLong} className='w-5 rotate-45 text-[#bfbfbf] group-hover:text-orange group-hover:-rotate-45 group-hover:text-orange ease-in-out duration-500' />
                        </div>

                        <p className='w-11/12 m-auto text-greyText hidden h-0'>
                            We help companies generate real results today and build a strategy that will endure well into the future. Zikzag advanced manufacturing experts provide your company with deep experience in the aerospace.
                        </p>
                    </div>
                </div>


                <div className='w-1/2 ml-8'>
                    <div className='mb-6'>
                        <button className="bg-greyBackground text-slightGrey font-bold text-sm py-3.5 px-8 rounded mr-2.5 hover:bg-darkBlueBackground hover:text-white hovercursor-pointer ease-in-out duration-300">Quality</button>
                        <button className="bg-greyBackground text-slightGrey font-bold text-sm py-3.5 px-8 rounded mr-2.5 hover:bg-darkBlueBackground hover:text-white hovercursor-pointer ease-in-out duration-300">Support</button>
                        <button className="bg-greyBackground text-slightGrey font-bold text-sm py-3.5 px-8 rounded hover:bg-darkBlueBackground hover:text-white hovercursor-pointer ease-in-out duration-300">People</button>
                    </div>
                    <p className='text-greyText mb-6 leading-7'>From implantables to wearables, embedded system software has become an integrated part of our lives. We help companies across all markets continue to push the boundaries of hardware and software design through our dedicated embedded system engineering practice</p>
                    <p className='text-greyText leading-7'>Since 2007 we have been a visionary and a reliable software engineering partner for world-class brands. We are a boutique digital transformation consultancy and software development company.</p>
                </div>
            </div>
        </section>
    )
}