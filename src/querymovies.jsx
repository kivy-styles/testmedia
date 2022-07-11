import React, {useState} from 'react'
import {Link} from 'react-router-dom'

export default function Querymovies(){
    const seperator=<span> | </span>
    return(
        <div style={{padding:20}}>
            <Link to='/'>
                All Movies
            </Link>
            {seperator}
            <Link to='/' >
                Title
            </Link>
            {seperator}
            <Link to='/?'>
                Rated
            </Link>
        </div>
    )
}