# Shutter Feeds

## Overview

**Shutter Feeds** is a web application built for photography enthusiasts. Users can browse, upload photos, read and submit reviews in the comment section, and interact with a community of photographers and photography lovers. The project uses React for the frontend and integrates Redux for state management, with asynchronous actions handled by Redux Thunk.

## Features

- **Browse & Upload Photos**: Users can explore and upload their own photography.
- **Comment System**: Read and submit Comments for photography collections.
- **User Authentication**: Login and manage accounts.
- **Community Engagement**: Participate in reviews, ratings, and comments.

---

## Setup Instructions

To get this project running locally, follow the steps below.

### Prerequisites

- [Node.js](https://nodejs.org/) and npm
- [Git](https://git-scm.com/)

### Installation Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/calebdfk/Shutter-Feeds.git
   ```

2. **Navigate to the project directory:**
   ```bash
   cd Shutter-Feeds/frontend
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Set up environment variables:**
   If necessary, we will create an `.env` file for storing API keys or other sensitive data.

5. **Start the development server:**
   ```bash
   npm start
   ```

   You can access the app at `http://localhost:3000`.

### Testing

To run tests, use:
```bash
npm test
```

---

## Usage Guidelines

1. **Development Mode**: Run the development server:
   ```bash
   npm start
   ```

2. **Production Build**: To build the app for production:
   ```bash
   npm run build
   ```

3. **Photo Uploads & Reviews**: Users can:
   - Browse uploaded photos
   - Upload their own photos
   - Submit reviews and rate others' work

### Contributing

1. Fork the repository.
2. Create a new feature branch.
3. Commit your changes.
4. Push to the branch.
5. Open a pull request for review.

---

## Project Architecture

### Frontend

- **React**: User interface components.
- **Redux**: Manages the app's state.
- **Redux Thunk**: Handles asynchronous actions (e.g., API calls).
- **Aphrodite**: Inline CSS styling for components.

### Key Components

- **App Component**: The root component.
- **PhotoGallery Component**: Displays photos.
- **Comments Component**: Manages comments.
- **Auth Component**: Handles user login.

### Folder Structure

```bash
Shutter-Feeds/
├── frontend/
│   ├── public/                 # Public assets (index.html, images)
│   ├── src/
│   │   ├── actions/            # Redux actions
│   │   ├── components/         # React components (PhotoGallery, Reviews)
│   │   ├── reducers/           # Redux reducers (photosReducer, reviewsReducer)
│   │   ├── store/              # Redux store configuration
│   │   ├── App.js              # Main App component
│   │   ├── index.js            # Entry point
│   ├── package.json            # Project dependencies and scripts
└── README.md                   # This file
```

### External Services

- **Reviews API** (Optional): Integrates with an external reviews API for fetching user reviews. If unavailable, custom review handling logic is used.

---

## Challenges Identified

- **API Integration**: Integrating with a reviews API or building a custom review system.
- **Async Actions**: Managing async operations (photo uploads, reviews) using Redux Thunk.
- **Authentication**: Implementing secure user authentication (either custom or via third-party services).

---

## Development Schedule

Managed using Trello/Kanban for task tracking:

- **Week 1**: Setup, UI/UX design, initial components.
- **Week 2**: Photo gallery, Redux, authentication.
- **Week 3**: Reviews system, API integration.
- **Week 4**: Testing, bug fixes, deployment.

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
