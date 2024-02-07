'use client';
import CrHoverCard from '@/components/usecase/CrHoverCard';
import ozelders from "../../public/assets/homepage/ozelders.png";
import podcast from "../../public/assets/homepage/podcast.png";
import kurum from "../../public/assets/homepage/kurum.png";
import webinar from "../../public/assets/homepage/webinar.png";
import dahasi from "../../public/assets/homepage/dahasi.png";

import { Inter, Quicksand } from 'next/font/google';
import { NextPage } from 'next';
import React, { useEffect, useRef } from 'react';

const inter = Inter({ subsets: ['latin'] });
const quicksand = Quicksand({ subsets: ['latin'] });

interface propTypes { };

const HoverCards: NextPage<propTypes> = ({ }) => {
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

    return (
        <div ref={cards} className={'cards flex justify-center flex-wrap relative w-[calc(100% -20px)] group gap-2' + quicksand.className}>
            <CrHoverCard description='Gezmece tozmaca, bizim da hakkımız az rahatlamaca'></CrHoverCard>
            <CrHoverCard imgSrc={ozelders} modName='Özel Ders' description='Birebir ve Toplu özel ders & danışmanlık' ></CrHoverCard>
            <CrHoverCard imgSrc={podcast} modName='Podcastler' description='Dersler ve görevler üzerine yığınla podcast, sohbet ve tartışma'></CrHoverCard>
            <CrHoverCard imgSrc={kurum} modName='Kurumlar' description='Lise, Üniversite ve dershaneler sadece bir tık uçta'></CrHoverCard>
            <CrHoverCard imgSrc={webinar} modName='Webinarlar' description='İlgi alanınıza uygun, bilgilendirici webinarlar'></CrHoverCard>
            <CrHoverCard imgSrc={dahasi} modName='ve Çok Daha fazlası' description='Keyifli Online öğrenci kulüpleri ve çoook daha fazlası...'></CrHoverCard>
        </div>
    );
}


export default HoverCards;
