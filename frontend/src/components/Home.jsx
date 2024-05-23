import React, { useEffect } from 'react';

function Home() {
  const goToSettings = () => {
    window.location.hash = '#settings';
  };

  useEffect(() => {
    // Check if localStorage has a value for totalAppOpenings
    let totalAppOpenings = localStorage.getItem('totalAppOpenings');

    // If totalAppOpenings is null (not set), initialize it to 0
    if (totalAppOpenings === null) {
      totalAppOpenings = 0;
    } else {
      // If it's set, parse the value to an integer
      totalAppOpenings = parseInt(totalAppOpenings);
    }

    // Increment the totalAppOpenings
    totalAppOpenings++;

    // Update the value in localStorage
    localStorage.setItem('totalAppOpenings', totalAppOpenings);
  }, []);

  return (
    <div className='bg-gray-100'>
      <div className='p-5 h-52'>
        <h1 className='text-3xl mb-2'>Welcome to keep your<br/><b>Focus pure</b></h1>
        {/* show totalopenings */}
        <p>Total app openings: {localStorage.getItem('totalAppOpenings')}</p>
      </div>
    </div>
  );
}

export default Home;
