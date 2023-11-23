import {NextPage} from 'next';
import {LineWave} from 'react-loader-spinner';

interface Props {}

const CrTextLoader: NextPage<Props> = ({}) => {
  return (
    <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 '>
      <LineWave
        height='100'
        width='100'
        color='var(--secondary-rgb)'
        ariaLabel='line-wave'
        wrapperStyle={{}}
        wrapperClass=''
        visible={true}
        firstLineColor=''
        middleLineColor=''
        lastLineColor=''
      />{' '}
    </div>
  );
};

export default CrTextLoader;
