import {useState, useEffect} from "react";
import Icon from "./components/Icon";
import useGeoLocation from "./hooks/useGeoLocation";
import axios from 'axios';

let basicServerAPI="https://ravkavonline.co.il/api/pos/service-station/search/";
let serverUrl=new URL(basicServerAPI);

const fetchStations=(url)=>{
  return axios.get(url)
  .then(({data})=>{
    console.log(data);
    return JSON.stringify(data);
  })
  .catch(err=>{
    console.error(err);
  })
};

const App = () => {
  const location = useGeoLocation();
  //const filters = ["adress", "comments", "activity_hours"];
  const [stations, setStations] = useState();
  const [filters, setFilters] = useState({
    acceptsCreditCard: {
      name: "accepts_credit_card",
      value: "false"
    },
    acceptsCash: {
      name: "accepts_cash",
      value: "false"
    },
  })
  const [acceptsCreditCard, setAcceptsCreditCard]=useState(false);
  const [acceptsCash, setAcceptsCash]=useState(false);
  const [ravkavServices, setRavkavServices]=useState(false);
  const [sellsRavkavReader, setSellsRavkavReader]=useState(false);
  const [manned, setManned]=useState(false);
  const [reloadReservation, setReloadReservation] = useState(false)
  // const handleCheckbox=(value)=>{
  //   console.log("hfdjkfsldjh");
  //   console.log(value);
  // }
  const handleSearch =()=>{ 
    if(!location.error)
      serverUrl.searchParams.set("lat", location.coordinates.lat)
      serverUrl.searchParams.set("lon", location.coordinates.lng)
     
      // if(acceptsCreditCard)
      //   serverUrl.searchParams.set("attributes", "accepts_credit_card")
      // if(acceptsCash)
      //   serverUrl.searchParams.set("attributes", "accepts_cash")
      // if(ravkavServices)
      //   serverUrl.searchParams.set("attributes", "ravkav_services")
      // if(sellsRavkavReader)
      //   serverUrl.searchParams.set("attributes", "sells_ravkav_reader")
      // if(reloadReservation)
      //   serverUrl.searchParams.set("attributes", "reload_reservation")
      // if(filters){
      //   filters.map((filter))
      // }
      console.log("herreeee "+serverUrl);
      fetchStations(serverUrl).then(data =>(
        data.error?alert("There is no data:("): setStations(data?.data?.results)))
  } 

  return (
    <div className="App">
      <h1>Search Service Stations Nearby</h1>
      {location.error ? (
        <div className="error-msg">
          Sorry, you cant search anything. Location data blocked:(
        </div>
      ) : (
        <div className="success-msg">
          We successfully fetched your location data. 
          Lat: {location.coordinates.lat}. Lon: {location.coordinates.lng}.
        </div>
      )}

      <form>
        <div className="form-group">
          <input type="checkbox"
                id="accepts_credit_card"
                value="accepts_credit_card"
                 onChange={()=>setAcceptsCreditCard(!acceptsCreditCard)}
                 />
          <label htmlFor="accepts_credit_card">
          Accept Credit Card
          </label>
        </div>       
        <div className="form-group">
          <input type="checkbox"
                 id="accepts_cash"
                 onChange={ ()=>setAcceptsCash(!acceptsCash)}/>
          <label htmlFor="accepts_cash">Accept Cash</label>
        </div>

        <div className="form-group">
          <input type="checkbox" id="ravkav_services"
          onChange={()=>setRavkavServices(!ravkavServices)} />
          <label htmlFor="ravkav_services">Ravkav Services</label>
        </div>

        <div className="form-group">
          <input type="checkbox" id="sells_ravkav_reader"
          onChange={()=>setSellsRavkavReader(!sellsRavkavReader)} />
          <label htmlFor="sells_ravkav_reader">Sells Ravkav Reader</label>
        </div>

        <div className="form-group">
          <input type="checkbox" id="manned"
          onChange={()=>setManned(!manned)} />
          <label htmlFor="manned">Manned</label>
        </div>

        <div className="form-group">
          <input type="checkbox" id="reload_reservation"
          onChange={()=>setReloadReservation(!reloadReservation)} />
          <label htmlFor="reload_reservation">Reaload Resevation</label>
        </div>
      </form>
      <button onClick={handleSearch}>Search</button>
      <div style={{ width: "50px", height: "50px" }}>
        <Icon name="clock" />
        <Icon name="comment" />
        <Icon name="location" />
        adress, comments, activity_hours.

        <Icon name="waze" />
      </div>

      {stations}

    </div>
  );
};

export default App;