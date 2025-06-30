using Microsoft.EntityFrameworkCore;

namespace JobTracking.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }

        public DbSet<User> Users { get; set; }
        public DbSet<JobApplication> JobApplications { get; set; }
    }
}
