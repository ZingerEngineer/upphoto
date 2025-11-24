# upphoto

## Description
upphoto is a small React application built to explore browser camera APIs, drag-and-drop image uploading, and integration with Firebase Storage and Firestore. The app allows users to capture photos directly from their device’s camera or upload existing images through a custom-built dropzone interface. It was created as a learning project to understand image handling, client-side uploads, and Firebase data workflows.

## Technologies Used
- React (Create React App)
- TypeScript
- Firebase (v9 modular SDK)
  - Firebase Storage
  - Firestore Database
- Browser Camera API
- Custom drag-and-drop uploader
- react-router-dom (routing)
- react-toastify (notifications)
- Headless UI + Heroicons (UI components)
- Tailwind CSS (styling)

## Important Note
To run this application, you **must** have a Firebase project with:
- Firebase Storage bucket  
- Firestore database  
- Web app credentials (Firebase config)  

The Firebase configuration must be added manually to the project before running it.

## Installation Instructions
1. Clone the repository:
   ```bash
   git clone https://github.com/ZingerEngineer/upphoto.git
   cd upphoto
    ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create your Firebase project in the Firebase Console and enable:

   * Firestore
   * Storage
   * (Optional) Authentication if required later

4. Add your Firebase configuration.
   - Ensure the Storage and Firestore imports are added where required.

5. Start the development server:

   ```bash
   npm start
   ```

   The app will run at:

   ```
   http://localhost:3000
   ```

## Usage

* Click **Take Photo** to access the browser camera API and capture images.
* Drag and drop any image into the dropzone to upload it.
* Uploaded images are stored in Firebase Storage.
* Metadata or references can be saved in Firestore depending on the implementation.
* Notifications will appear using react-toastify to indicate upload status or errors.

## Available Scripts

* `npm start` — Run development server
* `npm build` — Create production build
* `npm test` — Run test suite
* `npm eject` — Eject CRA configuration (irreversible)

## License

This project does not currently specify a license. Add a `LICENSE` file if you plan to make it open source or share it publicly.
