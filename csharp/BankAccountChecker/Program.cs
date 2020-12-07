using System;
using System.Collections.Generic;
using System.Linq;

namespace BankAccountChecker
{
    class Program
    {

        
        static void Main(string[] args)
        {
            // Console.WriteLine("Hello World!1");

            RbcMovementLoader loader = new RbcMovementLoader();

            IEnumerable<RbcAccountMovement> list =  loader.Load();

            int count = 1;
            foreach( var movement in list.Where(x => x.Description2.Contains("INTE")).ToList())
            {
                Console.WriteLine($"{count++}\t{movement.TransactionDate} \t- {movement.AmountCAD}"); 
            }

        }
    }
}


// TODO: Add logger and Logger config
// TODO: Add container 