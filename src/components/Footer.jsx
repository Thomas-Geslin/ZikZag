import Image from 'next/image'

import logo from '../public/assets/Home/logo_consultancy.png'
import line from '../public/assets/footer/footer_line.png'
import phone from '../public/assets/footer/icon_phone.png'
import placeholder from '../public/assets/footer/icon_placeholder.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebookF, faPinterestP, faInstagram } from '@fortawesome/free-brands-svg-icons'


export default function Footer() {
    return(
        <footer className='bg-[#0d1820] text-white -mt-14 max-xl:px-10 relative'>
            <div className='flex justify-between py-10 px-[19%] relative max-xl:px-0 850:flex-col'>
                <Image src={line} alt='ligne de décoration' className='absolute left-[40%] top-8' />
                <p className='font-Amiri text-[36px] z-10'>Start Your Journey to Better Business</p> 
                <button className='bg-orange py-4 px-7 rounded font-semibold text-[14px] hover:cursor-pointer hover:text-black hover:bg-white ease-in duration-300 850:w-[180px]'>GET IN TOUCH</button>
            </div>

            <span className='absolute h-px w-[60%] left-[50%] translate-x-[-50%] bg-[#212b32] max-xl:w-[90%]'></span>

            <div className='flex justify-between text-white mt-14 px-[19%]  max-xl:px-0 max-xl:flex-wrap'>
                <div>
                    <div className='flex items-start mb-4 leading-7'>
                        <Image src={placeholder} alt='icone de telephone' className='w-7 mr-3 top-1.5 relative' />
                        <p>27 Division ST, New York,<br></br>NY 10002, USA</p>
                    </div>
                    
                    <div className='flex items-center mb-5'>
                        <Image src={phone} alt='icone de telephone' className='w-7 mr-3' />
                        <p>zik_zag.mail@mail.com</p>
                    </div>

                    <div className='flex items-center'>
                        <Image src={phone} alt='icone de telephone' className='w-7 mr-3' />
                        <p className='font-Amiri text-[24px]'>+1 (800) 123 456 789</p>
                    </div>

                    <div className='flex justify-between mt-8 mb-12 w-7/12'>
                        <div className='rounded-full border-solid border border-[#212b32] p-2 hover:cursor-pointer hover:bg-[#1b93dc] ease-linear duration-200'><FontAwesomeIcon icon={faTwitter} className='w-3' /></div>
                        <div className='rounded-full border-solid border border-[#212b32] py-2 px-2.5 hover:cursor-pointer hover:bg-[#36528b] ease-linear duration-200'><FontAwesomeIcon icon={faFacebookF} className='w-2' /></div>
                        <div className='rounded-full border-solid border border-[#212b32] py-2 px-2.5 hover:cursor-pointer hover:bg-[#ce0203] ease-linear duration-200'><FontAwesomeIcon icon={faPinterestP} className='w-2.5' /></div>
                        <div className='rounded-full border-solid border border-[#212b32] p-2 hover:cursor-pointer hover:bg-[#b02895] ease-linear duration-200'><FontAwesomeIcon icon={faInstagram} className='w-3' /></div>
                    </div>
                </div>

                <div className='flex flex-col'>
                    <p className='text-navFooter mb-4 hover:cursor-pointer hover-underline-animation w-24'>Group Profil</p>
                    <p className='text-navFooter mb-4 hover:cursor-pointer hover-underline-animation'>Vision & Values</p>
                    <p className='text-navFooter mb-4 hover:cursor-pointer hover-underline-animation w-14'>History</p>
                    <p className='text-navFooter mb-4 hover:cursor-pointer hover-underline-animation w-14'>Awards</p>
                    <p className='text-navFooter mb-4 hover:cursor-pointer hover-underline-animation w-20'>Leadership</p>
                    <p className='text-navFooter mb-4 hover:cursor-pointer hover-underline-animation w-16'>Spotlight</p>
                </div>

                <div className='flex flex-col'>
                    <p className='text-navFooter mb-4 hover:cursor-pointer hover-underline-animation w-8'>CSR</p>
                    <p className='text-navFooter mb-4 hover:cursor-pointer hover-underline-animation'>Sustainability</p>
                    <p className='text-navFooter mb-4 hover:cursor-pointer hover-underline-animation w-14'>Careers</p>
                    <p className='text-navFooter mb-4 hover:cursor-pointer hover-underline-animation w-12'>Media</p>
                    <p className='text-navFooter mb-4 hover:cursor-pointer hover-underline-animation w-14'>Services</p>
                    <p className='text-navFooter mb-4 hover:cursor-pointer hover-underline-animation w-16'>Products</p>
                </div>

                <iframe className='grayscale rounded-xl mb-44 430:w-full 430:mb-60' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d112401.9924965113!2d-0.1960556790397087!3d51.49933399404513!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4291f3172409ea92!2slastminute.com%20London%20Eye!5e0!3m2!1sfr!2sfr!4v1667603026914!5m2!1sfr!2sfr" width="600" height="220" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>

            <div className='bg-[#081219] px-[19%] py-6 flex justify-between items-center absolute bottom-0 left-0 right-0 max-xl:px-16 850:flex-col'>
                <Image src={logo} alt="logo de l'entreprise" />
                <p className='text-[#8a9298] text-sm 850:mt-10'>Copyright © 2020 ZikZag by <span className='text-white underline'>WebGeniusLab</span>. All Rights Reserved.</p>
            </div>
        </footer>
    )
}