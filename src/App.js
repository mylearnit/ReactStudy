import { EmployeeList } from './components/EmployeeList';

import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <div className="App">
        <EmployeeList />
      </div>
    </GlobalProvider>
  );
}

export default App;