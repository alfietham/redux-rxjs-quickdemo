import { combineReducers } from "redux";
import navigation from "./nav/reducer";
import images from "./images/reducer";

const rootReducer = combineReducers({ navigation, images });

export default rootReducer;
