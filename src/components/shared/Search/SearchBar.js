import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import  {Search,SearchIconWrapper,StyledInputBase} from "./SearchBar.styles"
import SearchIcon from '@mui/icons-material/Search';
import { fetchAsyncShows, getAllShows } from "redux/show.slice";
import { toast } from 'react-toastify';


export default function SearchBar() {
  const shows = useSelector(getAllShows)
  const [search , setSearch] = useState("")
  const dispatch = useDispatch()
  const submitHandler =(e)=>{
    e.preventDefault()
   const timer = setTimeout(()=>{
      dispatch(fetchAsyncShows(search))
      if (shows.length === 0) {
      return  toast.error("Tv SHow not found")
      }
      setSearch("")
      // console.log(search);
    },500)
    return () => clearTimeout(timer)
  }


  return (
   <form onSubmit={submitHandler}>
    <Search >
    <SearchIconWrapper>
      <SearchIcon />
    </SearchIconWrapper>
    <StyledInputBase
      onChange={(e) => setSearch(e.target.value)}
      placeholder="Start Searching..."
      value={search}/>
  </Search>
  </form>
  )
}
