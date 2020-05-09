using System;
using Xunit;

namespace GradeBook.Tests
{
    public delegate string WriteLogDelegate(string logMessage) ;

    public class TypeTestsDelegate
    {
        int count = 0;
        [Fact]
        public void WriteLogDelegateCanPointToMethod()
        {
            WriteLogDelegate log;

            // log = new WriteLogDelegate(returnMEssage)
            log = ReturnMEssage;
            log += ReturnMEssage;
            log += IncrementCount;

            var result = log("Hello!");
            Console.WriteLine(result);
            Console.WriteLine("------------------------");
            
            Assert.Equal(3, count);
        }

        string IncrementCount( string message)
        {
            count++;
            return message.ToLower();
        }
        string ReturnMEssage( string message)
        {
            count++;
            return message;
        }
    }
    public class BookTests
    {
        [Fact]
        public void BookCalculatesAnAverageGrade()
        {
            // arrange 
            var book = new Book("");
            book.AddGrade(89.1);
            book.AddGrade(90.5);
            book.AddGrade(77.3);

            // act
            var result = book.GetStatistics();

            // assert
            Assert.Equal(85.6, result.Average,1);
            Assert.Equal(90.5, result.High,1);
            Assert.Equal(77.3, result.Low,1);
        }
    }
}
