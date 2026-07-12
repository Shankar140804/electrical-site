using Greenvolts.Api.Data;
using Greenvolts.Api.Models;
using Microsoft.AspNetCore.Mvc;

namespace Greenvolts.Api.Controllers;

[Route("api/users")]
public sealed class UsersController : CrudControllerBase<User>
{
    public UsersController(GreenvoltsDbContext db) : base(db) { }
}
