using Microsoft.AspNetCore.Mvc;

namespace Greenvolts.Api.Controllers;

[Route("api")]
public sealed class AuthController : ControllerBase
{
    [HttpPost("login")]
    public IActionResult Login([FromBody] LoginRequest request)
    {
        return Ok(new
        {
            token = "dev-jwt-token-placeholder",
            user = new { name = "Admin", email = request.Email, role = "Admin" }
        });
    }

    [HttpGet("profile")]
    public IActionResult Profile() => Ok(new { name = "Admin", email = "admin@greenvolts.com", role = "Admin" });
}

public sealed record LoginRequest(string Email, string Password);
