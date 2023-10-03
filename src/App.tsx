

function App() {

  return (
    <div className="flex flex-col w-full h-screen">
      <div className="pt-12 pb-8 md:py-14 text-center text-slate-900">
        <h3 className="py md:py-2 text-2xl md:text-3xl font-bold uppercase tracking-widest">This is</h3>
        <h1 className="text-4xl md:text-6xl font-bold">Joseph Gara</h1>
      </div>
      <div className="flex flex-row justify-center items-center h-2/3 overflow-hidden">
        <img className="object-cover max-w-none max-h-full md:min-w-full mx-auto" src="./images/joseph-gara-hero-01.jpg" alt="Joseph Gara masthead" />
      </div>
    </div>
  )
}

export default App
