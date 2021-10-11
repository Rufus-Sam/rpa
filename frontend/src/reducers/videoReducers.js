import { VIDEO_DETAILS_FAIL, VIDEO_DETAILS_REQUEST, VIDEO_DETAILS_SUCCESS, VIDEO_LIST_FAIL, VIDEO_LIST_REQUEST, VIDEO_LIST_SUCCESS } from "../constants/videoConstants";

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

export const videoDetailsReducer = (state = { video: {} }, action) => {
    switch (action.type) {
        case VIDEO_DETAILS_REQUEST:
            return { loading: true, video: {} }
        case VIDEO_DETAILS_SUCCESS:
            return { loading: false, video: action.payload }
        case VIDEO_DETAILS_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}