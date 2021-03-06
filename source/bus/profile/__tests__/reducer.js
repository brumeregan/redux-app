import { profileActions } from "../actions";
import { profileReducer } from "../reducer";

describe("profile reducer", () => {
  test("should return initial state by default", () => {
    expect(profileReducer(void 0, {})).toMatchInlineSnapshot(`
Immutable.Map {
  "id": "",
  "firstName": "",
  "lastName": "",
  "avatar": "",
  "token": "",
}
`);
  });

  test("should handle FILL_PROFILE action", () => {
    expect(profileReducer(void 0, profileActions.fillProfile(__.userProfile)))
      .toMatchInlineSnapshot(`
Immutable.Map {
  "id": "TEST_ID",
  "firstName": "Walter",
  "lastName": "White",
  "avatar": "TEST_AVATAR",
  "token": "TEST_TOKEN",
}
`);
  });

  test("should handle UPDATE_AVATAR", () => {
    expect(profileReducer(void 0, profileActions.updateAvatar(__.newAvatar)))
      .toMatchInlineSnapshot(`
Immutable.Map {
  "id": "",
  "firstName": "",
  "lastName": "",
  "avatar": Array [
    "avatar",
  ],
  "token": "",
}
`);
  });

  test("should handle CLEAR_PROFILE", () => {
    expect(
      profileReducer(void 0, profileActions.clearProfile())
    ).toMatchInlineSnapshot(`Immutable.Map {}`);
  });
});
