import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from "axios";

export const fetchAppData = createAsyncThunk(
    'data/fetchAppData',
    async (id,{rejectWithValue}) => {
        try {
            const response = await axios.get( `https://624033872aeb48a9af716822.mockapi.io/example_db/endpoint/goodsList` )
            return  await response.data
        } catch (error) {
            return rejectWithValue( error.message )
        }
    }
)

const appData = createSlice({
    name: 'data',
    initialState: {
        goodsData: [],
        resetLiked: false,
        status: null,
        error: null
    },
    reducers: {
        deleteCard(state, action) {
            if(state.goodsLiked){
                state.goodsLiked = state.goodsLiked.filter(product => product.id !== action.payload)
                state.goodsData = state.goodsData.filter(product => product.id !== action.payload)
            } else{
                state.goodsData = state.goodsData.filter(product => product.id !== action.payload)
            }

        },
        toggleLike(state, action) {
            if(state.goodsLiked){
                state.goodsLiked.forEach(product => {
                    if(product.id === action.payload){
                        !product.liked ? product.liked = true : product.liked = false
                    }
                })
                state.goodsData.forEach(product => {
                    if(product.id === action.payload){
                        !product.liked ? product.liked = true : product.liked = false
                    }
                })
                state.goodsLiked = state.goodsLiked.filter(product => product.id !== action.payload)
            } else {
                state.goodsData.forEach(product => {
                    if(product.id === action.payload){
                        !product.liked ? product.liked = true : product.liked = false
                    }
                })
            }

        },
        likedCard(state){
            if(state.goodsLiked){
                delete state.goodsLiked
            } else {
                state.goodsLiked = state.goodsData.filter(product => product.liked)
            }

        }
    },
    extraReducers: {
        [fetchAppData.pending]: (state) => {
            state.status = 'loading'
            state.error = null
        },
        [fetchAppData.fulfilled]: (state, action) => {
            state.status = 'resolved'
            state.goodsData = action.payload
        },
        [fetchAppData.rejected]: (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
        }
    }
} )

export const {deleteCard, toggleLike, likedCard} = appData.actions

export default appData.reducer