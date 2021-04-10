using System;
using System.Collections.Generic;
using BankingApp.Domains;
using Microsoft.AspNetCore.Mvc;

namespace BankingApp.Controllers.V1
{
    [ApiController]
    //[Route("check")]
    public class MovementController : ControllerBase
    {
        public readonly List<Movement> _movements;

        public MovementController()
        {
            _movements = new List<Movement>();

            var v = new Movement
            {
                Date = new DateTime(2021, 03, 31),
                Account = "1",
                Description = "desc 1",
                Amount = 10
            };

            _movements.Add(v);
        }

        [HttpGet]
        public IActionResult GetMovement()
        {
            return Ok(_movements);
        }

        [HttpPost]
        public IActionResult Create()
        {
            return Ok(1);
        }
    }
}