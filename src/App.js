import React, { Component, Fragment } from "react";
import Header from "./components/Header.js";
import ListaNoticias from "./components/ListaNoticias.js";
import Formulario from "./components/Formulario.js";

class App extends Component {
  state = {
    noticias: []
  };

  // Para hacer el llamado a una API se lo hace dentro del componentDidMount que es cuando el doc esta listo
  componentDidMount() {
    this.consultarApi();
  }

  // Se crea una función para realizar la consulta a la API para no cargar el componentDidMount
  consultarApi = async (categoria = "general") => {
    const url = `
    https://newsapi.org/v2/top-headlines?country=mx&category=${categoria}&apiKey=56813720afda45abb35c34c4c5c4d736`;
    const respuesta = await fetch(url);
    const noticias = await respuesta.json();

    // Llenar el state con las noticias que llegan desde la API
    this.setState({
      noticias: noticias.articles
    });
  };

  render() {
    return (
      <Fragment>
        <Header titulo="Noticias React API" />
        <div className="container white contenedor-noticias">
          <Formulario consultarApi={this.consultarApi} />
          <ListaNoticias noticias={this.state.noticias} />
        </div>
      </Fragment>
    );
  }
}
export default App;
