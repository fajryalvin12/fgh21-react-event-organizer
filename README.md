<h2>Project Description</h2>

Let me introduce my awesome online-based ticket booking, TickHub. This repository utilized Node.js for package and React.js as library for development.

Tickhub is an easy way to order an event from a distance place. Without order on the spot, we can choose the event as we want with the simple process and various payment. Also, we can save the listed event as the wishlist.

<h2>Tech Stack</h2>

- Markup Language: HTML, CSS
- Frontend's Programming Language: Javascript
- Library/Framework : React
- Web Styling : TailwindCSS
- Package Manager : Node.js
- Containerization : Docker

<h2>Config / installation process</h2>

<h3>1. Install React :</h3>
  npm create vite@latest react-namefile -- -- template react

<h3>2. Install Tailwind :</h3>
  npm install -D tailwindcss postcss autoprefixer
  npx tailwindcss init -p

<h3>3. Config TailwindCSS :</h3>
  /** @type {import('tailwindcss').Config} \*/
  export default {
  content: [
  "./index.html",
  "./src/**/\*.{js,ts,jsx,tsx}",
  ],
  theme: {
  extend: {},
  },
  plugins: [],
  }

<h3>4. Add the Tailwind directives to your CSS</h3>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
<h3>5. Run the program</h3>
  npm run dev

<h3>6. Build an image in Docker using dockerfile</h3>
  docker build -t <images name> <dest>

<h3>7. Run the images in the Docker's Container</h3>
  docker run -d -p 21212:5000 --name <name container> <images name>

<h2>Project display screenshot from Tickhub:</h2>

  <img src="/src/assets/portfolio/Tickhub_AuthLogin.png" alt="login" width="300">
  <img src="/src/assets/portfolio/Tickhub_BookingPage.png" alt="Booking" width="300">
  <img src="/src/assets/portfolio/Tickhub_ChangePass.png" alt="Password" width="300">
  <img src="/src/assets/portfolio/Tickhub_DetailEvent.png" alt="Event" width="300">
  <img src="/src/assets/portfolio/Tickhub_MyBooking.png" alt="MyBooking" width="300">
  <img src="/src/assets/portfolio/Tickhub_Payment.png" alt="Payment" width="300">
  <img src="/src/assets/portfolio/Tickhub_Profile.png" alt="Profile" width="300">
