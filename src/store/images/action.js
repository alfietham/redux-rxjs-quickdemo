import createAction from "../createAction";

export const setSingleImageUrl = createAction("IMAGES/SET_SINGLE_IMAGE_URL");
export const setMultiImageUrl = createAction("IMAGES/SET_MULTI_IMAGE_URL");
export const clearMultiImgUrl = createAction("IMAGES/CLEAR_MULTI_IMAGE_URL");

const imageFetchService = imgSize =>
  fetch(
    `https://source.unsplash.com/collection/1154337/${imgSize}x${imgSize}`
  ).then(
    response => response.url,
    error => console.error("An error occurred.", error)
  );

export const fetchImages = imgSize => dispatch => {
  dispatch({ type: "IMAGES/FETCH" }); // dispatch for debugging in redux devtool
  return imageFetchService(imgSize).then(imageUrl =>
    dispatch(setSingleImageUrl(imageUrl))
  );
};

export const fetchMultiImages = numImages => dispatch => {
  dispatch({ type: "IMAGES/FETCH_MULTI" }); // dispatch for debugging in redux devtool
  dispatch(clearMultiImgUrl());
  return Promise.all(
    new Array(numImages).fill(0).map(() => imageFetchService("480"))
  ).then(resultingImages => dispatch(setMultiImageUrl(resultingImages)));
};
