import createAction from "../createAction";

export const setSingleImageUrl = createAction("IMAGES/SET_SINGLE_IMAGE_URL");

export const fetchImages = imgSize => dispatch => {
  dispatch({ type: "IMAGES/FETCH" }); // dispatch for debugging in redux devtool
  return fetch(
    `https://source.unsplash.com/collection/1154337/${imgSize}x${imgSize}`
  )
    .then(
      response => response.url,
      error => console.error("An error occurred.", error)
    )
    .then(imageUrl => dispatch(setSingleImageUrl(imageUrl)));
};
