import './App.css';
import Header from './component/wrpper/Header';
import Footer from './component/wrpper/Footer';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './component/charts/Home';
import About from './component/charts/About';
import Address from './component/charts/BarChart';
import PieChart from './component/charts/PieChart';
import AreaChart from './component/charts/AreaChart';
import Linechart from './component/charts/Linechart';
import Donut from './component/charts/Donut';
import StackedBarChart from './component/charts/StackedBarChart';
import PositionProperty from './component/positionCSS/PositionProperty';
import Login from './component/wrpper/Login';
import ProgressBar from './component/positionCSS/ProgressBar';
import SpecialCss from './component/positionCSS/SpecialCss';
import SamosaToolTip from './component/samosa/SamosaToolTip';

function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
        <Routes>
          {/* <Route exact path="/" element={<Home />}/> */}
          {/* <Route exact path="/about" element={<About />}/> */}
          <Route exact path="/barChart" element={<Address />} />
          <Route exact path="/pieChart" element={<PieChart />} />
          <Route exact path="/areaChart" element={<AreaChart />} />
          <Route exact path="/lineChart" element={<Linechart />} />
          <Route exact path="/donut" element={<Donut />} />
          <Route exact path="/stackBarChart" element={<StackedBarChart />} />
          <Route exact path="/postionProperty" element={<PositionProperty />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/progressBar" element={<ProgressBar />} />
          <Route exact path="/specialCss" element={<SpecialCss />} />
          <Route exact path="/samosaTooltip" element={<SamosaToolTip />} />
           


      </Routes>
     
      </Router>    
      {/* <Footer/>   */}
    </div>
  );
}

export default App;
