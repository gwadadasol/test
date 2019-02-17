using MessageBoard.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using System.Web.Http;

namespace MessageBoard.Controllers
{
    public class TopicsController : ApiController
    {
       


        private IMessageBoardRepository _repo;

        public TopicsController(IMessageBoardRepository repo)
        {
            _repo = repo;
        }
        public IEnumerable<Topic> Get(bool includeReplies = false)
        {
            IEnumerable<Topic> results;

            if (includeReplies )
            {
                results = _repo.GetTopicsIncludingReplies();
            }
            else
            {
                results = _repo.GetTopics();
            }

            return results
                .OrderByDescending(t => t.Created)
                .Take(50)
                .ToList();
        }

        [HttpPost]
        public HttpResponseMessage Post([FromBody] Topic newTopic)
        {

            if ( newTopic.Created == default(DateTime))
            {
                newTopic.Created = DateTime.UtcNow;
            }

            if (_repo.AddTopic(newTopic) && _repo.Save())
            {
                return Request.CreateResponse(HttpStatusCode.Created, newTopic);
            }

            return Request.CreateResponse(HttpStatusCode.BadRequest);
        }
    }
}
