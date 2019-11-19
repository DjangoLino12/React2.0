import React from "react";
import { Route, Switch } from "react-router-dom";

import Centro from "../view/home/Centro";
import Sobre from "../view/sobre/Sobre";
import Cadastro from "../view/cadastro/Cadastro";
import Fotos from "../view/fotos/Fotos";
import Contato from "../view/cadastro/Cadastro";

export default function Routers() {
  return (
    <Switch>
      <Route exact path="/" component={Centro} />
      <Route exact path="/Sobre" component={Sobre} />
      <Route exact path="/Sobre" component={Fotos} />
      <Route exact path="/Sobre" component={Contato} />
      <Route exact path="/Sobre" component={Cadastro} />
    </Switch>
  );
}
