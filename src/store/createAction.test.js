import createAction from "./createAction";

describe("createAction()", () => {
  it("creates the correct Redux actions", () => {
    const actual = createAction("TEST/REDUX_ACTION_NAME")("test");
    const expected = { type: "TEST/REDUX_ACTION_NAME", payload: "test" };
    expect(actual).toEqual(expected);
  });
});
