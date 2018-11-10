import { uiActions } from "../actions";
import { uiReducer } from "../reducer";

describe("profile reducer", () => {
  test("should return initial state by default", () => {
    expect(uiReducer(void 0, {})).toMatchInlineSnapshot(`
Immutable.Map {
  "isFetching": false,
  "isOnline": false,
}
`);
  });

  test("should handle START_FETCHING", () => {
    expect(uiReducer(void 0, uiActions.startFetching())).toMatchInlineSnapshot(`
Immutable.Map {
  "isFetching": true,
  "isOnline": false,
}
`);
  });

  test("should handle STOP_FETCHING", () => {
    expect(uiReducer(void 0, uiActions.stopFetching())).toMatchInlineSnapshot(`
Immutable.Map {
  "isFetching": false,
  "isOnline": false,
}
`);
  });

  test("should handle SET_ONLINE_STATE", () => {
    expect(uiReducer(void 0, uiActions.setOnlineState()))
      .toMatchInlineSnapshot(`
Immutable.Map {
  "isFetching": false,
  "isOnline": true,
}
`);
  });

  test("should handle SET_OFFLINE_STATE", () => {
    expect(uiReducer(void 0, uiActions.setOfflineState()))
      .toMatchInlineSnapshot(`
Immutable.Map {
  "isFetching": false,
  "isOnline": false,
}
`);
  });
});
