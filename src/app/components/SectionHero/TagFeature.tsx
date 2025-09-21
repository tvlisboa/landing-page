import { FiArrowDownRight } from 'react-icons/fi'

export function TagFeature() {
    return (

        <div className='inline-flex items-center gap-3 p-1 pr-[10px] bg-brand-50 rounded-2xl'>

            <span className=' inline-block h-6 bg-white px-[10px] rounded-2xl text-sm/6 
                                font-medium text-brand-700 hover:opacity-30 transition-opacity' >Releases</span>

            <a href="#" className='flex items-center gap-1 text-sm/6 
                                font-medium text-brand-700 hover:opacity-30'>Learn more about. <FiArrowDownRight /></a>
        </div>

    )
}