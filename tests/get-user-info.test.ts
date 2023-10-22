import { getUserInfo } from "../src/get-user-info";
import { expect, test } from "@jest/globals";

const expectedUserInfo = {
  firstName: "Donald",
  lastName: "Duck",
  numberOfTickets: "2",
  email: "donald.duck@gmail.com",
  dateOfBirth: {
    month: "12",
    day: "12",
    year: "2001",
  },
  zip: "10007",
  countryOfResidence: "USA",
};

test("Get user info from env", async () => {
  const env = {
    FIRST_NAME: "Donald",
    LAST_NAME: "Duck",
    NUMBER_OF_TICKETS: "2",
    EMAIL: "donald.duck@gmail.com",
    DOB_MONTH: "12",
    DOB_DAY: "12",
    DOB_YEAR: "2001",
    ZIP: "10007",
    COUNTRY: "USA",
  };
  const result = getUserInfo(env);
  expect(result).toMatchObject(expectedUserInfo);
});
