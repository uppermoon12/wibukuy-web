import Image from 'next/image'
import Navbar from './components/navbar'
import { josefin, nunito, quicksand } from './fonts'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarCheck, faChartLine, faTimeline } from '@fortawesome/free-solid-svg-icons'
import AnimeListPage from './components/animeList'


export default function Home() {
  return (
    <div className="px-20">
      <Navbar />
      <div className="grid grid-cols-2 gap-5 h-[400px]">
        <div className="relative overflow-hidden h-full w-full ">
          <img className='z-10 h-full object-cover' src="https://studio.mrngroup.co/storage/app/media/Prambors/Editorial%202/tanjiro-20230208155752.webp?tr=w-600" alt="" />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-zinc-950 from-10% flex flex-col justify-end p-10">
            <h1 className={`${nunito.className} font-bold text-zinc-200 text-4xl`}>
              Demon Slayer
            </h1>
            <h2 className={`${quicksand.className} tracking-tighter text-zinc-300`}>
              Kimetsu no Yaiba
            </h2>
            <div className="flex justify-between w-full items-end my-5">
              <div className="flex gap-3">
                <p className={`${quicksand.className} font-extralight w-fit px-3 py-1 rounded-full text-sm text-white bg-zinc-950/80`}>
                  Action
                </p>
                <p className={`${quicksand.className} font-extralight w-fit px-3 py-1 rounded-full text-sm text-white bg-zinc-950/80`}>
                  Slayer
                </p>
              </div>
              <div className="flex gap-5">
                <Link href="/anime/" className={'px-3 p-2 bg-zinc-950/90 rounded-full text-white border border-white/0 hover:border-white ' + quicksand.className}>
                  Episodes
                </Link>
                <Link href="/anime/" className={'px-3 p-2 bg-red-700 hover:bg-red-900 rounded-full text-white font-bold ' + quicksand.className}>
                  Play
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="relative overflow-hidden">
          <img className='z-10 h-full object-cover object-left-top' src="https://i0.wp.com/anitrendz.net/news/wp-content/uploads/2022/02/jujutsu-kaisen-0-film-key-visual.jpg" alt="" />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-zinc-950 from-10% flex flex-col justify-end p-10">
            <h1 className={`${nunito.className} font-bold text-zinc-200 text-4xl`}>
              Jujutsu Kaisen
            </h1>
            <h2 className={`${quicksand.className} tracking-tighter text-zinc-300`}>
              Sorcery Fight
            </h2>
            <div className="flex justify-between w-full items-end my-5">
              <div className="flex gap-3">
                <p className={`${quicksand.className} font-extralight w-fit px-3 py-1 rounded-full text-sm text-white bg-zinc-950/80`}>
                  Action
                </p>
                <p className={`${quicksand.className} font-extralight w-fit px-3 py-1 rounded-full text-sm text-white bg-zinc-950/80`}>
                  Slayer
                </p>
              </div>
              <div className="flex gap-5">
                <Link href="/anime/" className={'px-3 p-2 bg-zinc-950/90 rounded-full text-white border border-white/0 hover:border-white ' + quicksand.className}>
                  Episodes
                </Link>
                <Link href="/anime/" className={'px-3 p-2 bg-red-700 hover:bg-red-900 rounded-full text-white font-bold ' + quicksand.className}>
                  Play
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AnimeListPage />
    </div>
  )
}
