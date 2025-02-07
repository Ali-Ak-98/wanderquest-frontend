# WanderQuest Documentation

## Overview
WanderQuest is an interactive city exploration platform that presents city data in a story-driven format. The application utilizes a 3D globe for visualization and a dynamic UI for immersive user interaction.

## Features
- **3D Globe Visualization**: Displays city data interactively using `react-globe.gl`.
- **Story Mode**: Engaging narratives based on city data.
- **Dynamic UI**: Built with Next.js and Tailwind CSS.
- **Backend API**: Powered by NestJS.
- **Unit Testing**: Implemented using Jest.

## Tech Stack
- **Frontend**: Next.js (App Router), Tailwind CSS
- **Backend**: NestJS
- **Globe Visualization**: `react-globe.gl`
- **Testing**: Jest

## Installation

### Prerequisites
Ensure you have the following installed:
- Node.js (v18+ recommended)
- npm or yarn

### Clone the Repository
```sh
git clone https://github.com/Ali-Ak-98/wanderquest-frontend
cd wanderquest
```

### Install Dependencies

```sh
npm install  # or yarn install
```

### Environment Variables
Before running the project, set up the required environment variables in a .env file:

```sh
NEXT_PUBLIC_API_BASE_URL=your_nestjs_api_url
NEXT_PUBLIC_API_GOOGLE_API_KEY=your_google_api_key
```

### Run the Development Server

```sh
npm run dev  # or yarn dev
```
### Project Structure

```sh
/wanderquest-frontend
├── .github/           # GitHub configuration files
│   └── workflows/     # GitHub Actions workflows
├── app/               # Next.js App Router
├── hooks/             # Custom React hooks
├── lib/               # Library utilities
├── public/            # Static assets
├── .gitignore         # Git ignore file
├── README.md          # Project README
├── jest.config.js     # Jest configuration
├── jest.setup.js      # Jest setup file
├── jsconfig.json      # JavaScript configuration
├── next.config.mjs    # Next.js configuration
├── package-lock.json  # Package lock file
├── package.json       # Package manifest
├── postcss.config.mjs # PostCSS configuration
└── tailwind.config.mjs# Tailwind CSS configuration
```

### Running Tests

```sh
npm run test  # or yarn test
```

### Deployment
For production builds:

```sh
npm run build  # or yarn build
npm start
```

### License
This project is licensed under the MIT License.

### Contact
For support, open an issue on GitHub.

