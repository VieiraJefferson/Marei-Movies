import { Movie } from "@/app/Types/movie";
import StarRating from "../StarRating";
import "./index.scss";




export interface Props{
    movie : Movie ,
    id: number,
    title: string,
    overview: string,
    poster_path: string,
    vote_average: number,
    
    

}

export interface Props{
    rating : number ,
    
    

}




export default function MovieCard(props: Props){

    const movie = props.movie;
  

 return(
    <li key={props.id} className="movie-card">
        <div className="movie-poster">   
                <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            alt={movie.title} />
        </div>

        <div className="movie-infos">
            <p className="movie-title">
            {movie.title}
          
            </p>
            <StarRating
                rating={movie.vote_average}
            />
            <div className="hidden-content">

                {movie.overview &&
                    <p className ="description" >
                        {movie.overview.length > 100
                             ? `${movie.overview.substring(0,100)}...`
                                : movie.overview
                                }
                     </p>
                }
                   

                    <button className="btn-default">
                        Ver mais
                    </button>
            </div>

        </div>

 </li>
 )
}





