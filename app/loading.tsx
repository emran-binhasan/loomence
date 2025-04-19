import loader from '@/public/loader.gif'
import Image from 'next/image';
const LoadingPage = () => {
    return ( <div className='h-screen flex-center w-full'>
        <Image src={loader} alt='Loading...' height={60} width={60}></Image>
    </div> );
}
 
export default LoadingPage;