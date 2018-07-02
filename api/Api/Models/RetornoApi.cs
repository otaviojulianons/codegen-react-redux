namespace Api.Models
{
    public class RetornoApi<T>
    {
        public string Mensagem { get; set; }
        public T Retorno { get; set; }

        public RetornoApi()
        {

        }

        public RetornoApi(T retorno)
        {
            this.Retorno = retorno;
        }
    }
}
