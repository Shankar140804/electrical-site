using Greenvolts.Api.Data;
using Greenvolts.Api.Models;
using Microsoft.AspNetCore.Mvc;

namespace Greenvolts.Api.Controllers;

[Route("api/gallery")]
public sealed class GalleryController : CrudControllerBase<GalleryItem>
{
    public GalleryController(GreenvoltsDbContext db) : base(db) { }
}
