import logo from './logo.svg';
import { lazy, Suspense } from 'react';
import './App.css';
import Hero from './components/Hero';
import Header from './components/Header';
const About = lazy(() => import('../src/components/sections/About'));
const Services = lazy(() => import('../src/components/sections/Services'));
const HireUs = lazy(() => import('../src/components/sections/HireUs'));

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Header /> */}
        <Suspense fallback={"Loading"}>
          <Hero />
          <About />
          <Services />
          <HireUs />
          
        </Suspense>
    </header>
    </div>
  );
}

export default App;
