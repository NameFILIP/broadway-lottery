import { getUserInfo } from "../src/get-user-info";
import { expect, test } from "@jest/globals";

test("Get user info from env", async () => {
  const env = {
    FIRST_NAME: "Donald",
    LAST_NAME: "Duck",
    NUMBER_OF_TICKETS: "2",
    EMAIL: "donald.duck@gmail.com",
    DOB_MONTH: "12",
    DOB_DAY: "12",
    DOB_YEAR: "1999",
    ZIP: "10007",
    COUNTRY: "USA",
  };
  const result = getUserInfo(env);
  expect(result).toMatchInlineSnapshot(`
{
  "countryOfResidence": "USA",
  "dateOfBirth": {
    "day": "12",
    "month": "12",
    "year": "1999",
  },
  "email": "donald.duck@gmail.com",
  "firstName": "Donald",
  "lastName": "Duck",
  "numberOfTickets": "2",
  "zip": "10007",
}
`);
});

test("Get user info from env - padded numbers", async () => {
  const env = {
    FIRST_NAME: "Donald",
    LAST_NAME: "Duck",
    NUMBER_OF_TICKETS: "2",
    EMAIL: "donald.duck@gmail.com",
    DOB_MONTH: "01",
    DOB_DAY: "02",
    DOB_YEAR: "1999",
    ZIP: "10007",
    COUNTRY: "USA",
  };
  const result = getUserInfo(env);
  expect(result).toMatchInlineSnapshot(`
{
  "countryOfResidence": "USA",
  "dateOfBirth": {
    "day": "2",
    "month": "1",
    "year": "1999",
  },
  "email": "donald.duck@gmail.com",
  "firstName": "Donald",
  "lastName": "Duck",
  "numberOfTickets": "2",
  "zip": "10007",
}
`);
});
