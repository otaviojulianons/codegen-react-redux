import { combineReducers } from 'redux';
import { reducer as toastrReducer } from 'react-redux-toastr';
import MunicipioReducer from './Municipio';

const rootReducer = combineReducers({
  toastr: toastrReducer,
  municipio: MunicipioReducer
});

export default rootReducer;