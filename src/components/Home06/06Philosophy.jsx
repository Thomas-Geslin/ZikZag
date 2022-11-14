import Image from "next/image"
import { useEffect } from "react"

import background from '../../public/assets/Home06/philosophy_background.png'
import square from '../../public/assets/Home06/philosophy_square.png'


export default function PhilosophyHome06() {
    useEffect(() => {
        // Function for auto-increment counter on scroll
        function autoIncrement(limit, target, detail) {
            let numberLimit = limit;
            let numberInitial = 0;
            let timer = 2.5;
            let interval = Math.ceil((timer * 1000) / numberLimit - detail);
            const numberTarget = document.getElementById(target)

            function countdown() {
                numberTarget.innerHTML = ++numberInitial;
                if (numberInitial < numberLimit) {
                    setTimeout(countdown, interval);
                }
            }
            setTimeout(countdown, interval);
        }
        const viewportNumber = document.getElementById('numberViewport');
    
        const optionsNumber = {
          root: null,
          treshold: 0.5
        }
    
        const observerNumber = new IntersectionObserver(function (entries) {
          entries.forEach((entry) => {
              if(entry.isIntersecting) {
                autoIncrement(15, 'numberTarget1', 0);
                autoIncrement(250, 'numberTarget2', 3);
                autoIncrement(36, 'numberTarget3', 0);
                autoIncrement(17, 'numberTarget4', 0);
              };
          })
          
        }, optionsNumber);
        observerNumber.observe(viewportNumber);
    }, [])


    return(
        <section className='mb-32 flex flex-col items-center mt-16'>
            <div className='flex justify-center'>
                <div className='w-1/4'>
                    <h2 className='text-orange font-semibold mb-4 relative mt-32 650:mt-80'>OUR PHILOSOPHY<span className='absolute bottom-1 ml-1 bg-orange h-0.5 w-2'></span></h2>
                    <h3 className='font-Amiri text-black text-5xl leading-[55px] mb-4'>Solutions that Grow Your Business</h3>
                    
                    <div className='mb-6'>
                        <button className="bg-greyBackground text-slightGrey font-bold text-sm py-3.5 px-8 rounded mr-2.5 hover:bg-darkBlueBackground hover:text-white hovercursor-pointer ease-in-out duration-300">Quality</button>
                        <button className="bg-greyBackground text-slightGrey font-bold text-sm py-3.5 px-8 rounded mr-2.5 hover:bg-darkBlueBackground hover:text-white hovercursor-pointer ease-in-out duration-300">Support</button>
                        <button className="bg-greyBackground text-slightGrey font-bold text-sm py-3.5 px-8 rounded hover:bg-darkBlueBackground hover:text-white hovercursor-pointer ease-in-out duration-300">People</button>
                    </div>
                    <p className='text-greyText mb-6 leading-7 w-[95%]'>From implantables to wearables, embedded system software has become an integrated part of our lives. We help companies across all markets continue to push the boundaries of hardware and software design through our dedicated embedded system engineering practice</p>
                    <p className='text-greyText leading-7 w-11/12'>Our team applies its wide-ranging experience to determining the strategies that will best enable our clients to achieve.</p>
                </div>

                <div className='relative top-24 left-40'>
                    <Image src={background} alt='femme travaillant derrière un bureau' className='relative z-10' />
                    <Image src={square} alt='carré de décoration' className='absolute top-0 animation-philosophy-home06' />
                </div>
            </div>

            <div id='numberViewport' className='flex text-center pt-16 relative w-2/3 pl-6'>
              <div className='relative flex items-center'>
                  <p id='numberTarget1' className='font-Amiri text-7xl text-orange tracking-tighter mr-5'>0</p>
                  <p className='text-slightGrey font-bold text-sm text-left leading-6'>YEARS OF EXPERIENCE</p>
              </div>

              <div className='relative mx-36 flex items-center'>
                  <p id='numberTarget2' className='font-Amiri text-7xl text-orange tracking-tighter mr-5'>0</p>
                  <p className='text-slightGrey font-bold text-sm text-left leading-6'>TRUSTED CLIENTS</p>
              </div>

              <div className='relative mr-36 flex items-center'>
                  <p id='numberTarget3' className='font-Amiri text-7xl text-orange tracking-tighter mr-5'>0</p>
                  <p className='text-slightGrey font-bold text-sm text-left leading-6'>VISITED CONFERENCES</p>
              </div>

              <div className='relative mr-20 flex items-center'>
                  <p id='numberTarget4' className='font-Amiri text-7xl text-orange tracking-tighter mr-5'>0</p>
                  <p className='text-slightGrey font-bold text-sm text-left leading-6'>MASTER CERTIFICATION</p>
              </div>
            </div>
        </section>
    )
}