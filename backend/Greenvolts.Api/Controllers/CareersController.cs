using Greenvolts.Api.Data;
using Greenvolts.Api.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Greenvolts.Api.Controllers;

[Route("api/careers")]
public sealed class CareersController : CrudControllerBase<Career>
{
    public CareersController(GreenvoltsDbContext db) : base(db) { }

    [HttpPost("/api/job/apply")]
    public async Task<IActionResult> Apply([FromBody] JobApplication application)
    {
        application.CreatedDate = DateTime.UtcNow;
        Db.JobApplications.Add(application);
        await Db.SaveChangesAsync();
        return Ok(new { message = "Application received" });
    }
}
