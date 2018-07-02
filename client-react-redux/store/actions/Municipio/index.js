
import { ActionsTypes } from './types';
import { 
  apiMunicipioByCodigoDeleteService,
  apiMunicipioByCodigoGetService,
  apiMunicipioByCodigoPutService,
  apiMunicipioGetService,
  apiMunicipioPostService
} from '../../../core/service/MunicipioService';

const apiMunicipioByCodigoDelete = (codigo) => ({
  types: ActionsTypes.municipioByCodigoDeleteActionsTypes,
  callService: () => apiMunicipioByCodigoDeleteService(codigo),
  payload: { codigo }
});


const apiMunicipioByCodigoGet = (codigo) => ({
  types: ActionsTypes.municipioByCodigoGetActionsTypes,
  callService: () => apiMunicipioByCodigoGetService(codigo),
  payload: { codigo }
});


const apiMunicipioByCodigoPut = (codigo,dados) => ({
  types: ActionsTypes.municipioByCodigoPutActionsTypes,
  callService: () => apiMunicipioByCodigoPutService(codigo,dados),
  payload: { codigo,dados }
});


const apiMunicipioGet = () => ({
  types: ActionsTypes.municipioGetActionsTypes,
  callService: () => apiMunicipioGetService(),
  payload: {  }
});


const apiMunicipioPost = (dados) => ({
  types: ActionsTypes.municipioPostActionsTypes,
  callService: () => apiMunicipioPostService(dados),
  payload: { dados }
});


export {
  apiMunicipioByCodigoDelete,
  apiMunicipioByCodigoGet,
  apiMunicipioByCodigoPut,
  apiMunicipioGet,
  apiMunicipioPost
};
