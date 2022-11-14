export default function ContactSingle() {
    return(
        <section>
            <div className='bg-white shadow-[6px_5px_30px_0px_rgb(0,0,0,0.12)] mb-40 rounded-2xl w-[62%] px-14 py-14 relative left-[50%] translate-x-[-50%]'>
                <p className='font-Amiri text-[36px]'>Contact Me</p>
                <p className='text-sm mb-7'>Your email address will not be published. Required fields are marked *</p>

                <form className='flex flex-col'>
                    <div className='flex justify-between'>
                        <input type='text' placeholder='Your Name*' className='bg-greyBackground px-4 py-2.5 rounded placeholder:text-greyText outline-none w-[49%]'></input>

                        <input type='text' placeholder='Your Email*' className='bg-greyBackground px-4 py-2.5 rounded placeholder:text-greyText outline-none w-[49%]'></input>
                    </div>

                    <input type='text' placeholder='Website' className='bg-greyBackground px-4 py-2.5 rounded mt-5 placeholder:text-greyText outline-none'></input>

                    <textarea placeholder='Your Message...' className='bg-greyBackground pt-4 h-32 px-4 py-2.5 rounded mt-5 placeholder:text-greyText outline-none'></textarea>
                </form>

                <button className="bg-orange text-white font-semibold text-sm px-7 py-3.5 rounded mt-5">GET IN TOUCH</button>
            </div>
        </section>
    )
}