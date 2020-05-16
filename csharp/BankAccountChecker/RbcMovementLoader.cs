using System;
using System.Collections.Generic;
using System.Globalization;
using System.IO;
using System.Linq;
using CsvHelper;

namespace BankAccountChecker
{
    public class RbcMovementLoader
    {
        public RbcMovementLoader()
        {
            
        }

        public IEnumerable<RbcAccountMovement> Load()
        {
            using (var reader = new StreamReader($"C:\\Users\\phili\\Downloads\\csv97848.csv"))
            using (var csv = new CsvReader(reader, CultureInfo.InvariantCulture))
            {
                csv.Configuration.RegisterClassMap<RbcMovementMapper>();
                var records = csv.GetRecords<RbcAccountMovement>();

                // foreach( var row in records)
                // {
                //     System.Console.WriteLine($"{row.Description}\t\t{row.Description2}\t\t{row.AmountCAD}");
                // }
                return records.ToList();
            }
        }
    }
}