import { setSingleImageUrl } from "./action";

const initialState = { soloImg: "/cat00003.jpg" };

const imagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case setSingleImageUrl().type:
      return {
        ...state,
        soloImg: action.payload
      };
    default:
      return state;
  }
};

export default imagesReducer;
