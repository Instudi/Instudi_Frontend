import { NextPage } from 'next';
import Logo from '../../public/static/2.png';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
  useImg?: boolean;
  useText?: boolean;
  isBlock?: boolean;
  imgClass?: string;
  className?: string;
  textClassName?: string;
  mini?: boolean;
}

const CrInstudiText: NextPage<Props> = ({
  useImg = true,
  useText = true,
  imgClass = '',
  textClassName = '',
  isBlock = true,
  className = '',
  mini = false,
}) => {
  const textClass = `${mini ? 'text-4xl md:text-7xl' : 'text-6xl md:text-9xl'
    }   ${isBlock ? 'block indent-8' : 'inline grow'
    }  tracking-[-.1em] antialiased font-bold 
  ${textClassName}  bg-gradient-to-br from-violet-600 to-indigo-600 bg-clip-text text-transparent`;

  return (
    <div
      className={
        (isBlock ? '' : 'flex-row flex items-center justify-evenly ') +
        className
      }>
      {useImg ? (
        <Link href={'/'} className='inline'>
          <Image
            src={Logo}
            alt='Instudi Logo'
            width={95}
            height={142.5}
            className={`2xl:hidden ${imgClass}`}
          />
          <Image
            src={Logo}
            alt='Instudi Logo'
            width={85}
            height={150}
            className={`hidden lg:py-5 2xl:block ${imgClass}`}
          />
        </Link>
      ) : null}
      {useText ? <p className={textClass}>Instudi</p> : null}
    </div>
  );
};
export default CrInstudiText;
