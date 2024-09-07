using System;
using System.Threading.Tasks;
using Polly;

public interface IApiClient
{
    Task<string> GetDataAsync();
}

public class ApiClient : IApiClient
{
    public async Task<string> GetDataAsync()
    {
        // Simulate API call (replace with actual API call)
        // For testing purposes, it will throw an exception the first time and succeed the second time.
        Console.WriteLine("Calling API...");
        await Task.Delay(100); // Simulate API delay
        throw new Exception("Simulated API exception");
    }
}

public class DataProcessor
{
    private readonly IApiClient _apiClient;

    public DataProcessor(IApiClient apiClient)
    {
        _apiClient = apiClient;
    }

    public async Task<string> ProcessDataAsync()
    {
        var policy = Policy
            .Handle<Exception>() // Specify the exception type to handle
            .RetryAsync(1); // Number of retries (1 additional attempt after the initial call)

        return await policy.ExecuteAsync(async () => await _apiClient.GetDataAsync());
    }
}

public class Program
{
    public static async Task Main()
    {
        var apiClient = new ApiClient();
        var dataProcessor = new DataProcessor(apiClient);

        try
        {
            var result = await dataProcessor.ProcessDataAsync();
            Console.WriteLine($"Result: {result}");
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Exception: {ex.Message}");
        }
    }
}
