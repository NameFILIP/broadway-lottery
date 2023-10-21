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
  countryOfResidence: "USA" | "CANADA" | "OTHER";
};
