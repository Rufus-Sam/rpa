import axios from "axios"
import { VIDEO_DETAILS_FAIL, VIDEO_DETAILS_REQUEST, VIDEO_DETAILS_SUCCESS, VIDEO_LIST_FAIL, VIDEO_LIST_REQUEST, VIDEO_LIST_SUCCESS } from "../constants/videoConstants"

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

export const listVideoDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: VIDEO_DETAILS_REQUEST })
        const { data } = await axios.get(`/api/videos/${id}`)
        dispatch({ type: VIDEO_DETAILS_SUCCESS, payload: data })
    } catch (error) {
        dispatch({
            type: VIDEO_DETAILS_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}