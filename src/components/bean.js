//bean app haven't decided what this is going to be 

import React from 'react'
//import coffee from '../App/beans.json'

//let coffee = require('~/my')

export default function Postcard(){



        return (
            <>
            
            <div className="card dflex container-fluid mt-3 shadow-sm p-3 mb-5 bg-body" style={{width:'25em'}}>
                <img src="https://media.tenor.com/StecFmEI6isAAAAC/the-office-everybody-dance-now.gif" className="card-img-top shadow-sm p-2 mb-1 bg-body rounded" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <h6 className="card-date">Card date</h6>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    
                </div>
            </div>
            
            </>
        )

}