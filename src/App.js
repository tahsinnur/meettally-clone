import { Route, Routes } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import DebtCalculator from './pages/DebtCalculator/DebtCalculator/DebtCalculator';
import Home from './pages/Home/Home/Home';
import HowTallyWorks from './pages/HowTallyWorks/HowTallyWorks/HowTallyWorks';
import AccountCreation from './pages/Login/AccountCreation/AccountCreation';
import Header from './pages/Shared/Header/Header';
import TallyReviews from './pages/TallyReviews/TallyReviews/TallyReviews';
import TourTallyApp from './pages/TourTallyApp/TourTallyApp/TourTallyApp';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/how-tally-works" element={<HowTallyWorks/>}></Route>
          <Route path="/tour-tally-app" element={<TourTallyApp/>}></Route>
          <Route path="/credit-card-debt-payoff-calculator" element={<DebtCalculator/>}></Route>
          <Route path="/tally-reviews" element={<TallyReviews/>}></Route>
          <Route path="/account-creation" element={<AccountCreation/>}></Route>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
