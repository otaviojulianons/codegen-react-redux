
import { ActionsTypes } from '../../actions/Municipio/types';

const initialState = { 

    isExecutingMunicipioByCodigoDelete: false, 
    isFetchingMunicipioByCodigoGet: false,  
    municipioDto: null,
    isExecutingMunicipioByCodigoPut: false,
    isFetchingMunicipioGet: false,     
    listaMunicipioDto: [],
    isExecutingMunicipioPost: false,
};

const MunicipioReducer = (state = initialState, action) => {
  switch (action.type) {

    case ActionsTypes.MUNICIPIO_BY_CODIGO_DELETE_REQUEST:
      return {
        ...state,
        isExecutingMunicipioByCodigoDelete: true,
      };

    case ActionsTypes.MUNICIPIO_BY_CODIGO_DELETE_RESPONSE:
      return {
        ...state,
        isExecutingMunicipioByCodigoDelete: false,
      };

    case ActionsTypes.MUNICIPIO_BY_CODIGO_DELETE_FAILURE:
      return {
        ...state,
        isExecutingMunicipioByCodigoDelete: false,
      }; 

    case ActionsTypes.MUNICIPIO_BY_CODIGO_GET_REQUEST:
      return {
        ...state,
        isFetchingMunicipioByCodigoGet: true,
      };

    case ActionsTypes.MUNICIPIO_BY_CODIGO_GET_RESPONSE:
      return {
        ...state,
        municipioDto: action.response,
        isFetchingMunicipioByCodigoGet: false,
      };

    case ActionsTypes.MUNICIPIO_BY_CODIGO_GET_FAILURE:
      return {
        ...state,
        isFetchingMunicipioByCodigoGet: false,
      }; 

    case ActionsTypes.MUNICIPIO_BY_CODIGO_PUT_REQUEST:
      return {
        ...state,
        isExecutingMunicipioByCodigoPut: true,
      };

    case ActionsTypes.MUNICIPIO_BY_CODIGO_PUT_RESPONSE:
      return {
        ...state,
        isExecutingMunicipioByCodigoPut: false,
      };

    case ActionsTypes.MUNICIPIO_BY_CODIGO_PUT_FAILURE:
      return {
        ...state,
        isExecutingMunicipioByCodigoPut: false,
      }; 

    case ActionsTypes.MUNICIPIO_GET_REQUEST:
      return {
        ...state,
        isFetchingMunicipioGet: true,
      };

    case ActionsTypes.MUNICIPIO_GET_RESPONSE:
      return {
        ...state,
        listaMunicipioDto: action.response,    
        isFetchingMunicipioGet: false,
      };

    case ActionsTypes.MUNICIPIO_GET_FAILURE:
      return {
        ...state,
        isFetchingMunicipioGet: false,
      }; 

    case ActionsTypes.MUNICIPIO_POST_REQUEST:
      return {
        ...state,
        isExecutingMunicipioPost: true,
      };

    case ActionsTypes.MUNICIPIO_POST_RESPONSE:
      return {
        ...state,
        isExecutingMunicipioPost: false,
      };

    case ActionsTypes.MUNICIPIO_POST_FAILURE:
      return {
        ...state,
        isExecutingMunicipioPost: false,
      }; 
       
    default:
      return state;
  }
};

export default MunicipioReducer;
