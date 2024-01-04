# My Portfolio
My portfolio written whit SvelteKit and TailwindCSS.

## Installation

### Via npm
To run the app locally, you need to launch the following commands:
```bash
npm install
npm run dev
```
This will install all the dependencies and run the app in development mode.

If you want to build the app, you can run:
```bash
npm run build
```

### Via Docker (recommended)
To use the app via Docker, you need to launch the following commands:
```bash
docker build -t my-portfolio .
docker run -d -p 5000:80 my-portfolio
```
This will build the image and run the container on port 5000.

## Todo
- [ ] Fix loading time always showing "0" on the docker version.
- [ ] Add images to the projects.
- [ ] Easter eggs.

## Some Credits
- [Calendly](https://calendly.com/) to book appointments in the portfolio.
- [Egg.js](https://mikeflynn.github.io/egg.js/) because why not?