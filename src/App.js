import './App.css';
import Header from './components/header'
import Balance from './components/Balance'
import IncomeExpenses from './components/incomeExpenses';
import Transactionlist from './components/Transactionlist';
import AddTransaction from './components/AddTransaction';
import { GlobalProvider } from './components/context/GlobalState';
import Person1 from './components/person1';
import Person2 from './components/person2';

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
    <div>
    <Person1 />
    <Person2 />
    </div>
    </GlobalProvider>
  );
}

export default App;
