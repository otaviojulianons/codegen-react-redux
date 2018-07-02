using System.ComponentModel.DataAnnotations;

namespace Aplicacao   
{
    public partial class MunicipioDto
    {

        [Required( ErrorMessage = "Codigo é obrigatório.")]
        public int Codigo { get; set; }

        [Required( ErrorMessage = "Nome é obrigatório.")]
        [MaxLength(128)]
        public string Nome { get; set; }

        [Required( ErrorMessage = "CodUf é obrigatório.")]
        public int CodUf { get; set; }

        [Required( ErrorMessage = "Latitude é obrigatório.")]
        public double Latitude { get; set; }

        [Required( ErrorMessage = "Longitude é obrigatório.")]
        public double Longitude { get; set; }


						 
    }
}