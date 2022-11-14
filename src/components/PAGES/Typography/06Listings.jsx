import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'


export default function ListingsTypography() {
    return(
        <section className='mt-20'>
            <p className='text-slightGrey font-Amiri text-4xl mb-7'>Blockquote</p>
            

            <div className="flex justify-between text-greyText">
                <div>
                    <p className='mb-3'><span className='font-Amiri text-orange text-[20px] mr-3'>1.</span> Digital project planning and resourcing</p>
                    <p className='mb-3'><span className='font-Amiri text-orange text-[20px] mr-3'>2.</span> In-House digital consulting</p>
                    <p className='mb-3'><span className='font-Amiri text-orange text-[20px] mr-3'>3.</span> Permanent and contract recruitement</p>
                    <p><span className='font-Amiri text-orange text-[20px] mr-3'>4.</span> Developers and technical architects</p>
                </div>

                <div>
                    <div className='flex mb-2'><FontAwesomeIcon icon={faArrowRightLong} className='w-4 relative bottom-2 rotate-45 text-orange mr-3' /><p className='mb-3'>Digital project planning and resourcing</p></div>
                    <div className='flex mb-2'><FontAwesomeIcon icon={faArrowRightLong} className='w-4 relative bottom-2 rotate-45 text-orange mr-3' /><p className='mb-3'>In-House digital consulting</p></div>
                    <div className='flex mb-2'><FontAwesomeIcon icon={faArrowRightLong} className='w-4 relative bottom-2 rotate-45 text-orange mr-3' /><p className='mb-3'>Permanent and contract recruitement</p></div>
                    <div className='flex'><FontAwesomeIcon icon={faArrowRightLong} className='w-4 relative bottom-2 rotate-45 text-orange mr-3' /><p className='mb-3'>Developers and technical architects</p></div>
                </div>

                <ul className='list-disc'>
                    <li className='text-orange mb-5'><span className='text-greyText'>Digital project planning and resourcing</span></li>
                    <li className='text-orange mb-5'><span className='text-greyText'>In-House digital consulting</span></li>
                    <li className='text-orange mb-5'><span className='text-greyText'>Permanent and contract recruitement</span></li>
                    <li className='text-orange'><span className='text-greyText'>Developers and technical architects</span></li>
                </ul>
            </div> 
        </section>
    )
}