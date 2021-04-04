using System;
using System.Collections.Generic;
using System.Linq;

namespace BankAccountChecker
{
    class Program
    {

        
        static void Main(string[] args)
        {
            RbcMovementLoader loader = new RbcMovementLoader();

            IEnumerable<RbcAccountMovement> list =  loader.Load();

            foreach( var movement in list.Where(x => x.Description2.Contains("INTE")).ToList())
            {
                Console.WriteLine(movement);
            }

        }
    }
}


// TODO: Add logger and Logger config
// TODO: Add container 