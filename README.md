# Broadway Lottery

## Overview

The project was created to automate signing up for Broadway musicals' lotteries to get affordable tickets. Currently, it works for lotteries on the [Broadway Direct](https://lottery.broadwaydirect.com/) website. The list of musicals is defined in the [source code](/e2e/broadway-direct.spec.ts#L14). You can edit that list directly on the GitHub website. The results of the lottery drawings are sent out via email (frequently at 3 p.m., but not always). Enjoy the shows and please use this automation responsibly. Reselling these tickets is not allowed.

## How to use it

1. "Fork" the repository (button at the top right side)
2. To create ([repository secrets](https://docs.github.com/en/actions/security-guides/using-secrets-in-github-actions#creating-secrets-for-a-repository)) go to the **Settings** tab => **Secrets and variables** => **Actions**
3. Click "New repository secret" and add the following secrets with your personal information:
    1. `FIRST_NAME` (example value: `Donald`)
    2. `LAST_NAME` (example value: `Duck`)
    3. `NUMBER_OF_TICKETS` (allowed values: `1` or `2`)
    4. `EMAIL` (example value: `donald.duck@gmail.com`)
    5. `DOB_MONTH` - month of birth (allowed values: `1` - `12`)
    6. `DOB_DAY` - day of birth (allowed values: `1` - `31`)
    7. `DOB_YEAR` - year of birth (example value: `1999`)
    8. `ZIP` - address postal code (example value: `10007`)
    9. `COUNTRY` (allowed values: `USA`, `CANADA`, `OTHER`)
4. Go to the **Actions** tab, accept the terms and conditions, and enable the "Playwright Tests" workflow
5. The workflow will run daily at the [specified time](/.github/workflows/playwright.yml#L5) (UTC timezone)
6. Modify the [list of shows](/e2e/broadway-direct.spec.ts#L14) you want to sign-up for if needed

### Secrets example

#### List of secrets
<img width="640" alt="image" src="https://github.com/NameFILIP/broadway-lottery/assets/834796/7b3baad6-5fad-42ff-9704-074d6bcaadc2">

#### Create a new secret
<img width="640" alt="image" src="https://github.com/NameFILIP/broadway-lottery/assets/834796/52daa38a-7fec-4f5d-b918-362b18dcb2bc">


## Email filters

In order to avoid being a daily loser, I recommend creating email filters to automatically Archive or Delete the following emails:

- from:(lottery@broadwaydirect.com) subject:(Lottery Entry Received)
- from:(lottery@broadwaydirect.com) subject:(Lottery Results: Try Again)

This way you will only receive emails when you win something.
