using Greenvolts.Api.Models;
using Microsoft.EntityFrameworkCore;

namespace Greenvolts.Api.Data;

public sealed class GreenvoltsDbContext : DbContext
{
    public GreenvoltsDbContext(DbContextOptions<GreenvoltsDbContext> options) : base(options) { }

    public DbSet<User> Users => Set<User>();
    public DbSet<Service> Services => Set<Service>();
    public DbSet<ServiceDetail> ServiceDetails => Set<ServiceDetail>();
    public DbSet<Project> Projects => Set<Project>();
    public DbSet<Blog> Blogs => Set<Blog>();
    public DbSet<GalleryItem> Gallery => Set<GalleryItem>();
    public DbSet<Testimonial> Testimonials => Set<Testimonial>();
    public DbSet<Faq> Faqs => Set<Faq>();
    public DbSet<Career> Careers => Set<Career>();
    public DbSet<JobApplication> JobApplications => Set<JobApplication>();
    public DbSet<ContactEnquiry> ContactEnquiries => Set<ContactEnquiry>();
    public DbSet<Setting> Settings => Set<Setting>();

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Service>()
            .HasMany(s => s.ServiceDetails)
            .WithOne()
            .HasForeignKey(d => d.ServiceId)
            .OnDelete(DeleteBehavior.Cascade);

        modelBuilder.Entity<Setting>().HasData(
            new Setting
            {
                Id = 1,
                CompanyName = "Greenvolts",
                Email = "info@greenvolts.com",
                Phone = "+91 98765 43210",
                WorkingHours = "Mon - Fri, 09:00 - 18:00",
                Address = "Greenvolts Engineering Office, India",
                SeoTitle = "Greenvolts | Power Systems Engineering Consultancy",
                SeoDescription = "Greenvolts provides power system engineering studies, grid integration support, and technical consultancy."
            }
        );

        base.OnModelCreating(modelBuilder);
    }
}
