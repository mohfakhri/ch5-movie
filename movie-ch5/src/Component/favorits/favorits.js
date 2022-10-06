import React, {useState}from 'react'
import { useSelector,useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import addFavourit from './../../redux/action/action';

export default function Favorits() {
  const dispatch = useDispatch()

  const movieList = useSelector((state) => state.favorit.favouritsMovie);

  const [newFav,setNewFav] = useState(movieList)

  const removeFav =(d)=>{
    setNewFav(newFav.filter(f=> f.id != d))
  }


  dispatch(addFavourit(newFav))

  return (
    <div className="row g-5 py-4 mt-3 container-fluid mx-auto bg-light">
      {movieList.map((mov) => {
        return (
          <div className="col-md-3" key={mov.id}>
            <div className="hh text-center border">
              <Link to={`${mov.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${mov.poster}`}
                  className=" item "
                />
              </Link>
              <h5 className="mt-2">{mov.title}</h5>
              <i className="fa-solid fa-star  text-success ss" 
              onClick={()=>removeFav(mov.id)}></i>
            </div>
          </div>
        );
      })}
    </div>
  );
}