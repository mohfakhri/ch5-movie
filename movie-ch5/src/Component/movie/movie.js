import React, {useState,useEffect}from 'react'
import './movie.css'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import addFavourit from './../../redux/action/action';
import instance from './../axioss/axi';
import { useContext } from 'react';
import { counterContext } from './../context/context';
export default function Movie() {

const [movie,setMovie]=useState({x:[],y:1})

const [search,setSearch] = useState({txt:"",dd:""})


const  n = useSelector((state)=>state.allMovie.allMovies);

// useEffect(()=>{
//     instance.get("search/movie",{params:{query:search.txt}}).then((res)=>{
//         setSearch({...search, dd:res})
//     })
// })
function searchMovie() {
    let tee = n.map(x=>x.original_title.toLowerCase()).indexOf(search.txt.toLowerCase())
     setSearch({...search, dd: n[tee].id})
    // let tee = movie.x.map(x=>x.original_title.toLowerCase()).indexOf(search.txt.toLowerCase())
    //  setSearch({...search, dd: movie.x[tee].id})
    // instance.get("search/movie",{params:{query:search.txt}}).then((res)=>{
    //     setSearch({...search, dd:res})
    //     console.log(search.dd);
    // })
    

}

const inputSearch = (e)=>{
    setSearch({...search , txt: e.target.value})
}

// useEffect(() => {
//     instance.get("movie/popular", {params:{page:movie.y} }).then((res) =>{
//         setMovie({
//             ...movie, x: res.data.results,
//         });
//     })
// },[movie.y])

const neext =()=>{
    if(movie.y< 4){
        setMovie({...movie, y: movie.y+1})
    }else{
        return
    }
    
}
const prev =()=>{
    if(movie.y> 1){
        setMovie({...movie, y: movie.y-1})
    }else{
        return
    }
}




const dispatch = useDispatch()



const movieList = useSelector((state) => state.favorit.favouritsMovie);

const [favList,setfavList]= useState(movieList)
const addToFavoour = (filmID,filmPoster,filmTitle)=>{

    let favMovie={id:filmID, poster:filmPoster , title:filmTitle}

    if(favList.some(fav => fav.id == favMovie.id)){
        // filtter retern array 
        setfavList(favList.filter(f=> f.title != favMovie.title))
    }
    else{
     setfavList(favList.concat(favMovie))
    }
}

dispatch(addFavourit(favList))


const {titleClicked,setTitleClicked}= useContext(counterContext)


  return (
    <>
    <div className='movieBack'>
    <div className="input-group rounded container pt-4 mt-5 ">
  <input type="search" className="form-control rounded"onChange={(e)=>{inputSearch(e)}} placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
    <Link to={`${search.dd}`}>
    <button className="btn btn-primary" onClick={searchMovie} >Search</button>
    </Link>
</div>


    <div className="row g-5 py-4 container-fluid mx-auto">
    {n.map((mov) =>{return <div className="col-md-3" key={mov.id}>
                <div className="hh text-center  bg-light">
                    <Link to ={`${mov.id}`}>
                    <img  src={`https://image.tmdb.org/t/p/w500/${mov.poster_path}`} className=" item w-100 moviePoster"/>
                    </Link>
                    <h5 className="mt-2 py-3" onClick={()=>{setTitleClicked(titleClicked + 1)}} >{mov.title}</h5>
                    <i 
                    className={`fa-solid fa-star ${favList.some(x => x.id == mov.id)?'text-warning':'text-white'}  ss`} 
                    onClick={()=>addToFavoour(mov.id, mov.poster_path, mov.title)}></i>
                </div>

            </div>
        
        })}
         
        </div>
        </div>


    </>
  )
}
