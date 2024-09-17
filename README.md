Project Description

- This individual project provided online booking ticket in a frontend-side, named as Tickhub

Tech Stack :

- Markup Language : HTML, CSS
- Language Programming : Javascript
- Library/Framework : React
- Web Styling : TailwindCSS
- Package Manager : Node.js
- Containerization : Docker

Config / installation process :

- Install React :
  npm create vite@latest react-namefile -- -- template react

- Install Tailwind :
  npm install -D tailwindcss postcss autoprefixer
  npx tailwindcss init -p

- Config TailwindCSS :
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

- Add the Tailwind directives to your CSS
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
- Run the program
  npm run dev

- Build an image in Docker using dockerfile
  docker build -t <images name> <dest>

- Run the images in the Docker's Container
  docker run -d -p 21212:5000 --name <name container> <images name>

- Project display screenshot from Tickhub.
  <img src="/src/assets/portfolio/Tickhub_AuthLogin.png" alt="login" width="300">
  <img src="/src/assets/portfolio/Tickhub_BookingPage.png" alt="Booking" width="300">
  <img src="/src/assets/portfolio/Tickhub_ChangePass.png" alt="Password" width="300">
  <img src="/src/assets/portfolio/Tickhub_DetailEvent.png" alt="Event" width="300">
  <img src="/src/assets/portfolio/Tickhub_MyBooking.png" alt="MyBooking" width="300">
  <img src="/src/assets/portfolio/Tickhub_Payment.png" alt="Payment" width="300">
  <img src="/src/assets/portfolio/Tickhub_Profile.png" alt="Profile" width="300">
