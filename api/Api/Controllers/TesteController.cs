
using Api.Models;
using Aplicacao;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace Api.Controllers
{
    [Route("Teste/[action]")]
    public class TesteController : Controller
    {
        [HttpPost]
        public RetornoApi<UsuarioDto> InserirUsuario([FromBody] UsuarioDto usuarioAutenticacao)
        {
            return new RetornoApi<UsuarioDto>() { Retorno = new UsuarioDto(){ Senha = "123456", Email = "Usuário Teste" } };
        }

        [HttpPost]
        public RetornoApi<List<string>> ListarDadosPorToken([FromHeader] string token)
        {
            return new RetornoApi<List<string>>() { Retorno = new List<string>() { "Lista", "Texto"} };
        }

        [HttpGet]
        public RetornoApi<IEnumerable<string>> MetodoGetParametrosPesquisa([FromQuery] string id)
        {
            return new RetornoApi<IEnumerable<string>>() { Retorno = new List<string>() { "Lista", "Texto" } };
        }

        [HttpGet]
        public RetornoApi<string> AtualizarToken([FromQuery] string id, [FromHeader] string token, [FromBody] string corpo)
        {
            return new RetornoApi<string>() { Retorno = "Sucesso"};
        }

        [HttpPut]
        public RetornoApi<object> AtualizarEmail([FromBody] string corpo)
        {
            return new RetornoApi<object>() { Retorno = null };
        }

        [HttpPut]
        public RetornoApi<string[]> ObterListaNumeros([FromBody] string corpo)
        {
            return new RetornoApi<string[]>() { Retorno = new string[] { "1", "2", "3" } };
        }

        [HttpDelete]
        public void DeletarUsuarioSemRetorno([FromBody] string corpo)
        {   

        }

        [HttpDelete]
        public RetornoApi<bool> DeletarUsuario([FromBody] UsuarioDto corpo)
        {
            return new RetornoApi<bool>() { Retorno = true };
        }

        [HttpDelete]
        public RetornoApi<IList<UsuarioDto>> ListarUsuarios([FromBody] string corpo)
        {
            var lista = new List<UsuarioDto>();
            lista.Add(new UsuarioDto() { Senha = "123456",Email = "Usuário Teste" });
            return new RetornoApi<IList<UsuarioDto>>() { Retorno = lista };
        }

        [HttpGet]
        public RetornoApi<Dictionary<string,string>> ObterDicionario([FromBody] string corpo)
        {
            var dicionario = new Dictionary<string, string>();
            dicionario.Add("valor 1", "valor 2");
            return new RetornoApi<Dictionary<string, string>>() { Retorno = dicionario };
        }


        [HttpGet]
        public RetornoApi<UsuarioDto> MetodoTesteApresentacao(string teste1, int teste2)
        {
            return new RetornoApi<UsuarioDto>();
        }
    }
}
