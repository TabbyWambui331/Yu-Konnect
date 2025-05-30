# Yu-Konnect

Yu-Konnect is a React Native mobile application designed to connect and empower the youth of Kiambu. The app provides a platform for accessing training opportunities, booking appointments, engaging with partners, chatting with a virtual assistant, and managing user profiles—all in one place.

## Features

- **User Authentication:** Secure login and onboarding for users.
- **Home Dashboard:** Personalized welcome, quick access to all features, and theme toggle (light/dark mode).
- **Training Opportunities:** Browse and register for youth training programs.
- **Appointment Booking:** Schedule appointments with organizations or mentors.
- **Partnerships:** Explore and connect with partner organizations.
- **Chatbot:** Get instant answers and guidance via an integrated chatbot.
- **Profile Management:** View and edit your personal information.
- **Dark/Light Mode:** Easily switch between dark and light themes for better accessibility.

## Screens

- **LogScreen:** User login and authentication.
- **HomeScreen:** Main dashboard with navigation grid and theme toggle.
- **BookingScreen:** Book appointments with organizations or mentors.
- **ChatbotScreen:** Interact with the virtual assistant.
- **PartnersScreen:** View and connect with partner organizations.
- **ProfileScreen:** Manage user profile details.
- **TrainingScreen:** Access and register for training opportunities.

## Technologies Used

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [React Navigation](https://reactnavigation.org/)
- [@react-native-picker/picker](https://github.com/react-native-picker/picker)
- [Expo Vector Icons](https://docs.expo.dev/guides/icons/)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- [Git](https://git-scm.com/)

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/Tabbywambi331/Yu-konnect.git
   cd Yu-Konnect
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Start the Expo development server:**
   ```sh
   npx expo start
   ```

4. **Run the app:**
   - Use the Expo Go app on your mobile device to scan the QR code, or
   - Run on an emulator/simulator.

### Troubleshooting

- **Clear cache if you encounter issues:**
  ```sh
  npx expo start -c
  ```

- **Install missing dependencies:**
  ```sh
  npm install @react-navigation/native @react-navigation/stack
  expo install react-native-screens react-native-safe-area-context
  npm install @react-native-picker/picker
  ```

## Project Structure

```
Yu-Konnect/
├── App.js
├── Screens/
│   ├── BookingScreen.js
│   ├── ChatbotScreen.js
│   ├── HomeScreen.js
│   ├── LogScreen.js
│   ├── PartnersScreen.js
│   ├── ProfileScreen.js
│   └── TrainingScreen.js
├── assets/
│   └── konnect.png
├── package.json
└── README.md
```

**Yu-Konnect** – Empowering the youth of Kiambu, one connection at a time.
