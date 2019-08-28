import axios from 'axios';
import { IMAGES_FETCHED } from './types';
import { API_URL,API_KEY} from '../../utils/constants';

export const fetchImages = (searchText, amount) => async dispatch => {
  const REQUEST_URL = `${API_URL}/?key=${API_KEY}&q=${searchText}&image_type=photo&per_page=${amount}&safesearch=true`;
  try {
    const { data: response } = await axios.get(REQUEST_URL);
    console.log(response);
    dispatch({
      type: IMAGES_FETCHED,
      payload: response.hits
    })
  } catch (error) {
    console.log(error);
  }

}
export const resetImages = () => {

}