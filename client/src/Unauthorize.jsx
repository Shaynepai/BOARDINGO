import Nofound from './assets/NotFound.gif'


export default function NotFound() {
  return (
    <div className="flex-1 text-center p-5 mt-5">

<div className='flex justify-center p-5'>
    <img src={Nofound} alt="NoFound" />
</div>

   <div>
    <h1 className="text-5xl font-bold">401 Unauthorize</h1>
    </div>
    </div>
  )
}
