using Greenvolts.Api.Data;
using Greenvolts.Api.Models;
using Microsoft.AspNetCore.Mvc;

namespace Greenvolts.Api.Controllers;

[Route("api/faqs")]
public sealed class FaqsController : CrudControllerBase<Faq>
{
    public FaqsController(GreenvoltsDbContext db) : base(db) { }
}
