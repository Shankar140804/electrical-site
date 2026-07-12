using Greenvolts.Api.Data;
using Greenvolts.Api.Models;
using Microsoft.AspNetCore.Mvc;

namespace Greenvolts.Api.Controllers;

[Route("api/projects")]
public sealed class ProjectsController : CrudControllerBase<Project>
{
    public ProjectsController(GreenvoltsDbContext db) : base(db) { }
}
