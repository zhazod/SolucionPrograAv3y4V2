import React from "react";
import Login from "./componentes/seguridad/Login";
import BarraMenu from "./componentes/navegacion/BarraMenu";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Personas from "./componentes/Vistas/Personas";
import PersonasListar from "./componentes/Vistas/PersonasListar";
import PersonasAgregar from "./componentes/Vistas/PersonasAgregar";
import PersonasEditar from "./componentes/Vistas/PersonasEditar";



function App() {
  return (
    <div className="App">
      <Router>
        <BarraMenu/>
        <Switch>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/" component={Personas}/>
            <Route exact path="/listarpersonas" component={PersonasListar}/>
            <Route exact path="/agregarpersonas" component={PersonasAgregar}/>
            <Route exact path="/editarpersonas/:id" component={PersonasEditar}/>

        </Switch>
        </Router>
    </div>
  );
}

export default App;
