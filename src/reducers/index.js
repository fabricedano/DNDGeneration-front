/*// On importe la fonction combineReducers de Redux qui nous permet de combiner plusieurs reducers (utile plus tard)
import { combineReducers } from 'redux';

// L'état de départ peut être un combiner de plusieurs reducers pour différencier plusieurs logique dans notre code
// Pour l'instant nous n'utiliserons qu'un seul reducer (App)
const rootReducer = combineReducers({
  appReducer,
});

// On exporte notre rootReducer pour pouvoir l'importer quand nous allons initialiser notre app
export default rootReducer;

//Un reducer très simple, plusieurs actions vont arriver dans notre reducer pour modifier l'état de notre store
//Le reducer s'occupe de dire, Ok j'ai reçu tel type d'action alors je modifie mon store de telle manière.
//D'où l'utilisation d'un switch
// Vous voyez, je ne vous ai mis qu'un seul cas, le cas où l'action entrente est du type 'INITIALIZE'
// Par défaut on renvoie l'état entrant du store pour ne pas le modifier
function appReducer(state = {}, action) {
  switch (action.type) {
    case 'INITIALIZE':
      return {
        appName: action.label,
        initialize: true,
      };
    case 'ADD_NAME':
        return {
            name: action.name
        };
    default:
      return state
  }
}*/