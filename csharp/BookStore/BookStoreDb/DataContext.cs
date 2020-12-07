using Domain;
using Microsoft.EntityFrameworkCore;

namespace BookStoreDb
{
    public class DataContext: DbContext
    {
        public DbSet<Book> Books {get; set;} 

        public DataContext(DbContextOptions<DataContext> options):base(options)
        {
            
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Book>()
            .HasData(
                new Book { Id = 1, Name = "Book 1", Author = "Author 1" },
                new Book { Id = 2, Name = "Book 2", Author = "Author 2" },
                new Book { Id = 3, Name = "Book 3", Author = "Author 3" },
                new Book { Id = 4, Name = "Book 4", Author = "Author 4" },
                new Book { Id = 5, Name = "Book 5", Author = "Author 5" },
                new Book { Id = 6, Name = "Book 6", Author = "Author 6" },
                new Book { Id = 7, Name = "Book 7", Author = "Author 7" }
            );
        }
    }
}