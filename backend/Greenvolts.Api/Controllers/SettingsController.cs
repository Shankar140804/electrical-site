using Greenvolts.Api.Data;
using Greenvolts.Api.Models;
using Microsoft.AspNetCore.Mvc;

namespace Greenvolts.Api.Controllers;

[Route("api/settings")]
public sealed class SettingsController : CrudControllerBase<Setting>
{
    public SettingsController(GreenvoltsDbContext db) : base(db) { }
}
