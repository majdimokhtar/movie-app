import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import {url,getPosterURL} from "../../components/shared/Poster/poster"
import { getSelectedMovieOrShow,fetchAsyncMovieOrShowDetail, removeSelectedMovieOrShow } from 'redux/show.slice'
import Button, { Button_TYPE_CLASS } from 'components/shared/Button/Button'
import {SingleMovie,SingleMovieImg,SingleMovieParagraph} from "./ShowDetails.styles"
import { Loader } from 'routing/RouterConfig'
import { toast } from 'react-toastify';

const ShowDetails = () => {
  const [loading,setLoading] =useState(true)
  const { id } = useParams()
  const data = useSelector(getSelectedMovieOrShow)
  // console.log(data)
  const dispatch = useDispatch()
  useEffect(()=>{
    try {
      dispatch(fetchAsyncMovieOrShowDetail(id))
      setLoading(false)
      return ()=>{
      dispatch(removeSelectedMovieOrShow())
      setLoading(false)
      }
    } catch (error) {
    setLoading(false)
    return toast.error("could not fetch shows details")
    }
  },[dispatch,id])
  
  const { poster_path: poster, name: title, first_air_date: year, overview } = data
  return ( <>
    {loading ? <Loader/> : (
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
    )}
    </>
  )
}
export default ShowDetails