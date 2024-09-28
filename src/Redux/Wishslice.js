import { createSlice } from "@reduxjs/toolkit";

const wishslice = createSlice({
    name:'wish',
    initialState:[],
    reducers:{
        addWishlist : (state,action)=>{
            state.push(action.payload) 
        },
        removeWishlist : (state,action)=>{
            return state.filter(item=>item.id!=action.payload)
        }
    }
  
})

export const{addWishlist,removeWishlist} = wishslice.actions
export default wishslice.reducer