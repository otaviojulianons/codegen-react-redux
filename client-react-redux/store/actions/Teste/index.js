
import { ActionsTypes } from './types';
import { 
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
  testeObterListaNumerosPutService
} from '../../../core/service/TesteService';

const testeAtualizarEmailPut = (corpo) => ({
  types: ActionsTypes.atualizarEmailPutActionsTypes,
  callService: () => testeAtualizarEmailPutService(corpo),
  payload: { corpo }
});


const testeAtualizarTokenGet = (id,token,corpo) => ({
  types: ActionsTypes.atualizarTokenGetActionsTypes,
  callService: () => testeAtualizarTokenGetService(id,token,corpo),
  payload: { id,token,corpo }
});


const testeDeletarUsuarioDelete = (corpo) => ({
  types: ActionsTypes.deletarUsuarioDeleteActionsTypes,
  callService: () => testeDeletarUsuarioDeleteService(corpo),
  payload: { corpo }
});


const testeDeletarUsuarioSemRetornoDelete = (corpo) => ({
  types: ActionsTypes.deletarUsuarioSemRetornoDeleteActionsTypes,
  callService: () => testeDeletarUsuarioSemRetornoDeleteService(corpo),
  payload: { corpo }
});


const testeInserirUsuarioPost = (usuarioAutenticacao) => ({
  types: ActionsTypes.inserirUsuarioPostActionsTypes,
  callService: () => testeInserirUsuarioPostService(usuarioAutenticacao),
  payload: { usuarioAutenticacao }
});


const testeListarDadosPorTokenPost = (token) => ({
  types: ActionsTypes.listarDadosPorTokenPostActionsTypes,
  callService: () => testeListarDadosPorTokenPostService(token),
  payload: { token }
});


const testeListarUsuariosDelete = (corpo) => ({
  types: ActionsTypes.listarUsuariosDeleteActionsTypes,
  callService: () => testeListarUsuariosDeleteService(corpo),
  payload: { corpo }
});


const testeMetodoGetParametrosPesquisaGet = (id) => ({
  types: ActionsTypes.metodoGetParametrosPesquisaGetActionsTypes,
  callService: () => testeMetodoGetParametrosPesquisaGetService(id),
  payload: { id }
});


const testeMetodoTesteApresentacaoGet = (teste1,teste2) => ({
  types: ActionsTypes.metodoTesteApresentacaoGetActionsTypes,
  callService: () => testeMetodoTesteApresentacaoGetService(teste1,teste2),
  payload: { teste1,teste2 }
});


const testeObterDicionarioGet = (corpo) => ({
  types: ActionsTypes.obterDicionarioGetActionsTypes,
  callService: () => testeObterDicionarioGetService(corpo),
  payload: { corpo }
});


const testeObterListaNumerosPut = (corpo) => ({
  types: ActionsTypes.obterListaNumerosPutActionsTypes,
  callService: () => testeObterListaNumerosPutService(corpo),
  payload: { corpo }
});


export {
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
};
