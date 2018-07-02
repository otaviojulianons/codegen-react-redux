
import UsuarioDto from './../model/UsuarioDto';


import { 
  testeAtualizarEmailPut,
  testeAtualizarTokenGet,
  testeDeletarUsuarioDelete,
  testeDeletarUsuarioSemRetornoDelete,
  testeInserirUsuarioPost,
  testeListarDadosPorTokenPost,
  testeListarUsuariosDelete,
  testeMetodoGetParametrosPesquisaGet,
  testeMetodoTesteApresentacaoGet,
  testeObterDicionarioGet,
  testeObterListaNumerosPut
   
} from './../api/Teste';

const testeAtualizarEmailPutService = async (corpo) => {
  try {
    const response = await testeAtualizarEmailPut(corpo);
    return response.data.retorno; //PRIMITIVE
  } catch (error) {
    throw error;
  }
};

const testeAtualizarTokenGetService = async (id,token,corpo) => {
  try {
    const response = await testeAtualizarTokenGet(id, token, corpo);
    return response.data.retorno; //PRIMITIVE
  } catch (error) {
    throw error;
  }
};

const testeDeletarUsuarioDeleteService = async (corpo) => {
  try {
    const response = await testeDeletarUsuarioDelete(corpo);
    return response.data.retorno; //PRIMITIVE
  } catch (error) {
    throw error;
  }
};

const testeDeletarUsuarioSemRetornoDeleteService = async (corpo) => {
  try {
    const response = await testeDeletarUsuarioSemRetornoDelete(corpo);
  } catch (error) {
    throw error;
  }
};

const testeInserirUsuarioPostService = async (usuarioAutenticacao) => {
  try {
    const response = await testeInserirUsuarioPost(usuarioAutenticacao);
    return new UsuarioDto(response.data.retorno); //MODEL
  } catch (error) {
    throw error;
  }
};

const testeListarDadosPorTokenPostService = async (token) => {
  try {
    const response = await testeListarDadosPorTokenPost(token);
    return response.data.retorno; //ARRAY PRIMITIVE
  } catch (error) {
    throw error;
  }
};

const testeListarUsuariosDeleteService = async (corpo) => {
  try {
    const response = await testeListarUsuariosDelete(corpo);
    return response.data.retorno.map( item => new UsuarioDto(item)); //ARRAY MODEL
  } catch (error) {
    throw error;
  }
};

const testeMetodoGetParametrosPesquisaGetService = async (id) => {
  try {
    const response = await testeMetodoGetParametrosPesquisaGet(id);
    return response.data.retorno; //ARRAY PRIMITIVE
  } catch (error) {
    throw error;
  }
};

const testeMetodoTesteApresentacaoGetService = async (teste1,teste2) => {
  try {
    const response = await testeMetodoTesteApresentacaoGet(teste1, teste2);
    return new UsuarioDto(response.data.retorno); //MODEL
  } catch (error) {
    throw error;
  }
};

const testeObterDicionarioGetService = async (corpo) => {
  try {
    const response = await testeObterDicionarioGet(corpo);
    return response.data.retorno; //ARRAY PRIMITIVE
  } catch (error) {
    throw error;
  }
};

const testeObterListaNumerosPutService = async (corpo) => {
  try {
    const response = await testeObterListaNumerosPut(corpo);
    return response.data.retorno; //ARRAY PRIMITIVE
  } catch (error) {
    throw error;
  }
};


//teste
function test(){
  testeAtualizarEmailPutService( { corpo: "corpo" } )
    .then( response => console.log('testeAtualizarEmailPut',response))
    .catch( err => console.error('testeAtualizarEmailPut',err));

  testeAtualizarTokenGetService( "parametro" , "parametro" , { corpo: "corpo" } )
    .then( response => console.log('testeAtualizarTokenGet',response))
    .catch( err => console.error('testeAtualizarTokenGet',err));

  testeDeletarUsuarioDeleteService( { corpo: "corpo" } )
    .then( response => console.log('testeDeletarUsuarioDelete',response))
    .catch( err => console.error('testeDeletarUsuarioDelete',err));

  testeDeletarUsuarioSemRetornoDeleteService( { corpo: "corpo" } )
    .then( response => console.log('testeDeletarUsuarioSemRetornoDelete',response))
    .catch( err => console.error('testeDeletarUsuarioSemRetornoDelete',err));

  testeInserirUsuarioPostService( { corpo: "corpo" } )
    .then( response => console.log('testeInserirUsuarioPost',response))
    .catch( err => console.error('testeInserirUsuarioPost',err));

  testeListarDadosPorTokenPostService( "parametro" )
    .then( response => console.log('testeListarDadosPorTokenPost',response))
    .catch( err => console.error('testeListarDadosPorTokenPost',err));

  testeListarUsuariosDeleteService( { corpo: "corpo" } )
    .then( response => console.log('testeListarUsuariosDelete',response))
    .catch( err => console.error('testeListarUsuariosDelete',err));

  testeMetodoGetParametrosPesquisaGetService( "parametro" )
    .then( response => console.log('testeMetodoGetParametrosPesquisaGet',response))
    .catch( err => console.error('testeMetodoGetParametrosPesquisaGet',err));

  testeMetodoTesteApresentacaoGetService( "parametro" , "parametro" )
    .then( response => console.log('testeMetodoTesteApresentacaoGet',response))
    .catch( err => console.error('testeMetodoTesteApresentacaoGet',err));

  testeObterDicionarioGetService( { corpo: "corpo" } )
    .then( response => console.log('testeObterDicionarioGet',response))
    .catch( err => console.error('testeObterDicionarioGet',err));

  testeObterListaNumerosPutService( { corpo: "corpo" } )
    .then( response => console.log('testeObterListaNumerosPut',response))
    .catch( err => console.error('testeObterListaNumerosPut',err));

}

export {
  testeAtualizarEmailPutService,
  testeAtualizarTokenGetService,
  testeDeletarUsuarioDeleteService,
  testeDeletarUsuarioSemRetornoDeleteService,
  testeInserirUsuarioPostService,
  testeListarDadosPorTokenPostService,
  testeListarUsuariosDeleteService,
  testeMetodoGetParametrosPesquisaGetService,
  testeMetodoTesteApresentacaoGetService,
  testeObterDicionarioGetService,
  testeObterListaNumerosPutService,
  test
};
