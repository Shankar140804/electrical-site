using System.ComponentModel.DataAnnotations;

namespace Greenvolts.Api.Models;

public abstract class BaseEntity
{
    public int Id { get; set; }
    public DateTime CreatedDate { get; set; } = DateTime.UtcNow;
}

public sealed class User : BaseEntity
{
    [MaxLength(120)] public string Name { get; set; } = string.Empty;
    [MaxLength(180)] public string Email { get; set; } = string.Empty;
    [MaxLength(200)] public string Password { get; set; } = string.Empty;
    [MaxLength(50)] public string Role { get; set; } = "Viewer";
}

public sealed class Service : BaseEntity
{
    [MaxLength(180)] public string ServiceName { get; set; } = string.Empty;
    [MaxLength(180)] public string Slug { get; set; } = string.Empty;
    [MaxLength(1000)] public string Description { get; set; } = string.Empty;
    [MaxLength(300)] public string Image { get; set; } = string.Empty;
    [MaxLength(50)] public string Status { get; set; } = "Published";
    public ICollection<ServiceDetail> ServiceDetails { get; set; } = new List<ServiceDetail>();
}

public sealed class ServiceDetail : BaseEntity
{
    public int ServiceId { get; set; }
    [MaxLength(180)] public string StudyName { get; set; } = string.Empty;
    [MaxLength(1200)] public string Description { get; set; } = string.Empty;
}

public sealed class Project : BaseEntity
{
    [MaxLength(220)] public string Title { get; set; } = string.Empty;
    [MaxLength(180)] public string Client { get; set; } = string.Empty;
    [MaxLength(180)] public string Location { get; set; } = string.Empty;
    [MaxLength(1200)] public string Description { get; set; } = string.Empty;
    [MaxLength(300)] public string Image { get; set; } = string.Empty;
    [MaxLength(50)] public string Status { get; set; } = "Completed";
}

public sealed class Blog : BaseEntity
{
    [MaxLength(220)] public string Title { get; set; } = string.Empty;
    [MaxLength(220)] public string Slug { get; set; } = string.Empty;
    [MaxLength(1000)] public string Description { get; set; } = string.Empty;
    [MaxLength(300)] public string Image { get; set; } = string.Empty;
    [MaxLength(180)] public string Author { get; set; } = "Greenvolts Team";
    [MaxLength(80)] public string Category { get; set; } = "General";
    [MaxLength(50)] public string Status { get; set; } = "Draft";
    public DateTime? PublishedDate { get; set; }
}

public sealed class GalleryItem : BaseEntity
{
    [MaxLength(220)] public string Title { get; set; } = string.Empty;
    [MaxLength(300)] public string Image { get; set; } = string.Empty;
    [MaxLength(120)] public string Category { get; set; } = string.Empty;
    [MaxLength(30)] public string MediaType { get; set; } = "Image";
}

public sealed class Testimonial : BaseEntity
{
    [MaxLength(180)] public string ClientName { get; set; } = string.Empty;
    [MaxLength(180)] public string Company { get; set; } = string.Empty;
    [MaxLength(1200)] public string Review { get; set; } = string.Empty;
    [MaxLength(20)] public string Rating { get; set; } = "5";
    [MaxLength(300)] public string Photo { get; set; } = string.Empty;
    [MaxLength(50)] public string Status { get; set; } = "Published";
}

public sealed class Faq : BaseEntity
{
    [MaxLength(300)] public string Question { get; set; } = string.Empty;
    [MaxLength(1400)] public string Answer { get; set; } = string.Empty;
    [MaxLength(120)] public string Category { get; set; } = "General";
    [MaxLength(50)] public string Status { get; set; } = "Published";
}

public sealed class Career : BaseEntity
{
    [MaxLength(180)] public string JobTitle { get; set; } = string.Empty;
    [MaxLength(180)] public string Experience { get; set; } = string.Empty;
    [MaxLength(180)] public string Location { get; set; } = string.Empty;
    [MaxLength(1200)] public string Description { get; set; } = string.Empty;
    [MaxLength(100)] public string Salary { get; set; } = string.Empty;
    [MaxLength(50)] public string Status { get; set; } = "Open";
}

public sealed class JobApplication : BaseEntity
{
    public int CareerId { get; set; }
    [MaxLength(180)] public string Name { get; set; } = string.Empty;
    [MaxLength(180)] public string Email { get; set; } = string.Empty;
    [MaxLength(50)] public string Phone { get; set; } = string.Empty;
    [MaxLength(300)] public string Resume { get; set; } = string.Empty;
    [MaxLength(50)] public string Status { get; set; } = "New";
}

public sealed class ContactEnquiry : BaseEntity
{
    [MaxLength(180)] public string Name { get; set; } = string.Empty;
    [MaxLength(180)] public string Company { get; set; } = string.Empty;
    [MaxLength(180)] public string Email { get; set; } = string.Empty;
    [MaxLength(50)] public string Phone { get; set; } = string.Empty;
    [MaxLength(180)] public string RequiredService { get; set; } = string.Empty;
    [MaxLength(1400)] public string Message { get; set; } = string.Empty;
    [MaxLength(50)] public string Status { get; set; } = "Unread";
}

public sealed class Setting : BaseEntity
{
    [MaxLength(180)] public string CompanyName { get; set; } = "Greenvolts";
    [MaxLength(300)] public string Logo { get; set; } = string.Empty;
    [MaxLength(500)] public string Address { get; set; } = string.Empty;
    [MaxLength(50)] public string Phone { get; set; } = string.Empty;
    [MaxLength(180)] public string Email { get; set; } = string.Empty;
    [MaxLength(120)] public string WorkingHours { get; set; } = string.Empty;
    [MaxLength(300)] public string Facebook { get; set; } = string.Empty;
    [MaxLength(300)] public string LinkedIn { get; set; } = string.Empty;
    [MaxLength(300)] public string Instagram { get; set; } = string.Empty;
    [MaxLength(300)] public string Twitter { get; set; } = string.Empty;
    [MaxLength(400)] public string GoogleMap { get; set; } = string.Empty;
    [MaxLength(220)] public string SeoTitle { get; set; } = string.Empty;
    [MaxLength(500)] public string SeoDescription { get; set; } = string.Empty;
}
