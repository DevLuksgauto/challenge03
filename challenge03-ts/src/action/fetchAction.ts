import axios, { AxiosResponse, AxiosError } from "axios";
import { Dispatch } from "redux";

const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';

export { FETCH_DATA_SUCCESS }

interface Data {
  id: number;
  name: string;
}

interface FetchDataSuccessAction {
  type: typeof FETCH_DATA_SUCCESS;
  payload: Data[];
}

export type DataActionTypes = FetchDataSuccessAction;

export const fetchDataSuccess = (data: Data[]): DataActionTypes => ({
  type: FETCH_DATA_SUCCESS,
  payload: data,
});

export const fetchData = () => {
  return (dispatch: Dispatch<DataActionTypes>) => {
    return axios.get<Data[], AxiosResponse<Data[]>, AxiosError<Data[]>>('https://run.mocky.io/v3/15d284a1-db22-4fa9-970b-a6ba468b93d6')
      .then((res: AxiosResponse<Data[]>) => res.data)
      .then((data: Data[]) => dispatch(fetchDataSuccess(data)))
      .catch((error: AxiosError<Data[]>) => {
        console.log(error);
        return [];
      });
  };
};
