import { combineEpics } from "redux-observable";
import imagesEpics from "./images/epic.js";

export default combineEpics(imagesEpics);
