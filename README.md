# 🚀 NASA Astropulse Application

A visually immersive and interactive full-stack web application that integrates multiple NASA APIs to deliver real-time space and Earth data, chatbot interaction, and educational visualizations.

🌐 [Live Demo](https://nasa-astropulse.vercel.app/) | 📂 [Repository](https://github.com/KarthikIyer97/NASA_Astropulse_Application)

---

## 📋 Table of Contents

- [✨ Features](#-features)
- [🛠 Technologies Used](#-technologies-used)
- [⚙️ Installation](#-installation)
- [▶️ Running the Application](#-running-the-application)
- [🧭 Using the Application](#-using-the-application)
- [🗺️ Available Routes](#-available-routes)
- [🔮 Future Improvements](#-future-improvements)
- [📁 Component Breakdown](#-component-breakdown)

---

## ✨ Features

- 📸 **Astronomy Picture of the Day (APOD)** – Home screen displays NASA’s APOD with description and optional chatbot interaction.
- ☄️ **Asteroid Tracker (NEO)** – Tracks Near-Earth Objects using NASA’s NEO-WS API. Filter data by date and hazard status.
- 📊 **Asteroid Data Visualization** – Bar, Pie, Scatter, and Line charts show asteroid size, speed, and potential threat.
- 🔥 **Wildfire Tracker (EONET)** – Displays a real-time map of wildfire events across the globe using Leaflet with filtering options.
- 🪐 **Mars Gallery** – Showcases high-resolution Mars rover images. Users can send queries/feedback using an **EmailJS-powered** contact form.
- 💬 **Chatbot Integration** – Ask astronomy-related questions via OpenAI GPT-powered chatbot on the homepage.
- 📱 **Responsive Design** – Fully optimized for desktop, tablet, and mobile use.

---

## 🛠 Technologies Used

- **🌐 React.js** – Frontend UI library  
- **🧭 React Router DOM** – Page routing/navigation  
- **🎨 Tailwind CSS** – Modern utility-based CSS  
- **📊 Chart.js** – Visualize asteroid data  
- **🗺️ Leaflet.js + React-Leaflet** – Render wildfire maps  
- **📦 EmailJS** – Send contact messages from Mars Gallery  
- **🧠 OpenAI API** – GPT-powered Q&A assistant  
- **📡 Axios** – API request handling  
- **☄️ NASA NEO API** – Near-Earth Object feed  
- **🌌 NASA APOD API** – Astronomy Picture of the Day  
- **🔥 NASA EONET API** – Natural event (wildfire) data  
- **🪐 NASA Mars Rover API** – High-res Mars rover photos  
- **🌍 Node.js** – Backend runtime  
- **🚀 Express.js** – API server framework  
- **🔐 dotenv** – Secure key storage  
- **🔁 CORS Middleware** – Enable API communication

---

## ⚙️ Installation

### 📦 Prerequisites

### Steps

- [Node.js](https://nodejs.org/) and npm installed

1. 📥 **Clone the Repository**

   ```bash
   git clone https://github.com/KarthikIyer97/NASA_Astropulse_Application.git
Install frontend and backend dependencies: You will need to install the required packages in both the frontend and backend directories.

# Asteroid Tracker Web Application

## Installation

### Frontend:
    cd frontend
    npm install
  
### Backend:

    cd backend
    npm install
    npm install cors

    
   ## 🔑 Environment Variables

Create a `.env` file in the `backend` root with the following values:

```env
PORT=port_no
NASA_API_KEY=your-nasa-api-key
OPENAI_API_KEY=your-openai-api-key


    
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
nodemon server.js
```
Now the application should be running on:

Frontend: http://localhost:5173
Backend: http://localhost:5000
## Using the Application
Once the application is running, you can access different features from the navigation bar.


## 🧭 Using the Application

- 🌌 **Home Page**:  
  - Displays NASA’s Astronomy Picture of the Day (APOD).  
  - Integrates a GPT-powered chatbot for space-related queries.  
  - Social media icons allow instant sharing of the APOD.

- ☄️ **Asteroid Tracker**:  
  - Select a date range (up to 7 days) to fetch Near-Earth Object (NEO) data.  
  - Toggle a hazardous filter to view only potential threats.  
  - Asteroids are displayed in swipeable cards with metadata (name, velocity, miss distance).  
  - Includes interactive visualizations (Bar, Pie, Line, Scatter charts) on size, speed, diameter, and threat level.  
  - Charts update dynamically based on filters applied.  

- 🔥 **Wildfire Tracker**:  
  - Navigate to the interactive map to view wildfire events from NASA’s EONET API.  
  - Filter events by country, continent, month, and year.  
  - Hover on map markers to reveal event title, coordinates, and date.

- 🪐 **Mars Gallery**:  
  - Scroll through high-definition Mars rover images from the Curiosity rover API.  
  - Use the built-in contact form (EmailJS) to ask questions or submit feedback.

---

## 🗺️ Available Routes

| Route              | Description                                             |
|-------------------|---------------------------------------------------------|
| `/`               | Home page with APOD and GPT chatbot                     |
| `/asteroidtracker`| Near-Earth Object tracker with cards and visualizations |
| `/map`            | Wildfire map with filtering capabilities                |
| `/marsgallery`    | Mars photo gallery with contact form                    |

---

## 🔮 Future Improvements

- 🔄 **Pagination or Infinite Scroll** for loading large asteroid datasets efficiently.  
- 🔐 **User Authentication** to save preferences, query history, or favorite asteroids.  
- 🌍 **More NASA APIs**: Integrate missions like Exoplanets, Meteor Showers, ISS tracking.  
- 🎨 **Dark Mode** and improved accessibility for better UX.  
- 📦 **PWA Support** for offline access and installable web experience.  
- 📈 **Download Options**: Allow exporting chart data as images or CSV.

---

## 📁 Component Breakdown

### 🖥️ Frontend Components

1. **App.js**  
   - **Purpose**: Main entry point for the React application.  
   - **Responsibilities**: Handles routing and renders global components like Navbar and Footer.

2. **Home.jsx**  
   - **Purpose**: Displays the Astronomy Picture of the Day (APOD).  
   - **Responsibilities**: Fetches image and explanation from NASA's APOD API; integrates chatbot and background image.

3. **AsteroidTracker.jsx**  
   - **Purpose**: Tracks Near-Earth Objects (NEOs).  
   - **Responsibilities**: Handles fetching, filtering, and displaying asteroid data in both cards and charts.

4. **DatePicker.jsx**  
   - **Purpose**: Provides a date range selector.  
   - **Responsibilities**: Limits range to 7 days and triggers API call on selection.

5. **NeoFilters.jsx**  
   - **Purpose**: Allows filtering NEOs by approach date and hazard status.  
   - **Responsibilities**: Provides checkbox and date input interfaces.

6. **NeoCard.jsx**  
   - **Purpose**: Displays key info about individual NEOs.  
   - **Responsibilities**: Shows name, size, velocity, miss distance, and hazard status.

7. **NeoCardContainer.jsx**  
   - **Purpose**: Wraps NEO cards in a scrollable container.  
   - **Responsibilities**: Implements auto-scroll or manual swipe navigation.

8. **NeoList.jsx**  
   - **Purpose**: Renders a list of filtered NEO cards.  
   - **Responsibilities**: Connects filter output to card layout.

9. **NeoDetails.jsx**  
   - **Purpose**: Modal displaying full details of a selected NEO.  
   - **Responsibilities**: Provides user interaction and deep dive data.

10. **NeoChart.jsx**  
    - **Purpose**: Visualizes NEO data using Chart.js.  
    - **Responsibilities**: Supports Pie, Bar, Line, and Scatter charts.

11. **Map.jsx**  
    - **Purpose**: Shows real-time wildfire events using Leaflet.  
    - **Responsibilities**: Integrates NASA EONET API data with custom map markers and filters.

12. **MarsGallery.jsx**  
    - **Purpose**: Displays Mars rover images.  
    - **Responsibilities**: Fetches from Mars Rover Photos API, auto-scrolls, includes contact form.

13. **ContactForm.jsx**  
    - **Purpose**: Submits user messages.  
    - **Responsibilities**: Integrates with EmailJS to send emails.

14. **Navbar.jsx**  
    - **Purpose**: Provides navigation links.  
    - **Responsibilities**: Links to all main app routes.

15. **Footer.jsx**  
    - **Purpose**: Displays static footer information.  
    - **Responsibilities**: Contains credits, project info, or social media.

---

### 🧩 Backend Components

1. **server.js**  
   - **Purpose**: Main entry point for the Express.js server.  
   - **Responsibilities**: Sets up middleware, routes, CORS, and runs backend on port.

2. **routes/**  
   - **apodRoutes.js** – Routes for APOD-related requests.  
   - **neoRoutes.js** – Routes for NEO (Asteroid) data fetching.  
   - **eonetRoutes.js** – Routes for wildfire events (EONET API).  
   - **marsRoutes.js** – Routes for fetching Mars Rover Photos.  
   - **chatbotRoutes.js** – Routes for sending user prompts to OpenAI GPT.

3. **controllers/**  
   - **apodController.js** – Handles logic for fetching Astronomy Picture of the Day.  
   - **neoController.js** – Handles fetching, parsing, and structuring NEO data.  
   - **eonetController.js** – Retrieves wildfire event data from EONET.  
   - **marsController.js** – Retrieves Mars rover image data.  
   - **chatWithGPT.js** – Sends prompts and retrieves responses from OpenAI API.

4. **.env**  
   - **Purpose**: Securely stores sensitive credentials.  
   - **Variables**:
     ```env
     PORT = port_no
     NASA_API_KEY=your-nasa-api-key
     OPENAI_API_KEY=your-openai-api-key

     ```

---

- `.env` – Securely stores NASA, OpenAI, and EmailJS keys  

---

📬 **For Questions or Feedback**, visit [`/marsgallery`](https://nasa-astronomy-application.vercel.app/marsgallery) and submit via the contact form.

👨‍💻 **Developed by [Karthik Iyer](https://github.com/KarthikIyer97)**  
🌌 **Powered by NASA, Leaflet, OpenAI, EmailJS, and the Universe.**



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

