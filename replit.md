# Wyszukiwarka Krajów po Stolicach (Country Search by Capital)

## Overview
A Polish-language web application that allows users to search for countries by their capital cities. The app uses the REST Countries API to fetch and display country information including population, region, and subregion.

**Status:** ✅ Fully functional and imported into Replit environment  
**Last Updated:** November 12, 2025

## Project Architecture

### Technology Stack
- **Frontend:** Vanilla JavaScript, HTML5, CSS3
- **API:** REST Countries API (https://restcountries.com/v3.1/)
- **Web Server:** Python's built-in HTTP server on port 5000
- **Dependencies:** None - pure static web application

### File Structure
```
.
├── index.html      # Main HTML page with search form and results table
├── app.js          # JavaScript logic for API calls and UI rendering
├── style.css       # Styling for the application
└── replit.md       # Project documentation
```

## Features
1. **Capital City Search:** Users can enter a capital city name to find the corresponding country
2. **Data Display:** Shows country name, capital, population, region, and subregion in a table
3. **Highlighting:** Search query is highlighted in the capital name results
4. **Error Handling:** Displays user-friendly error messages for invalid searches or network issues
5. **Polish UI:** All user-facing text is in Polish

## Workflow Configuration
- **Name:** Web Server
- **Command:** `python3 -m http.server 5000`
- **Output Type:** webview
- **Port:** 5000

## User Preferences
None documented yet.

## Recent Changes
- **Nov 12, 2025:** Project imported from external source into Replit environment
- Simple static web app with no build process required
- Web server workflow configured and verified working
