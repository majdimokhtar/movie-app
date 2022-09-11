import {useEffect} from 'react'
import {useDispatch,useSelector } from "react-redux"
import Shows from 'components/Movies/Shows'
import { fetchAsyncShows,getAllMovies, getAllShows } from 'redux/show.slice'

const Home = () => {
  const shows = useSelector(getAllShows)
  console.log(shows)
  const dispatch = useDispatch()

  const showText = "Breaking"
  useEffect(()=>{
  // fetching data
  dispatch(fetchAsyncShows(showText))
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
  <>
  <h1>Tv Shows</h1>
  <section className='movies'>
    {shows.map((show) => {
      const {id} = show
      return (
        <Shows show={show} key={id} />
      )
    })}
  </section>
  </>
  )
}

export default Home