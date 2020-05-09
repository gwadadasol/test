using System;

namespace GradeBook
{
    class Program
    {
        static void Main(string[] args)
        {
            var book = new Book("Scott's Grade Book");

            while(true)
            {
                Console.WriteLine("Please enter a grade or 'q' to quit: ");
                var input = Console.ReadLine();
                if (input == "q"){
                    break;
                }
                try {
                    var grade = double.Parse(input);
                    book.AddGrade(grade);
                }catch(Exception e){
                    Console.WriteLine(e.Message);
                }
            }
           
            Statistics stats =  book.GetStatistics();

            Console.WriteLine($"The average grade is {stats.Average:N1}");
            Console.WriteLine($"The highest grade is {stats.High:N1}");
            Console.WriteLine($"The Lowest grade is {stats.Low:N1}");

       }
    }
}
