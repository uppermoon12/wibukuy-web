'use client';

import { quicksand } from "@/app/fonts"
import { useState } from "react"

const FormLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [formKosong, setFormKosong] = useState(false);
    const submitLogin = async (e) => {
        e.preventDefault();

        if (!email) {
            setFormKosong(true);
            return;
        }

        if(!password) {
            setFormKosong(true);
            return;
        }

        setFormKosong(false);
        alert('Login Berhasil');
    }

    return (
        <form onSubmit={submitLogin} className={'flex flex-col items-center w-full gap-5 '}>
            <div className="w-2/3">
                <label htmlFor="" className=' text-white font-bold'>Email atau Username</label>
                <input type="text" autoComplete="off" name="" onChange={e => setEmail(e.target.value)} id="" className="w-full h-10 outline-none rounded-xl px-5 text-white focus:bg-zinc-950/70 bg-zinc-950/50 transition-all duration-300" />
                { formKosong && !email && <p className='text-end text-red-500'>Email atau Username tidak boleh kosong</p> }
            </div>
            <div className="w-2/3">
                <label htmlFor="" className=' text-white font-bold'>Password</label>
                <input type="password" name="" onChange={e => setPassword(e.target.value)} id="" className="w-full h-10 outline-none rounded-xl px-5 text-white focus:bg-zinc-950/70 bg-zinc-950/50 transition-all duration-300" />
                { formKosong && !password && <p className='text-end text-red-500'>Email atau Username tidak boleh kosong</p> }
            </div>
            <button className="w-1/3 h-10 rounded-lg font-bold text-red-500 bg-zinc-950/80 hover:bg-zinc-950">
                Masuk
            </button>
        </form>
    )
}

export default FormLogin