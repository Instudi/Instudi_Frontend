"use client"
import React, { useEffect, useRef } from 'react';

interface cardPropTypes {
    children?: React.ReactNode
};
interface propTypes { };

const HoverCards = () => {
    const cards = useRef(null)

    function handleOnMouseMove(event: { clientX: number; clientY: number; }) {
        if (cards.current) {
            const cardsList = Array.from((cards.current as HTMLElement).children);

            for (const card of cardsList) {
                const dimensions = (card as HTMLElement).getBoundingClientRect(),
                    ax = event.clientX - dimensions.left,
                    ay = event.clientY - dimensions.top;

                (card as HTMLElement).style.setProperty("--mouse-x", `${ax}px`);
                (card as HTMLElement).style.setProperty("--mouse-y", `${ay}px`);
            }
        }
    }

    useEffect(() => {

        if (cards.current) {
            (cards.current as HTMLElement).addEventListener("mousemove", handleOnMouseMove);
        }

    }, [])



    useEffect(() => {
        const bgName = "bg-neutral-900"
        document.body.classList.add(bgName)
        return () => {
            document.body.classList.remove(bgName)
        }
    }, [])



    return (
        <div ref={cards} className='cards inline flex-wrap h-full w-[calc(100% -20px)] gap-2 group'>
            <CrHoverCard >
                <p className="text-6xl text-blue-400 text-center align-middle h-full w-full top-[0] left-0 p-10">
                    Let Me Be Me
                </p>
            </CrHoverCard>
            <CrHoverCard><img className='object-cover w-full h-full rounded-xl blur-[.2px] hover:blur-[0px]'
                src={"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.673sHS_M9CMoEnPjJdaWVQHaFl%26pid%3DApi&f=1&ipt=e46b2ee8e05f4bf98932fd4ba507af0aad3d6dae04323e2ecb6dfddf31456a0a&ipo=images"} /></CrHoverCard>
            <CrHoverCard></CrHoverCard>
            <CrHoverCard></CrHoverCard>
            <CrHoverCard></CrHoverCard>
            <CrHoverCard></CrHoverCard>
        </div>
    );
}


const CrHoverCard = (props: cardPropTypes) => {

    const { children } = props



    return (<div className='hover-card relative  rounded-2xl aspect-[6/5]
    h-[14.5rem] cursor-pointer before:absolute before:top-0 before:left-0 before:w-full 
    before:h-full before:rounded-xl shadow-2xl shadow-sky-800/20  blur-sky-800/20 inline-block
    '>
        <div className='hover-card-border absolute top-0 left-0 w-full h-full rounded-xl z-2 bg-gradient-radial
         bg-opacity-10 from-white/20 z-1 via-slate-300/5 from-40% via-60% to-90% to-neutral-800/5 
        opacity-0 transition-opacity group-hover:opacity-100 duration-200'></div>
        <div className='hover-card-content z-2 relative rounded-[inherit] bg-neutral-800 aspect-[6/5] h-[14.2rem] m-[2px]'>
            {children}
        </div>
        <div className='absolute top-0 left-0  rounded-[inherit] w-full h-full
    before:absolute before:top-0 before:left-0 before:w-full 
    before:h-full before:rounded-[inherit] before:bg-gradient-radial before:bg-opacity-0
    before:from-white/10 before:via-slate-300/5 before:from-10% before:via-50% before:to-80% before:to-neutral-800/5 
    before:opacity-0 before:hover:opacity-100 before:transition-opacity before:duration-500'></div>

    </div>);
}

export { CrHoverCard };
export default HoverCards;
