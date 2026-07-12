using Greenvolts.Api.Data;
using Greenvolts.Api.Models;
using Microsoft.AspNetCore.Mvc;

namespace Greenvolts.Api.Controllers;

[Route("api/testimonials")]
public sealed class TestimonialsController : CrudControllerBase<Testimonial>
{
    public TestimonialsController(GreenvoltsDbContext db) : base(db) { }
}
