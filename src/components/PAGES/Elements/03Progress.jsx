import { useEffect } from "react";


export default function ProgressElement() {
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
                autoIncrementBar(55, 'fourthBar');
                autoIncrementBar(75, 'fifthBar');
                autoIncrementBar(68, 'sixthBar');
                for(entry of target) {
                entry.classList.add('strategy-bar-animation')
                }
              };
          })
          
        }, options);
        observer.observe(viewport);
    }, [])


    return(
        <section className='mt-20'>
            <p className='text-slightGrey font-Amiri text-4xl mb-6'>Progress Bars</p>

            <div className='flex justify-between'>
                <div className="w-[48.5%] max-xl:w-full relative">
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


                <div className="w-[48.5%] max-xl:w-full relative">
                    <div className="relative mb-12 max-xl:w-full" id='progressBarStrategy'>
                        <div className="flex justify-between text-slightGrey font-bold text-sm">
                            <p>DIGITAL STRATEGY</p>
                            <p id='fourthBar'>0%</p>
                        </div>

                        <span id='let' className="w-[55%] h-1 progressBarStrategyTarget scale-x-0 bg-darkBlueBackground absolute -bottom-3 rounded ease-out duration-1000"></span>
                        <span className="h-px w-full absolute -bottom-5 bg-[#dbdbdb]"></span>
                    </div>

                    <div className="relative mb-12 max-xl:w-full">
                        <div className="flex justify-between text-slightGrey font-bold text-sm">
                            <p>FINANCIAL SERVICE</p>
                            <p id='fifthBar'>0%</p>
                        </div>

                        <span className="w-[75%] h-1 progressBarStrategyTarget scale-x-0 bg-darkBlueBackground absolute -bottom-3 rounded"></span>
                        <span className="h-px w-full absolute -bottom-5 bg-[#dbdbdb]"></span>
                    </div>

                    <div className="relative mb-10 max-xl:w-full max-xl:mb-44">
                        <div className="flex justify-between text-slightGrey font-bold text-sm">
                            <p>CONSALTING</p>
                            <p id='sixthBar'>0%</p>
                        </div>

                        <span className="w-[68%] h-1 progressBarStrategyTarget scale-x-0 bg-darkBlueBackground absolute -bottom-3 rounded"></span>
                        <span className="h-px w-full absolute -bottom-5 bg-[#dbdbdb]"></span>
                    </div>
                </div>
            </div>
        </section>
    )
}