using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BookStoreDb;
using Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BookController: ControllerBase
    {
        private readonly DataContext _context;

        public BookController(DataContext context)
        {
            _context = context ?? throw new ArgumentNullException (nameof(context));
        }

        [HttpGet]
        // public async Task<ActionResult<IEnumerable<Book>>> Get()
        public ActionResult<IEnumerable<string>> Get()
        {
            // var values = await _context.Books.ToListAsync();
            IEnumerable<string> values = new List<string>(){"val1", "val2"};
            return Ok(values);
        }
    }
}