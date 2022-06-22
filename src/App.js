import "./app.css";
import AppInfo from "./components/app-info/app-info";
import SearchPanel from "./components/search-panel/search-panel";
import AppFilter from "./components/app-filter/app-filter";
import EmployersList from "./components/employers-list/emloyers-list";
import EmployeesAddForm from "./components/employers-add-form/employers-add-form";

function App() {
  const data = [
    {name: 'Steven F.', salary: 800, increase: false, id: 1},
    {name: 'Michael S.', salary: 1200, increase: true, id: 2},
    {name: 'John S.', salary: 2000, increase: false, id: 3}
  ]

  return (
    <div className="app">
      <AppInfo />
      <div className="search-panel">
        <SearchPanel />
        <AppFilter />
      </div>
      <EmployersList data={data} onDelete={id => console.log(id)}/>
      <EmployeesAddForm />
    </div>
  );
}

export default App;
