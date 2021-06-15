import axios from 'axios';

export const fetchStations=(parameters)=>axios.get(`https://ravkavonline.co.il/api/pos/service-station/search/
?${parameters}`);