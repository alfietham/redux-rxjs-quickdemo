import createAction from "../createAction";

export const setSingleImageUrl = createAction("IMAGES/SET_SINGLE_IMAGE_URL");
export const setMultiImageUrl = createAction("IMAGES/SET_MULTI_IMAGE_URL");
export const clearMultiImgUrl = createAction("IMAGES/CLEAR_MULTI_IMAGE_URL");
export const startTimer = createAction("IMAGES/START_TIMER");
export const stopTimer = createAction("IMAGES/STOP_TIMER");
export const fetchImages = createAction("IMAGES/FETCH");
export const fetchMultiImages = createAction("IMAGES/FETCH_MULTI");
