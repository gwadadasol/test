using System;

namespace BankAccountChecker
{
    public class RbcAccountMovement
    {
        public string AccountType {get; set;}
        public string AccountNumber {get; set;}
        public DateTime TransactionDate {get; set;}
        public string ChequeNumber {get; set;}
        public string Description {get; set;}
        public string Description2 {get; set;}
        public double AmountCAD {get; set;}
        public double AmountUSD {get; set;}

        public override string ToString()
        {
            return $"{Description}\t\t{Description2}\t\t{AmountCAD}";
        }
    }
}