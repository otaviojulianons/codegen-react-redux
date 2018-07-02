import axios from 'axios';
const API_URL = process.env.REACT_APP_API_URL;

const apiMunicipioByCodigoDelete = (codigo) => {

  //####### DELETE #######
  const options = {  
  };  
  return axios.delete(`${ API_URL }/api/Municipio/{codigo}`.replace(["{","codigo","}"].join(),codigo),options);
}

const apiMunicipioByCodigoGet = (codigo) => {

  //####### GET #######
  const options = { 
  };  
  return axios.get(`${ API_URL }/api/Municipio/{codigo}`.replace(["{","codigo","}"].join(),codigo),options);
}

const apiMunicipioByCodigoPut = (codigo, dados) => {

  //####### PUT #######
  const options = { 
    headers:{ 
      "Content-Type":"application/json"
    } 
  };  
  return axios.put(`${ API_URL }/api/Municipio/{codigo}`.replace(["{","codigo","}"].join(),codigo),{ dados: dados },options);
}

const apiMunicipioGet = () => {

  //####### GET #######
  const options = { 
  };  
  return axios.get(`${ API_URL }/api/Municipio`,options);
}

const apiMunicipioPost = (dados) => {

  //####### POST #######
  const options = { 
    headers:{ 
      "Content-Type":"application/json"
    }
  };  
  return axios.post(`${ API_URL }/api/Municipio`,{ dados: dados },options);
}

export {
  apiMunicipioByCodigoDelete, 
  apiMunicipioByCodigoGet, 
  apiMunicipioByCodigoPut, 
  apiMunicipioGet, 
  apiMunicipioPost
};