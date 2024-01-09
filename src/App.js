import './App.css';
import Header from './components/header'
import Balance from './components/Balance'
import IncomeExpenses from './components/incomeExpenses';
import Transactionlist from './components/Transactionlist';
import AddTransaction from './components/AddTransaction';
import { GlobalProvider } from './components/context/GlobalState';
function App() {
  return (
    <GlobalProvider>
    <Header/>
    <div className='Container'>
      <Balance/>
      <IncomeExpenses/>
      <Transactionlist/>
      <AddTransaction/>
    </div>
    </GlobalProvider>
  );
}

export default App;
