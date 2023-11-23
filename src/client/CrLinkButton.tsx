'use client';
import CrButton, {CrButtonProps} from '@/components/CrButton';
import {NextPage} from 'next';
import {useRouter} from 'next/navigation';
import {toast} from 'react-toastify';

interface Props extends CrButtonProps {
  url: string;
  text_info?: string;
  useTextInfo?: boolean;
}

const CrLinkButton: NextPage<Props> = (props) => {
  const {url, text_info, useTextInfo = false, ...rest} = props;

  const router = useRouter();

  function handleNavLogin() {
    router.push(url);
    if (useTextInfo) toast.info(text_info ? text_info : 'yep');
  }
  return (
    <CrButton
      {...rest}
      onClick={() => {
        handleNavLogin();
      }}
    />
  );
};

export default CrLinkButton;
