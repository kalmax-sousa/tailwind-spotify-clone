import { Footer } from '@/components/Footer';
import { Sidebar } from '@/components/Sidebar';
import {ChevronLeft, ChevronRight, Play} from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  return (
    <div className='h-screen flex flex-col'>
      <div className='flex flex-1'>
        
        <Sidebar/>
        
        <main className='flex-1 p-6'>
          <div className='flex items-center gap-5'>
            <button className='rounded-full bg-black/40 p-1'>
              <ChevronLeft/>
            </button>

            <button className='rounded-full bg-black/40 p-1'>
              <ChevronRight/>
            </button>
          </div>

          <h1 className='font-semibold text-3xl mt-10'>Boa noite</h1>

          <div className='grid grid-cols-3 gap-4 mt-4'>
            <a href='#' className="bg-white/5 group rounded-md overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors">
              <Image src="/album.jpg" width={96} height={96} alt='Capa do album "As Palavras" de Rubel'/>
              <strong>As Palavras</strong>
              <button className='h-12 w-12 pl-1 flex items-center justify-center rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play/>
              </button>
            </a>
            <a href='#' className="bg-white/5 group rounded-md overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors">
              <Image src="/album.jpg" width={96} height={96} alt='Capa do album "As Palavras" de Rubel'/>
              <strong>As Palavras</strong>
              <button className='h-12 w-12 pl-1 flex items-center justify-center rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play/>
              </button>
            </a>
            <a href='#' className="bg-white/5 group rounded-md overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors">
              <Image src="/album.jpg" width={96} height={96} alt='Capa do album "As Palavras" de Rubel'/>
              <strong>As Palavras</strong>
              <button className='h-12 w-12 pl-1 flex items-center justify-center rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play/>
              </button>
            </a>
            <a href='#' className="bg-white/5 group rounded-md overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors">
              <Image src="/album.jpg" width={96} height={96} alt='Capa do album "As Palavras" de Rubel'/>
              <strong>As Palavras</strong>
              <button className='h-12 w-12 pl-1 flex items-center justify-center rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play/>
              </button>
            </a>
            <a href='#' className="bg-white/5 group rounded-md overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors">
              <Image src="/album.jpg" width={96} height={96} alt='Capa do album "As Palavras" de Rubel'/>
              <strong>As Palavras</strong>
              <button className='h-12 w-12 pl-1 flex items-center justify-center rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play/>
              </button>
            </a>
            <a href='#' className="bg-white/5 group rounded-md overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors">
              <Image src="/album.jpg" width={96} height={96} alt='Capa do album "As Palavras" de Rubel'/>
              <strong>As Palavras</strong>
              <button className='h-12 w-12 pl-1 flex items-center justify-center rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play/>
              </button>
            </a>
          </div>

          <h2 className='font-semibold text-2xl mt-10'>Feito para kalmax</h2>

          <div className='grid grid-cols-8 mt-4 gap-4'>
            <a href='#' className='p-3 bg-white/5 rounded-md houver:bg-white/10 flex flex-col gap-2'>
              <Image src="/album.jpg" className='w-full' width={96} height={96} alt='Capa do album "As Palavras" de Rubel'/>
              <strong className='font-semibold'>Mix de Rubel</strong>
              <span className='text-sm text-zinc-400'>Gilson, Banda do Mar e Cícero</span>
            </a>
            <a href='#' className='p-3 bg-white/5 rounded-md houver:bg-white/10 flex flex-col gap-2'>
              <Image src="/album.jpg" className='w-full' width={96} height={96} alt='Capa do album "As Palavras" de Rubel'/>
              <strong className='font-semibold'>Mix de Rubel</strong>
              <span className='text-sm text-zinc-400'>Gilson, Banda do Mar e Cícero</span>
            </a>
            <a href='#' className='p-3 bg-white/5 rounded-md houver:bg-white/10 flex flex-col gap-2'>
              <Image src="/album.jpg" className='w-full' width={96} height={96} alt='Capa do album "As Palavras" de Rubel'/>
              <strong className='font-semibold'>Mix de Rubel</strong>
              <span className='text-sm text-zinc-400'>Gilson, Banda do Mar e Cícero</span>
            </a>
            <a href='#' className='p-3 bg-white/5 rounded-md houver:bg-white/10 flex flex-col gap-2'>
              <Image src="/album.jpg" className='w-full' width={96} height={96} alt='Capa do album "As Palavras" de Rubel'/>
              <strong className='font-semibold'>Mix de Rubel</strong>
              <span className='text-sm text-zinc-400'>Gilson, Banda do Mar e Cícero</span>
            </a>
            <a href='#' className='p-3 bg-white/5 rounded-md houver:bg-white/10 flex flex-col gap-2'>
              <Image src="/album.jpg" className='w-full' width={96} height={96} alt='Capa do album "As Palavras" de Rubel'/>
              <strong className='font-semibold'>Mix de Rubel</strong>
              <span className='text-sm text-zinc-400'>Gilson, Banda do Mar e Cícero</span>
            </a>
          </div>
        </main>
      </div>

      <Footer/>
    </div>
  )
}
