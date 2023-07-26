import  { useState } from 'react';
import Verified from './Verified';
import NotVerified from './NotVerified';



function VerifyStatus() {
  const [icon, setIcon] = useState('IconName1'); // Initial icon name
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = (e) => {
    e.preventDefault(); // Prevent default behavior
    setIsLoading(true);
    // Simulating an asynchronous operation
    setTimeout(() => {
    setIcon(icon === 'IconName1' ? 'IconName2' : 'IconName1'); // Set the new icon name
    setIsLoading(false);
  }, 2000);
  };

  const getCursorStyle = () => {
    return isLoading ? 'wait' : 'pointer';
  };

  return (
    <div onClick={handleClick}  style={{ cursor: getCursorStyle() }}>
     {isLoading ? (
        <span>Loading...</span>
      ) : (
     <>
      {icon === 'IconName1' ? (
        <NotVerified />

      ) :  (

        <Verified />

      )}
      </>
      )}
    </div>
  );
}

export default VerifyStatus;
