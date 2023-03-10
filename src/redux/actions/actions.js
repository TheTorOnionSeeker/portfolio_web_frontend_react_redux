import axios from "axios";

export const GET_CHARACTER_DETAIL = "GET_CHARACTER_DETAIL";

export const getCharacterDetail = () => {
    return function(dispatch){
        return axios.get('https://deploy-portfolio-web-backend-express.onrender.com/api/person/details')
        /* .then((json)=>console.log(json.data)) */
        .then((json) => dispatch({ type: GET_CHARACTER_DETAIL, payload: json.data }))
        .catch((err)=>{
            console.error(err);
        });
    }
};