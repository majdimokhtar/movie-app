import React, { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import {url,getPosterURL} from "../../components/shared/Poster/poster"
import { getSelectedMovieOrShow,fetchAsyncMovieOrShowDetail, removeSelectedMovieOrShow } from 'redux/show.slice'
import Button, { Button_TYPE_CLASS } from 'components/shared/Button/Button'
import {SingleMovie,SingleMovieImg,SingleMovieParagraph} from "./ShowDetails.styles"

const ShowDetails = () => {
  const { id } = useParams()
  const data = useSelector(getSelectedMovieOrShow)
  console.log(data)
  const dispatch = useDispatch()
  useEffect(()=>{
  dispatch(fetchAsyncMovieOrShowDetail(id))
  return ()=>{
    dispatch(removeSelectedMovieOrShow())
  }
  },[dispatch,id])
  
  const { poster_path: poster, name: title, first_air_date: year, overview } = data
  return ( 
    <SingleMovie>
      <SingleMovieImg src={poster === null ? url : getPosterURL(poster)} alt={data.name} />
      <div className='single-movie-info'>
        <h2>{title}</h2>
        <SingleMovieParagraph>{overview}</SingleMovieParagraph>
        <h4>{year}</h4>
        <Button buttonType={Button_TYPE_CLASS.base}>
        <Link to='/'>
          back to Home
        </Link>
        </Button>
      </div>
    </SingleMovie>
  )
}
export default ShowDetails