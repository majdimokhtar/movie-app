import {useEffect} from 'react'
import {useDispatch,useSelector } from "react-redux"
import { v4 as uuidv4 } from 'uuid'
import Shows from 'components/Movies/Shows'
import {MoviesSection} from "./Home.styles"
import { fetchAsyncShows, getAllShows } from 'redux/show.slice'

const Home = () => {
  const shows = useSelector(getAllShows)
  console.log(shows)
  const dispatch = useDispatch()
  const showText = "Breaking"
  useEffect(()=>{
  // fetching data
  dispatch(fetchAsyncShows(showText))
},[dispatch])

  return (
  <>
  <h1>Tv Shows</h1>
  <MoviesSection>
    {shows.map((show) => {
      return (
      <Shows show={show} key={uuidv4()} />
      )
    })}
  </MoviesSection>
  </>
  )
}

export default Home