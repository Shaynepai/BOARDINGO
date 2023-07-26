
export default function ChatInbox() {
  return (
    <div className="h-full text-xs w-72 ">
    <h1 className="flex justify-center my-5 font-extrabold">Chats</h1>
  
  
    <label className="relative block mx-5 grow mt-1 mb-1">
  <span className="sr-only">Search</span>
  {/* mini Magnifying Glass */}
  <span className="absolute  inset-y-0 right-0 flex items-center pl-2 mr-3 ">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-slate-300">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
  </span>
    {/*End of mini Magnifying Glass */}
  <input className="text-sm outline-none h-7 placeholder:font-semibold placeholder:text-slate-400 block bg-white w-full border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-seventh focus:ring-1 sm:text-sm" placeholder="Search..." type="text" name="search"/>
</label>
  

{/* Inbox */}
    <div>

<div className="flex gap-2 my-3 mx-3 rounded-2xl p-1 cursor-pointer">
<div className="flex"><img className="w-8 h-8" src="/src/assets/profile.png" alt="" /></div>
<div className="flex my-auto">Shayne Meian E.</div>
</div>



    </div>
{/*End of Inbox */}

    </div>
  )
}
