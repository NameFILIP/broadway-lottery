import type { UserInfo, Country } from "./types";

type Env = { [key: string]: string | undefined };

type EnvVarName =
  | "FIRST_NAME"
  | "LAST_NAME"
  | "NUMBER_OF_TICKETS"
  | "EMAIL"
  | "DOB_MONTH"
  | "DOB_DAY"
  | "DOB_YEAR"
  | "ZIP"
  | "COUNTRY";

function requiredString(env: Env, variableName: EnvVarName) {
  const value = env[variableName];
  if (!value) {
    throw new Error(`Missing required environment variable: ${variableName}`);
  }
  return value;
}

function validateNumberOfTickets(env: Env, variableName: "NUMBER_OF_TICKETS") {
  const numberOfTickets = requiredString(env, variableName);
  if (!["1", "2"].includes(numberOfTickets)) {
    throw new Error(
      `Invalid number of tickets: ${numberOfTickets}. Must be a number 1 or 2.`
    );
  }
  return numberOfTickets;
}

function validateEmail(env: Env, variableName: "EMAIL") {
  const email = requiredString(env, variableName);
  if (!email.includes("@")) {
    throw new Error(`Invalid email address: ${email}`);
  }
  return email;
}

function validateDoBMonth(env: Env, variableName: "DOB_MONTH") {
  const month = requiredString(env, variableName);
  if (![...Array(12).keys()].map((key) => String(key + 1)).includes(month)) {
    throw new Error(
      `Invalid month: ${month}. Must be a number between 1 and 12.`
    );
  }
  return month;
}

function validateDoBDay(env: Env, variableName: "DOB_DAY") {
  const day = requiredString(env, variableName);
  if (![...Array(31).keys()].map((key) => String(key + 1)).includes(day)) {
    throw new Error(`Invalid day: ${day}. Must be a number between 1 and 31.`);
  }
  return day;
}

function validateDoBYear(env: Env, variableName: "DOB_YEAR") {
  const year = requiredString(env, variableName);
  if (year.length !== 4) {
    throw new Error(`Invalid year: ${year}. Must be a 4 digit number.`);
  }
  return year;
}

function validateCountryOfResidence(
  env: Env,
  variableName: "COUNTRY"
): Country {
  const countryOfResidence = requiredString(env, variableName);
  if (countryOfResidence === "USA") {
    return "USA";
  }
  if (countryOfResidence === "CANADA") {
    return "CANADA";
  }
  return "OTHER";
}

export function getUserInfo(env: Env): UserInfo {
  const firstName = requiredString(env, "FIRST_NAME");
  const lastName = requiredString(env, "LAST_NAME");
  const numberOfTickets = validateNumberOfTickets(env, "NUMBER_OF_TICKETS");
  const email = validateEmail(env, "EMAIL");
  const dobMonth = validateDoBMonth(env, "DOB_MONTH");
  const dobDay = validateDoBDay(env, "DOB_DAY");
  const dobYear = validateDoBYear(env, "DOB_YEAR");
  const zip = requiredString(env, "ZIP");
  const countryOfResidence = validateCountryOfResidence(env, "COUNTRY");

  return {
    firstName,
    lastName,
    numberOfTickets,
    email,
    dateOfBirth: {
      month: dobMonth,
      day: dobDay,
      year: dobYear,
    },
    zip,
    countryOfResidence,
  };
}
