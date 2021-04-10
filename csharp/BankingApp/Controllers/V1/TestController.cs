using Microsoft.AspNetCore.Mvc;

namespace BankingApp.Controllers.V1
{
    [ApiController]
    [Route("user")]
    public class TestController : ControllerBase
    {
       [HttpGet]
       public  IActionResult GetAction()
       {
           return Ok(new {name = "Eva AV"});
       } 
    }
}