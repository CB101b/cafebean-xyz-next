import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen md:flex-row flex-col justify-center items-center">
      <div>
        <Image src="/cb_brounze.svg" 
        alt="cafebean logo in brounze"
        width={200}
        height={200}
        className="m-12"
        />
      </div>
      <nav className="flex flex-col items-left">
        <a href="/about"><span className= "font-black text-3xl hover:text-color-fg-hover active:pl-4 transition duration-75">about me</span></a>
        <a href="/resume"><span className="font-black text-3xl hover:text-color-fg-hover transition duration-75">resumé / cv</span></a>
        <a href="/music"><span className="font-black text-3xl hover:text-color-fg-hover transition duration-75">music</span></a>
      </nav>
    </main>
  )
}
