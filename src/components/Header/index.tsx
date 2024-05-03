
import Image from 'next/image';
import logo from '../../../public/_material/images/logo.svg';

export default function Header() {
    return (
        <header>
            <div className='bg-black flex justify-center p-8 m-auto'>
                <Image src={logo} alt='smartfit logo'/>
            </div>
            <div className='mt-12 flex justify-center '>
                <div className='w-2/3'>
                     <h1 className='font-gotham-bold text-4xl py-4'>REABERTURA <br/> SMART FIT</h1>
                     <div className='bg-black border-4 w-20 z-10 my-2'/>
                     <p className='py-4'>
                     O horário de funcionamento das nossas unidades está seguindo os decretos de cada município.
                     Por isso, confira aqui se a sua unidade está aberta e as medidas de segurança que estamos seguindo.
                    </p>
                </div>
            </div>
        </header>
    )
}