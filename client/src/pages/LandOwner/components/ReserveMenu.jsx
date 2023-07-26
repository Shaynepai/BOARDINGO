import { Link } from "react-router-dom"



export default function ReserveMenu() {
  return (
    <>
        <div className="">
        <h1 className="mt-10 text-3xl ml-10">Reservations</h1>

        
        <div className="flex gap-5 mt-5 ml-10">

<Link to="">
        <div className="">Upcoming</div>
        {/* <div className="border mt-1 hover:border-black"></div> */}
</Link>


<Link to="">
        <div>Accepted</div>
</Link>


<Link to="">
        <div>Declined</div>
</Link>
        </div>
        </div>

    </>
  )
}
