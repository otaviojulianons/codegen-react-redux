import React, { Component} from 'react';
import { connect } from "react-redux";
import { 
    apiMunicipioGet 
} from '../store/actions/Municipio';

class Municipio extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    
    onClick(){
        this.props.actionApiMunicipioGet();
    }

    render() { 
        return ( 
        <div>
            {this.props.isFetchingMunicipioGet ? "Carregando" : "OK"}
            <div><input type="button" onClick={ this.onClick.bind(this)}/></div>
            <div>{JSON.stringify(this.props.listaMunicipioDto)}</div>
        </div> 
        )
    }
}
 
const mapStateToProps = state => ({
    isFetchingMunicipioGet: state.municipio.isFetchingMunicipioGet,
    listaMunicipioDto: state.municipio.listaMunicipioDto,
  });
  
  const mapDispatchToProps = dispatch => ({
    actionApiMunicipioGet:() => dispatch(apiMunicipioGet()),
  });
  
 export default connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Municipio);