using Cuestionario2.Controllers.Data;
using Cuestionario2.Controllers.models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Cuestionario2.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CuestionarioController : ControllerBase
    {
        private readonly ApplicationDbContext _db;

        public CuestionarioController(ApplicationDbContext db)
        {
            _db = db;
        }
        [HttpGet("get")]
        public async Task<IActionResult> GetPreguntas()
        {
            var lista = await _db.Preguntas.OrderBy(c => c.id).ToListAsync();

            return Ok(lista);
        }

        [HttpGet("{id:int}")]
        public async Task<IActionResult> GetPreguntas(int id)
        {
            var obj = await _db.Preguntas.FirstOrDefaultAsync(c=>c.id==id);

            if (obj == null)
            {
                return NotFound();
            }
            else
            {
                return Ok(obj);
            }

            
        }

        [HttpPost]

        public async Task<IActionResult> CrearPregunta([FromBody] Pregunta pregunta)
        {
         

            if (pregunta == null)
            {
                return BadRequest(ModelState);
            }

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            await _db.AddAsync(pregunta);
            await _db.SaveChangesAsync();

            return Ok();
        }

    }
}
