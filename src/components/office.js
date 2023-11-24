//https://officeapi.akashrajpurohit.com/quote/random

//start writing the code for this 

import React from 'react'
import {useEffect, useState} from 'react'

export default function OfficeQ(){

  const [offices, setOffices] = useState([]);

  useEffect(() => {
    fetch(`https://officeapi.akashrajpurohit.com/quote/random`)
    .then(res => res.json())
    .then(data => {
      setOffices(data)
      console.log(data)
    });

  }, []);

  return (

    <>
    <div className="card dflex container-fluid mt-3 shadow-sm p-3 mb-5 bg-body" style={{width:'25em'}}>
        <img src="http://placekitten.com/g/200/200" className="card-img-top shadow-sm p-2 mb-1 bg-body rounded" alt="..."/>
        <div className="card-body">
            <h5 className="card-title text-center">{offices.character}</h5>
            <p className="card-text">{offices.quote}</p>
        </div>
    </div>
    </>
)
  } 

  //gobble gobble 