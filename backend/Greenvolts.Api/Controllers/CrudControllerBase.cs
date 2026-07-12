using Greenvolts.Api.Data;
using Greenvolts.Api.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Greenvolts.Api.Controllers;

[ApiController]
public abstract class CrudControllerBase<TEntity> : ControllerBase where TEntity : BaseEntity
{
    protected readonly GreenvoltsDbContext Db;

    protected CrudControllerBase(GreenvoltsDbContext db)
    {
        Db = db;
    }

    [HttpGet]
    public virtual async Task<ActionResult<IEnumerable<TEntity>>> GetAll()
        => Ok(await Db.Set<TEntity>().AsNoTracking().ToListAsync());

    [HttpGet("{id:int}")]
    public virtual async Task<ActionResult<TEntity>> GetById(int id)
    {
        var entity = await Db.Set<TEntity>().FindAsync(id);
        return entity is null ? NotFound() : Ok(entity);
    }

    [HttpPost]
    public virtual async Task<ActionResult<TEntity>> Create([FromBody] TEntity entity)
    {
        entity.CreatedDate = DateTime.UtcNow;
        Db.Set<TEntity>().Add(entity);
        await Db.SaveChangesAsync();
        return CreatedAtAction(nameof(GetById), new { id = entity.Id }, entity);
    }

    [HttpPut("{id:int}")]
    public virtual async Task<IActionResult> Update(int id, [FromBody] TEntity entity)
    {
        var existing = await Db.Set<TEntity>().FindAsync(id);
        if (existing is null)
        {
            return NotFound();
        }

        entity.Id = id;
        entity.CreatedDate = existing.CreatedDate;
        Db.Entry(existing).CurrentValues.SetValues(entity);
        await Db.SaveChangesAsync();
        return NoContent();
    }

    [HttpDelete("{id:int}")]
    public virtual async Task<IActionResult> Delete(int id)
    {
        var entity = await Db.Set<TEntity>().FindAsync(id);
        if (entity is null)
        {
            return NotFound();
        }

        Db.Set<TEntity>().Remove(entity);
        await Db.SaveChangesAsync();
        return NoContent();
    }
}
