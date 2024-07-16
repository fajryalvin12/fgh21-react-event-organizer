import React from "react";
import EventOne from "../assets/images/event-1.png";

function BoxWrapper() {
  return (
    <div>
      <div>
        <img src={EventOne} alt="event1" />
        <div>
          <div>Wed, 15 Nov, 4:00 PM</div>
          <div>Sights & Sounds Exhibition</div>
        </div>
      </div>
    </div>
  );
}

export default BoxWrapper;
