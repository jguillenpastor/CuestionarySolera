using Cuestionario2.Controllers.models;

namespace Cuestionario2.Controllers.Data
{
    public class DbInitializer
    {
        public static void Seed(ApplicationDbContext context)
        {
            //se asegura de que database creado
            context.Database.EnsureCreated();

            // mira si la sdatabase (preguntas) ya ha sido llenada o no
            if (context.Preguntas.Any())
            {
                System.Diagnostics.Debug.WriteLine("yii33ii");
                return;   // DB has been seeded
            }

            var preguntas = new Pregunta[]
            {
            new Pregunta{id=1,txtPregunta="Pregunta1",tipo=1},
            new Pregunta{id=2,txtPregunta="Pregunta2",tipo=2},
            new Pregunta{id=3,txtPregunta="Pregunta3",tipo=1},
            new Pregunta{id=4,txtPregunta="Pregunta4",tipo=3},
            new Pregunta{id=5,txtPregunta="Pregunta5",tipo=3},
            new Pregunta{id=6,txtPregunta="Pregunta6",tipo=2},
            new Pregunta{id=7,txtPregunta="Pregunta7",tipo=2},
            new Pregunta{id=8,txtPregunta="Pregunta8",tipo=1},
            new Pregunta{id=9,txtPregunta="Pregunta9",tipo=3},
            new Pregunta{id=1,txtPregunta="Pregunta10",tipo=1}
            };
            foreach (Pregunta p in preguntas)
            {
                context.Preguntas.Add(p);
            }
            context.SaveChanges();
        }
    }
}
