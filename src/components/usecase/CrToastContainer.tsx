'use client';
import useTheme from '@/utils/hooks/useTheme';
import {useEffect, useState} from 'react';
import {ToastContainer, Theme} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function CrToastContainer() {
  const [theme, setTheme] = useState<Theme>('light');
  const isDarktheme = useTheme();
  useEffect(() => {
    setTheme(isDarktheme ? 'dark' : 'light');
  }, [isDarktheme]);

  return (
    <ToastContainer
      position='bottom-right'
      autoClose={5000}
      limit={3}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme={theme}
    />
  );
}

export default CrToastContainer;
