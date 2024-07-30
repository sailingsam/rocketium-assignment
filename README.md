# Rocketium Assignment

This project is a web application that fetches dummy data from an external URL and stores it in a local file. The data fetching operation is performed automatically when the server starts.

## Features

- **Fetch Dummy Data**: Automatically fetches and stores dummy JSON data on server Initialisation.
- **Get All Data**: Retrieve all data.
- **Filter by Language**: Filter the data based on the language field.
- **Sort Data**: Sort the data by any specified field in ascending or descending order.
- **Get Data by ID**: Retrieve individual data items based on their unique ID.
- **Error Handling**: Provides clear error messages for invalid requests, including:
  - Invalid sort order
  - Invalid sort field
  - User not found
  - Internal server errors
- **Global Error Handling Middleware**: Catches and responds to errors with a standardized format.
- **Project Structure**: Organized into controllers, routes, and utility functions for maintainability.
- **Automatic Data Fetching**: Data is fetched and saved when the server starts up.

## Project Setup

Follow these instructions to set up and run the project on your local machine.

### Prerequisites

Make sure you have the following software installed on your machine:

- [Node.js](https://nodejs.org/) (which includes npm)
- npm (Node Package Manager)

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/sailingsam/rocketium-assignment
   cd rocketium-assignment
   ```

2. **Install Dependencies**

   Run the following command to install all necessary dependencies:

   ```bash
   npm install
   ```

## Dummy - Data Initialization

The project fetches dummy data from an external URL and stores it in a local file - dummyData.json.

This operation is performed automatically when the server starts.

## Running the Project

### Start the Server

Run the following command to start the server:

```bash
npm start
```

The server will be by default accessible at http://localhost:3000 .

### Fetching Dummy-Data

The server will fetch and store dummy data automatically. If you want to re-fetch the data, you can restart the server.

## API Documantation

### Base URL

```bash
http://localhost:3000/api/data
```

### EndPoints

### 1. Get all Data (with filtering based on language & sorting)

- URL: '/'
- Method: GET
- #### Query Parameters:
- - ##### [language]: (optional) filter data based on particular language.
- - ##### [sortby]: (optional) Field to sort by (default: name)
- - ##### [order]: (optional) Sort order (asc or desc, default: asc)

#### Example Request:

- get all data

```bash
GET http://localhost:3000/api/data
```

- Filtered data

```bash
GET http://localhost:3000/api/data?sortby=version&order=desc&language=Icelandic
```

### 2. Get Data by id

- URL: '/:id'
- Method: GET
- #### Query Parameters:
- - ##### [id]: The ID of the user to fetch.

#### Example Request:

```bash
GET http://localhost:3000/api/data/V59OF92YF627HFY0

```

- Response

```bash
{
  "name": "Adeel Solangi",
  "language": "Sindhi",
  "id": "V59OF92YF627HFY0",
  "bio": "Donec lobortis eleifend condimentum...",
  "version": 6.1
}
```
