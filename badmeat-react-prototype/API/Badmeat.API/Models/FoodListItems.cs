namespace Badmeat.API.Models
{
    public class FoodListItems 
    {
        public long Id { get; set; }
        public string FoodName { get; set; }
        public double Qty { get; set; }
        public bool IsExpired { get; set; }
    }
}