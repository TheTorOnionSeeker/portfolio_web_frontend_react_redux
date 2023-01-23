import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";

export const getCharacterDetailSlice=createSlice({
    name:'details',
    initialState:{
        characterDetails:[]
      },
    reducers:{
        getCharacterDetails:(state)=>{
            axios.get('https://deploy-portfolio-web-backend-express.onrender.com/api/person/details')
            .then(r=>state.characterDetails=r.data)
            .catch((err)=>{
                console.error(err);
            })
        }
    }
})

export const {getCharacterDetails}=getCharacterDetailSlice.actions;