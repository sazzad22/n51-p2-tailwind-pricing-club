import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Pricing from './components/Pricing/Pricing';
import MyLineCharts from './components/MyLineCharts/MyLineCharts';
import SpecialCharts from './components/SpecialCharts/SpecialCharts';

function App() {
  return (
    <div className='App'>
      <Navbar></Navbar>
      <Pricing></Pricing>

      {/* Adding charts */}
      <MyLineCharts></MyLineCharts>

      {/* Axios js
        Uses instead of fetch, for loading data

        Axios is a promise-based HTTP Client for node.js and the browser. It is isomorphic (= it can run in the browser and nodejs with the same codebase). On the server-side it uses the native node.js http module, while on the client (browser) it uses XMLHttpRequests.

        A promise is a special JavaScript object that links the “producing code”(loaded data) and the “consuming code” together.
      */}
      <SpecialCharts ></SpecialCharts>
      
    </div>
  );
}

export default App;
