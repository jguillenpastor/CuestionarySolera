using Cuestionario2.Controllers.models;
using Microsoft.EntityFrameworkCore;

namespace Cuestionario2.Controllers.Data
{
    public class ApplicationDbContext :DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> option):base(option)
        {
            
        }

        public DbSet<Pregunta> Preguntas { get; set; }
    }
}
