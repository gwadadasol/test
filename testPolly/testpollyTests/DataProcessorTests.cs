using System;
using System.Threading.Tasks;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Moq;
using Polly;

[TestClass]
public class DataProcessorTests
{
    [TestMethod]
    public async Task ProcessDataAsync_FirstCallThrowsException_SecondCallSucceeds()
    {
        // Arrange
        var apiClientMock = new Mock<IApiClient>();

        // Set up a sequence for the GetDataAsync method
        apiClientMock.SetupSequence(x => x.GetDataAsync())
            .ThrowsAsync(new Exception("Simulated API exception")) // First call throws an exception
            .ReturnsAsync("Success"); // Second call succeeds

        var dataProcessor = new DataProcessor(apiClientMock.Object);

        // Act
        var result = await dataProcessor.ProcessDataAsync();

        // Assert
        Assert.AreEqual("Success", result);
        

        // Verify that GetDataAsync was called twice (once initially, and once after the exception)
        apiClientMock.Verify(x => x.GetDataAsync(), Times.Exactly(2));
    }
}
