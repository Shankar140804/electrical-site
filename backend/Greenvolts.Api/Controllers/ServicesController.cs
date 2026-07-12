using Greenvolts.Api.Data;
using Greenvolts.Api.Models;
using Microsoft.AspNetCore.Mvc;

namespace Greenvolts.Api.Controllers;

[Route("api/services")]
public sealed class ServicesController : CrudControllerBase<Service>
{
    public ServicesController(GreenvoltsDbContext db) : base(db) { }

    [HttpGet("/api/service/{id:int}")]
    public async Task<ActionResult<Service>> GetServiceByIdAlias(int id) => await GetById(id);

    [HttpPost("/api/service")]
    public async Task<ActionResult<Service>> CreateServiceAlias([FromBody] Service service) => await Create(service);

    [HttpPut("/api/service/{id:int}")]
    public async Task<IActionResult> UpdateServiceAlias(int id, [FromBody] Service service) => await Update(id, service);

    [HttpDelete("/api/service/{id:int}")]
    public async Task<IActionResult> DeleteServiceAlias(int id) => await Delete(id);
}
