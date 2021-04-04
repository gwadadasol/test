using System.Globalization;
using CsvHelper.Configuration;

namespace BankAccountChecker
{
    public class RbcMovementMapper:ClassMap<RbcAccountMovement>
    {
        public RbcMovementMapper()
        {
            AutoMap(CultureInfo.InvariantCulture);
            
            Map(m => m.AccountType).Name("Account Type");
            Map(m => m.AccountNumber).Name("Account Number");
            Map(m => m.TransactionDate).Name("Transaction Date");
            Map(m => m.ChequeNumber).Name("Cheque Number");
            Map(m => m.Description).Name("Description 1");
            Map(m => m.Description2).Name("Description 2");
            Map(m => m.AmountCAD).Name("CAD$");
            Map(m => m.AmountUSD).Name("USD$").Default(0);
        }
    }
}