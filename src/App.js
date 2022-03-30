import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Pricing from './components/Pricing/Pricing';
import MyLineCharts from './components/MyLineCharts/MyLineCharts';
import SpecialCharts from './components/SpecialCharts/SpecialCharts';
import { useSpring, animated, config } from 'react-spring'
import { useState } from 'react';

function App() {

  //Using spring for animation in react
  //react-spring is a spring-physics based animation library that should cover most of your UI related animation needs. It gives you tools flexible enough to confidently cast your ideas into moving interfaces.

  const [flip, set] = useState(false)
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    reset: true,
    reverse: flip,
    delay: 30,
    config: config.molasses,
    onRest: () => set(!flip),
  })


  return (
    <div className='App'>
      <Navbar></Navbar>

      {/* Animated Text */}
      <animated.div style={props}>
        <h1 className='text-6xl text-indigo-300 '>Welcome Fellow Traveler!</h1>
     </animated.div>

      {/* Animation tags can be coated over pricing component */}
     
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
