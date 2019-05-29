import {
  setSingleImageUrl,
  setMultiImageUrl,
  clearMultiImgUrl
} from "./action";

const initialState = {
  soloImg: "/cat00003.jpg",
  multiImg: []
};

const imagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case setSingleImageUrl().type:
      return {
        ...state,
        soloImg: action.payload
      };
    case setMultiImageUrl().type:
      return {
        ...state,
        multiImg: action.payload
      };
    case clearMultiImgUrl().type:
      return {
        ...state,
        multiImg: []
      };
    default:
      return state;
  }
};

export default imagesReducer;
