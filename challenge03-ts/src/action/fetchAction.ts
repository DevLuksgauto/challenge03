import axios, { AxiosResponse } from "axios";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../store"; // Certifique-se de importar o tipo RootState corretamente de onde ele estiver definido.

export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';

export const fetchDataSuccess = (data: any) => ({
  type: FETCH_DATA_SUCCESS,
  payload: data,
});

export const fetchData = (): ThunkAction<void, RootState, unknown, any> => {
  return (dispatch) => {
    return axios.get('https://run.mocky.io/v3/15d284a1-db22-4fa9-970b-a6ba468b93d6')
      .then((res: AxiosResponse) => res.data)
      .then((data: any) => dispatch(fetchDataSuccess(data)))
      .catch((error) => {
        console.log(error);
        return [];
      });
  };
};
