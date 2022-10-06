import "./App.css";
import { Routes, Route } from "react-router-dom";
import Nav from "./Component/nav/nav";
import AddForm from "./Component/register/register";
import FormComponent from "./Component/login/firstForm";
import Movie from "./Component/movie/movie";
import Info from "./Component/movie/info";
import Favorits from "./Component/favorits/favorits";
import Api from './Component/Api/api';
import { ContextProvider } from "./Component/context/context";
import { useState } from 'react';


function App() {
  const [titleClicked,setTitleClicked]=useState(0)

  return (
    <>
     <ContextProvider value={{titleClicked,setTitleClicked}}>
      <Nav />
      <Routes>
        <Route path="" element={<Api />} />
        <Route path="register" element={<AddForm />} />
        <Route path="LogIn" element={<FormComponent />} />
        <Route path="/movies" element={<Movie />}></Route>
        <Route path="movies/*" element={<Info />} />
        <Route path="favorits" element={<Favorits />} />
        <Route path="favorits/*" element={<Info />} />
      </Routes>
      </ContextProvider>
    </>
  );
}

export default App;
