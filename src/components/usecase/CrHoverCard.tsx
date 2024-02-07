'use client'
import { NextPage } from "next";
import akis from "../../../public/assets/homepage/Akis.png";
import Image, { StaticImageData } from 'next/image';


interface cardPropTypes extends React.HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode,
    modName?: string,
    imgSrc?: StaticImageData,
    description?: string,
};

const CrHoverCard: NextPage<cardPropTypes> = (props) => {

    const { children, imgSrc, modName, description, ...rest } = props



    return (
        <div className='hover-card relative rounded-2xl aspect-[6/5]
    h-[16.5rem] cursor-pointer before:absolute before:top-0 before:left-0 before:w-full 
    before:h-full before:rounded-xl blur-sky-600/20 inline-block
    hover:shadow-3xl hover:blur-0 hover:z-10 group hover:duration-300 hover:ease-in-out hover:scale-105
    m-[3px] 
    '>
            <div className='hover-card-border absolute top-0 left-0 w-full h-full rounded-xl z-2 bg-gradient-radial
         bg-opacity-10 from-white/20 z-1 via-slate-300/5 from-40% via-60% to-90% to-neutral-800/5 
        opacity-0 transition-opacity group-hover:opacity-100 duration-200'></div>
            <div className='hover-card-content dark:shadow-2xl dark:shadow-[var(--primary-rgb-30)] z-2 relative 
            text-center  rounded-[inherit] dark:bg-slate-800 aspect-[6/5] h-[15.9rem] m-[6px] 
            bg-gradient-to-br from-indigo-400/0 to-slate-100/70'>
                <div className="flex w-full h-full flex-col p-3 gap-5 items-center justify-center">
                    <Image
                        alt={modName || 'akış'}
                        src={imgSrc || akis}
                        className='w-[34%] bg-slate-500/30  p-3 aspect-auto  rounded-xl'
                    ></Image>
                    <div className='text-center leading-loose lowercase text-lg p-2 dark:text-slate-300
                    text-gray-600/95'>
                        {description || 'Akış'}
                    </div>
                    {children}
                </div>
            </div>
            <div className='absolute top-0 left-0  rounded-[inherit] w-full h-full
    before:absolute before:top-0 before:left-0 before:w-full 
    before:h-full before:rounded-[inherit] before:bg-gradient-radial before:bg-opacity-0
    dark:before:from-white/10 dark:before:via-slate-300/5 dark:before:from-10% dark:before:via-50% dark:before:to-80% dark:before:to-neutral-800/5 
    before:opacity-0 before:hover:opacity-100 before:transition-opacity before:duration-500'></div>
        </div>);
}

export default CrHoverCard;