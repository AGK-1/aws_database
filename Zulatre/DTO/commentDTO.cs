using Zulatre.Models;

namespace Zulatre.DTO
{
    public class CreateCommentDto
    {
        public string Commento { get; set; }
        public int PostId { get; set; }
    }
}
