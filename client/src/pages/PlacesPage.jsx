/* eslint-disable react/no-unescaped-entities */
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import MessageButton from "../components/MessageButton";
import ReserveButton from "../components/reserveButton";

export default function PlacesPage() {
  const { id } = useParams();
  console.log(id);
  const [accommodation, setAccommodation] = useState(null);
  const fetchData = async () => {
    try {
      const response = await axios.get(`accommodation/${id}`); // Replace this with your actual backend route
      setAccommodation(response.data);
      console.log(response.data);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  useEffect(() => {
    // Define a function to fetch the data
    fetchData();
  }, []);

  if (!accommodation) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className=" container max-w-6xl my-3 mx-auto px-5">
        {/* Title */}
        <h1 className="text-3xl mt-5 mb-2">Title : {accommodation.Title}</h1>
        {/* Location */}
        <h1 className="text-lg">Address: {accommodation.Address}</h1>

        {/* Star Icon and reviews */}
        <div className="flex justify-between grid-rows-2 gap-2 ml-3">
          {/* SVG */}{" "}
          <div className="flex gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clipRule="evenodd"
              />
              {/*End of SVG */}{" "}
            </svg>

            <h1>4.0</h1>
            <p className="underline">100 Reviews</p>
            {/*End of Star Icon and rating */}
          </div>
          {/* Heart Shape With save text */}
          <div className="flex gap-1 mr-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
            <h1>Save</h1>
          </div>
          {/* End of HeartShape With save text*/}
        </div>

        {/* Gallery */}

{/* Alone when Small Screen */}
<div className="flex flex-wrap w-1/2 mx-auto  md:hidden visible">
              <div className="md:p-1 p-1 w-full">
                <img
                  alt="gallery"
                  className="border rounded-3xl md:shrink-0 w-full h-full object-cover object-center block"
                  src={
                    accommodation.images.image[0]
                      ? accommodation.images.image[0]
                      : "https://dummyimage.com/600x360"
                  }
                />
              </div>
            </div>

        <div className="p-3 hidden md:block">
          <div className="flex flex-wrap md:-m-2 -m-1 ">
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-1 p-1 w-full">
                <img
                  alt="gallery"
                  className="border rounded-l-3xl w-full h-full object-cover object-center block"
                  src={
                    accommodation.images.image[0]
                      ? accommodation.images.image[0]
                      : "https://dummyimage.com/600x360"
                  }
                />
              </div>
            </div>
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-1 p-1 w-1/2">
                <img
                  alt="gallery"
                  className="border w-full object-cover h-full object-center block"
                  src={
                    accommodation.images.image[1]
                      ? accommodation.images.image[1]
                      : "https://dummyimage.com/500x300"
                  }
                />
              </div>
              <div className="md:p-1 p-1 w-1/2">
                <img
                  alt="gallery"
                  className="border rounded-tr-3xl rounded-br-sm w-full object-cover h-full object-center block"
                  src={
                    accommodation.images.image[2]
                      ? accommodation.images.image[2]
                      : "https://dummyimage.com/501x301"
                  }
                />
              </div>
              <div className="md:p-1 p-1 w-1/2">
                <img
                  alt="gallery"
                  className="border w-full object-cover h-full object-center block"
                  src={
                    accommodation.images.image[3]
                      ? accommodation.images.image[3]
                      : "https://dummyimage.com/502x302"
                  }
                />
              </div>
              <div className="md:p-1 p-1 w-1/2 text-center cursor-pointer">
                {/* <img
                  alt="gallery"
                  className="rounded-br-xl rounded-tr-sm w-full object-cover h-full object-center block"
                  src="https://dummyimage.com/view  "
                /> */}

                <div className="border rounded-br-3xl rounded-tr-sm w-full h-full">
                  <h1 className="flex  text-2xl justify-center mt-28">
                    See more
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*End of Gallery */}

        <div className="flex justify-between grid-rows-2 p-3 -mt-3">
          {/* Price range and Hosted By */}

          {/* Price range */}
          <div className="flex text-2xl font-bold gap-2 ">
            <h1>Price: {accommodation.Price} </h1>
          </div>
          {/*End of Price range */}

          {/* Hosted by */}
          <div className="flex gap-2">
            <div className=" bg-gray-500 text-white rounded-full border border-gray-500 overflow-hidden ">
              <img
                className="w-9 h-9 object-cover"
                src={accommodation.profilePic}
                alt=""
              />
            </div>
            {/* Host_Name */}
            <div className="m-auto">
              Hosted by: {accommodation.ownerFN} {accommodation.ownerLN}
            </div>
            {/*End of Host_Name */}
          </div>
          {/*End of Hosted by */}
        </div>
        {/* ------------------------------------------ */}
        <hr />
        {/* ------------------------------------------ */}
        <h1 className="text-3xl font-semibold mt-2">What this place offers</h1>

        {/* Perks and Includes */}
        <div className="flex justify-between ml-44 mr-44 mt-1">
          {/* ------------------------------------------ */}
          <div className="">
            <h1 className="text-lg mb-52">Amenities: </h1>

            {/* li */}
            <div className="w-30">
              <h3>{accommodation.Amenities}</h3>
            </div>
            {/*End of li */}
          </div>
        </div>
        {/*End of Perks and Includes */}

        {/* -------------------------------------------- */}
        <hr />
        {/* -------------------------------------------- */}

        {/* Places Nearby */}
        <div className="flex justify-between p-2 sm:grid-cols-1">
          {/* Title Name */}
          <div>
            <h1 className="text-3xl font-semibold ">Places Nearby</h1>
            <div className="mt-2">
              <div className="flex gap-5">
                <h1>Name of place</h1> <h1>Distance</h1>
              </div>
              <div className="flex gap-5">
                <h1>Name of place</h1> <h1>Distance</h1>
              </div>
              <div className="flex gap-5">
                <h1>Name of place</h1> <h1>Distance</h1>
              </div>
              <div className="flex gap-5">
                <h1>Name of place</h1> <h1>Distance</h1>
              </div>
              <div className="flex gap-5">
                <h1>Name of place</h1> <h1>Distance</h1>
              </div>
            </div>
          </div>
          {/*End of Title Name */}

          {/* Neighborhood and Map */}
          <div className="xl:mr-80">
            <h1 className="font-semibold ">Explore The Neighborhood</h1>
            <div>
              <iframe
                width="500px"
                height="500px"
                scrolling="no"
                src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=8.1573322,125.1249206&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
              ></iframe>
            </div>
            {/*End of Neighborhood and Map */}
          </div>
        </div>
        {/*End of Places Nearby */}

        {/* -------------------------------------- */}
        <hr />
        {/* -------------------------------------- */}

        {/* House Rules */}
        <div>
          <h1 className="text-3xl font-semibold ">House Rules</h1>
          <h3 className="text-lg mb-28">{accommodation.houseRules}</h3>
        </div>
        {/*End of House Rules */}

        {/* -------------------------------------- */}
        <hr />
        {/* -------------------------------------- */}

        {/* Ratings and Review */}
        <div>
          {/* Title */}
          <h1 className="text-3xl font-semibold mb-28 mt-2">
            Ratings and Review{" "}
          </h1>
          {/*End of Title */}

          <div className="grid text-center grid-cols-2 p-5 gap-2"></div>
          {/*End of Rating Bar */}
        </div>
        {/*End of Ratings and Review */}

        {/* ------------------------------------------------------ */}
        <hr />
        {/* ------------------------------------------------------ */}

        {/* HOSTED BY */}

        <div className="flex gap-2 mt-3">
          <div>
            <div className=" bg-gray-500 text-white rounded-full border border-gray-500 overflow-hidden ">
              <img
                className="w-9 h-9 object-cover"
                src={accommodation.profilePic}
                alt=""
              />
            </div>
          </div>
          <div className="flex gap-16 mb-36">
            <div>
              <h1 className="text-xl">
                Hosted By: {accommodation.ownerFN} {accommodation.ownerLN}
              </h1>
              <p className="text-gray-500">
                Joined in {/*add time stamp to make this work.*/}
              </p>
            </div>

            <div>
              <MessageButton />
            </div>
            <div>
              <ReserveButton id={id} />
            </div>
          </div>
        </div>
        <hr />
        <div className="p-2 mb-10 bg-cyan-950 "></div>

        {/*end of HOSTED BY */}
      </div>
    </>
  );
}
