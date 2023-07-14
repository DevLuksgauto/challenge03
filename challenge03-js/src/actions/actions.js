import axios from "axios";

export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';

export const fetchDataSuccess = (data) => ({
    type: FETCH_DATA_SUCCESS,
    payload: data,
});

export const fetchData = () => {
    return (dispatch) => {
        return axios.get('https://run.mocky.io/v3/15d284a1-db22-4fa9-970b-a6ba468b93d6')
            .then((res) => res.data)
            .then((data) => dispatch(fetchDataSuccess(data)))
            .catch((error) => {
                console.log(error);
                return [];
            });
    };
};
