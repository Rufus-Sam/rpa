import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { videoDetailsReducer, videoListReducer } from './reducers/videoReducers'

const reducer = combineReducers({
    videoList: videoListReducer,
    videoDetails: videoDetailsReducer,
})

const middleware = [thunk]

const initialState = {}

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store