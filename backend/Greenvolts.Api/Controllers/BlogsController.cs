using Greenvolts.Api.Data;
using Greenvolts.Api.Models;
using Microsoft.AspNetCore.Mvc;

namespace Greenvolts.Api.Controllers;

[Route("api/blogs")]
public sealed class BlogsController : CrudControllerBase<Blog>
{
    public BlogsController(GreenvoltsDbContext db) : base(db) { }
}
