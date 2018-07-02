//import { formatarData } from '../../../helpers/Formatters';

class MunicipioDto{
  constructor({
    codigo, 
    nome, 
    codUf, 
    latitude, 
    longitude
  }) {
    this.codigo = codigo;
    this.nome = nome;
    this.codUf = codUf;
    this.latitude = latitude;
    this.longitude = longitude;
  }

}
export default MunicipioDto;

