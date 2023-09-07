'use client';
import {NextPage} from 'next';
import {useRouter} from 'next/navigation';
import CrButton, {CrButtonProps} from '../CrButton';
import {getCookie, setCookie} from 'cookies-next';
import logger from '@/utils/logger';

interface Props extends CrButtonProps {
  url: string;
}

const CrNavIsLoggedIn: NextPage<Props> = ({url, ...rest}) => {
  const router = useRouter();

  function handleNavLogin() {
    router.push(url);
  }

  let cookie = getCookie('access_token');

  return (
    <div>
      {cookie ? (
        <div>Me</div>
      ) : (
        <CrButton {...rest} onClick={() => handleNavLogin()} />
      )}
    </div>
  );
};

export default CrNavIsLoggedIn;
