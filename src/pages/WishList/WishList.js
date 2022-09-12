import React from 'react'
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from 'uuid'
import { getAllFavourite } from 'redux/show.slice';
import WishListCard from './WishListCard';
import {MoviesSection} from "../Home/Home.styles"

export default function WishList() {
  const favourite = useSelector(getAllFavourite)
  console.log(favourite)

  return (
    <div>
    <MoviesSection>
    {favourite.map((fav) => {
      return (<WishListCard fav={fav} key={uuidv4()} />
      )
    })}
  </MoviesSection>
    </div>
  )
}
