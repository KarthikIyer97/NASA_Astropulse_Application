This project is a Full stack application that covers 3 parts:

1. Astronomy Picture of the day using APOD Api in NASA website and it displays the picture of the day with its description and it changes everyday.

2. Asteroid Tracker using Near-Earth Objects (NEO-Ws) of NASA API. The application allows users to view, filter and visualize data about asteroids approaching in the selected dates. So it gets the data for 7 days from start date to end date.

3. Wildfire Tracker using EONET API of NASA. This tracker is a global map of wildfires. The map features real time data fetched from an APIs and also includes a filter on the basis of years.

TABLE OF CONTENTS:-

-[Features]
-[Technologies Used]
-[Installation]
-[Running the Application]
-[Using the Application]
-[Available Routes]
-[Future Improvements]



Features

1) Astronomy Picture of the day and its Description is displayed on Home screen using APOD Api.
2) NEO Data: Fetch and display Near-Earth Objects approaching Earth using NEO-Ws API.
3) Asteroid Visualization: Display charts (Bar, Pie, Line, Scatter) showing details of asteroid size, hazardous and non-hazardous asteroids and max diameter of Asteroids.
4) Filters:- Filter NEO data by nearest approach date and hazardous state.
5) Background Image Carousel:- Automatic background image changing on the homepage
6) Interactive Map:- Display the wildfire events on the world map using leaflet and fire icon. Also if user hovers over the wildfire icon it give a dialog box with the title of wildfire , location and its full date.
7) Responsive Design:- The app is fully responsive and works across devices with all dimensions.


Technologies Used

1) React:- Used for building User Interface.
2) React-Router:- For handling different routes in the app.
3) Tailwind CSS:- Used for styling and designing the user interface.
4) Chart.js:- For creating charts such as Bar, Line, Pie and Scatter Plots.
5) Leaflet.js:- A Javascript library for interactive maps used in conjunction with 'react-leaflet' library.
6) Expressjs, Nodejs:- For fetching the API data and displaying it in the frontend
7) NEO API:- For fetching Near-Earth Object data in Asteroid Tracker.
8) APOD API:- For fetching the Astronomy Picture of the day and its description
9) EONET API:- For fetching wildfire across the globe.
10) Axios:- For making HTTP requests  to NASA's API





Installation

 Prerequisites

- **Node.js**: Ensure that you have Node.js installed on your machine. You can download it from [nodejs.org](https://nodejs.org/).
- **npm**: Node Package Manager, which comes with Node.js.

### Steps

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/asteroid-tracker.git
   

2. All the packages and libraries installed are in package.json file which is      included in both frontend and backend.
-- cd frontend
then,
-- cd backend

 Use command 
 -- npm install 
 in both front and backend for installation of all the libraries

3. Setting Up NASA API Keys
This project uses NASA’s APIs, so you’ll need to get an API key to access the data.

Visit NASA’s API website: https://api.nasa.gov/
Sign up or log in to get your API Key.
Once you have the key, create a .env file at the root of your project


Running the Application:-
For running the application user has to install cors library

the command for installation is as follows

npm i cors

Cors allows the users to run both frontend and backend simultaneously.

So, first the user has to go to frontend and run

npm run dev

to run the frontend

and then proceed to backend to run using command

node server.js


--) Using the Application
Once the application is running, you can access different features from the navigation bar. Here’s how to use each feature:

1) NEO Tracker
Selecting a Date Range: Use the date picker to select a start and end date to fetch Near-Earth Object data for that period.
Filtering by Hazardous Status: You can filter NEOs that are marked as potentially hazardous by selecting the appropriate checkbox.
Viewing Data: The data for NEOs will be displayed in the form of cards. You can view charts that show NEO details such as size, hazardous status, and speed.
Detailed View: You can click on individual NEOs to see more detailed information about their size, closest approach date, and miss distance.

2) Wildfire Map
Viewing Global Events: Navigate to the Map page to view wildfire events on a global map.
Event Markers: Hover on wildfire markers to see detailed information about the event, including the date, location, and category.



Available Routes

The following routes are available in the application:

1) Home Page (/): Displays a Astronomy picture of the day and its description using APOD API.
2) Asteroid Tracker (/asteroidtracker): Allows users to filter and visualize NEO data, including charts for NEO size, hazardous status, and max diameter.
3) Map Page (/map): Displays a map of global wildfire events using NASA's EONET API.



