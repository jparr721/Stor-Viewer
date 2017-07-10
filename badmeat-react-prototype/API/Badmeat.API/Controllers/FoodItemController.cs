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
            
        }
    }
}