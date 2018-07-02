using System.ComponentModel.DataAnnotations;

namespace Aplicacao   
{
    public partial class MunicipioDto
    {

        [Required( ErrorMessage = "Codigo � obrigat�rio.")]
        public int Codigo { get; set; }

        [Required( ErrorMessage = "Nome � obrigat�rio.")]
        [MaxLength(128)]
        public string Nome { get; set; }

        [Required( ErrorMessage = "CodUf � obrigat�rio.")]
        public int CodUf { get; set; }

        [Required( ErrorMessage = "Latitude � obrigat�rio.")]
        public double Latitude { get; set; }

        [Required( ErrorMessage = "Longitude � obrigat�rio.")]
        public double Longitude { get; set; }


						 
    }
}