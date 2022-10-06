import React from 'react'
import { Link } from 'react-router-dom'
import './api.css'
import instance  from '../axioss/axi'
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import getAllMovies from './../../redux/action/publicMovies';

export default function Api() {
    const[movies,setMovies]= useState({arrMovie:[],page:2})
    const dispatch = useDispatch()
    useEffect(() => {
      instance.get("movie/popular", {params:{page:movies.page} }).then((res) =>{
          setMovies({
              ...movies, arrMovie: res.data.results,
          });
      })
  },[movies.page])

  dispatch(getAllMovies(movies.arrMovie));
  
  return (
    <div id='backHome'>
      <div className='container-fluid brows  text-center'>
        <div>
        <h2>Here You can Brows All Of Top Movies</h2>
        <h5 className='mt-2'>Enjoy your Time</h5>
        <Link to='movies'>
        <button className="butto mt-3">Brows Movies</button>
        </Link>
        </div>
      </div>
    </div>
  )
}
