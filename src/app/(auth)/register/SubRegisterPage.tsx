'use client';
import { NextPage } from 'next';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import CrButton from '@/components/CrButton';
import logger from '@/utils/logger';
import useTheme from '@/utils/hooks/useTheme';
import { useEffect, useState } from 'react';
import CrInstudiText from '@/components/CrInstudiText';
import CrTextInput from '@/components/CrTextInput';
import { Inter } from 'next/font/google';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

interface Props {
  section: string;
}

interface Values {
  email: string;
  password: string;
}

const inter = Inter({ subsets: ['latin'] });

async function register(values: Values, role: string) {
  const res = await fetch(
    process.env.NODE_ENV === 'production'
      ? `https://${process.env.NEXT_PUBLIC_ROOT_URI}/${role.toLocaleLowerCase() + "s"}/add`
      : `http://localhost:3006/${role.toLocaleLowerCase() + "s"}/add`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: values.email, password: values.password, role: role.toUpperCase() }),
    }
  )

  const json = await res.json();

  return json;
}

const SubRegisterPage: NextPage<Props> = ({ section, ...rest }) => {
  const [role, setRole] = useState('');

  useEffect(() => {
    setRole(section.split('-')[0]);
  }, [section]);

  const initialValues = {
    email: '',
    password: '',
  };

  const isDarkTheme = useTheme();
  const router = useRouter();

  const loginSchema = Yup.object().shape({
    password: Yup.string()
      .min(8, 'Şifre 8 Karakterden Uzun Olmalı')
      .required('Bu alam boş bırakılamaz'),
    email: Yup.string().email('Geçersiz Email Adresi').required('Zorunlu Alan'),
  });

  async function handleOnSubmit(values: Values) {
    const res = await register(values, role);
    setTimeout(() => {
      if (res.data.code === 200 || res.code === 200) {
        router.push('/login');
        toast.success('Aramıza katıldın, giriş yapmayı unutma!');
      }
      else {
        toast.error(res.data.message);
      }
    }, 100);
  }
  return (
    <div className='w-full h-full'>
      <Formik
        initialValues={initialValues}
        validationSchema={loginSchema}
        onSubmit={(values) => {
          handleOnSubmit(values);
        }}>
        {({ handleSubmit, isSubmitting }) => (
          <Form className='flex flex-col justify-evenly w-full lg:gap-5 lg:h-[84%] relative h-full items-center '>
            <h1
              className={`login capitalize text-2xl md:text-3xl md:pt-11 lg:pt-0 w-[80%] tracking-tight font-bold bg-gradient-to-r ${inter.className}
           from-amber-200 to-yellow-500 bg-clip-text text-transparent mt-4 md:mt-0 mb-12 lg:mt-6 lg:mb-4 text-center`}>
              slm, merhabalar efenim!
            </h1>
            <CrTextInput
              name='email'
              type='email'
              label='email'
              className={`grow pt-3`}
            />
            <CrTextInput
              name='password'
              type='password'
              className={`grow pt-2`}
              label='şifre'
            />
            <div className={`grow`}>
              <CrButton
                content='Kaydol!'
                svgDs={[
                  'M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z',
                  'M2.854 15.854A.5.5 0 0 1 2 15.5V14H.5a.5.5 0 0 1-.354-.854l1.5-1.5A.5.5 0 0 1 2 11.5h1.793l3.103-3.104a.5.5 0 1 1 .708.708L4.5 12.207V14a.5.5 0 0 1-.146.354l-1.5 1.5ZM16 3.5a.5.5 0 0 1-.854.354L14 2.707l-1.006 1.006c.236.248.44.531.6.845.562 1.096.585 2.517-.213 4.092-.793 1.563-2.395 3.288-5.105 5.08L8 13.912l-.276-.182A23.825 23.825 0 0 1 5.8 12.323L8.31 9.81a1.5 1.5 0 0 0-2.122-2.122L3.657 10.22a8.827 8.827 0 0 1-1.039-1.57c-.798-1.576-.775-2.997-.213-4.093C3.426 2.565 6.18 1.809 8 3.233c1.25-.98 2.944-.928 4.212-.152L13.292 2 12.147.854A.5.5 0 0 1 12.5 0h3a.5.5 0 0 1 .5.5v3Z',
                ]}
                changeSvg={true}
                secondary={isDarkTheme}
                svgClassName='group-hover:translate-x-full group-hover:stroke-2 group-hover:-translate-y-full 
          transition-all duration-700 group-hover:opacity-0 fill-[var(--secondary-rgb)] '
                type='submit'
                onClick={() => handleOnSubmit}
              />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SubRegisterPage;
