import './App.css';

import { Link, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/form">Form</Link>
        <Link to="/form/view">Form View</Link>
      </nav>

      <main>
        <Routes>
          <Route
           path='/'
           element={<h1>Home Page</h1>}
           />
          <Route
           path='/form'
           element={<h1>Home Pag33e</h1>}
           />
           <Route
           path='/form/view'
          //  element={<FormView data={data}/>}
           />

        </Routes>
      </main>
    </div>
  );
}

export default App;
