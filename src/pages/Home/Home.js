import {useEffect} from 'react'
import {useDispatch,useSelector } from "react-redux"
import { v4 as uuidv4 } from 'uuid'
import Shows from 'components/Movies/Shows'
import {MoviesSection} from "./Home.styles"
import { fetchAsyncShows, getAllShows } from 'redux/show.slice'
import { toast } from 'react-toastify';

const Home = () => {
  const shows = useSelector(getAllShows)
  // console.log(shows)
  const dispatch = useDispatch()
  const showText = "Breaking"
  useEffect(()=>{
  // fetching data
  try {
    dispatch(fetchAsyncShows(showText))
  } catch (error) {
    return toast.error("could not fetch shows")
  }

},[dispatch])

  return (
  <>
  <h3 style={{margin:"1rem"}}>Tv Shows</h3>
  <MoviesSection>
    {shows && shows.map((show) => {
      return (
      <Shows show={show} key={uuidv4()} />
      )
    })}
  </MoviesSection>
  </>
  )
}

export default Home