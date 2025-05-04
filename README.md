# ProductSwipApp

A mobile app built using **React**, **Vite**, and **Capacitor**. This app allows users to swipe through products, showcasing a simple and interactive user experience.

## Features
- Swipe through products like a carousel.
- Built with React for efficient and interactive UI.
- Vite used for fast development and build process.
- Capacitor for creating native mobile apps for iOS and Android.

## Tech Stack
- **Frontend**: React, Vite
- **Mobile Platform**: Capacitor
- **State Management**: (e.g., Redux, Context API) *(if applicable)*
- **Styling**: CSS/SCSS (or styled-components) *(if applicable)*

## Installation

To get started with the project, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/singhxamit21/productSwipApp.git
   cd productSwipApp

2. **Install dependencies**:

   ```bash
   npm install
   # or
   yarn install

3. **Run the app in development mode**:

   ```bash
   npm run dev
    # or
    yarn dev
  This will start the app on http://localhost:3000 (by default).

  ## Build for Mobile

1. **Install Capacitor**:

   ```bash
   npm install @capacitor/core @capacitor/cli
    npx cap init

2. **Add platform (Android/iOS)**:

   ```bash
    npx cap add android
    # or
    npx cap add ios
   
3. **Build and sync**:

   ```bash
   npm run build
    npx cap sync

3. **Open project in Android Studio**:

   ```bash
   npx cap open android
    # or
    npx cap open ios

