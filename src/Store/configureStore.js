/*//configureStore.js
// On importe la fonction qui nous permet de créer un store redux
import { createStore, applyMiddleware } from "redux";
// On importe la librairie qui nous permettra de faire des choses asynchrones
import thunkMiddleware from "redux-thunk";
// On importe la librairie qui nous permettra d'afficher les logs de notre store
// Ces logs se trouveront dans la console de votre navigateur (pratique)
import { createLogger } from "redux-logger";
// On importe le rootReducer qui sera l'état de départ de notre store (notre application)
import rootReducer from "../reducers";
// On importe la librairie qui nous permettra d'avoir l'extension super utile pour Redux qui nous permettra de débugger notre app
import { composeWithDevTools } from "redux-devtools-extension";

// On créé des logs que l'on stockera dans la variable `loggerMiddleware`
const loggerMiddleware = createLogger();

// On exporte la fonction qui nous créé notre store pour pouvoir l'importer lors de l'initialisation de l'application
// Le store est composé de l'état de départ (notre rootReducer) ansi que tous les outils que nous voulons (thunkMiddleware & loggerMiddleware)
//import { authReducer } from '../reducers/auth';

const configureStore = () => {
  return {
    createStore(
      
    )
  }
};

export default configureStore;*/