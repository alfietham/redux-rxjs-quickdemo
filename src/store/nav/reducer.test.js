import navigationStore from "./reducer";
import { setActiveTab } from "./action";

describe("navigationStore reducers", () => {
  it("should update the activeTab with the given payload", () => {
    const initialState = { activeTab: "solo" };
    const setActiveTabAction = { type: setActiveTab().type, payload: "multi" };

    const actual = navigationStore(initialState, setActiveTabAction);
    const expected = { activeTab: "multi" };

    expect(actual).toEqual(expected);
  });
});
