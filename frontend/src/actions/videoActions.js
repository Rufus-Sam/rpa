import axios from "axios"
import { VIDEO_LIST_FAIL, VIDEO_LIST_REQUEST, VIDEO_LIST_SUCCESS } from "../constants/videoConstants"

export const listVideos = () => async (dispatch) => {
    try {
        dispatch({ type: VIDEO_LIST_REQUEST })
        const { data } = await axios.get('/api/videos')
        dispatch({ type: VIDEO_LIST_SUCCESS, payload: data })
    } catch (error) {
        dispatch({
            type: VIDEO_LIST_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}