'use client';
import Link from 'next/link';
import path from 'path';
import {useEffect, useState} from 'react';

interface Props {}

const CrNavLogic = ({}) => {
  const [hasAuth, setHasAuth] = useState<boolean | null>(null);
  useEffect(() => {
    setHasAuth(localStorage.getItem('hasAuth') === 'true');
  }, []);
  const [path, setPath] = useState(hasAuth ? '/home' : '/login');

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

  useEffect(() => {
    setPath(hasAuth ? '/home' : '/login');
  }, [hasAuth]);

  return (
    <Link
      className='text-xl antialiased grow underline underline-offset-2 decoration-wavy
            decoration-[var(--secondary-rgb)] font-medium text-[var(--primary-rgb)]  hover:font-semibold hover:text-2xl hover:no-underline transition-all'
      href={path}>
      Anasayfa
    </Link>
  );
};

export default CrNavLogic;
