# Beach Bar Order System

A simple order system for beach bars with customer ordering via mobile and bar management on iPad.

## Setup

1. Install dependencies: `npm install`
2. Start the server: `npm start`
3. Open `http://localhost:3000/customer.html` on customer devices
4. Open `http://localhost:3000/bar.html` on the bar iPad

## Customization

- Change drinks and prices in `public/customer.js`
- Change PIN for clearing orders in `server.js` (default: 1234)
- Modify styles in `public/styles.css`

## Deployment

Upload the entire project to a hosting service that supports Node.js, or run locally on a server.

For the QR code, generate a QR code linking to your hosted customer.html URL.