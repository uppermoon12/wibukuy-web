'use client';
import Link from 'next/link';
import { nunito, quicksand } from '../fonts';

const Navbar = () => {
    return (
        <div className={"w-full h-20 flex justify-between items-center px-20 " + quicksand.className}>
            <input type="text" className="w-1/3 h-10 rounded-lg px-5 outline-none bg-zinc-900 text-white placeholder:text-zinc-600" placeholder='Cari Anime anda disini' />
            <div className="flex gap-20 items-center">
                <Link href="/about" className='text-white' >
                    Tentang Kita
                </Link>
                <Link href="" className='text-white'>
                    Genre
                </Link>
                <Link href='/login' className={`text-white bg-red-600 hover:bg-red-800 rounded-lg px-3 py-2 font-bold ${nunito.className}`}>
                    Masuk
                </Link>
            </div>
        </div>
    )
}

export default Navbar