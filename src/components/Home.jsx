import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
// import Banner from './Banner'
import SliderComponent from './SliderComponent'

const apikey = "2615b0fc1b5fb9c832485713ed986758";
const url = "http://api.themoviedb.org/3"
const imgUrl = "http://image.tmdb.org/t/p/original"
const upcoming = "upcoming"
const nowPlaying = "now_playing"
const popular = "popular"
const topRated = "top_rated"






const Card = ({ img }) => (
    <img className='w-[150px] m-1 rounded-sm cursor-pointer transform duration-75 hover:translate-y-0.5 ' src={img} alt="cover" />
)

const Row = ({ title, arr = [] }) => (

    <div className=' bg-black text-white px-1'>

        <h2 className='px-3 font-medium'>{title}</h2>


        <div className='flex overflow-x-auto p-1 scrollbar-hide '>


            {
                arr.map((item, index) => (

                    <Card key={index} img={`${imgUrl}/${item.poster_path}`} />
                )

                )
            }

        </div>


    </div>
)



const Home = () => {

    const [upcomingMovies, setUpcomingMovies] = useState([])
    const [nowplayingMovies, setNowplayingMovies] = useState([])
    const [popularMovies, setPopularMovies] = useState([])
    const [topRatedMovies, setTopratedMovies] = useState([])
    const [genre, setGenreMovies] = useState([])


    useEffect(() => {

        const fetchUpcoming = async () => {
            const { data: { results } } = await axios.get(`${url}/movie/${upcoming}?api_key=${apikey}`)

            setUpcomingMovies(results)
        };
        fetchUpcoming();


        const fetchNowPlaying = async () => {
            const { data: { results } } = await axios.get(`${url}/movie/${nowPlaying}?api_key=${apikey}`)

            setNowplayingMovies(results)
        };
        fetchNowPlaying();



        const fetchPopular = async () => {
            const { data: { results } } = await axios.get(`${url}/movie/${popular}?api_key=${apikey}`)

            setPopularMovies(results)
        };
        fetchPopular();



        const fetchTopRated = async () => {
            const { data: { results } } = await axios.get(`${url}/movie/${topRated}?api_key=${apikey}`)

            setTopratedMovies(results)
        };
        fetchTopRated();


        const getAllGenre = async () => {
            const { data: { genres } } = await axios.get(`${url}/genre/movie/list?api_key=${apikey}`)

            setGenreMovies(genres)
        };
        getAllGenre();
    },[] )



    return (
        <>
            <div className='bg-black text-white h-[28rem] '>
               
                <SliderComponent/>

              {/* <img className=" h-[450px]" src={`${imgUrl}/${popularMovies[0].poster_path}`} alt="banner" /> */}


                {/* <div className=" min-h-80 w-1/4 border border-white text-center">

                    <p className='p-3 '>
                        On a flat patch of land just above the foothills, where snowmelt and rainfall.
                    </p>


                </div> */}


            </div>


<div>
<Row title={"Upcoming Movies"} arr={upcomingMovies} />
            <Row title={"Now Playing"} arr={nowplayingMovies} />
            <Row title={"Popular"} arr={popularMovies} />
            <Row title={"Top Rated Movies"} arr={topRatedMovies} />
</div>
           
           
<div className='px-3  bg-black text-white overflow-x-auto flex  items-center scrollbar-hide ' >
    {
        genre.map((item)=>(

            <Link className='min-w-[150px]' key={item.id} to={`/genre/${item.id}`}>{item.name}</Link>
        ))
    }
</div>









        </>

    )
}

export default Home
