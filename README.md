# HackerNews

Hacker to display the list of news along with the Line chart.

## Demos

https://newsapi-2020.herokuapp.com/

## Installation

```bash\
$ npm install
```

## Run Application

```bash\
$ npm start
```

- open Applciation in the port 4048

## Libraries used

- React
- redux
- redux-thunk
- webpack

## Approach Documentation

- Initial server setup is done using Node and express js
- created webpack configs for client and server
- Application Development:
  - Created APP Component and rendered the routes to support dynamic page links
  - Created News reducers and page reducers and used redux-thunk as middleware
  - OnLoad of NewsWrapper component action triggered to do ajax call, passed pagenumber dynamically to get the particular page request url and on response parsed the data with the localstorageData and stored into News Reducers.
  - Passed news data to newsList,Links,Charts component to render the view component
  - Onclick updatevote / Hide updated the news state and stored the clicked data to the localstorage and on state change newsList component and chart rerendered and updated the view.
  - On cllick of prev / Next dynamic link created with the pagenumber and rendered the same news list component.
