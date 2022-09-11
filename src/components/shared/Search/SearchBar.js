import { useState } from "react";
import { useDispatch } from "react-redux";
import  {Search,SearchIconWrapper,StyledInputBase} from "./SearchBar.styles"
import SearchIcon from '@mui/icons-material/Search';
import { fetchAsyncShows } from "redux/show.slice";


export default function SearchBar() {
  const [search , setSearch] = useState("")
  const dispatch = useDispatch()
  const submitHandler =(e)=>{
    e.preventDefault()
    if(search.length === 0   ){alert("please enter a valid search")}
    dispatch(fetchAsyncShows(search))
    setSearch("")
    console.log(search);
  }


  return (
   <form onSubmit={submitHandler}>
    <Search >
    <SearchIconWrapper>
      <SearchIcon />
    </SearchIconWrapper>
    <StyledInputBase
      onChange={(e) => setSearch(e.target.value)}
      placeholder="Search…"
      value={search}
      // inputProps={{ 'aria-label': 'search' }}
    />
  </Search>
  </form>
  )
}
