import ChatInbox from '../components/ChatInbox';
import HostMenu from '../components/HostMenu';
import Message from '../components/Message';

export default function HostOverview() {
  return (
    <>
    <div>
    <hr />
   <div className="flex">
   <div>
    <HostMenu />
   </div>

     {/* Long Vertical */}
     <div className="border bg-headercolor hidden md:block"></div>
     {/*End of Long Vertical */}

     {/* INBOX */}

      <ChatInbox />
     
    {/* END OF INBOX */}

       {/* Long Vertical */}
       <div className="border"></div>
     {/*End of Long Vertical */}





     {/* -----------------PAGES-------------------------  */}
     <div className="h-screen flex-1  ">
     <Message />
     </div>



{/* Host Profile */}


{/* Host Profile */}

   </div>
   </div>
   </>
  )
}
