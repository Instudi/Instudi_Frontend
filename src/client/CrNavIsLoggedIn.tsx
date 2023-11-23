'use client';
import {NextPage} from 'next';
import {useRouter} from 'next/navigation';
import CrButton, {CrButtonProps} from '../components/CrButton';
import {useEffect, useState} from 'react';
import CrTextLoader from '@/components/simple/CrTextLoader';

interface Props extends CrButtonProps {
  url: string;
}

const CrNavIsLoggedIn: NextPage<Props> = ({url, ...rest}) => {
  const router = useRouter();

  function handleNavLogin() {
    router.push(url);
  }

  const [hasAuth, setHasAuth] = useState<boolean | null>(null);
  useEffect(() => {
    setHasAuth(localStorage.getItem('hasAuth') === 'true');
  }, []);

  useEffect(() => {
    const handleStorageChange = () => {
      const updatedHasAuth = localStorage.getItem('hasAuth') === 'true';
      setHasAuth(updatedHasAuth);
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  return (
    <div>
      {hasAuth ? (
        <div>Me</div>
      ) : (
        <CrButton {...rest} onClick={() => handleNavLogin()} />
      )}
    </div>
  );
};

export default CrNavIsLoggedIn;
