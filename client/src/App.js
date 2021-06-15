import React from "react";
import Icon from "./components/Icon";
import useGeoLocation from "./hooks/useGeoLocation";

const App = () => {
  const location = useGeoLocation();
  const filterArray = ["adress", "comments", "activity_hours"];

  return (
    <div className="App">
      <h1>Search Service Stations Nearby</h1>
      {location.error ? (
        <div className="error-msg">
          Sorry, you cant search anything. Location data blocked:(
        </div>
      ) : (
        <div className="success-msg">
          We successfully fetched your location data. Lat:{" "}
          {location.coordinates.lat}. Lon: {location.coordinates.lng}. Go
          Search!
        </div>
      )}

      <form>
        <div className="form-group">
          <input type="checkbox" id="accepts_credit_card" />
          <label htmlFor="accepts_credit_card">Accept Credit Card</label>
        </div>
        
        <div className="form-group">
          <input type="checkbox" id="accepts_cash" />
          <label htmlFor="accepts_cash">Accept Cash</label>
        </div>

        <div className="form-group">
          <input type="checkbox" id="ravkav_services" />
          <label htmlFor="ravkav_services">Ravkav Services</label>
        </div>

        <div className="form-group">
          <input type="checkbox" id="sells_ravkav_reader" />
          <label htmlFor="sells_ravkav_reader">Sells Ravkav Reader</label>
        </div>

        <div className="form-group">
          <input type="checkbox" id="manned" />
          <label htmlFor="manned">Manned</label>
        </div>

        <div className="form-group">
          <input type="checkbox" id="reload_reservation" />
          <label htmlFor="reload_reservation">Reaload Resevation</label>
        </div>
      </form>

      <button>Search</button>
      adress, comments, activity_hours.
      <div style={{ width: "50px", height: "50px" }}>
        <Icon name="clock" />
        <Icon name="comment" />
        <Icon name="location" />
        <Icon name="waze" />
      </div>
    </div>
  );
};

export default App;
