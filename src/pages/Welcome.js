import React, {useEffect} from "react";



const Welcome = () => {
  useEffect(() => {
    // Your clock script goes here
    const intervalId = setInterval(displayClock, 500);

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []); // The empty dependency array ensures the effect runs once after initial render

  const displayClock = () => {
    var time = new Date();
    var hrs = time.getHours();
    var min = time.getMinutes();
    var sec = time.getSeconds();
    var en = "AM";
    if (hrs > 12) {
      en = "PM";
    }
    if (hrs > 12) {
      hrs = hrs - 12;
    }
    if (hrs === 0) {
      hrs = 12;
    }
    if (hrs < 10) {
      hrs = "0" + hrs;
    }
    if (min < 10) {
      min = "0" + min;
    }
    if (sec < 10) {
      sec = "0" + sec;
    }
    document.getElementById("clock").innerHTML =
      hrs + ":" + min + ":" + sec + " " + en;
  };
  return (
    <div
      className="flex-center position-ref full-height"
      style={{ background: "#2a3142" }}
    >
      <div className="top-right links color-white">
        <a
          className="btn btn-secondary btn-md"
          style={{ color: "white" }}
          href="/login"
        >
          Go To Login Panel
        </a>
      </div>
      <div className="content">
        <div className="title m-b-md">
          <h1 className="text-center" style={{ color: "#5b626b" }}>
            Welcome to BUNI HUB Attendance System
          </h1>
          <div className="clockStyle" id="clock">
            123
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
