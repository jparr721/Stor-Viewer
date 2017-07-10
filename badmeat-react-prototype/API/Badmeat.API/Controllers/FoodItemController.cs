using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Badmeat.API.Models;

namespace Badmeat.API.Controllers
{
    [Route("api/[controller]")]
    public class FoodItemController : Controller
    {
        private readonly FoodListItemsContext _context;

        public FoodItemController(FoodListItemsContext context)
        {
            _context = context;

            if (_context.FoodListItems.Count() == 0)
            {
                _context.FoodListItems.Add(new FoodListItems { FoodName = "Example Food"});
                _context.SaveChanges();
            }
        }

        [HttpGet]
        public IEnumerable<FoodListItems> GetAll()
        {
            return _context.FoodListItems.ToList();
        }

        [HttpGet("{id}", Name = "GetFood")]
        public IActionResult GetById(long id)
        {
            var item = _context.FoodListItems.FirstOrDefault(t => t.Id == id);
            if (item == null)
            {
                return NotFound("Data not found");
            }

            return new ObjectResult(item);
        }
    }
}