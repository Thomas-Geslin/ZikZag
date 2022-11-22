import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightLong, faCheck } from '@fortawesome/free-solid-svg-icons'

export default function PricingHome03() {
    return(
        <section className='text-center'>
            <h2 className='text-orange font-bold mb-4 pt-32 relative w-40 m-auto max-xl:pt-36 850:mt-12'><span className='absolute bottom-1 -left-2 bg-orange h-0.5 w-2'></span>PRICING PACKAGES<span className='absolute bottom-1 ml-1 bg-orange h-0.5 w-2'></span></h2>
            <h3 className='font-Amiri text-slightGrey text-6xl mb-5'>Choose Your Best Plan</h3>
            <p className='text-greyText text-lg leading-9 w-5/12 m-auto mb-12'>We are specialists in both economics and information technologies and we apply our full range of talent to creating the perfect solution for each client’s needs.</p>
       
            <div className='flex justify-center w-[60%] m-auto'>
                <div className='text-left w-[32%] max-w-[370px] relative shadow-[3px_3px_20px_3px_#eae9e9] rounded-lg pl-11'>
                    <p className='font-Amiri text-4xl pt-12 mb-4'>Basic Plan</p>

                    <div className='flex text-orange font-Amiri text-4xl mb-6'>
                        <span className='relative bottom-2'>$</span>
                        <p className='text-6xl mx-1 tracking-tighter'>159</p>
                        <span className='relative bottom-2 tracking-tighter'>99</span>
                    </div>

                    <span className='absolute h-px w-9/12 bg-[#e6e6e6] left-[50%] translate-x-[-50%]'></span>

                    <div className='text-lg font-semibold pt-8'>
                        <div className='pb-4 flex'><FontAwesomeIcon icon={faArrowRightLong} className='w-5 rotate-45 text-orange mr-2' /><p>Advanced Analytics</p></div>
                        <div className='pb-4 flex'><FontAwesomeIcon icon={faArrowRightLong} className='w-5 rotate-45 text-orange mr-2' /><p>Change Management</p></div>
                        <div className='pb-4 flex'><FontAwesomeIcon icon={faArrowRightLong} className='w-5 rotate-45 text-orange mr-2' /><p>Corporate Finance</p></div>
                        <div className='pb-4 flex'><FontAwesomeIcon icon={faArrowRightLong} className='w-5 rotate-45 text-[#868686] mr-2' /><p className='text-[#868686]'>Strategy & Marketing</p></div>
                        <div className='pb-4 flex'><FontAwesomeIcon icon={faArrowRightLong} className='w-5 rotate-45 text-[#868686] mr-2' /><p className='text-[#868686]'>Information Technology</p></div>
                    </div>

                    <button className="bg-orange rounded text-white text-sm font-semibold py-4 px-7 mt-6 mb-14 hover:bg-darkBlueBackground ease-in-out duration-500">CHOOSE PLAN</button>
                </div>


                <div className='bg-darkBlueBackground mx-10 text-white text-left w-[32%] max-w-[370px] relative shadow-[3px_3px_20px_3px_#eae9e9] rounded-lg pl-11'>
                    <div className='flex items-center bg-[#04131f] absolute right-0 top-4 rounded-l-full'><div className='m-1.5 border-2 border-solid border-[#17faa7] p-1 rounded-full mr-2'><FontAwesomeIcon icon={faCheck} className='w-4 text-[#17faa7]' /></div><p className='color-white font-semibold text-sm pr-4'>BEST</p></div>

                    <p className='font-Amiri text-4xl pt-12 mb-4'>Ultra Plan</p>

                    <div className='flex text-orange font-Amiri text-4xl mb-6'>
                        <span className='relative bottom-2'>$</span>
                        <p className='text-6xl mx-1 tracking-tighter'>259</p>
                        <span className='relative bottom-2 tracking-tighter'>99</span>
                    </div>

                    <span className='absolute h-px w-9/12 bg-[#2f414f] left-[50%] translate-x-[-50%]'></span>

                    <div className='text-lg font-semibold pt-8'>
                        <div className='pb-4 flex'><FontAwesomeIcon icon={faArrowRightLong} className='w-5 rotate-45 text-orange mr-2' /><p>Advanced Analytics</p></div>
                        <div className='pb-4 flex'><FontAwesomeIcon icon={faArrowRightLong} className='w-5 rotate-45 text-orange mr-2' /><p>Change Management</p></div>
                        <div className='pb-4 flex'><FontAwesomeIcon icon={faArrowRightLong} className='w-5 rotate-45 text-orange mr-2' /><p>Corporate Finance</p></div>
                        <div className='pb-4 flex'><FontAwesomeIcon icon={faArrowRightLong} className='w-5 rotate-45 text-orange mr-2' /><p>Strategy & Marketing</p></div>
                        <div className='pb-4 flex'><FontAwesomeIcon icon={faArrowRightLong} className='w-5 rotate-45 text-[#868686] mr-2' /><p className='text-[#868686]'>Information Technology</p></div>
                    </div>

                    <button className="bg-orange rounded text-white text-sm font-semibold py-4 px-7 mt-6 mb-14 hover:bg-white hover:text-black ease-in-out duration-500">CHOOSE PLAN</button>
                </div>


                <div className='text-left w-[32%] max-w-[370px] relative shadow-[3px_3px_20px_3px_#eae9e9] rounded-lg pl-11'>
                    <p className='font-Amiri text-4xl pt-12 mb-4'>Premium Plan</p>

                    <div className='flex text-orange font-Amiri text-4xl mb-6'>
                        <span className='relative bottom-2'>$</span>
                        <p className='text-6xl mx-1 tracking-tighter'>359</p>
                        <span className='relative bottom-2 tracking-tighter'>99</span>
                    </div>

                    <span className='absolute h-px w-9/12 bg-[#e6e6e6] left-[50%] translate-x-[-50%]'></span>

                    <div className='text-lg font-semibold pt-8'>
                        <div className='pb-4 flex'><FontAwesomeIcon icon={faArrowRightLong} className='w-5 rotate-45 text-orange mr-2' /><p>Advanced Analytics</p></div>
                        <div className='pb-4 flex'><FontAwesomeIcon icon={faArrowRightLong} className='w-5 rotate-45 text-orange mr-2' /><p>Change Management</p></div>
                        <div className='pb-4 flex'><FontAwesomeIcon icon={faArrowRightLong} className='w-5 rotate-45 text-orange mr-2' /><p>Corporate Finance</p></div>
                        <div className='pb-4 flex'><FontAwesomeIcon icon={faArrowRightLong} className='w-5 rotate-45 text-orange mr-2' /><p>Strategy & Marketing</p></div>
                        <div className='pb-4 flex'><FontAwesomeIcon icon={faArrowRightLong} className='w-5 rotate-45 text-orange mr-2' /><p>Information Technology</p></div>
                    </div>

                    <button className="bg-orange rounded text-white text-sm font-semibold py-4 px-7 mt-6 mb-14 hover:bg-darkBlueBackground ease-in-out duration-500">CHOOSE PLAN</button>
                </div>
            </div>
        </section>
    )
}