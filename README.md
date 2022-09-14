# Interest Calculator

Interest Calculator calculates interest based on given 'Loan Amount' and 'Loan Duration' in months. You can select both of these parameters from sliders. It will then show you Interest rate, Numbers of Installments and Amount per Installment.  

To get started with this repo, Clone this project from above and run `npm install` in your respective terminal.

This project uses [React](https://github.com/facebook/react/), [Redux](https://github.com/reduxjs/redux) and [Redux-Saga](https://github.com/redux-saga/redux-saga/) with help of other libraries like [React-Redux](https://github.com/reduxjs/react-redux). Also, This project was bootstrapped with [Create React AppWithoutRedux](https://github.com/facebook/create-react-app).

### Why using Redux?
There is a file named `AppWithoutRedux.js` which has code only in `React`, without `Redux` and `Redux-Saga`. You can check it out in `/src/withoutRedux` folder. If you want to run that file un-comment `Core` function which is commented and comment the un-commented one. Rest will be handled by itself. You will be able to see the difference, why i used `redux` in first place.

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
