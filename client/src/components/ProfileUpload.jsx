import { useState } from "react";

export default function ProfileUpload({ onFileValueChange }) {

  const [profilePic, setProfilePic] = useState();
  const [fileValue, setFileValue] = useState();

  async function handleUpload(ev) {
    ev.preventDefault();
    const file = ev.target.files[0];
    const base64 = await toBase64(file);
    setProfilePic(URL.createObjectURL(file));
    setFileValue(base64);
    onFileValueChange(base64);
    // Do something with the file value
    //console.log(base64);
  }

  return (
    <div>
      <div className="flex border rounded-full h-36 w-36 m-auto">
        <img src={profilePic} className="flex border rounded-full object-cover h-36 w-36" />
      </div>

      <label
        onChange={handleUpload}
        className="mt-1 h-10 cursor-pointer flex items-center gap-1 justify-center border bg-transparent rounded-2xl p-2 text-2xl text-gray-600"
      >
        <input type="file" multiple className="hidden" id="profilePic" name="profilePic" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
          />
        </svg>
        Upload Profile picture
      </label>
    </div>
  );
}

function toBase64(file) {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      resolve(fileReader.result);
    };
    fileReader.onerror = (error) => {
      reject(error);
    };
  });
}
