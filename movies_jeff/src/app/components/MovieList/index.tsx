"use client";
import {useEffect, useState } from "react";
import "./index.scss";
import axios from "axios";
import MovieCard from "../MovieCard";
import { Movie } from "@/app/Types/movie";
import ReactLoading from 'react-loading';



export default function MovieList(){
   
   const [movies,setMovies]= useState<Movie[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true); 
    
    
   useEffect(()=>{
        getMovies();
   },[]);

   const getMovies = async () =>{
        await axios({
        method: "get",
        url:"https://api.themoviedb.org/3/discover/movie",
        params: {
            api_key : "09953c591d66139a23415454043f6188",
            language: "pt-BR",
        }

    }).then(response=>{
        setMovies(response.data.results);
        
    } );
    
    setIsLoading(false);
}
if (isLoading){  
    return(
        <div className="loading-container" > 
           
           <ReactLoading type="balls" color="#9bf039" height={'5%'} width={'5%'} />
        );

        </div>
    )
}
   
   
    return(
    <ul className="movie-list">
            {movies.map((movie) =>
                
                <MovieCard
                    key={movie.id}
                    
                    movie={movie}
                     />
            )}
           

        </ul>
    )
}