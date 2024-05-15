import Image from 'next/image';
import logo from '../../../public/_material/images/logo.svg';

export default function Footer(){
    return (
         <footer id='main-footer' className='bg-dark-grey h-48 flex justify-center color-white text-white'>
            <div className='m-auto'>
                <Image src={logo} alt='smartfit logo' className='m-auto size-24 h-16'/>
                <p className='pb-12'>Todos os direitos reservados - 2020</p>
            </div>
         </footer>
    );
}