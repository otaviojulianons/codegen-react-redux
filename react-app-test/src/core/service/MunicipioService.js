
import MunicipioDto from './../model/MunicipioDto';

import { 
  apiMunicipioByCodigoDelete,
  apiMunicipioByCodigoGet,
  apiMunicipioByCodigoPut,
  apiMunicipioGet,
  apiMunicipioPost
   
} from './../api/Municipio';

const apiMunicipioByCodigoDeleteService = async (codigo) => {
  try {
    if (codigo === null || codigo === undefined) {
        throw new Error('O parâmetro [codigo] é obrigatório.');
    }
    const response = await apiMunicipioByCodigoDelete(codigo);
    return response.data.retorno; //PRIMITIVE
  } catch (error) {
    throw error;
  }
};

const apiMunicipioByCodigoGetService = async (codigo) => {
  try {
    if (codigo === null || codigo === undefined) {
        throw new Error('O parâmetro [codigo] é obrigatório.');
    }
    const response = await apiMunicipioByCodigoGet(codigo);
    return new MunicipioDto(response.data.retorno); //MODEL
  } catch (error) {
    throw error;
  }
};

const apiMunicipioByCodigoPutService = async (codigo,dados) => {
  try {
    if (codigo === null || codigo === undefined) {
        throw new Error('O parâmetro [codigo] é obrigatório.');
    }
    const response = await apiMunicipioByCodigoPut(codigo, dados);
    return response.data.retorno; //PRIMITIVE
  } catch (error) {
    throw error;
  }
};

const apiMunicipioGetService = async () => {
  try {
    const response = await apiMunicipioGet();
    return response.data.retorno.map( item => new MunicipioDto(item)); //ARRAY MODEL
  } catch (error) {
    throw error;
  }
};

const apiMunicipioPostService = async (dados) => {
  try {
    const response = await apiMunicipioPost(dados);
    return response.data.retorno; //PRIMITIVE
  } catch (error) {
    throw error;
  }
};


//teste
function test(){
  apiMunicipioByCodigoDeleteService( "parametro" )
    .then( response => console.log('apiMunicipioByCodigoDelete',response))
    .catch( err => console.error('apiMunicipioByCodigoDelete',err));

  apiMunicipioByCodigoGetService( "parametro" )
    .then( response => console.log('apiMunicipioByCodigoGet',response))
    .catch( err => console.error('apiMunicipioByCodigoGet',err));

  apiMunicipioByCodigoPutService( "parametro" , { corpo: "corpo" } )
    .then( response => console.log('apiMunicipioByCodigoPut',response))
    .catch( err => console.error('apiMunicipioByCodigoPut',err));

  apiMunicipioGetService()
    .then( response => console.log('apiMunicipioGet',response))
    .catch( err => console.error('apiMunicipioGet',err));

  apiMunicipioPostService( { corpo: "corpo" } )
    .then( response => console.log('apiMunicipioPost',response))
    .catch( err => console.error('apiMunicipioPost',err));

}

export {
  apiMunicipioByCodigoDeleteService,
  apiMunicipioByCodigoGetService,
  apiMunicipioByCodigoPutService,
  apiMunicipioGetService,
  apiMunicipioPostService,
  test
};
