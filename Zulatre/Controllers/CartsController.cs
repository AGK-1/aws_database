using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Zulatre.Models;

namespace Zulatre.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CartsController : ControllerBase
    {
        private readonly AppDb _context;
        public CartsController(AppDb context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<User>>> Getusers()
        {
            var list = await _context.users.ToListAsync();
            return list;
        }

        [HttpPost]
        public async Task<ActionResult<User>> PotsUser(User user)
        {
            var addCar = _context.users.Add(user);
            await _context.SaveChangesAsync();
            return Ok("OK ey bro");

        }

        [HttpPut]
        public async Task<ActionResult<User>> UpdateUser(int id,User updated)
        {
            var find = await _context.users.FindAsync(id);
            if (find== null)
            {
                return NotFound("Nothing found");
            }

            find.Name = updated.Name;
            find.Email = updated.Email;
            await _context.SaveChangesAsync();
            return Ok(updated.Name);

        }


    }
}
