// import { Stocks } from "../Stocks";
import Card from "../components/Card";
import Category from "../components/Category";



export default  function IndexPage() {
  return (

    <div className="">

<hr />

<Category />

<hr className="hidden md:block" />


    {/* <h1>Cards</h1>  */}
      {/* <Stocks /> */}
      <Card />
    </div>

    )

}