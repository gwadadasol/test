using System;
using System.Collections.Generic;
using System.Globalization;
using System.IO;
using System.Linq;
using CsvHelper;
using Microsoft.Extensions.Logging;

namespace BankAccountChecker
{
    public class RbcMovementLoader
    {
        private ILogger _logger;
        public RbcMovementLoader()
        {
         var loggerFactory = LoggerFactory.Create(builder =>
        {
            builder
                .AddFilter("Microsoft", LogLevel.Warning)
                .AddFilter("System", LogLevel.Warning)
                .AddFilter("LoggingConsoleApp.Program", LogLevel.Trace)
                .AddFilter("BankAccountChecker",LogLevel.Trace)
                .AddConsole();
        });
        _logger = loggerFactory.CreateLogger<Program>();   
        }

        public IEnumerable<RbcAccountMovement> Load()
        {
            using (var reader = new StreamReader($"C:\\Users\\phili\\Downloads\\csv97848.csv"))
            using (var csv = new CsvReader(reader, CultureInfo.InvariantCulture))
            {
                csv.Configuration.RegisterClassMap<RbcMovementMapper>();
                var records = csv.GetRecords<RbcAccountMovement>();

                 foreach( var row in records)
                 {
                    _logger.LogInformation($"{row.Description}\t\t{row.Description2}\t\t{row.AmountCAD}");
                }
                return records.ToList();
            }
        }
    }
}