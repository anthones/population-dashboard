# Populus - The Population Dashboard

Populus is an admin panel like dashboard that displays useful information about the population of the countries.

[Population-dashboard](https://population-dashboard.herokuapp.com/) - Live preview on heroku instance

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

```
Node.js v9.3.0
NPM package manager v5.5.1
```

### Installing

Installing the app is easy enough, just clone this repo on your local machine and then browse the folder from your favourite CLI and install the dependencies by entering

```
npm install
```

Then, to start the server

```
npm start
```

## Deployment

To create a build version with Webpack:

```
npm build
```

## Built With

- [Create-React-App](https://github.com/facebook/create-react-app) - The boilerplate scaffolding for the project
- [NPM](https://www.npmjs.com/) - Dependency Management
- [Heroku](https://population-dashboard.herokuapp.com/) - Used for deployment

## Future imporvements

- Modularise the main axios GET method
- Add unit tests for the App and Report Components
- Fix the search filters for the main table
- Improve the UX layout and style
- Finish the Nav elements, maybe add a special view for all elements of the main dashboard

## Authors

- **Antonie Dimovski** - [anthoness](https://github.com/anthones)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

- Huge thanks to [CORS-Anywhere](https://github.com/Rob--W/cors-anywhere/) for saving me enormous amount of time on making my own Express proxy
- Thanks to the [Population API](http://api.population.io) for their reliable responses
