import React from 'react'
import { useEffect, useState } from 'react';

export default function Cat(){

    const [cats, setCats] = useState([]);

    useEffect(() => {
        fetch(`https://catfact.ninja/fact?max_length=140`)
        .then(res => res.json())
        .then(data => {
            setCats(data)
            console.log(data) 
        });
        
    }, []);


    return (

        <>
        <div className="card dflex container-fluid mt-3 shadow-sm p-3 mb-5 bg-body" style={{width:'25em'}}>
            <img src="http://placekitten.com/g/200/200" className="card-img-top shadow-sm p-2 mb-1 bg-body rounded" alt="..."/>
            <div className="card-body">
                <h5 className="card-title text-center">Random Cat Fact!</h5>
                <p className="card-text">{cats.fact}</p>
            </div>
        </div>
        </>
    )

}


//cat image from - https://placekitten.com/
//cat api from - Cat Facts API https://documenter.getpostman.com/view/1946054/S11HvKSz#b5e4e9b6-96c0-4690-8a2a-274ac2d1020c