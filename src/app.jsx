import React, {useState,useEffect,useRef} from 'react'
import ReactDom from 'react-dom'
import 'whatwg-fetch'
import {Card} from 'react-bootstrap'
import Querymovies from './querymovies.jsx'
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import {Navbar,Nav} from 'react-bootstrap'


let contentNode=document.getElementById('container')


function Movies(props){
    let [List, setList]=useState('')
    let [Name, setName]=useState('')
    console.log(List)
    return(
        <div style={{padding:20}}>
            <div className='center-poster'>
                <img className='responsive' src='./images/poster.jpg'/>
                <div>
                    <div className='position-header'>
                <div>Watch</div>
                <div>Something</div>
                <div>Incredible.</div>
                    </div>
                </div>
            </div>
            <div className='input-group input'>
                <div className='input-group-addon'>
                    <button className='btn' onClick={()=>{
                        fetch(`https://www.omdbapi.com/?s=${Name}&apikey=f5745c03`).then((response)=>response.json()).then(data=>
                            setList(data.Search))
                    }
                    }><span className='glyphicon glyphicon-search'></span>Search</button>
                </div>
                <input className='form-control' type='text' name='Name' value={Name} onChange={(Event)=>setName(Event.target.value)}/>
            </div>
            <div className='content'>
                <Card>
                    <Querymovies/>
                    <div className='row arrange-row'>
                    {List && List.map((item)=><div className='col-md-3 cancel' key={item.imdbID}>
                        <iframe src={item.Poster}></iframe>
                        <div>{item.Title}</div>
                        <div>{item.Year}</div>
                        <div>{item.Rated}</div>
                        <div>{item.Released}</div>
                    </div>
                    )
                    }
                    </div>
                </Card>
            </div>
        </div>
    )
}
const RoutedApp=()=>(
<div className='container-fluid'>
    <div>
        <Navbar bg='dark' variant='dark' expand="lg" style={{height:90}} defaultExpanded='collapseOnSelect'>
            <Navbar.Toggle style={{color:'white'}} aria-controls='mynavbar'/>
            <Navbar.Collapse id='mynavbar'>
                <div style={{fontFamily:'Sofia', fontSize:18}}>
                    <Nav>
                        <Nav.Link style={{marginLeft:70, color:'white'}} href='/' >Home</Nav.Link>
                    </Nav>
                </div>
            </Navbar.Collapse>
        </Navbar>
    </div>
    <Router>
        <Routes>
            <Route path='/' element={<Movies/>}/>
        </Routes>
    </Router>
</div>
)


ReactDom.render(<RoutedApp/>, contentNode)