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
    public class PostController : ControllerBase
    {
        private readonly AppDb _context;
        private readonly JwtService _jwtService;

        public PostController(AppDb context, JwtService jwtService)
        {
            _context = context;
            _jwtService = jwtService;   
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Post>>> GetList()
        {
            var posts = await _context.Posts.Include(p => p.User).Select(p => new
            { id = p.Id, Title = p.Title, Content = p.Content, createdBy = p.User.Name }).ToListAsync();
            // await _context.Users.Include(u => u.Posts).ToListAsync();
            return Ok(posts);
        }


        [HttpPost("create-post")]
        [Authorize(Roles = "User")]
        public async Task<ActionResult> CreatePost(PostDTO postDto)
        {
            var user = await _context.Users.FindAsync(postDto.UserId);
            if (user == null) return NotFound("User not found");
            var post = new Post
            {
                Title = postDto.Title,
                Content = postDto.Content,
                CreatedAt = DateTime.UtcNow, // Automatically setting CreatedAt
                UserId = postDto.UserId
            };
            _context.Posts.Add(post);
            await _context.SaveChangesAsync();

            return Ok("Post creates");
        }

        [HttpPut]
        [Authorize(Roles = "User")]
        public async Task<ActionResult<IEnumerable<Post>>> updatePost(int id, PostDTO postDto)
        {
            string currentUserId = User.FindFirstValue(ClaimTypes.NameIdentifier);
            var findPost= await _context.Posts.FindAsync(id);

            if (findPost != null) { NotFound("Commnet not found"); };
            if (findPost.UserId != int.Parse(currentUserId))
            {
                return Forbid("You can only delete your own comments");
            }

            findPost.Title = postDto.Title;
            findPost.Content = postDto.Content;
            findPost.CreatedAt = DateTime.UtcNow;
            await _context.SaveChangesAsync();
            return Ok("Updating");
        }

        [HttpDelete("{id}")]
        [Authorize(Roles = "User")]
        public async Task<ActionResult> deletePost(int id)
        {
            string currentUserId = User.FindFirstValue(ClaimTypes.NameIdentifier);
            var findPost = await _context.Posts.FindAsync(id);

            if (findPost != null) { NotFound("Commnet not found"); };
            if (findPost.UserId != int.Parse(currentUserId))
            {
                return Forbid("You can only delete your own comments");
            }

            //var post = await _context.Posts.FindAsync(id);
            //if (post == null) return NotFound("Not found post");
             _context.Remove(findPost);
            await _context.SaveChangesAsync();  
            return Ok("Deleted Post");
        }


      

        [HttpGet("admin")]
        [Authorize(Roles = "User")]
        public IActionResult seeAdminData()
        {
            return Ok("kino can see dath");
        }

    }
}
