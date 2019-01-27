using System;
using System.Collections.Generic;
using System.Globalization;
using System.IO;

namespace BankAccountManager
{
    internal class AccountExtract
    {
        public const string FILE_TO_PROCESS_DIR = @"C:\Users\phili\source\data\BankAccountManager\toprocess";
        public const string FILE_PROCESSED_DIR = @"C:\Users\phili\source\data\BankAccountManager\processed";
        public const string FILE_DATABASE = @"C:\Users\phili\source\data\BankAccountManager\database.csv";

        public List<AccountMovement> Values { get; set; }


        public AccountExtract()
        {
            Values = new List<AccountMovement>();
        }

        public void loadExtractFromCitiFile(string path)
        {
            var reader = new StreamReader(path);

            while (!reader.EndOfStream)
            {
                string line = reader.ReadLine();
                List<string> values = new List<string>();
                char comma = ',';

                int index = 0;

                for (int i = 0; i < line.Length; i++)
                {
                    if (line[i] == comma)
                    {
                        if ((line[i - 1] == '"') && (line[i + 1] == '"'))
                        {
                            values.Add(line.Substring(index, i - index));
                            index = i + 1;
                        }
                    }
                }

                values.Add(line.Substring(index, line.Length - index));
                //var values = line.Split('~');


                AccountMovement accountMvt = new AccountMovement();
                string newdate = values[0].Trim('"');
                string description = values[1].Trim('"');
                string amount = values[2].Trim('"');
                string account = values[4].Trim('"');

                accountMvt.Date = DateTime.ParseExact(newdate, "MM/dd/yyyy", CultureInfo.InvariantCulture);
                accountMvt.Description = description;
                accountMvt.Amount = Double.Parse(values[2].Trim('"'));
                accountMvt.Account = account;

                this.Values.Add(accountMvt);
            }
        }

        public void loadExtractFromDatabase(string path)
        {
            var reader = new StreamReader(path);

            while (!reader.EndOfStream)
            {
                string line = reader.ReadLine();
                var values = line.Split(';');
                if (values.Length != 4)
                    break;

                AccountMovement accountMvt = new AccountMovement();
                string newdate = values[0];
                string description = values[1];
                string amount = values[2];
                string account = values[3];

                accountMvt.Date = DateTime.ParseExact(newdate, "MM-dd-yyyy", CultureInfo.InvariantCulture);
                accountMvt.Description = description;
                accountMvt.Amount = Double.Parse(amount);
                accountMvt.Account = account;

                this.Values.Add(accountMvt);
            }
        }

        public override string ToString()
        {
            string values = "";

            foreach (AccountMovement am in Values)
            {
                values += am.ToString() + '\n';
            }
            return values;
        }

        public void ToFile(string path)
        {
            using (System.IO.StreamWriter file = new System.IO.StreamWriter(path,true))
            {
                file.Write(ToString());
            }
        }

    }
}