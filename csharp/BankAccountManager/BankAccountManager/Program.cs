using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;



namespace BankAccountManager
{

    class Program
    {
        static void Main(string[] args)
        {
            //Load data from the Citibank files
            string[] filePaths = Directory.GetFiles(AccountExtract.FILE_TO_PROCESS_DIR, "*.csv", SearchOption.TopDirectoryOnly);

            AccountExtract accountExtract = new AccountExtract();

            foreach (string filename in filePaths)
            {
                //Console.WriteLine(filename);
                accountExtract.loadExtractFromCitiFile(filename);
            }

            //Console.Write(accountExtract);
            Console.WriteLine("{0} movements have been loaded", accountExtract.Values.Count);

            // save the data to the database
            accountExtract.ToFile(AccountExtract.FILE_DATABASE);



            // Display the database
            AccountExtract accountExtractDB = new AccountExtract();
            accountExtractDB.loadExtractFromDatabase(AccountExtract.FILE_DATABASE);
            //Console.WriteLine(accountExtractDB);
            Console.WriteLine("There are {0} movements on all accounts", accountExtractDB.Values.Count);
        }
    }
}
