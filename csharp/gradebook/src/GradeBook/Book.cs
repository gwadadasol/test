using System;
using System.Collections.Generic;

namespace GradeBook
{
    public class Book
    {
        private List<double> grades;
        public string Name;

        public Book(string Name)
        {
            this.Name = Name;
            grades = new List<double>();
        }

        public void AddGrade(double grade)
        {
            if (0 <= grade && grade <= 100)
            {
                grades.Add(grade);
            }
            else{
                throw new ArgumentException($"{grade} is an invalid argument");
            }
        }

        public double ComputeAverageGrade()
        {
            var result = 0.0;
            foreach (var number in grades)
            {
                result += number;
            }

            result /= grades.Count;

            return result;
        }

        public double ComputeHighestGrade()
        {
            var result = 0.0;
            foreach (var number in grades)
            {
                result = Math.Max(number, result);
            }
            return result;
        }

        public double ComputeLowestGrade()
        {
            var result = 100.0;
            foreach (var number in grades)
            {
                result = Math.Min(number, result);
            }
            return result;
        }

        public Statistics GetStatistics()
        {
            var result = new Statistics();

            result.Average = ComputeAverageGrade();
            result.Low = ComputeLowestGrade();
            result.High = ComputeHighestGrade();

            return result;
        }

    }
}