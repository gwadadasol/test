using System;

namespace BankAccountChecker
{
    public class AccountMovement
   {
        public DateTime Date { get; set; }
        public string Description { get; set; }
        public double Amount { get; set; }
        public string Account { get; set; }

        private const string SEPARATOR = ";";

        public override string ToString()
        {
            string desc = Date.ToString("MM/dd/yyyy") + SEPARATOR + Description + SEPARATOR + Amount.ToString() + SEPARATOR + Account;

            return desc;
        }
    }
}