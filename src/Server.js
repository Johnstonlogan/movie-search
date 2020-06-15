import axios from "axios"
const baseUrl = "https://4ztans5q5l.execute-api.us-west-1.amazonaws.com/api"

export const getMovie = (payload) =>{
   
    return axios.get(baseUrl + "/getMovie", {params: {movie: payload.movieName, year:payload.movieYear}})

}

export const getPopularMovies = () => {

    return axios.get(baseUrl + "/getPopularMovies")
}