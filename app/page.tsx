import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-row justify-center items-center p-24">
      <div>
        <Image src="/cb_brounze.svg" 
        alt="cafebean logo in brounze"
        width={200}
        height={200}
        className="m-12"
        />
      </div>
      <div className="flex flex-col items-left">
        <a href="/about"><span className= "font-black text-4xl hover:text-color-fg-hover transition duration-75">about me</span></a>
        <a href="/resume"><span className="font-black text-4xl hover:text-color-fg-hover transition duration-75">resumé / cv</span></a>
        <a href="/music"><span className="font-black text-4xl hover:text-color-fg-hover transition duration-75">music</span></a>
      </div>
    </main>
  )
}
