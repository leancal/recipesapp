namespace RecipesApi.Models
{
    public class Recipe
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string Image { get; set; }
        public int CategoryId { get; set; }
        public string[] Ingredients { get; set; }
        public string[] Steps { get; set; }
        public int CreatedBy { get; set; }
    }
}
