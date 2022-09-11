import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuidv4 } from 'uuid'
import { getAllFavourite, getAllShows } from 'redux/show.slice';
import WishListCard from './WishListCard';


export default function WishList() {
  const favourite = useSelector(getAllFavourite)
  console.log(favourite)


  return (
    <div>
    <section className='movies'>
    {favourite.map((fav) => {
        const { title } = fav
      return (<WishListCard fav={fav} key={uuidv4()} />
      )
    })}
  </section>

    </div>
  )
}
