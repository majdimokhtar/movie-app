import React from 'react'
import { useDispatch } from 'react-redux';
import {url,getPosterURL} from "../../components/shared/Poster/poster"
import { Link } from 'react-router-dom';
import { removeFromFavourite } from 'redux/show.slice';
import Button, { Button_TYPE_CLASS } from 'components/shared/Button/Button';
import {Movie,MovieInfo,Title,Paragraph,MovieImage} from "../../components/Movies/Shows.styles"

export default function WishListCard({fav}) {
    const dispatch = useDispatch();
    const favouriteRemoveClickHandler = () => {
      dispatch(removeFromFavourite(fav.id))}
    const { id, poster_path: poster, name: title, first_air_date: year } = fav
  return (
    <>
    <Movie>
    <Link to={`/shows/${id}`} key={id} >
            <MovieImage src={poster === null ? url : getPosterURL(poster)} alt={title} />
            </Link>
            <MovieInfo>
              <Title>{title}</Title>
              <Paragraph>{year}</Paragraph>
              <Button buttonType={Button_TYPE_CLASS.remove} onClick={favouriteRemoveClickHandler} >- remove from wishList</Button>
            </MovieInfo>
    </Movie>
    </>
  )
}
