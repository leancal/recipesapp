using Microsoft.AspNetCore.Mvc;
using RecipesApi.Models;

namespace RecipesApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class RecipesController : ControllerBase
    {
        private static List<Recipe> _recipes = new List<Recipe>
        {
            new Recipe {
                Id = 1,
                Title = "Tarta de manzana",
                Description = "Receta desde la API",
                Image = "",
                CategoryId = 1,
                Ingredients = new[] { "manzana", "harina", "huevo" },
                Steps = new[] { "mezclar", "hornear" },
                CreatedBy = 1
            }
        };

        [HttpGet]
        public ActionResult<IEnumerable<Recipe>> GetAll()
        {
            return Ok(_recipes);
        }

        [HttpPost]
        public ActionResult<Recipe> Create(Recipe recipe)
        {
            recipe.Id = _recipes.Max(r => r.Id) + 1;
            _recipes.Add(recipe);
            return CreatedAtAction(nameof(GetAll), new { id = recipe.Id }, recipe);
        }

[HttpPut("{id}")]
public IActionResult Update(int id, Recipe updatedRecipe)
{
    var existing = _recipes.FirstOrDefault(r => r.Id == id);
    if (existing == null) return NotFound();

    existing.Title = updatedRecipe.Title;
    existing.Description = updatedRecipe.Description;
    existing.Image = updatedRecipe.Image;
    existing.CategoryId = updatedRecipe.CategoryId;
    existing.Ingredients = updatedRecipe.Ingredients;
    existing.Steps = updatedRecipe.Steps;

    return Ok(existing); // ✅ DEVOLVER ALGO VALIDO
}


    }
}
