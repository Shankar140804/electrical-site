using Greenvolts.Api.Data;
using Greenvolts.Api.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Greenvolts.Api.Controllers;

[Route("api")]
public sealed class ContactController : ControllerBase
{
    private readonly GreenvoltsDbContext _db;

    public ContactController(GreenvoltsDbContext db)
    {
        _db = db;
    }

    [HttpPost("contact")]
    public async Task<IActionResult> Submit([FromBody] ContactEnquiry enquiry)
    {
        enquiry.CreatedDate = DateTime.UtcNow;
        _db.ContactEnquiries.Add(enquiry);
        await _db.SaveChangesAsync();
        return Ok(new { message = "Enquiry received" });
    }

    [HttpGet("enquiries")]
    public async Task<ActionResult<IEnumerable<ContactEnquiry>>> GetEnquiries()
        => Ok(await _db.ContactEnquiries.AsNoTracking().OrderByDescending(x => x.CreatedDate).ToListAsync());
}
