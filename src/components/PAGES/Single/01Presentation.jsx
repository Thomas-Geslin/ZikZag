import Image from "next/image"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebookF, faPinterestP, faInstagram } from '@fortawesome/free-brands-svg-icons'

import women from '../../../public/assets/PAGES/SingleTeam/women.jpg'
import line from '../../../public/assets/PAGES/SingleTeam/line.png'


export default function PresentationSingle() {
    return(
        <section className='relative w-[61%] m-auto shadow-[6px_5px_30px_0px_rgb(0,0,0,0.12)] rounded-2xl flex my-20 px-24 py-16'>
            <Image src={women} alt="photo d'entreprise" className='rounded-xl w-[470px]' />
            <Image src={line} alt="photo d'entreprise" className='absolute right-10' />

            <div className='relative top-7'>
                <div className='bg-darkBlueBackground rounded py-8 px-28 relative -left-10'>
                    <p className='font-Amiri text-4xl text-white mb-2'>Marry Clarins</p>
                    <p className='text-orange font-semibold text-sm'>CHIEF CUSTOMER OFFICER</p>
                </div>

                <p className='text-slightGrey text-lg font-semibold mt-7 mb-4 pl-16'>Position: <span className='text-greyText font-normal ml-2.5'>Chief Customer Officer</span></p>
                <p className='text-slightGrey text-lg font-semibold mb-4 pl-16'>Responsibility: <span className='text-greyText font-normal ml-2.5'>Brand Development</span></p>
                <p className='text-slightGrey text-lg font-semibold mb-4 pl-16'>Experience: <span className='text-greyText font-normal ml-2.5'>10 Years</span></p>
                <p className='text-slightGrey text-lg font-semibold mb-4 pl-16'>Email: <span className='text-greyText font-normal ml-2.5'>chriss.moore@mail.com</span></p>
                <p className='text-slightGrey text-lg font-semibold mb-4 pl-16'>Phone: <span className='text-greyText font-normal ml-2.5'>507 - 541 - 4567</span></p>

                <div className='flex items-center mt-10 pl-16'>
                    <div className='bg-white p-3.5 rounded-full mb-3 mr-3 shadow-[3px_3px_20px_3px_#eae9e9] hover:shadow-none hover:bg-[#1DA1F2] ease-in-out duration-300 group'><FontAwesomeIcon icon={faTwitter} className='w-3.5 text-[#1DA1F2] group-hover:text-white' /></div>
                    <div className='bg-white px-3.5 py-3 rounded-full mb-3 mr-3 shadow-[3px_3px_20px_3px_#eae9e9] hover:shadow-none hover:bg-[#3B5998] ease-in-out duration-300 group'><FontAwesomeIcon icon={faFacebookF} className='w-2.5 text-[#3B5998] group-hover:text-white' /></div>
                    <div className='bg-white px-3.5 py-3 rounded-full mb-3 mr-3 shadow-[3px_3px_20px_3px_#eae9e9] hover:shadow-none hover:bg-[#E40000] ease-in-out duration-300 group'><FontAwesomeIcon icon={faPinterestP} className='w-3 text-[#E40000] group-hover:text-white' /></div>
                    <div className='bg-white p-3.5 rounded-full mb-3 mr-3 shadow-[3px_3px_20px_3px_#eae9e9] hover:shadow-none hover:bg-[#C32AA3] ease-in-out duration-300 group'><FontAwesomeIcon icon={faInstagram} className='w-3.5 text-[#C32AA3] group-hover:text-white' /></div>
                </div>
            </div>
        </section>
    )
}