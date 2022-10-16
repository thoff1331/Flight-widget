import '../index.css';
import { useState, useEffect } from 'react';

function TableBody() {
    const [flights,setFlights] = useState(null)

    const getFlights = () => {
        fetch('http://localhost:8000/flights').then(response => response.json()).then(flights => setFlights(Object.values(flights.data))).catch(err => console.log(err))
    }
    useEffect(() => getFlights(), [])
  return (
<tbody>
</tbody>
  );
}

export default TableBody;