import { useEffect } from "react";


export default function CounterElement() {
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
                autoIncrement(15, 'numberTarget5', 0);
                autoIncrement(250, 'numberTarget6', 3);
                autoIncrement(36, 'numberTarget7', 0);
                autoIncrement(17, 'numberTarget8', 0);
                autoIncrement(15, 'numberTarget9', 0);
                autoIncrement(250, 'numberTarget10', 3);
                autoIncrement(36, 'numberTarget11', 0);
                autoIncrement(17, 'numberTarget12', 0);
              };
          })
          
        }, optionsNumber);
        observerNumber.observe(viewportNumber);
    }, [])


    return(
        <section className='mt-20'>
            <p className='text-slightGrey font-Amiri text-4xl mb-10'>Counters</p>


            <div id="numberViewport" className='flex justify-between m-auto'>
                <div className='flex items-center'>
                    <p id='numberTarget1' className='text-orange text-7xl font-Amiri mr-3'>0</p>
                    <p className='text-sm font-bold text-slightGrey w-1/2'>YEARS OF EXPERIENCE</p>
                </div>

                <div className='flex items-center'>
                    <p id='numberTarget2' className='text-orange text-7xl font-Amiri mr-3'>0</p>
                    <p className='text-sm font-bold text-slightGrey w-1/2'>TRUSTED CLIENTS</p>
                </div>

                <div className='flex items-center'>
                    <p id='numberTarget3' className='text-orange text-7xl font-Amiri mr-3'>0</p>
                    <p className='text-sm font-bold text-slightGrey w-1/2'>VISITED CONFERENCES</p>
                </div>

                <div className='flex items-center'>
                    <p id='numberTarget4' className='text-orange text-7xl font-Amiri mr-3'>0</p>
                    <p className='text-sm font-bold text-slightGrey w-1/2'>MASTER CERTIFICATION</p>
                </div>
            </div>


            <div className='rounded-lg bg-darkBlueBackground flex text-center py-16 relative m-auto my-10'>
                <div className='relative ml-20'>
                    <p id='numberTarget5' className='font-Amiri text-7xl text-orange tracking-tighter'>0</p>
                    <p className='text-white font-bold text-sm w-2/3 m-auto'>YEARS OF EXPERIENCE</p>
                    <span className='absolute text-3xl text-greyText font-light -top-5 right-5'>+</span>
                </div>

                <div className='relative mx-36'>
                    <p id='numberTarget6' className='font-Amiri text-7xl text-orange tracking-tighter'>0</p>
                    <p className='text-white font-bold text-sm w-2/3 m-auto'>TRUSTED CLIENTS</p>
                    <span className='absolute text-3xl text-greyText font-light -top-5 -right-3'>+</span>
                </div>

                <div className='relative mr-36'>
                    <p id='numberTarget7' className='font-Amiri text-7xl text-orange tracking-tighter'>0</p>
                    <p className='text-white font-bold text-sm w-2/3 m-auto'>VISITED CONFERENCES</p>
                    <span className='absolute text-3xl text-greyText font-light -top-5 right-5'>+</span>
                </div>

                <div className='relative mr-20'>
                    <p id='numberTarget8' className='font-Amiri text-7xl text-orange tracking-tighter'>0</p>
                    <p className='text-white font-bold text-sm w-2/3 m-auto'>MASTER CERTIFICATION</p>
                    <span className='absolute text-3xl text-greyText font-light -top-5 right-5'>+</span>
                </div>
            </div>


            <div className='flex text-center py-16 relative m-auto my-10'>
                <div className='relative ml-20'>
                    <p id='numberTarget9' className='font-Amiri text-7xl text-orange tracking-tighter'>0</p>
                    <p className='font-bold text-sm w-2/3 m-auto'>YEARS OF EXPERIENCE</p>
                    <span className='absolute text-3xl text-greyText font-light -top-5 right-5'>+</span>
                </div>

                <div className='relative mx-36'>
                    <p id='numberTarget10' className='font-Amiri text-7xl text-orange tracking-tighter'>0</p>
                    <p className='font-bold text-sm w-2/3 m-auto'>TRUSTED CLIENTS</p>
                    <span className='absolute text-3xl text-greyText font-light -top-5 -right-3'>+</span>
                </div>

                <div className='relative mr-36'>
                    <p id='numberTarget11' className='font-Amiri text-7xl text-orange tracking-tighter'>0</p>
                    <p className='font-bold text-sm w-2/3 m-auto'>VISITED CONFERENCES</p>
                    <span className='absolute text-3xl text-greyText font-light -top-5 right-5'>+</span>
                </div>

                <div className='relative mr-20'>
                    <p id='numberTarget12' className='font-Amiri text-7xl text-orange tracking-tighter'>0</p>
                    <p className='font-bold text-sm w-2/3 m-auto'>MASTER CERTIFICATION</p>
                    <span className='absolute text-3xl text-greyText font-light -top-5 right-5'>+</span>
                </div>
            </div>
        </section>
    )
}