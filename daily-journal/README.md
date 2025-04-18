# Daily Journal App

The **Daily Journal App** is a digital diary designed to help users track their moods and document their thoughts and experiences each day. It includes features like a rich text editor for creating formatted entries, mood tracking, and export capabilities for saving entries as text files. 

This project was built using **React** and **CSS** to create a clean, modern, and user-friendly interface.

---

## Features

- **Mood Tracker**: Allows the user to select their mood for the day (e.g., Happy, Neutral, Sad, etc.).
- **Rich Text Editor**: Offers basic text formatting options like **bold**, *italics*, and **underline**.
- **Auto-save**: Journal entries are automatically saved as you type.
- **Export as Text File**: Export your journal entries to a `.txt` file for offline storage.
- **Clear Entries**: Option to clear the journal entries and start fresh.
- **Responsive Design**: The app is optimized for both mobile and desktop devices.

---

## Tech Stack

- **Frontend**: React, CSS
- **State Management**: LocalStorage (for saving journal entries locally)
- **No Backend**: The app does not require a backend, and all data is stored locally in the browser.

---

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.\
The page will reload if you make edits, and you will also see any lint errors in the console.

### `npm test`

Launches the test runner in interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles the React app in production mode and optimizes the build for the best performance.

### `npm run eject`

**Note: This is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

---

## How to Use

1. **Clone** the repository:

   ```bash
   git clone https://github.com/ikanchan/Daily-Journal-app.git
2. Navigate to the project directory:cd Daily-Journal-app
3. Install the required dependencies:npm install
4. Run the app in development mode:npm start
5. Open http://localhost:3000 in your browser to start using the app.

Deployment
Deployment to GitHub Pages
To deploy the app to GitHub Pages:
1. Install GitHub Pages: npm install gh-pages --save-dev
2. Add the following scripts in your package.json file: 
"homepage": "https://yourusername.github.io/Daily-Journal-app",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
Deploy the app:npm run deploy
Deployment to Netlify
To deploy the app to Netlify:

Sign up or log in to Netlify.

Create a new site by linking your GitHub repository.

Configure build settings and deploy your app.

Learn More : 
             Create React App Documentation
             React Documentation
             GitHub Pages Documentation
             Netlify Documentation

License
This project is open-source and available under the MIT License.
