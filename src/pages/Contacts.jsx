import Head from "next/head"
import Image from "next/image"

import HeaderSecond from '../components/HeaderSecond'
import Footer from "../components/Footer"

import man from '../public/assets/Home03/contact_man.png'
import line from '../public/assets/Home03/contact_line.png'
import letter1 from '../public/assets/Home03/contact_letter_1.png'
import letter2 from '../public/assets/Home03/contact_letter_2.png'
import letter3 from '../public/assets/Home03/contact_letter_3.png'
import phone from '../public/assets/footer/icon_phone.png'
import placeholder from '../public/assets/footer/icon_placeholder.png'
import at from '../public/assets/Home03/icon_at.png'

import background from '../public/assets/Contacts/background_form.jpg'
import letterForm1 from '../public/assets/Contacts/letter_1.png'
import letterForm2 from '../public/assets/Contacts/letter_2.png'
import letterForm3 from '../public/assets/Contacts/letter_3.png'


export default function Contacts() {
    return(
        <div class='font-NunitoSans'>
            <Head>
                <title>ZikZag | Contacts</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="../"/>
            </Head>

            <HeaderSecond />

            <main>
                <section className="bg-contactBackground bg-no-repeat bg-cover text-center text-white -mb-32">
                    <h1 className="font-Amiri text-6xl pt-60 mb-6">Contacts</h1>
                    <p className="font-semibold text-sm pb-48 z-10"><span className="opacity-50">HOME &gt;</span> CONTACTS</p>
                </section>

                <section className='flex justify-center pt-40 pb-12 mb-40 ml-[10%] min-3xl:bg-[top_5rem_left_70rem] min-w-[1150px] xl-2xl:ml-0 max-xl:flex-col max-xl:items-center max-xl:min-w-fit 650:ml-0'>
                    <div className='mt-28 relative 650:max-w-[85%]'>
                        <Image src={man} alt='dessin homme' className='mr-12' />
                        <Image src={line} alt='ligne de décoration' className='absolute top-0 animation-contact-Home05-left' />
                        <Image src={letter1} alt='dessin de lettre' className='absolute top-2 animation-contact-Home05-top-3' />
                        <Image src={letter2} alt='dessin de lettre' className='absolute top-2 animation-contact-Home05-top-1' />
                        <Image src={letter3} alt='dessin de lettre' className='absolute top-2 animation-contact-Home05-top-2' />
                    </div>
                    
                    <div className='w-1/3 min-3xl:relative min-3xl:left-32 max-xl:w-10/12'>
                        <h2 className='text-orange font-bold mb-4 pt-32 relative w-40 850-xl:pt-36 850:mt-12 850:pt-0'>CONTACT US<span className='absolute bottom-1 ml-1 bg-orange h-0.5 w-2'></span></h2>
                        <h3 className='font-Amiri text-slightGrey text-5xl mb-5'>Get in Touch</h3>
                        <p className='text-greyText text-lg leading-9 w-10/12 mb-8 min-w-[475px] max-xl:min-w-fit 650:min-w-fit'>Get in touch to discuss your employee wellbeing needs today. Please give us a call, drop us an email or fill out the contact form and we’ll get back to you.</p>
                    
                        <div className='flex items-start mb-8 leading-7'>
                            <div className=' bg-white rounded-full py-3.5 px-2 relative shadow-[6px_5px_16px_0px_rgb(0,0,0,0.15)]'><Image src={placeholder} alt='icone de telephone' className='w-7 mr-3 relative top-0 left-1.5' /></div>
                            <div className='ml-8'>
                                <p className='font-bold text-slightGrey'>Visit Us:</p>
                                <p className='text-greyText'>27 Division ST, New York, NY 10002, USA</p>
                            </div>
                        </div>
                            
                        <div className='flex items-center mb-8'>
                            <div className=' bg-white rounded-full py-3.5 px-2 relative shadow-[6px_5px_16px_0px_rgb(0,0,0,0.15)]'><Image src={at} alt='icone de telephone' className='w-7 mr-3 relative top-0 left-1.5' /></div>
                            <div className='ml-8'>
                                <p className='font-bold text-slightGrey'>Mail  Us:</p>
                                <p className='text-greyText'>zik_zag.mail@mail.com</p>
                            </div>
                        </div>

                        <div className='flex items-center'>
                            <div className=' bg-white rounded-full py-3.5 px-2 relative shadow-[6px_5px_16px_0px_rgb(0,0,0,0.15)]'><Image src={phone} alt='icone de telephone' className='w-7 mr-3 relative top-0 left-1.5' /></div>
                            <div className='ml-8'>
                                <p className='font-bold text-slightGrey'>Phone Us:</p>
                                <p className='text-greyText'>+1 (800) 123 456 789</p>
                            </div>
                        </div>
                    </div>
                </section>


                <section className='mb-14 relative mt-64 1050:-mt-20 430-1050:mb-[800px] 430:mb-[920px]'>
                    <div className='rounded-2xl bg-darkBlueBackground text-white w-[62%] px-14 py-14 absolute left-[50%] translate-x-[-50%] -top-48 1050:w-[90%] 1050:z-10 1050:top-0'>
                        <p className='font-Amiri text-[36px]'>Drop Us a Line</p>
                        <p className='text-sm mb-7'>Your email address will not be published. Required fields are marked *</p>

                        <form className='flex flex-col'>
                            <div className='flex justify-between 650:flex-col 650:justify-auto'>
                                <input type='text' placeholder='Your Name*' className='bg-[#22303e] px-4 py-2.5 rounded placeholder:text-white outline-none w-[49%] 650:mb-5 650:w-full'></input>

                                <input type='text' placeholder='Your Email*' className='bg-[#22303e] px-4 py-2.5 rounded placeholder:text-white outline-none w-[49%] 650:w-full'></input>
                            </div>

                            <input type='text' placeholder='Website' className='bg-[#22303e] px-4 py-2.5 rounded mt-5 placeholder:text-white outline-none'></input>

                            <textarea placeholder='Your Message...' className='bg-[#22303e] pt-4 h-32 px-4 py-2.5 rounded mt-5 placeholder:text-white outline-none'></textarea>
                        </form>

                        <button className="bg-orange font-semibold text-sm px-7 py-3.5 rounded mt-5">GET IN TOUCH</button>
                    </div>

                    <div className='1050:hidden'>
                        <Image src={background} alt='arrière-plan' className='w-full' />
                        <Image src={letterForm1} alt='dessin de lettre' className='absolute top-20 left-20' />
                        <Image src={letterForm2} alt='dessin de lettre' className='absolute top-80 left-40' />
                        <Image src={letterForm3} alt='dessin de lettre' className='absolute right-32 top-52' />
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    )
}