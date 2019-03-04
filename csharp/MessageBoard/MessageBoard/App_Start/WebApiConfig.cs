using Newtonsoft.Json.Serialization;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Formatting;
using System.Threading;
using System.Threading.Tasks;
using System.Web.Http;

namespace MessageBoard
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            var JsonFormatter = config.Formatters.OfType<JsonMediaTypeFormatter>().First();
            JsonFormatter.SerializerSettings.ContractResolver =
                new CamelCasePropertyNamesContractResolver();

            config.Routes.MapHttpRoute(
                name: "ReplyRoute",
                routeTemplate: "api/v1/topics/{topicId}/replies/{id}",
                defaults: new { controller = "replies", id = RouteParameter.Optional }
                );

            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/v1/topics/{id}",
                defaults: new { controller = "topics", id = RouteParameter.Optional }
                );


        }
    }
}