import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {axiosTMDB ,API_KEY} from "../utils/axios"
const url = 'https://course-api.com/react-useReducer-cart-project';


export const wishlistSlice = createSlice({
    name: "wishlist",
    initialState: [{
      id: 1,
      name: "A Promised Land", 
      price: 15, url: "https://cutt.ly/dhQyXFY",
      description: "Book by Barack Obama" }],
    reducers: {
      add: (state, action) => {
        state = state.push({
          id: action.payload.id,
          name: action.payload.name,
          price: action.payload.price,
          url: action.payload.url,
          description: action.payload.description,
        });
      },
      deleteWish: (state, action) => {
        state = state.filter((wish) => wish.id != action.payload.id);
        return state;
      },
    },
  });
  
  export const { add, deleteWish } = wishlistSlice.actions;
  
  export const selectAll = (state) => state.wishlist;
  
  
  export default wishlistSlice.reducer;











//   export const getWishList = createAsyncThunk(
//     'wishList/getWishList',
//     "shows/fetchAsyncShows",
//     async (search) => {
//       // const showText = "Harry";
//       const {data} = await axiosTMDB.get(
//         `search/tv?api_key=${API_KEY}&query=${search}`
//       );
//       return data.results;
//     }
//   );



//   const wishListSlice = createSlice({
//     name: 'wishList',
//     initialState,
//     reducers: {
//       clearWish: (state) => {
//         state.wishList = [];
//       },
//       removeWish: (state, action) => {
//         const wishLId = action.payload;
//         state.wishList = state.wishList.filter((item) => item.id !== wishLId);
//       },
//       increase: (state, { payload }) => {
//         const wishL = state.wishList.find((item) => item.id === payload.id);
//         wishL.amount = wishL.amount + 1;
//       },
//       decrease: (state, { payload }) => {
//         const wishL = state.wishList.find((item) => item.id === payload.id);
//         wishL.amount = wishL.amount - 1;
//       }
//     },
//     extraReducers: {
//       [getWishList.pending]: (state) => {
//         state.isLoading = true;
//       },
//       [getWishList.fulfilled]: (state, action) => {
//         // console.log(action);
//         state.isLoading = false;
//         state.wishList = action.payload;
//       },
//       [getWishList.rejected]: (state, action) => {
//         console.log(action);
//         state.isLoading = false;
//       },
//     },
//   });


//   export const { clearWish, removeWish, increase, decrease } =
//   wishListSlice.actions;

// export default wishListSlice.reducer;