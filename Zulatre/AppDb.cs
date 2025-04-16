using Microsoft.EntityFrameworkCore;
using Zulatre.Models;

namespace Zulatre
{
    public class AppDb : DbContext
    {
        public AppDb(DbContextOptions<AppDb> options) : base(options) { }
        public DbSet<User> users {get; set;}
    }
}
