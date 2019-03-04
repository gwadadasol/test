using System;
using System.Collections.Generic;
using System.Data.Entity.Migrations;

namespace MessageBoard.Data
{
    public  class MessageBoardMigrationsConfiguration:DbMigrationsConfiguration<MessageBoardContext>
    {
        public MessageBoardMigrationsConfiguration()
        {
            this.AutomaticMigrationDataLossAllowed = true;
            this.AutomaticMigrationsEnabled = true;
        }

        protected override void Seed(MessageBoardContext context)
        {
            base.Seed(context);

#if DEBUG
            if (context.Topics.Local.Count == 0)
            {
                var topic = new Topic()
                {
                    Title = "I like ASP.NET MVC",
                    Body = "It is making things easier...really!",
                    Created = DateTime.UtcNow,
                    Replies = new List<Reply>()
                    {
                        new Reply()
                        {
                            Body = "I love this tool",
                            Created = DateTime.UtcNow
                        },
                        new Reply()
                        {
                            Body = "Me too",
                            Created = DateTime.UtcNow
                        },
                        new Reply()
                        {
                            Body = "Aw shucks",
                            Created = DateTime.UtcNow
                        }

                    }
                };

                context.Topics.Add(topic);

                var anotherTopic = new Topic()
                {
                    Title = "I like Ruby too!",
                    Body = "Ruby on Rail is popular",
                    Created = DateTime.UtcNow
                };

                context.Topics.Add(anotherTopic);

                try
                {
                    context.SaveChanges();
                }
                catch(Exception ex)
                {
                    var msg = ex.Message;
                }
            }
#endif
            
        }
    }
}