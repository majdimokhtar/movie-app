import { Link } from 'react-router-dom'
import {  useDispatch } from "react-redux";
import { addToFavourite } from 'redux/show.slice';
import {url,getPosterURL} from "../../components/shared/Poster/poster"
import Button, { Button_TYPE_CLASS } from 'components/shared/Button/Button';
import {Movie,MovieInfo,Title,Paragraph,MovieImage} from "./Shows.styles"

const Shows = ({show}) => {
  const dispatch = useDispatch();
  const favouriteClickHandler = () => {
    dispatch(addToFavourite({...show}))
  }
    const { id, poster_path: poster, name: title, first_air_date: year } = show
    return (
    <>
    <Movie>
    <Link to={`/shows/${id}`} key={id} >
            <MovieImage src={poster === null ? url : getPosterURL(poster)} alt={title} />
            </Link>
            <MovieInfo>
              <Title className='title'>{title}</Title>
              <Paragraph>{year}</Paragraph>
              <Button buttonType={Button_TYPE_CLASS.add} onClick={favouriteClickHandler} >add to wishlist</Button>
            </MovieInfo>
    </Movie>
    </>
    );
}
export default Shows;
