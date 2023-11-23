'use client';
import CrButton from '@/components/CrButton';
import CrTextLoader from '@/components/simple/CrTextLoader';
import logger from '@/utils/logger';
import {NextPage} from 'next';
import {useRouter} from 'next/navigation';
import {toast} from 'react-toastify';

interface Props {}

const HomePage: NextPage<Props> = ({}) => {
  const router = useRouter();

  if (typeof window === 'undefined') return <CrTextLoader />;

  if ((localStorage.getItem('hasAuth') == 'true' ? true : false) == false) {
    router.push('/');
  }

  function handleOnClick() {
    window.localStorage.setItem('hasAuth', 'false');
    window.dispatchEvent(new Event('storage'));
    toast.info('Hoşça kal be dost...');
    router.push('/');
  }

  return (
    <div className='w-full h-[60vh] flex justify-self-center self-center justify-center'>
      <CrButton
        useText={true}
        content='Log out'
        useSvg={false}
        onClick={() => {
          handleOnClick();
        }}
      />
    </div>
  );
};

export default HomePage;
