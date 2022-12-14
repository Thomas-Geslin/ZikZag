import Head from 'next/head'
import Image from 'next/image'

import WidgetTheme from '../../components/WidgetTheme'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebookF, faPinterestP, faInstagram } from '@fortawesome/free-brands-svg-icons'

import logo from '../../public/assets/PAGES/ComingSoon/logo.png'
import { useEffect } from 'react'


export default function About() {
    useEffect(() => {
        // Actualise le compteur toutes les secondes
        function setChrono() {
            const now = new Date().getTime();
            const countdownDate = new Date('Januar 01, 2023').getTime();

            const difference = (countdownDate - now) / 1000;

            let days = Math.floor(difference / (60 * 60 *24));
            if(days < 10) days = '0' + days;
            let hours = Math.floor((difference - (days * 60 * 60 *24)) / (60 * 60));
            if(hours < 10) hours = '0' + hours;
            let minutes = Math.floor((difference - (days * 60 * 60 *24 + hours * 60 * 60)) / 60);
            if(minutes < 10) minutes = '0' + minutes;
            let seconds = Math.floor((difference - (days * 60 * 60 *24 + hours * 60 * 60 + minutes * 60)));
            if(seconds < 10) seconds = '0' + seconds;

            const daysTarget = document.getElementById('dayTarget');
            daysTarget.innerText = days;
            const hoursTarget = document.getElementById('hoursTarget');
            hoursTarget.innerText = hours;
            const minutesTarget = document.getElementById('minutesTarget');
            minutesTarget.innerText = minutes;
            const secondsTarget = document.getElementById('secondsTarget');
            secondsTarget.innerText = seconds;
        }

        setInterval(() => {
            setChrono();
        }, 1000)
    }, [])

    
    return (
        <div className='font-NunitoSans'>
            <Head>
                <title>ZikZag | ComingSoon</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="../"/>
            </Head>

            <main className='relative z-10 bg-comingTeamBackground bg-cover bg-center bg-no-repeat text-center'>
                <Image src={logo} alt="logo de l'entreprise" className='pt-14 pb-24 ml-auto mr-auto max-xl:pb-14 850-1050:pt-28 650-850:pt-28 430-650:pt-28' />
                <h1 className='font-Amiri text-white text-[80px] 650:text-[50px] 430-850:pb-12 430:pb-0'>We`re Coming Soon</h1>

                <div id='date' className='flex justify-center items-center text-white font-Amiri text-[120px] mt-4 1050-xl:text-[100px] max-xl:mt-0 850-1050:text-[70px] 650-850:text-[40px] 650:text-[30px]'>
                    <div>
                        <p id='dayTarget'></p>
                        <p className='font-NunitoSans text-lg font-bold relative -top-8 650-850:text-base 850:top-0 650:text-sm'>DAYS</p>
                    </div>
                    
                    <span className='mx-20 text-orange font-NunitoSans text-8xl relative bottom-6 850:text-3xl 850:mx-[3%]'>:</span>

                    <div>
                        <p id='hoursTarget'></p>
                        <p className='font-NunitoSans text-lg font-bold relative -top-8 650-850:text-base 850:top-0 650:text-sm'>HOURS</p>
                    </div>
                    
                    <span className='mx-20 text-orange font-NunitoSans text-8xl relative bottom-6 850:text-3xl 850:mx-[3%]'>:</span>

                    <div>
                        <p id='minutesTarget'></p>
                        <p className='font-NunitoSans text-lg font-bold relative -top-8 650-850:text-base 850:top-0 650:text-sm'>MINUTES</p>
                    </div>
                    
                    <span className='mx-20 text-orange font-NunitoSans text-8xl relative bottom-6 850:text-3xl 850:mx-[3%]'>:</span>

                    <div>
                        <p id='secondsTarget'></p>
                        <p className='font-NunitoSans text-lg font-bold relative -top-8 650-850:text-base 850:top-0 650:text-sm'>SECONDS</p>
                    </div>
                </div>

                <p className='text-white text-lg leading-8 mt-8 650:w-[90%] 650:m-auto 650:mt-10'>We are working very hard on the new version of our site.<br></br>It will bring a lot of new features. Stay tuned!</p>
            
                <div className='mt-8 pb-28 430:pb-20'>
                    <input type='email' placeholder='Your Email *' className='bg-[#f5f5f533] placeholder:text-white p-3.5 rounded-sm w-96 mr-5 650:w-[80%]'></input>
                    <button className='text-white font-bold text-sm bg-orange px-8 py-4 rounded 650:mt-8'>SUBSCRIBE</button>
                </div>

                <div className='flex justify-center items-center pb-[63px]'>
                    <div className='bg-[#1DA1F2] p-[9px] rounded-full mb-3 mr-3 hover:shadow-none hover:bg-white ease-in-out duration-300 group'><FontAwesomeIcon icon={faTwitter} className='w-3.5 text-white group-hover:text-[#1DA1F2]' /></div>
                    <div className='bg-[#3B5998] px-3 py-2.5 rounded-full mb-3 mr-3 hover:shadow-none hover:bg-white ease-in-out duration-300 group'><FontAwesomeIcon icon={faFacebookF} className='w-2 text-white group-hover:text-[#3B5998]' /></div>
                    <div className='bg-[#E40000] px-3 py-2.5 rounded-full mb-3 mr-3 hover:shadow-none hover:bg-white ease-in-out duration-300 group'><FontAwesomeIcon icon={faPinterestP} className='w-2.5 text-white group-hover:text-[#E40000]' /></div>
                    <div className='bg-[#C32AA3] p-2 rounded-full mb-3 mr-3 hover:shadow-none hover:bg-white ease-in-out duration-300 group'><FontAwesomeIcon icon={faInstagram} className='w-3.5 text-white group-hover:text-[#C32AA3]' /></div>
                </div>
            </main>

            <WidgetTheme />
        </div>  
    )
}