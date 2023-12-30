'use client'

import { useEffect, useState } from "react"
import { nunito } from "../fonts"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCalendarCheck, faChartLine, faTimeline } from "@fortawesome/free-solid-svg-icons"
import AnimeTrendsList from "./animelists/trends"
import AnimeCompletedLists from "./animelists/completed"
import AnimeUpdateList from "./animelists/update"

const AnimeListPage = () => {
    const [animePage, setAnimePage] = useState('trends');

    useEffect(() => {

    }, [animePage])
    return (
        <div>
            <div className="flex justify-around items-center w-full border-b border-zinc-700 h-20">
                <button onClick={() => setAnimePage(state => state = 'trends')} className={`${nunito.className} text-white font-extralight text-xl h-full px-2 flex items-center rounded-t-xl gap-3 ${animePage == 'trends' ? 'bg-zinc-900' : ''} hover:bg-zinc-900 border-b-2 border-b-white/0 ${animePage == 'trends' ? 'border-b-red-500' : ''}  focus:border-b-red-500 transition-all duration-300 `}>
                    <FontAwesomeIcon icon={faChartLine} className='w-5 h-5' />
                    Trends Now
                </button>
                <button onClick={() => setAnimePage(state => state = 'update')} className={`${nunito.className} text-white font-extralight text-xl h-full px-2 flex items-center rounded-t-xl gap-3 ${animePage == 'update' ? 'bg-zinc-900' : ''} hover:bg-zinc-900 border-b-2 border-b-white/0 ${animePage == 'update' ? 'border-b-red-500' : ''}  focus:border-b-red-500 transition-all duration-300 `}>
                    <FontAwesomeIcon icon={faTimeline} className='w-5 h-5' />
                    Update Now
                </button>
                <button onClick={() => setAnimePage(state => state = 'completed')} className={`${nunito.className} text-white font-extralight text-xl h-full px-2 flex items-center rounded-t-xl gap-3 ${animePage == 'completed' ? 'bg-zinc-900' : ''} hover:bg-zinc-900 border-b-2 border-b-white/0 ${animePage == 'completed' ? 'border-b-red-500' : ''}  focus:border-b-red-500 transition-all duration-300 `}>
                    <FontAwesomeIcon icon={faCalendarCheck} className='w-5 h-5' />
                    Completed
                </button>
            </div>
            { animePage == 'trends' && <AnimeTrendsList />}
            { animePage == 'completed' && <AnimeCompletedLists />}
            { animePage == 'update' && <AnimeUpdateList />}
        </div>
    )
}

export default AnimeListPage