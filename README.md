# broadway-lottery

1. Add `/e2e/user-info.ts` file:

```
import { UserInfo } from "./types";

export const userInfo: UserInfo = {
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
```

2. Run `npx playwright test`.