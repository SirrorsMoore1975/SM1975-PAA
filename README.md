# Phone-Review-App

Link to Deployed Site : https://phone-review-app.onrender.com/
(Currently Not Available)

### Introduction
## What is Phone-Review-App?

Phone-Review-App is a project that collect user's review over Japanese main phone carrier. Users can provider their view of each of the carrier they might have experienced.

## How to set up the project in local machine
# For development
1. create `.env` and copy contents in `.env.example`, replace the field for `DB_NAME` and `DB_PASSWORD`, make note to the name use.
1. run `psql` and create a database associate with the `DB_NAME`
1. `npm run build` to install client's (React) and server's dependancy, if you have created the database, the knex migration and seed should work; but in case this fail, you can do migration using `npm run migrate` and seed using `npm run seed`;
1. run the program using `npm run start`


# The Frontend

## client/src/index.js
This file contains the routes and the client side endpoints for each separate page

## Components
`AvgScores` - displays all of the average scores on the carrier profile pages (the pink card)  

`Button` - a template for most of the buttons on the app 

`Card` - the cards that are displayed for each carrier on the Homepage  

`Dropdown Menu` - the dropdown menu that allows user to select which carrier they are reviewing on the `Provider` page

`Footer` - the footer that is displayed on all pages 

`Header` - the header that is displayed on the Homepage and the thank you message after submission 

`Input` - a template for the input fields on the Forms page 

`Navbar` - alternate version of the Header component; this one has a home button in the upper right corner 

`ProviderInfo` - displays the hero at the top of each carrier profile page

`ProviderInfoNavBar` - provide components to navigate between carrier without first going back to the home page

`Radio` - Score system for user to choose 0 - 10

`ReviewCard` - The components to show the average result score users has given

## Pages
`ErrorPage` - dummy page for development purpose only

`Homepage` - the homepage; this is the root path ("/"). 

`Provider` - the page which display the provider info and its average scores.

`ReviewForm` - the page where the user will input their scores and write their review.

`ThankYou` - the page that say thank you when review has successfully added.

Additonally, there is a page for each of the nine carriers and a `Provider.css` page for styling these pages.  

## Radio.jsx
```
<span className={className}>
   {input.value}
    <br />
   <label htmlFor={label} 
      key={index}>
                        
      <input 
        id={label}
        type={input.type}
        name={radioName}
        value={input.value}
        checked={isRadioSelected(input.value)}
        onChange={handleRadioSelect}
        >
        </input>
        </label>
```
```
<Radio 
className = {string}, label={string}, radioName={string}, scoreSetter={function}/>
```

`radioName` is the radio name for all those name for radio, in this example, it is bob

React in radio button uses a boolean method call `checked` to determine which buttons in the radio set are selected.
```
<input checked={ true } name=”bob” value=”0”>{ /* commercial secret */ }</input>
<input checked={ false } name=”bob” value=”1”>{ /* commercial secret */ }</input>
<input checked={ false } name=”bob” value=”2”>{ /* commercial secret */ }</input>
```

We have a `useState` that default the selected button to 0 score. And the same `useState` has function to change that selected button value. 
```
const [selectRadioButton, setSelectRadioButton] = useState(‘0’)
```
Another function ,`isRadioSelected`, is created to determine true/false by comparing the current value and the `useState` variable. 
```
const isRadioSelected = (value) => selectRadioButton === value
```
This `isRadioSelected` function is placed on each button and linked to each button’s `checked` . When the `useState` function changes value (ie. user changing its score), the `isRadioSelected` return false, which make current button checked become false and since the value at the selected button is that given value, this make isRadioSelected which pointed to button checked became true.
We used another function which handle Radio select (`handleRadioSelect`).
```
const handleRadioSelect = (event) => setSelectRadioButton(event.target.value);
```
When radio button is change, selectRadioButton changes as onChange is linked to `handleRadioSelect`. Every button has this function at `onChange`, so when a button status change, it will follow:
```
<input checked={isRadioSelected(input.value) onChange={handleRadioSelect}>} </input>
```
When user decided to select other score, the function changed useState variable `selectRadioButton`, thereby causing previous selected button checked become false, the user now selected button has `checked` become true.

