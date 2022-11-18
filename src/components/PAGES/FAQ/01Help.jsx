import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'


export default function HelpFAQ() {
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



    return(
        <section className='text-center'>
            <h2 className='text-orange font-bold mb-4 pt-32 w-40 m-auto relative max-xl:pt-36 850:mt-12'><span className='absolute bottom-1 left-5 bg-orange h-0.5 w-2'></span>NEED HELP?<span className='absolute bottom-1 ml-1 bg-orange h-0.5 w-2'></span></h2>
            <h3 className='font-Amiri text-slightGrey text-5xl mb-5'>Top 10 Most Popular FAQ`s</h3>
            <p className='text-greyText text-lg w-[65%] m-auto mb-10 1060:w-9/12'>We are specialists in both economics and information technologies and we apply our full range of talent to creating the perfect solution for each client’s needs.</p>
        
            <div className='flex justify-between'>
                <div className='w-[550px] z-10'>
                    <div id='wrong' onClick={() => { activeResponse('wrong'); setFaqResponse('wrong'); }} className='mb-5 relative ease-in-out duration-500 top-2'>
                        <div className='mb-5 flex items-center justify-between bg-greyBackground relative w-full p-4 rounded hover:bg-white hover:shadow-[3px_3px_20px_3px_#eae9e9] hover:cursor-pointer group ease-in-out duration-300'>
                            <p className='text-slightGrey font-bold group-hover:text-orange ease-in-out duration-300'>What if I pick the wrong plan?</p>
                            <FontAwesomeIcon icon={faArrowRightLong} className='w-5 rotate-45 text-[#bfbfbf] group-hover:text-orange group-hover:-rotate-45 group-hover:text-orange ease-in-out duration-500' />
                        </div>

                        <p className='w-11/12 leading-7 m-auto text-greyText faqText'>
                            We help companies generate real results today and build a strategy that will endure well into the future. Zikzag advanced manufacturing experts provide your company with deep experience in the aerospace.
                        </p>
                    </div>


                    <div id='subscribe' onClick={() => { activeResponse('subscribe'); setFaqResponse('subscribe'); }} className='mb-5 relative ease-in-out duration-500 top-2'>
                        <div className='mb-5 flex items-center justify-between bg-greyBackground relative w-full p-4 rounded hover:bg-white hover:shadow-[3px_3px_20px_3px_#eae9e9] hover:cursor-pointer group ease-in-out duration-300'>
                            <p className='text-slightGrey font-bold group-hover:text-orange ease-in-out duration-300'>Why should I subscribe to newsletter?</p>
                            <FontAwesomeIcon icon={faArrowRightLong} className='w-5 rotate-45 text-[#bfbfbf] group-hover:text-orange group-hover:-rotate-45 group-hover:text-orange ease-in-out duration-500' />
                        </div>

                        <p className='w-11/12 leading-7 m-auto text-greyText faqText'>
                            We help companies generate real results today and build a strategy that will endure well into the future. Zikzag advanced manufacturing experts provide your company with deep experience in the aerospace.
                        </p>
                    </div>
                    

                    <div id='card' onClick={() => { activeResponse('card'); setFaqResponse('card'); }} className='mb-5 relative ease-in-out duration-500 top-2'>
                        <div className='mb-5 flex items-center justify-between bg-greyBackground relative w-full p-4 rounded hover:bg-white hover:shadow-[3px_3px_20px_3px_#eae9e9] hover:cursor-pointer group ease-in-out duration-300'>
                            <p className='text-slightGrey font-bold group-hover:text-orange ease-in-out duration-300'>Why my card payment is a?</p>
                            <FontAwesomeIcon icon={faArrowRightLong} className='w-5 rotate-45 text-[#bfbfbf] group-hover:text-orange group-hover:-rotate-45 group-hover:text-orange ease-in-out duration-500' />
                        </div>

                        <p className='w-11/12 leading-7 m-auto text-greyText faqText'>
                            We help companies generate real results today and build a strategy that will endure well into the future. Zikzag advanced manufacturing experts provide your company with deep experience in the aerospace.
                        </p>
                    </div>

                    
                    <div id='questions' onClick={() => { activeResponse('questions'); setFaqResponse('questions'); }} className='mb-5 relative ease-in-out duration-500 top-2'>
                        <div className='mb-5 flex items-center justify-between bg-greyBackground relative w-full p-4 rounded hover:bg-white hover:shadow-[3px_3px_20px_3px_#eae9e9] hover:cursor-pointer group ease-in-out duration-300'>
                            <p className='text-slightGrey font-bold group-hover:text-orange ease-in-out duration-300'>If I have questions, where can I find answers?</p>
                            <FontAwesomeIcon icon={faArrowRightLong} className='w-5 rotate-45 text-[#bfbfbf] group-hover:text-orange group-hover:-rotate-45 group-hover:text-orange ease-in-out duration-500' />
                        </div>

                        <p className='w-11/12 leading-7 m-auto text-greyText faqText'>
                            We help companies generate real results today and build a strategy that will endure well into the future. Zikzag advanced manufacturing experts provide your company with deep experience in the aerospace.
                        </p>
                    </div>


                    <div id='cancel' onClick={() => { activeResponse('cancel'); setFaqResponse('cancel'); }} className='mb-5 relative ease-in-out duration-500 top-2'>
                        <div className='mb-5 flex items-center justify-between bg-greyBackground relative w-full p-4 rounded hover:bg-white hover:shadow-[3px_3px_20px_3px_#eae9e9] hover:cursor-pointer group ease-in-out duration-300'>
                            <p className='text-slightGrey font-bold group-hover:text-orange ease-in-out duration-300'>What happens to my data if I cancel?</p>
                            <FontAwesomeIcon icon={faArrowRightLong} className='w-5 rotate-45 text-[#bfbfbf] group-hover:text-orange group-hover:-rotate-45 group-hover:text-orange ease-in-out duration-500' />
                        </div>

                        <p className='w-11/12 leading-7 m-auto text-greyText faqText'>
                            We help companies generate real results today and build a strategy that will endure well into the future. Zikzag advanced manufacturing experts provide your company with deep experience in the aerospace.
                        </p>
                    </div>
                </div>


                <div className='w-[550px] z-10'>
                    <div id='money' onClick={() => { activeResponse('money'); setFaqResponse('money'); }} className='mb-5 relative ease-in-out duration-500 top-2'>
                        <div className='mb-5 flex items-center justify-between bg-greyBackground relative w-full p-4 rounded hover:bg-white hover:shadow-[3px_3px_20px_3px_#eae9e9] hover:cursor-pointer group ease-in-out duration-300'>
                            <p className='text-slightGrey font-bold group-hover:text-orange ease-in-out duration-300'>When should I receive my money?</p>
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
                    

                    <div id='help' onClick={() => { activeResponse('help'); setFaqResponse('help'); }} className='mb-5 relative ease-in-out duration-500 top-2'>
                        <div className='mb-5 flex items-center justify-between bg-greyBackground relative w-full p-4 rounded hover:bg-white hover:shadow-[3px_3px_20px_3px_#eae9e9] hover:cursor-pointer group ease-in-out duration-300'>
                            <p className='text-slightGrey font-bold group-hover:text-orange ease-in-out duration-300'>Do you offer on-going help with our new site?</p>
                            <FontAwesomeIcon icon={faArrowRightLong} className='w-5 rotate-45 text-[#bfbfbf] group-hover:text-orange group-hover:-rotate-45 group-hover:text-orange ease-in-out duration-500' />
                        </div>

                        <p className='w-11/12 leading-7 m-auto text-greyText faqText'>
                            We help companies generate real results today and build a strategy that will endure well into the future. Zikzag advanced manufacturing experts provide your company with deep experience in the aerospace.
                        </p>
                    </div>

                    
                    <div id='answers' onClick={() => { activeResponse('answers'); setFaqResponse('answers'); }} className='mb-5 relative ease-in-out duration-500 top-2'>
                        <div className='mb-5 flex items-center justify-between bg-greyBackground relative w-full p-4 rounded hover:bg-white hover:shadow-[3px_3px_20px_3px_#eae9e9] hover:cursor-pointer group ease-in-out duration-300'>
                            <p className='text-slightGrey font-bold group-hover:text-orange ease-in-out duration-300'>If I have questions, where can I find answers?</p>
                            <FontAwesomeIcon icon={faArrowRightLong} className='w-5 rotate-45 text-[#bfbfbf] group-hover:text-orange group-hover:-rotate-45 group-hover:text-orange ease-in-out duration-500' />
                        </div>

                        <p className='w-11/12 leading-7 m-auto text-greyText faqText'>
                            We help companies generate real results today and build a strategy that will endure well into the future. Zikzag advanced manufacturing experts provide your company with deep experience in the aerospace.
                        </p>
                    </div>


                    <div id='data' onClick={() => { activeResponse('data'); setFaqResponse('data'); }} className='mb-5 relative ease-in-out duration-500 top-2'>
                        <div className='mb-5 flex items-center justify-between bg-greyBackground relative w-full p-4 rounded hover:bg-white hover:shadow-[3px_3px_20px_3px_#eae9e9] hover:cursor-pointer group ease-in-out duration-300'>
                            <p className='text-slightGrey font-bold group-hover:text-orange ease-in-out duration-300'>What happens to my data if I cancel?</p>
                            <FontAwesomeIcon icon={faArrowRightLong} className='w-5 rotate-45 text-[#bfbfbf] group-hover:text-orange group-hover:-rotate-45 group-hover:text-orange ease-in-out duration-500' />
                        </div>

                        <p className='w-11/12 leading-7 m-auto text-greyText faqText'>
                            We help companies generate real results today and build a strategy that will endure well into the future. Zikzag advanced manufacturing experts provide your company with deep experience in the aerospace.
                        </p>
                    </div>
                </div>
            </div>
            
        </section>
    )
}