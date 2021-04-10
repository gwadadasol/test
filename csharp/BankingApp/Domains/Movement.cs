using System;

namespace BankingApp.Domains
{
    public class Movement
    {
        public DateTime Date { get; set; }
        public string Description { get; set; }
        public double Amount { get; set; }
        public string Account { get; set; }
        
    }
}