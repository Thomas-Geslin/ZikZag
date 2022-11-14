import { useEffect } from "react";

export default function TextSingle() {
    useEffect(() => {
        // Intersection Obeserver for fixed progress-bar Strategy
        function autoIncrementBar(limit, target) {
            let numberLimit = limit;
            let numberInitial = 0;
            let timer = 1.5;
            let interval = Math.ceil((timer * 1000) / numberLimit );
            const numberTarget = document.getElementById(target)

            function countdown() {
                numberTarget.innerHTML = ++numberInitial + '%';
                if (numberInitial < numberLimit) {
                    setTimeout(countdown, interval);
                }
            }
            setTimeout(countdown, interval);
        }

        const target = document.querySelectorAll('.progressBarStrategyTarget');
        const viewport = document.getElementById('progressBarStrategy');
    
        const options = {
          root: null,
          treshold: 0.5
        }
    
        const observer = new IntersectionObserver(function (entries) {
          entries.forEach((entry) => {
              if(entry.isIntersecting) {
                autoIncrementBar(55, 'firstBar');
                autoIncrementBar(75, 'secondBar');
                autoIncrementBar(68, 'thirdBar');
                for(entry of target) {
                entry.classList.add('strategy-bar-animation')
                }
              };
          })
          
        }, options);
        observer.observe(viewport);
    }, [])


    return(
        <section className='w-[61%] m-auto'>
            <div className='mb-10'>
                <p className='font-Amiri text-slightGrey text-3xl mb-4'>Personal Experience</p>
                <p className='text-greyText leading-7 mb-4'>Since joining Zikzag in 2009, Chriss More has helped turn the company from a group of bright technology minds working with startups into a global Digital Product Engineering Services leader helping Fortune 500 companies on their innovation agenda. In Chriss’s time as President and CEO of company, the company has experienced explosive growth in size and revenue – all while developing a culture that fosters engaged employees around innovation.</p>
                <p className='text-greyText leading-7'>Chriss is a frequent speaker on the topics of global innovation and digital disruption. He is also an avid cook and history buff. You can find him dining late at night with the chefs of the hotels where he stays during his travels, or reading in his home library.</p>
            </div>


            <div className='flex mb-6 justify-between'>
                <div className='w-[48.5%]'>
                    <p className='font-Amiri text-slightGrey text-3xl mb-4'>Professional Skills</p>

                    <div className="relative mb-12 max-xl:w-full" id='progressBarStrategy'>
                        <div className="flex justify-between text-slightGrey font-bold text-sm">
                            <p>DIGITAL STRATEGY</p>
                            <p id='firstBar'>0%</p>
                        </div>

                        <span id='let' className="w-[55%] h-1 progressBarStrategyTarget scale-x-0 bg-orange absolute -bottom-3 rounded ease-out duration-1000"></span>
                        <span className="h-px w-full absolute -bottom-5 bg-[#dbdbdb]"></span>
                    </div>

                    <div className="relative mb-12 max-xl:w-full">
                        <div className="flex justify-between text-slightGrey font-bold text-sm">
                            <p>FINANCIAL SERVICE</p>
                            <p id='secondBar'>0%</p>
                        </div>

                        <span className="w-[75%] h-1 progressBarStrategyTarget scale-x-0 bg-orange absolute -bottom-3 rounded"></span>
                        <span className="h-px w-full absolute -bottom-5 bg-[#dbdbdb]"></span>
                    </div>

                    <div className="relative mb-10 max-xl:w-full max-xl:mb-44">
                        <div className="flex justify-between text-slightGrey font-bold text-sm">
                            <p>CONSALTING</p>
                            <p id='thirdBar'>0%</p>
                        </div>

                        <span className="w-[68%] h-1 progressBarStrategyTarget scale-x-0 bg-orange absolute -bottom-3 rounded"></span>
                        <span className="h-px w-full absolute -bottom-5 bg-[#dbdbdb]"></span>
                    </div>
                </div>
                
                <div className='w-[48.5%]'>
                    <p className='font-Amiri text-slightGrey text-3xl mb-4'>Early Years</p>
                    <p className='text-greyText leading-7 mb-4'>He is a services industry veteran with a diversified wealth of expertise that includes worldwide operations, delivery, process improvements, mergers and acquisitions, and integration, as well as sales and business development.</p>
                    <p className='text-greyText leading-7 mb-4'>He is responsible for all delivery, operations, talent recruitment and management, and information technology. He is responsible for the alignment and prioritization of company investments – enabling growth.</p>
                </div>
            </div>


            <div className='mb-20'>
                <p className='font-Amiri text-slightGrey text-3xl mb-4'>Career Guidelines</p>
                <p className='text-greyText mb-5 leading-7'>Prior to joining Integrio, he spent 20+ years at Inmosys, where he held a wide range of global leadership roles, from services to products, and across operations and sales. Most recently, he was SVP & Global Head of the Manufacturing business, as well as a board member of their software subsidiary. He is also an avid cook and history buff. You can find him dining late at night with the chefs of the hotels where he stays during his travels, or reading in his home library.</p>
            </div>
        </section>
    )
}