'use client';
import CrNavLink from '@/components/simple/CrNavLink';
import Link from 'next/link';
import path from 'path';
import { useEffect, useState } from 'react';

interface Props { }

const CrNavLogic = ({ }) => {
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
    <CrNavLink link={path} text='Anasayfa' />
  );
};

export default CrNavLogic;
