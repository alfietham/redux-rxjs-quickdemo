import { setActiveTab } from "./action";

const initialState = { activeTab: "solo" };

const navigationReducer = (state = initialState, action) => {
  switch (action.type) {
    case setActiveTab().type:
      return {
        ...state,
        activeTab: action.payload
      };
    default:
      return state;
  }
};

export default navigationReducer;
