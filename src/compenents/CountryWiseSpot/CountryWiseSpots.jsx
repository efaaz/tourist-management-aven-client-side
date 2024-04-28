import React from 'react'

function CountryWiseSpots() {

    function handle(){
        fetch('http://localhost:5000/spotss', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(touristSpots)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }
  return (
    <form onSubmit={handle}>
        <button type='submit' className='btn'>add</button>
    </form>
  )
}

export default CountryWiseSpots