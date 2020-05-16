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

            IList<RbcAccountMovement> list =  loader.Load().ToList();

            int count = 1;
            foreach( var movement in list.Where(x => x.Description2.Contains("INTERAC") && x.AmountCAD <= -2000).ToList())
            {
                Console.WriteLine($"{count++}\t{movement.TransactionDate} \t- {movement.AmountCAD}"); 
            }

        }
    }
}


// TODO: Add logger and Logger config
// TODO: Add container 