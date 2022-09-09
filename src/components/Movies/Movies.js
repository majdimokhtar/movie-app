import { Link } from 'react-router-dom'

const getPosterURL =(posterPath)=>{
    return `https://www.themoviedb.org/t/p/w220_and_h330_face${posterPath}`
  }
const Movies = ({movie}) => {
    const { id, poster_path: poster, name: title, first_air_date: year } = movie
    return (
    <>
    <Link to={`/movies/${id}`} key={id} className='movie'>
          <article>
            <img src={getPosterURL(poster)} alt={title} />
            <div className='movie-info'>
              <h4 className='title'>{title}</h4>
              <p>{year}</p>
            </div>
          </article>
        </Link>
    </>
    );
}

export default Movies;
