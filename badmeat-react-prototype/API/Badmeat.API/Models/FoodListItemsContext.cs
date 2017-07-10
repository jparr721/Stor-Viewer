using Microsoft.EntityFrameworkCore;

namespace Badmeat.API.Models
{
    public class FoodListItemsContext : DbContext   
    {
        public FoodListItemsContext(DbContextOptions<FoodListItemsContext> options) : base(options)
        {
            
        }

        public DbSet<FoodListItems> FoodListItems { get; set; }
    }
}