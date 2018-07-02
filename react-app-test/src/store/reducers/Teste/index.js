
import { ActionsTypes } from '../../actions/Teste/types';

const initialState = { 

    isExecutingAtualizarEmailPut: false, 
    isFetchingAtualizarTokenGet: false,
    isExecutingDeletarUsuarioDelete: false,
    isExecutingDeletarUsuarioSemRetornoDelete: false,
    isExecutingInserirUsuarioPost: false,
    isExecutingListarDadosPorTokenPost: false,
    isExecutingListarUsuariosDelete: false,
    isFetchingMetodoGetParametrosPesquisaGet: false, 
    isFetchingMetodoTesteApresentacaoGet: false,  
    usuarioDto: null,
    isFetchingObterDicionarioGet: false,
    isExecutingObterListaNumerosPut: false,
};

const TesteReducer = (state = initialState, action) => {
  switch (action.type) {

    case ActionsTypes.ATUALIZAR_EMAIL_PUT_REQUEST:
      return {
        ...state,
        isExecutingAtualizarEmailPut: true,
      };

    case ActionsTypes.ATUALIZAR_EMAIL_PUT_RESPONSE:
      return {
        ...state,
        isExecutingAtualizarEmailPut: false,
      };

    case ActionsTypes.ATUALIZAR_EMAIL_PUT_FAILURE:
      return {
        ...state,
        isExecutingAtualizarEmailPut: false,
      }; 

    case ActionsTypes.ATUALIZAR_TOKEN_GET_REQUEST:
      return {
        ...state,
        isFetchingAtualizarTokenGet: true,
      };

    case ActionsTypes.ATUALIZAR_TOKEN_GET_RESPONSE:
      return {
        ...state,
        isFetchingAtualizarTokenGet: false,
      };

    case ActionsTypes.ATUALIZAR_TOKEN_GET_FAILURE:
      return {
        ...state,
        isFetchingAtualizarTokenGet: false,
      }; 

    case ActionsTypes.DELETAR_USUARIO_DELETE_REQUEST:
      return {
        ...state,
        isExecutingDeletarUsuarioDelete: true,
      };

    case ActionsTypes.DELETAR_USUARIO_DELETE_RESPONSE:
      return {
        ...state,
        isExecutingDeletarUsuarioDelete: false,
      };

    case ActionsTypes.DELETAR_USUARIO_DELETE_FAILURE:
      return {
        ...state,
        isExecutingDeletarUsuarioDelete: false,
      }; 

    case ActionsTypes.DELETAR_USUARIO_SEM_RETORNO_DELETE_REQUEST:
      return {
        ...state,
        isExecutingDeletarUsuarioSemRetornoDelete: true,
      };

    case ActionsTypes.DELETAR_USUARIO_SEM_RETORNO_DELETE_RESPONSE:
      return {
        ...state,
        isExecutingDeletarUsuarioSemRetornoDelete: false,
      };

    case ActionsTypes.DELETAR_USUARIO_SEM_RETORNO_DELETE_FAILURE:
      return {
        ...state,
        isExecutingDeletarUsuarioSemRetornoDelete: false,
      }; 

    case ActionsTypes.INSERIR_USUARIO_POST_REQUEST:
      return {
        ...state,
        isExecutingInserirUsuarioPost: true,
      };

    case ActionsTypes.INSERIR_USUARIO_POST_RESPONSE:
      return {
        ...state,
        isExecutingInserirUsuarioPost: false,
      };

    case ActionsTypes.INSERIR_USUARIO_POST_FAILURE:
      return {
        ...state,
        isExecutingInserirUsuarioPost: false,
      }; 

    case ActionsTypes.LISTAR_DADOS_POR_TOKEN_POST_REQUEST:
      return {
        ...state,
        isExecutingListarDadosPorTokenPost: true,
      };

    case ActionsTypes.LISTAR_DADOS_POR_TOKEN_POST_RESPONSE:
      return {
        ...state,
        isExecutingListarDadosPorTokenPost: false,
      };

    case ActionsTypes.LISTAR_DADOS_POR_TOKEN_POST_FAILURE:
      return {
        ...state,
        isExecutingListarDadosPorTokenPost: false,
      }; 

    case ActionsTypes.LISTAR_USUARIOS_DELETE_REQUEST:
      return {
        ...state,
        isExecutingListarUsuariosDelete: true,
      };

    case ActionsTypes.LISTAR_USUARIOS_DELETE_RESPONSE:
      return {
        ...state,
        isExecutingListarUsuariosDelete: false,
      };

    case ActionsTypes.LISTAR_USUARIOS_DELETE_FAILURE:
      return {
        ...state,
        isExecutingListarUsuariosDelete: false,
      }; 

    case ActionsTypes.METODO_GET_PARAMETROS_PESQUISA_GET_REQUEST:
      return {
        ...state,
        isFetchingMetodoGetParametrosPesquisaGet: true,
      };

    case ActionsTypes.METODO_GET_PARAMETROS_PESQUISA_GET_RESPONSE:
      return {
        ...state,
        isFetchingMetodoGetParametrosPesquisaGet: false,
      };

    case ActionsTypes.METODO_GET_PARAMETROS_PESQUISA_GET_FAILURE:
      return {
        ...state,
        isFetchingMetodoGetParametrosPesquisaGet: false,
      }; 

    case ActionsTypes.METODO_TESTE_APRESENTACAO_GET_REQUEST:
      return {
        ...state,
        isFetchingMetodoTesteApresentacaoGet: true,
      };

    case ActionsTypes.METODO_TESTE_APRESENTACAO_GET_RESPONSE:
      return {
        ...state,
        usuarioDto: action.response,
        isFetchingMetodoTesteApresentacaoGet: false,
      };

    case ActionsTypes.METODO_TESTE_APRESENTACAO_GET_FAILURE:
      return {
        ...state,
        isFetchingMetodoTesteApresentacaoGet: false,
      }; 

    case ActionsTypes.OBTER_DICIONARIO_GET_REQUEST:
      return {
        ...state,
        isFetchingObterDicionarioGet: true,
      };

    case ActionsTypes.OBTER_DICIONARIO_GET_RESPONSE:
      return {
        ...state,
        isFetchingObterDicionarioGet: false,
      };

    case ActionsTypes.OBTER_DICIONARIO_GET_FAILURE:
      return {
        ...state,
        isFetchingObterDicionarioGet: false,
      }; 

    case ActionsTypes.OBTER_LISTA_NUMEROS_PUT_REQUEST:
      return {
        ...state,
        isExecutingObterListaNumerosPut: true,
      };

    case ActionsTypes.OBTER_LISTA_NUMEROS_PUT_RESPONSE:
      return {
        ...state,
        isExecutingObterListaNumerosPut: false,
      };

    case ActionsTypes.OBTER_LISTA_NUMEROS_PUT_FAILURE:
      return {
        ...state,
        isExecutingObterListaNumerosPut: false,
      }; 
       
    default:
      return state;
  }
};

export default TesteReducer;
