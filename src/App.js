import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Header from './components/header/Header';
import Home from './pages/Home/Home'
import AddExpense from './pages/add-expense/AddExpense';
import './App.css';
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
        <Header />
        <Routes>
          <Route path="/"  element={<Home />}/>
          <Route path="/add-expense"  element={<AddExpense />}/>
        </Routes>
        <Footer />
    </Router>
  )
}

export default App;
