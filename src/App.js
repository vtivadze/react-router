import { NavLink, Outlet } from 'react-router-dom';

function App() {
  return (
    <div>
      <h1>Bookkeeper!</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1 rem",
        }}
      >
        <NavLink className={({isActive}) => isActive ? 'red' : 'inherit'} to="/invoices">Invoices</NavLink> |{" "}
        <NavLink className={({isActive}) => isActive ? 'red' : 'inherit'} to="/expenses">Expenses</NavLink>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