Future Improvements
1) Pagination for Large Datasets: If the NEO data is large, implementing pagination or infinite scrolling could improve performance.
2) User Authentication: Allow users to save their preferences or track specific NEOs by adding user authentication.
3) Making more tabs using another APIs and creating more visualizations.


Component Breakdown:

1. App.js
Purpose: The main entry point for the React application, responsible for routing between different views (Home, AsteroidTracker, Map, etc.).
Responsibilities:
Manages route navigation using React Router.
Provides consistent elements like the Navbar and Footer on all pages.
Links the key routes /, /asteroidtracker, and /map.

2. Home.js
Purpose: Displays the homepage of the app, showcasing the Astronomy Picture of the Day (APOD) and other key information.
Responsibilities:
Fetches and displays NASA’s Astronomy Picture of the Day (APOD).
Implements a background image carousel that cycles through multiple images.
Provides navigation to the main features of the app, like the asteroid tracker.

3. AsteroidTracker.js
Purpose: Main component for tracking Near-Earth Objects (NEOs).
Responsibilities:
Fetches NEO data from the NASA API.
Displays NEOs in a list or carousel format.
Integrates date filtering and hazardous status filtering.
Renders charts to visualize NEO data.
Displays modal dialogs for more detailed NEO information.

4. DatePicker.js
Purpose: Allows users to select a start and end date to filter NEOs by their closest approach date.
Responsibilities:
Provides an input form for selecting a date range.
Validates date range selections (e.g., max range of 7 days).
Triggers fetchNeoData in the parent component (AsteroidTracker) based on selected dates.

5. NeoFilters.js
Purpose: Filter NEOs based on their approach date and hazardous status.
Responsibilities:
Provides a checkbox for filtering NEOs marked as “Potentially Hazardous.”
Triggers the filtering logic in the parent component (AsteroidTracker).

6. NeoCard.js
Purpose: Displays individual NEO details such as size, closest approach date, and hazardous status.
Responsibilities:
Presents NEO data in a clean, readable format.
Shows key information like diameter, miss distance, and velocity.
Can be part of a carousel (NeoCardContainer).

7. NeoCardContainer.js
Purpose: A container for multiple NeoCard components, implementing a carousel-like navigation system.
Responsibilities:
Displays a carousel of NEOs, allowing users to navigate between cards.
Supports mouse drag functionality for swiping through cards.
Handles left/right navigation via arrows for desktop users.

8. NeoChart.js
Purpose: Visualizes NEO data using various charts (Bar, Line, Pie, and Scatter plots).
Responsibilities:
Renders NEO data (such as size, velocity, hazardous status) in different chart formats using Chart.js.
Includes Bar charts for hazardous vs non-hazardous NEO counts, Line charts for size over time, and Scatter plots for size vs miss distance.
Updates dynamically based on filtered data from NeoFilters.

9. NeoDetails.js
Purpose: Modal for displaying detailed information about a selected NEO.
Responsibilities:
Provides a pop-up window with in-depth details about a specific NEO.
Displays close approach data, including velocity and miss distance.
Allows users to close the modal to return to the main view.

10. NeoList.js
Purpose: Renders a list of filtered NEOs.
Responsibilities:
Displays the NeoCardContainer or a message if no NEOs match the filters.
Acts as a wrapper for the NeoCardContainer.

11. Map.js
Purpose: Displays a global map of wildfire events using NASA’s EONET API.
Responsibilities:
Uses Leaflet.js to render an interactive map.
Fetches and displays wildfire events as markers on the map.
Allows users to click on markers to see more details about the event.

12. Navbar.js
Purpose: Provides navigation links between the different pages of the application.
Responsibilities:
Links to /, /asteroidtracker, and /map routes.
Remains persistent across different pages for easy navigation.

13. Footer.js
Purpose: Displays a footer with information about the app.
Responsibilities:
Shows text such as copyright information.
Can include links to additional resources or contact information.

14. server.js:

Main entry point for the backend.
Sets up the Express server, applies middleware, and defines API routes for NEO, EONET, and APOD data.

15. apodRoutes.js, eonetRoutes.js, neoRoutes.js:

These route files handle API requests from the frontend.
Each route is responsible for fetching data from its respective NASA API (APOD, EONET, and NEO).

16. apodController.js, eonetController.js, neoController.js:

Controllers contain the logic to interact with NASA's APIs.
These handle the actual fetching of data from NASA’s services, using Axios, and return the data to the routes.

17. .env:

Stores sensitive data like API keys (e.g., NASA_API_KEY).
Keeps configuration and secrets safe from the source code.