import {useEffect} from 'react'
import {useDispatch,useSelector } from "react-redux"
import Movies from 'components/Movies/Movies'
import { fetchAsyncMovies,getAllMovies } from 'redux/show.slice'

const Home = () => {
  const movies = useSelector(getAllMovies)
  console.log(movies)
  const dispatch = useDispatch()
  useEffect(()=>{
  // fetching data
  dispatch(fetchAsyncMovies())
  //  try {
  //     const fetchData =async ()=>{
  //     const {data} = await axiosTMDB.get("tv/popular")
  //     console.log(data.results)
  //     setMovies(data.results)
  //   }
  //   fetchData()
  //  } catch (error) {
  //   console.log(error.message);
  //  }


  // tmdb.get("https://api.themoviedb.org/3/tv/popular?api_key=03b900a103e6ee9dfe7235ac26ad315b")
  // .then(res=>{console.log(res.data.results)} )
  // .catch(err=>err.message)

  },[dispatch])
  return (
  <section className='movies'>
    {movies.map((movie) => {
      const {id} = movie
      return (
        <Movies movie={movie} key={id} />
      )
    })}
  </section>
  )
}

export default Home