export type Country = "USA" | "CANADA" | "OTHER";

export type UserInfo = {
  firstName: string;
  lastName: string;
  numberOfTickets: string;
  email: string;
  dateOfBirth: {
    month: string;
    day: string;
    year: string;
  };
  zip: string;
  countryOfResidence: Country;
};
