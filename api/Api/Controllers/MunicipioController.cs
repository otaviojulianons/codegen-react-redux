using Api.Models;
using Aplicacao;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;


namespace Api.Controllers
{
    [Route("api/[controller]")]
    public class MunicipioController : Controller
    {

        [HttpGet]
        public RetornoApi<List<MunicipioDto>> Get()
        {
            var municipios =  new List<MunicipioDto>();
            municipios.Add(new MunicipioDto() { Nome = "CANOAS", CodUf = 43 });
            return Ok(municipios);
        }

        [HttpGet("{codigo}")]
        public RetornoApi<MunicipioDto> Get(int codigo)
        {
            return Ok(new MunicipioDto());
        }

        [HttpPost]
        public RetornoApi<object> Post([FromBody]MunicipioDto dados)
        {
            return Ok<object>(null);
        }

        [HttpPut("{codigo}")]
        public RetornoApi<object> Put(int codigo, [FromBody]MunicipioDto dados)
        {
            return Ok<object>(null);
        }

        [HttpDelete("{codigo}")]
        public RetornoApi<object> Delete(int codigo)
        {
            return Ok<object>(null);
        }

        private RetornoApi<T> Ok<T>(T retorno)
        {
            return new RetornoApi<T>() { Mensagem = "Método executado com sucesso!", Retorno = retorno };
        }
    }
}
