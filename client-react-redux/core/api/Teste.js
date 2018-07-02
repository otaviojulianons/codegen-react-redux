import axios from 'axios';
const API_URL = process.env.REACT_APP_API_URL;

const testeAtualizarEmailPut = (corpo) => {

  //####### PUT #######
  const options = { 
    headers:{ 
      "Content-Type":"application/json"
    } 
  };  
  return axios.put(`${ API_URL }/Teste/AtualizarEmail`,{ corpo: corpo },options);
}

const testeAtualizarTokenGet = (id, token, corpo) => {

  //####### GET #######
  const options = { 
    data: corpo ,
    headers:{ 
      "token": token,
      "Content-Type":"application/json"
    },
    params: { 
      id
    }
  };  
  return axios.get(`${ API_URL }/Teste/AtualizarToken`,options);
}

const testeDeletarUsuarioDelete = (corpo) => {

  //####### DELETE #######
  const options = { 
    data: corpo ,
    headers:{ 
      "Content-Type":"application/json"
    } 
  };  
  return axios.delete(`${ API_URL }/Teste/DeletarUsuario`,options);
}

const testeDeletarUsuarioSemRetornoDelete = (corpo) => {

  //####### DELETE #######
  const options = { 
    data: corpo ,
    headers:{ 
      "Content-Type":"application/json"
    } 
  };  
  return axios.delete(`${ API_URL }/Teste/DeletarUsuarioSemRetorno`,options);
}

const testeInserirUsuarioPost = (usuarioAutenticacao) => {

  //####### POST #######
  const options = { 
    headers:{ 
      "Content-Type":"application/json"
    }
  };  
  return axios.post(`${ API_URL }/Teste/InserirUsuario`,{ usuarioAutenticacao: usuarioAutenticacao },options);
}

const testeListarDadosPorTokenPost = (token) => {

  //####### POST #######
  const options = { 
    headers:{ 
      "token": token
    }
  };  
  return axios.post(`${ API_URL }/Teste/ListarDadosPorToken`,options);
}

const testeListarUsuariosDelete = (corpo) => {

  //####### DELETE #######
  const options = { 
    data: corpo ,
    headers:{ 
      "Content-Type":"application/json"
    } 
  };  
  return axios.delete(`${ API_URL }/Teste/ListarUsuarios`,options);
}

const testeMetodoGetParametrosPesquisaGet = (id) => {

  //####### GET #######
  const options = { 
    params: { 
      id
    }
  };  
  return axios.get(`${ API_URL }/Teste/MetodoGetParametrosPesquisa`,options);
}

const testeMetodoTesteApresentacaoGet = (teste1, teste2) => {

  //####### GET #######
  const options = { 
    params: { 
      teste1, 
      teste2
    }
  };  
  return axios.get(`${ API_URL }/Teste/MetodoTesteApresentacao`,options);
}

const testeObterDicionarioGet = (corpo) => {

  //####### GET #######
  const options = { 
    data: corpo ,
    headers:{ 
      "Content-Type":"application/json"
    }
  };  
  return axios.get(`${ API_URL }/Teste/ObterDicionario`,options);
}

const testeObterListaNumerosPut = (corpo) => {

  //####### PUT #######
  const options = { 
    headers:{ 
      "Content-Type":"application/json"
    } 
  };  
  return axios.put(`${ API_URL }/Teste/ObterListaNumeros`,{ corpo: corpo },options);
}

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