using System.Security.Claims;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Zulatre.DTO;
using Zulatre.Models;

namespace Zulatre.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly AppDb _context;
        private readonly JwtService _jwtService;

        public UserController(AppDb context, JwtService jwtService)
        {
            _context = context;
            _jwtService = jwtService;
        }


        [HttpPost("login")]
        public async Task<IActionResult> Login(loginDTO model)
        {
            var user = await _context.Users.FirstOrDefaultAsync(u => u.Email == model.Email);

            if (user == null)
                return NotFound("User not found");

            bool isPasswordValid = false;

            try
            {
                // Try to verify with BCrypt
                isPasswordValid = BCrypt.Net.BCrypt.Verify(model.Password, user.Password);
            }
            catch (BCrypt.Net.SaltParseException)
            {
                // This happens if the password in DB is not a valid BCrypt hash
                // For migration: check if stored password is plain text (TEMPORARY SOLUTION)
                isPasswordValid = (model.Password == user.Password);

                // If it matches plain text, update to proper hash for next login
                if (isPasswordValid)
                {
                    user.Password = BCrypt.Net.BCrypt.HashPassword(model.Password);
                    await _context.SaveChangesAsync();
                }
            }

            if (!isPasswordValid)
                return Unauthorized("Invalid password");

            // var roles = new[] { "Admin" }; // In real app, get from user data
            // var roles =  "Admin";
            var token = _jwtService.GenerateToken(user.Id.ToString(), user.Email, user.Role);
            return Ok("Bearer " + token + " " +user.Name + " " + user.Role);
        }

        [HttpGet]
        [Authorize(Roles = "Admin")]
        public async Task<ActionResult<IEnumerable<User>>> Getusers()
        {
          //  var list = await _context.Users.ToListAsync();
            var users = await _context.Users.Include( u => u.Posts).Include(u => u.Comments).ToListAsync();
            if (users == null || users.Count == 0)
            {
                return NotFound("No users found.");
            }
            return users;
        }

        [HttpPost]
        public async Task<ActionResult<User>> PostUser( UserDTO userdto)
        {
            string passwordHash = BCrypt.Net.BCrypt.HashPassword(userdto.Password);

            var user = new User
            {
                Name = userdto.Name,
                Email = userdto.Email,
                Password = passwordHash,
                Posts = new List<Post>() 
            };
            _context.Users.Add(user);
            await _context.SaveChangesAsync();
            return Ok($"create user {user.Name}");

        }
        

        [HttpPut]
        [Authorize(Roles = "User, Admin")]
        public async Task<ActionResult<User>> UpdateUser(int id, UserDTO userdto)
        {
            string currentUserId = User.FindFirstValue(ClaimTypes.NameIdentifier);
            var findUser = await _context.Users.FindAsync(id);

            if (findUser != null) { NotFound("Use not found"); };

            bool isAdmin = User.IsInRole("Admin");
            if (!isAdmin && findUser.Id != int.Parse(currentUserId))
            {
                return Forbid("You can only update your own");
            }

            findUser.Name = userdto.Name;
            findUser.Email = userdto.Email;
            findUser.Password = userdto.Password;
            await _context.SaveChangesAsync();
            return Ok(userdto.Name);

        }

        [HttpDelete]
        [Authorize(Roles = "User, Admin")]
        public async Task<ActionResult<User>> deleteUser(int id)
        {
            string currentUserId = User.FindFirstValue(ClaimTypes.NameIdentifier);
            var findUser = await _context.Users.FindAsync(id);

            if (findUser != null) { NotFound("Use not found"); };

            bool isAdmin = User.IsInRole("Admin");

            if (!isAdmin && findUser.Id != int.Parse(currentUserId))
            {
                return Forbid("You can only delete your own");
            }


            _context.Users.Remove(findUser);
            await _context.SaveChangesAsync();
            return Ok(findUser.Name + " is deleting");
        }


        //[HttpPost("seed_admin")]
        //public async Task<ActionResult<User>> seedAdmin()
        //{
        //    string passwordHash = BCrypt.Net.BCrypt.HashPassword("123456789");

        //    var user = new User
        //    {
        //        Name = "admin_chief",
        //        Email = "admin@gmail.com",
        //        Password = passwordHash,
        //        Posts = new List<Post>(),
        //        Role = "Admin"
        //    };
        //    _context.Users.Add(user);
        //    await _context.SaveChangesAsync();
        //    return Ok("Seed admin is created");
        //}

        [HttpGet("only user can see")]
        [Authorize(Roles = "User")]
        public async Task<ActionResult> oblyUser()
        {
            return Ok("o yes");
        }

    }
}
