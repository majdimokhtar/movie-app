import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFromFavourite } from 'redux/show.slice';



const url = 'https://lascrucesfilmfest.com/wp-content/uploads/2018/01/no-poster-available-737x1024.jpg'

const getPosterURL =(posterPath)=>{
    return `https://www.themoviedb.org/t/p/w220_and_h330_face${posterPath}`
  }
export default function WishListCard({fav}) {
    const dispatch = useDispatch();
    const favouriteRemoveClickHandler = () => {
      dispatch(removeFromFavourite(fav.id))}
    const { id, poster_path: poster, name: title, first_air_date: year } = fav
  return (
    <>
      <div><button onClick={favouriteRemoveClickHandler} >remove</button></div>
        <Link to={`/shows/${id}`} key={id} className='movie'>
        <article>
          <img src={poster === null ? url : getPosterURL(poster)} alt={title} />
          <div className='movie-info'>
            <h4 className='title'>{title}</h4>
            <p>{year}</p>

          </div>
        </article>
      </Link>
      </>
  )
}
