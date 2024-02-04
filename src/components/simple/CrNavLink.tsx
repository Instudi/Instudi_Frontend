import { NextPage } from "next";
import Link from "next/link";
interface Props extends React.HTMLAttributes<HTMLDivElement> {
    link: string;
    text: string;
}

const CrNavLink: NextPage<Props> = ({ link, text }) => {
    return (
        <Link
            className='text-xl capitalize z-30 opacity-100 antialiased relative grow text-[var(--primary-rgb)]  
            hover:font-semibold hover:text-2xl hover:no-underline transition-all font-semibold
            before:absolute before:top-1/2 before:left-1/2 before:h-[160%] before:w-0 before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-md before:bg-[var(--primary-rgb)] dark:before:bg-gray-700 
            before:opacity-0 before:transition-all before:duration-300 before:z-20 hover:before:w-[85%] hover:scale-90 dark:hover:before:opacity-30 hover:before:opacity-10'
            href={link}>

            {text}
        </Link>
    )
}

export default CrNavLink;