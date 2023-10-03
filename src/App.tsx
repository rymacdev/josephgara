import { SocialIcon } from "react-social-icons"

function App() {

  return (
    <div className="flex flex-col w-full h-screen">
      <header className="pt-12 pb-8 md:py-14 text-center text-slate-900">
        <h3 className="py md:py-2 text-2xl md:text-3xl font-bold uppercase tracking-widest">This is</h3>
        <h1 className="text-4xl md:text-6xl font-bold">Joseph Gara</h1>
      </header>
      <div className="flex flex-row justify-center items-center h-2/3 overflow-hidden">
        <img className="object-cover max-w-none max-h-full md:min-w-full mx-auto" src="./images/joseph-gara-hero-01.jpg" alt="Joseph Gara masthead" />
      </div>
      <footer className="flex flex-row justify-center items-center gap-3 p-6 pb-12">
        <SocialIcon style={{ height: 40, width: 40 }} url="https://open.spotify.com/artist/31M83eWJM6J8qCaeUMLIWF" />
        <SocialIcon style={{ height: 40, width: 40 }} url="https://www.youtube.com/channel/UCWjbUH8f5M8T1h_udGp6KTA" />
        <SocialIcon style={{ height: 40, width: 40 }} url="https://www.facebook.com/josephgaraofficial/" />
        <SocialIcon style={{ height: 40, width: 40 }} url="https://www.instagram.com/josephgaraofficial/" />
      </footer>
    </div>
  )
}

export default App
