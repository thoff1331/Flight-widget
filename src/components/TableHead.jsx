import '../index.css';

function TableHead() {
  return (
  <thead>
      <tr>
        <th></th>
        <th id='time'>Time</th>
        <th id='destination'>Destination</th>  
        <th id='flight'>Flight</th>
        <th id='gate'>Gate</th>
        <th id='status'>Status</th>
      </tr>
  </thead>
  );
}

export default TableHead;