# The Backend 

## API endpoints
The express server contains 4 /api endpoints, though one is just used for testing ('/api/hello').

### /api/providers

This endpoint requires no inputs. This endpoint queries the Database for the seeded provider data and the overall scores from the review_detail table. At the moment, we only have 9 providers, but it could be generalized to take in an id value and query for any number of providers.

The endpoint `return`s (`res.send()`) back an array of objects, where each object contains the following keys (id, name, img_url, description, english_support, site_url, overall).

`id` (integer) is the id value the provider has in the provider table.  
`name` (string) is the name of the provider.  
`img_url` (string) is a img address to the providers logo. 
`description` (string) is roughly a paragraph description of the provider.  
`english_support` (boolean) is a value as to if the company provides English customer support.  
`site_url` (string) in the url for the providers website (English page if available). 
`overall` (float rounded to 2 decimal places) is the average of all overall scores of that provider.  

example:
```
[
  {
    "id": 1,
    "name": "Mobal",
    "img_url": "https://www.mobal.com/img/common/logo.svg",
    "description": "A US based company that offers Japanese and International sim plans for both long-term and short-term stays. Mobal guarantees that the majority of their profits go to charity. They also offer complete English-speaking support. They also offer a home wifi plan with a mobile hotspot plan.",
    "english_support": true,
    "site_url": "https://www.mobal.com/",
    "overall": 5.71
  },
  ...
]
```

### /api/provider/:providerid
This endpoint requires the providerid parameter as a number (1-9). This number corrolates to the providers location in the provider table.

This endpoint returns an array of two values
[providerInfo, reviews]
where:
providerInfo is an object 
reviews is an array of review objects.

The first element (providerInfo) has all the same keys as in /api/providers, as well as (ease_of_use, coverage, price, customer_service). Each of these keys are the average scores of their respective reviewer criteria.

reviews is an array of objects where each object contains the following keys (reviewer_name, overall, ease_of_use, coverage, price, customer_service,customer_review).

`reviewer_name` (string) is the name of the reviewer to display. 
`overall` (number) is the reviewer's overall score. 
`ease_of_use` (number) is the reviewer's Ease of Use score. 
`coverage` (number) is the reviewer's coverage score. 
`price` (number) is the reviewer's price score. 
`customer_service` (number) is the reviewer's customer service score. 
`customer_review` (string) is the reviews written review of the company.  

### /api/review 
This endpoint is to add a new customers review. This endpoint takes the review in the body, test if that email had been used prior to review that company, and if it hasn't adds it to the database.

This endpoint expects the body to contain the following information:
`provider_id` (number) 
`reviewer_name` (string) 
`email` (string) 
`overall` (number) 
`ease_of_use` (number) 
`coverage` (number) 
`price` (number) 
`customer_service` (number) 
`customer_review` (string) 

example body:
```
{
    "provider_id":2,
    "reviewer_name": "Todd Rogers",
    "email": "godslayerXD@hotmail.com",
    "overall": 8,
    "ease_of_use": 6,
    "coverage": 9,
    "price": 7,
    "customer_service": 9,
    "customer_review": "Creating an account and getting the SIM card is a little annoying, and once you put the SIM card in your phone, there is a bit of annoyance in setting up the data plan on your phone. However, once you finish the setup, I haven't had an issue with the server and everytime I contacted customer service, my issue was quickly addressed."
}
```

## Helpful Resources
[React Router Docs](https://reactrouter.com/en/main) 

[Faker JS Docs](https://fakerjs.dev/) 

[Our Color Palette](https://colorhunt.co/palette/66bfbfeaf6f6ffffffff0063)


### LICENSE
MIT License

Copyright (c) 2023 SM1975-PAA

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
