using System.Security.Claims;
using System.Xml.Linq;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Hosting;
using Zulatre.DTO;
using Zulatre.Models;

namespace Zulatre.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CommentController : ControllerBase
    {
        private readonly AppDb _context;
        public CommentController(AppDb context)
        {
            _context = context;
        }


        [HttpGet]
        public async Task<ActionResult<IEnumerable<Comment>>> Get()
        {
            var commnets = await _context.Comments.ToListAsync();
            return commnets;
        }


        [HttpPost]
        [Authorize(Roles = "User, Admin")]
        public async Task<ActionResult<Comment>> createCommmnet(CreateCommentDto comDto)
        {
            string currentUserId = User.FindFirstValue(ClaimTypes.NameIdentifier);
          

            var postExists = await _context.Posts.AnyAsync(p => p.Id == comDto.PostId);
            if (!postExists)
            {
                return NotFound($"Post with ID {comDto.PostId} not found.");
            }

            var comment = new Comment
            {
                Commento = comDto.Commento,
                UserId = int.Parse(currentUserId),
                PostId = comDto.PostId,
                CreatedAt = DateTime.UtcNow,
            };

            _context.Comments.Add(comment);
            await _context.SaveChangesAsync();
            return Ok("Comment created");
        }

        [HttpDelete]
        [Authorize(Roles = "User, Admin")]
        public async Task<ActionResult> deleteCommnet(int id)
        {
            string currentUserId = User.FindFirstValue(ClaimTypes.NameIdentifier);
            var findComment = await _context.Comments.FindAsync(id);

            if (findComment != null) { NotFound("Commnet not found"); };

            bool isAdmin = User.IsInRole("Admin");

            // If not admin, check ownership
            if (!isAdmin && findComment.UserId != int.Parse(currentUserId))
            {
                return Forbid("You can only delete your own comments");
            }

            // Удалить комментарий
            _context.Comments.Remove(findComment);

            // Сохранить изменения
            await _context.SaveChangesAsync();

            return Ok();

        }

        [HttpPut]
        [Authorize(Roles = "User, Admin")]
        public async Task<ActionResult> updateComment(int id, updateCommentDTO comDto)
        {
            string currentUserId = User.FindFirstValue(ClaimTypes.NameIdentifier);
            var findComment = await _context.Comments.FindAsync(id);

            if (findComment != null) { NotFound("Commnet not found"); };

            bool isAdmin = User.IsInRole("Admin");

            if (!isAdmin && findComment.UserId != int.Parse(currentUserId))
            {
                return Forbid("You can only update your own comments");
            }
           

            findComment.Commento = comDto.Commento;
            
            await _context.SaveChangesAsync();

            return Ok();
        }
    }




}
