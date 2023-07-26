import { useState } from "react";
import { Link } from "react-router-dom";
import Logout from "../../../components/Logout";

export default function HostMenu() {


  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Overview", src: "Chart_fill" , link: "/Host"  },
   { title: "Your Listing ", src: "Folder", link: "/Host/hostyourlisting",},
    { title: "Inbox", src: "Chat" , link: "/Host/HostInbox", },
    { title: "Reservations", src: "Chat" , link: "/Host/reservations-upcoming", },
    // { title: "Account", src: "User", gap: true },
    // { title: "Search", src: "Search" }, THIS IS A FEATURE
    // { title: "Analytics", src: "Chart" }, THIS IS A FEATURE
    // gap: true },  --If you want to separate the bottom and the top

    // { title: "Setting", src: "Setting" },  THIS IS A FEATURE
    { title: <Logout/>, gap: true },
  ];



  return (
     <>
     <div>
     <hr />
    <div className="flex">
    <div className="hidden md:block">
      <div
        className={` ${
          open ? "w-52" : "w-20 "
        } bg-gray-100 h-screen p-5  pt-8 relative duration-300`}
      >
        <img
          src="/src/assets/control.png"
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-seventh
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <img
           onClick={() => setOpen(!open)}
            src="/src/assets/logo.png"
            className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
          
          <h1
            className={`text-fourth origin-left font-bold text-2xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            Menu
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex rounded-md p-2 cursor-pointer duration-300 ease-in-out hover:bg-gray-300 text-fourth font-bold text-sm items-center gap-x-4
              ${Menu.gap ? "mt-9" : "mt-2"} ${
                index === 0 && "bg-light-white"
              } `}
            >
            
            <Link to={Menu.link} className="flex gap-3">

              {/* <img src={`/src/assets/${Menu.src}.png`} /> */}
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
                
              </span>
              </Link>
            </li>

          ))}
        </ul>
      </div>

      </div>

      {/* Long Vertical */}
      {/* <div className="border bg-headercolor hidden md:block"></div> */}
      {/*End of Long Vertical */}



      {/* -----------------PAGES-------------------------  */}
      {/* <div className="h-screen flex-1 p-7 ">
        <h1 className="text-2xl font-bold ">Overview</h1>
        <h1>Ratings</h1>
      </div> */}



{/* Host Profile */}



              {/* <div className="">
           
              </div> */}
{/* Host Profile */}

    </div>
    </div>
    </>
  )
}
