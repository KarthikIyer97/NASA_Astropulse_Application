# Asteroid Tracker Web Application

This project is a full-stack web application that covers three main features:

1. **Astronomy Picture of the Day (APOD)**: Displays the picture of the day with a description fetched from NASA's APOD API. The picture and description update daily.
2. **Asteroid Tracker**: Tracks Near-Earth Objects (NEOs) using NASA’s NEO-WS API. It allows users to view, filter, and visualize data about asteroids approaching Earth within a selected date range (up to 7 days).
3. **Wildfire Tracker**: Uses NASA’s EONET API to display a global map of wildfires, featuring real-time data with the ability to filter events by year.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Using the Application](#using-the-application)
- [Available Routes](#available-routes)
- [Future Improvements](#future-improvements)
- [Component Breakdown](#component-breakdown)

---

## Features

1. **Astronomy Picture of the Day (APOD)**: Displays the picture of the day and its description on the home screen using the APOD API.
2. **NEO Data**: Fetches and displays Near-Earth Objects approaching Earth using the NEO-WS API.
3. **Asteroid Visualization**: Displays charts (Bar, Pie, Line, and Scatter) showing asteroid size, hazardous status, and maximum diameter.
4. **Filters**: Allows users to filter NEO data by the nearest approach date and hazardous state.
5. **Background Image Carousel**: Automatically changes the background image on the homepage.
6. **Interactive Map**: Displays wildfire events on a world map using Leaflet.js. When the user hovers over the wildfire icons, a dialog box shows the title, location, and full date of the event.
7. **Responsive Design**: The app is fully responsive, adapting to different screen sizes across devices.

---

## Technologies Used

- **React**: For building the user interface.
- **React-Router**: For handling navigation between different pages.
- **Tailwind CSS**: For styling and designing the user interface.
- **Chart.js**: For creating charts such as Bar, Line, Pie, and Scatter Plots.
- **Leaflet.js**: A JavaScript library for interactive maps, used with the `react-leaflet` library.
- **Node.js** & **Express.js**: For setting up the backend server and handling API requests.
- **NEO API**: NASA’s Near-Earth Object Web Service API, used for fetching asteroid data.
- **APOD API**: NASA’s Astronomy Picture of the Day API, used to fetch the daily picture and description.
- **EONET API**: NASA’s Earth Observatory Natural Event Tracker API, used to fetch wildfire data across the globe.
- **Axios**: For making HTTP requests to NASA’s APIs.

---

## Installation

### Prerequisites

- **Node.js**: Download and install Node.js from [nodejs.org](https://nodejs.org/).
- **npm**: Node Package Manager, which comes with Node.js.

### Steps

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/asteroid-tracker.git
Install frontend and backend dependencies: You will need to install the required packages in both the frontend and backend directories.

# Asteroid Tracker Web Application

## Installation

### Frontend:
    cd frontend
    npm install
  
### Backend:

    cd backend
    npm install
    
## Setting Up NASA API Keys
This project uses NASA’s APIs, so you need to obtain an API key.

Visit NASA API and sign up to get an API key.
After obtaining your key, create a .env file in the root of the backend directory:
```bash
NASA_API_KEY=your-nasa-api-key
```
### Running the Application
To run the application, follow these steps:

Install CORS (Cross-Origin Resource Sharing)
The frontend and backend need to communicate, so you’ll need to install CORS in the backend.

```bash
npm install cors
```

### Start the frontend:
```bash
cd frontend
npm run dev
```
### Start the backend:
```bash
cd backend
node server.js
```
Now the application should be running on:

Frontend: http://localhost:5173
Backend: http://localhost:5000
## Using the Application
Once the application is running, you can access different features from the navigation bar.

1. NEO Tracker
Selecting a Date Range: Use the date picker to select a start and end date to fetch Near-Earth Object data for that period.
Filtering by Hazardous Status: You can filter NEOs that are marked as potentially hazardous by selecting the checkbox.
Viewing Data: NEO data will be displayed as cards. You can also visualize asteroid size, hazardous status, and speed in charts.
Detailed View: Click on individual NEOs to see more detailed information like size, closest approach date, and miss distance.
2. Wildfire Tracker
Viewing Global Events: Navigate to the Map page to view wildfire events on a global map.
Event Markers: Hover on wildfire markers to see detailed information about the event, including the date, location, and category.
Available Routes
The following routes are available in the application:

Home Page (/): Displays the Astronomy Picture of the Day and its description using NASA’s APOD API.
Asteroid Tracker (/asteroidtracker): Allows users to filter and visualize NEO data, including charts for NEO size, hazardous status, and max diameter.
Map Page (/map): Displays a map of global wildfire events using NASA’s EONET API.

## Future Improvements
1) Pagination for Large Datasets: If the NEO dataset is large, implementing pagination or infinite scrolling could improve performance.
2) User Authentication: Allow users to save their preferences or track specific NEOs by adding user authentication.
3) New APIs and Visualizations: Integrate additional NASA APIs and create more visualizations.

## Component Breakdown
1. App.js
Purpose: Main entry point for the React application, managing route navigation and consistent elements like the Navbar and Footer.
2. Home.js
Purpose: Displays the Astronomy Picture of the Day (APOD) on the homepage.
Responsibilities: Fetches the daily picture and description using the APOD API.
3. AsteroidTracker.js
Purpose: Main component for tracking Near-Earth Objects (NEOs).
Responsibilities: Fetches NEO data, integrates filters, and visualizes asteroid data.
4. DatePicker.js
Purpose: Allows users to select a date range for filtering NEO data.
5. NeoFilters.js
Purpose: Filters NEOs based on their approach date and hazardous status.
6. NeoCard.js
Purpose: Displays details of individual NEOs, including size and approach date.
7. NeoCardContainer.js
Purpose: A carousel-like container for navigating between NEO cards.
8. NeoChart.js
Purpose: Renders charts visualizing NEO data using Chart.js.
9. NeoDetails.js
Purpose: Displays detailed information about a selected NEO in a modal.
10. NeoList.js
Purpose: Renders a list of filtered NEOs using NeoCardContainer.
11. Map.js
Purpose: Displays wildfire events on an interactive map using Leaflet.js.
12. Navbar.js
Purpose: Provides navigation links to different routes in the application.
13. Footer.js
Purpose: Displays a footer with information about the app.
Backend Components
14. server.js
Purpose: Main entry point for the backend, setting up the Express server and defining API routes for NEO, EONET, and APOD data.
15. apodRoutes.js, eonetRoutes.js, neoRoutes.js
Purpose: These route files handle API requests from the frontend and fetch data from NASA’s APIs.
16. apodController.js, eonetController.js, neoController.js
Purpose: Controllers for handling the actual logic for interacting with NASA's APIs using Axios.
17. .env
Purpose: Stores sensitive data like the NASA API key, keeping it out of the source code

