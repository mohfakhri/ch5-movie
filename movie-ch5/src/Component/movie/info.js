import React, { useState, useEffect } from "react";
import instance from "../axioss/axi";
export default function Info() {
  let [id, setId] = useState({});

  let x = window.location.pathname.split("/")[2];
  useEffect(() => {
    instance.get(`movie/${x}`).then((res) => {
      setId(res.data);
    });
  }, []);
  return (
    <>
      {console.log(instance.baseURL)}
      <div className="container-fluid px-5 py-4 mt-2 bg-light">
        <div className="row ">
          <div className="col-md-4">
            <img
              src={`https://image.tmdb.org/t/p/w500/${id.poster_path}`}
              className=" item "
            />
          </div>
          <div className="col-md-8">
            <div className=" bg-white ps-3 ">
              <h2>{id.original_title}</h2>
              <p>{id.tagline}</p>
              <img
                src={`https://image.tmdb.org/t/p/w500/${id.backdrop_path}`}
                className=" item "
              />
              <p className="mt-2">{id.overview}</p>
              <p>Release Date : {id.release_date}</p>
            </div>
            <p className="text-muted">
              Rating: {id.vote_average}{" "}
              <span className="d-flex justify-content-end">
                Dauration: {id.runtime} min
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}