
import { josefin, nunito, quicksand } from '../fonts';
import FormLogin from '../components/login/form';
import Link from 'next/link';

const LoginPage = () => {
    return (
        <div className="relative w-full h-screen overflow-hidden">
            <img className='absolute top-0 left-0 -translate-y-20 z-10 contrast-125 ' src="https://studio.mrngroup.co/storage/app/media/Prambors/Editorial%202/tanjiro-20230208155752.webp?tr=w-600" alt="" />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-l from-zinc-950 z-20"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-rose-900/30 z-20"></div>
            <div className="absolute top-0 right-0 w-full h-full z-30 flex">
                <div className="w-1/2 flex flex-col justify-end p-10">
                    <h1 className={`${nunito.className} font-bold text-6xl text-white tracking-tighter`}>
                        Demon Slayer
                    </h1>
                    <h2 className={`${josefin.className} font-extralight text-2xl text-white tracking-tighter`}>
                        Kimetsu no Yaiba
                    </h2>
                    <div className="flex gap-5 mt-5">
                        <p className={`${nunito.className} w-fit px-3 py-1 rounded-full text-white bg-zinc-950/50`}>
                            Action
                        </p>
                        <p className={`${nunito.className} w-fit px-3 py-1 rounded-full text-white bg-zinc-950/50`}>
                            Slayer
                        </p>
                    </div>
                </div>
                <div className={"w-1/2 p-10 flex flex-col justify-center items-center " + quicksand.className}>
                    <h1 className={`${quicksand.className} text-white text-6xl  tracking-tighter font-extrabold`}>
                        Selamat Datang<span className='text-red-500'>.</span>
                    </h1>
                    <p className='text-white mt-2'>
                        Silahkan masuk menggunakan <span className='text-red-500'>Akun Anda.</span>
                    </p>
                    <hr className='my-5 opacity-0' />
                    <FormLogin />
                    <hr className='my-5 opacity-0' />
                    <p className='text-center text-white'>
                        Belum Punya Akun? <Link href='/register' className='text-red-500'>Daftar disini</Link>
                    </p>
                    
                </div>
            </div>
        </div>
    )
}

export default LoginPage