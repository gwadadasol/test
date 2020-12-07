using Microsoft.EntityFrameworkCore.Migrations;

namespace BookStoreDb.Migrations
{
    public partial class SeeData : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Books",
                columns: new[] { "Id", "Author", "Name" },
                values: new object[] { 1, "Author 1", "Book 1" });

            migrationBuilder.InsertData(
                table: "Books",
                columns: new[] { "Id", "Author", "Name" },
                values: new object[] { 2, "Author 2", "Book 2" });

            migrationBuilder.InsertData(
                table: "Books",
                columns: new[] { "Id", "Author", "Name" },
                values: new object[] { 3, "Author 3", "Book 3" });

            migrationBuilder.InsertData(
                table: "Books",
                columns: new[] { "Id", "Author", "Name" },
                values: new object[] { 4, "Author 4", "Book 4" });

            migrationBuilder.InsertData(
                table: "Books",
                columns: new[] { "Id", "Author", "Name" },
                values: new object[] { 5, "Author 5", "Book 5" });

            migrationBuilder.InsertData(
                table: "Books",
                columns: new[] { "Id", "Author", "Name" },
                values: new object[] { 6, "Author 6", "Book 6" });

            migrationBuilder.InsertData(
                table: "Books",
                columns: new[] { "Id", "Author", "Name" },
                values: new object[] { 7, "Author 7", "Book 7" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Books",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Books",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Books",
                keyColumn: "Id",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "Books",
                keyColumn: "Id",
                keyValue: 4);

            migrationBuilder.DeleteData(
                table: "Books",
                keyColumn: "Id",
                keyValue: 5);

            migrationBuilder.DeleteData(
                table: "Books",
                keyColumn: "Id",
                keyValue: 6);

            migrationBuilder.DeleteData(
                table: "Books",
                keyColumn: "Id",
                keyValue: 7);
        }
    }
}
