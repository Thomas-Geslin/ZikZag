import Image from "next/image"

import quote from '../../../public/assets/PAGES/About/about_quote.png'


export default function QuoteTypography() {
    return(
        <section className='mt-20'>
            <p className='text-slightGrey font-Amiri text-4xl mb-7'>Blockquote</p>
            

            <div className="relative bg-[#f5f5f5] w-[53%] py-1 border-l-orange border-l-[3px] rounded-br-lg max-xl:w-full">
                <Image src={quote} alt='icone de guillemet' className="w-20 absolute -top-3 right-0" />
                <p className="relative font-Amiri text-2xl text-slightGrey leading-tight pt-7 pb-5 pl-9">“There are no secrets to success. It is the result of preparation, hard work, and learning failure.”</p>
                <p className='text-[#a1a1a1] font-bold text-sm pl-9 pb-6'>– OLIVER SANDERO</p>
            </div> 
        </section>
    )
}