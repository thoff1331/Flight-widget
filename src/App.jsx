import './index.css';
import Table from './components/Table';
import TableBody from './components/TableBody';

function App() {
  return (
    <div className="departures">
      <header>DEPARTURES</header>
      <Table />
      <TableBody></TableBody>
    </div>
  );
}

export default App;
