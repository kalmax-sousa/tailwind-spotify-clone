import Image from "next/image";
import { Play, Shuffle, SkipBack, SkipForward, Repeat, Mic2, LayoutList, Laptop2, Volume, Maximize2 } from 'lucide-react';

export function Footer(){
    return(
        <footer className='bg-zinc-800 border-t border-zinc-850 p-4 flex items-center justify-between'>
        <div className='flex gap-3 items-center'>
          <Image src="/album.jpg" width={56} height={56} alt='Capa do album "As Palavras" de Rubel'/>
          <div className='flex flex-col'>
            <strong className='font-normal'>Torto Arado</strong>
            <span className='text-xs text-zinc-500'>Rubel, Liniker, Luedji Luna</span>
          </div>
        </div>

        <div className='flex flex-col items-center gap-2'>
          <div className='flex gap-6 items-center'>
            <Shuffle className='text-zinc-200' size={20} />
            <SkipBack className='text-zinc-200' size={20}/>
            <button className='h-10 w-10 pl-1 flex items-center justify-center rounded-full bg-white text-black'>
              <Play/>
            </button>
            <SkipForward className='text-zinc-200' size={20}/>
            <Repeat className='text-zinc-200' size={20}/>
          </div>

          <div className='flex items-center gap-2'>
            <span className='text-xs text-zinc-400'>1:21</span>
            <div className='h-1 rounded-full w-96 bg-zinc-600'>
              <div className='h-1 w-40 bg-zinc-200'/>
            </div>
            <span className='text-xs text-zinc-400'>3:42</span>
          </div>
        </div>

        <div className='flex items-center gap-4'>
          <Mic2 size={20}/>
          <LayoutList size={20}/>
          <Laptop2 size={20}/>
          <div className='flex items-center gap-2'>
            <Volume size={20}/>
            <div className='h-1 rounded-full w-24 bg-zinc-600'>
              <div className='h-1 w-6 bg-zinc-200'/>
            </div>
          </div>
            <Maximize2 size={20}/>

        </div>
      </footer>
    );
}