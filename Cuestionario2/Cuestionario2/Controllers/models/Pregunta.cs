using System.ComponentModel.DataAnnotations;

namespace Cuestionario2.Controllers.models
{
    public class Pregunta
    {
        [Key]
        public int id { get; set; }
        [Required]
        public string txtPregunta { get; set; }
        [Required]
        public int tipo { get; set; }
    }
}
