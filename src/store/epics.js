import { combineEpics } from "redux-observable";
import imagesEpic from "./images/epic.js";

export default combineEpics(imagesEpic);
