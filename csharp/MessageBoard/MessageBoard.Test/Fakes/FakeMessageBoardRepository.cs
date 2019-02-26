using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MessageBoard.Data;

namespace MessageBoard.Test.Fakes
{
    class FakeMessageBoardRepository : IMessageBoardRepository
    {
        public IQueryable<Reply> GetRepliesByTopic(int topicId)
        {
            return null;
        }

        public IQueryable<Topic> GetTopics()
        {
            return new Topic[]
                {
                    new Topic()
                    {
                        Id = 1,
                        Title = "This is a title",
                        Body = "This is a body",
                        Created = DateTime.UtcNow
                    },
                    new Topic()
                    {
                        Id = 2,
                        Title = "This is another title",
                        Body = "This is a body",
                        Created = DateTime.UtcNow
                    },
                    new Topic()
                    {
                        Id = 3,
                        Title = "This is yet another title",
                        Body = "This is a body",
                        Created = DateTime.UtcNow
                    }
                }.AsQueryable();
        }

        public IQueryable<Topic> GetTopicsIncludingReplies()
        {
            return new Topic[]
            {
                new Topic()
                {
                    Id = 1,
                    Title = "This is a title",
                    Body = "This is a body",
                    Created = DateTime.UtcNow,
                    Replies = new Reply[]
                    {
                        new Reply()
                        {
                            Id = 1,
                            Body = "yes this title is good",
                            TopicId = 1,
                            Created = DateTime.UtcNow
                        },
                        new Reply()
                        {
                            Id = 2,
                            Body = "yes this title is really good",
                            TopicId = 1,
                            Created = DateTime.UtcNow
                        }
                    }

                },
                new Topic()
                {
                    Id = 2,
                    Title = "This is another title",
                    Body = "This is a body",
                    Created = DateTime.UtcNow,
                    Replies = new Reply[]
                    {
                        new Reply()
                        {
                            Id = 3,
                            Body = "this is a reply",
                            TopicId = 1,
                            Created = DateTime.UtcNow
                        },
                        new Reply()
                        {
                            Id = 4,
                            Body = "this is the reply 4",
                            TopicId = 1,
                            Created = DateTime.UtcNow
                        }
                    }
                },
                new Topic()
                {
                    Id = 3,
                    Title = "This is yet another title",
                    Body = "This is a body",
                    Created = DateTime.UtcNow,
                    Replies = new Reply[]
                    {
                        new Reply()
                        {
                            Id = 5,
                            Body = "this is the reply 5",
                            TopicId = 1,
                            Created = DateTime.UtcNow
                        },
                        new Reply()
                        {
                            Id = 6,
                            Body = "this is the reply 6",
                            TopicId = 1,
                            Created = DateTime.UtcNow
                        }
                    }
                }
            }.AsQueryable();
        }

        public bool Save()
        {
            return true;
        }

        public bool AddTopic(Topic topic)
        {
            if (topic.Id == 0)
            {
                topic.Id = 1;
            }
            return true;
        }

        public bool AddReply(Reply reply)
        {
            return false;
        }
    }
}
