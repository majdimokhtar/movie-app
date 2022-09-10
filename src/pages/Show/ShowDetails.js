import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import { getSelectedMovieOrShow,fetchAsyncMovieOrShowDetail, removeSelectedMovieOrShow } from 'redux/show.slice'


const url = 'https://lascrucesfilmfest.com/wp-content/uploads/2018/01/no-poster-available-737x1024.jpg'

const getPosterURL =(posterPath)=>{
  return `https://www.themoviedb.org/t/p/w220_and_h330_face${posterPath}`
}

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
  // const { isLoading, error, data: movie } = useFetch(`&i=${id}`)

  // if (isLoading) {
  //   return <div className='loading'></div>
  // }
  // if (error.show) {
  //   return (
  //     <div className='page-error'>
  //       <h1>{error.msg}</h1>
  //       <Link to='/' className='btn'>
  //         back to movies
  //       </Link>
  //     </div>
  //   )
  // }
  const { poster_path: poster, name: title, first_air_date: year, overview } = data
  return ( 
    <section className='single-movie'>
      <img src={poster === null ? url : getPosterURL(poster)} alt={data.name} />
      <div className='single-movie-info'>
        <h2>{title}</h2>
        <p>{overview}</p>
        <h4>{year}</h4>
        <Link to='/' className='btn'>
          back to Home
        </Link>
      </div>
    </section>
  )
}

export default ShowDetails