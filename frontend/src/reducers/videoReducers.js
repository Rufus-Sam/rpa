import { VIDEO_LIST_FAIL, VIDEO_LIST_REQUEST, VIDEO_LIST_SUCCESS } from "../constants/videoConstants";

export const videoListReducer = (state = { videos: [] }, action) => {
    switch (action.type) {
        case VIDEO_LIST_REQUEST:
            return { loading: true, videos: [] }
        case VIDEO_LIST_SUCCESS:
            return { loading: false, videos: action.payload }
        case VIDEO_LIST_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}