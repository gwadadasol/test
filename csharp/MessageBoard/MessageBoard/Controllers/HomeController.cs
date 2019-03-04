﻿using MessageBoard.Data;
using MessageBoard.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MessageBoard.Controllers
{
    public class HomeController : Controller
    {
        private IMailService _mail;
        private IMessageBoardRepository _repo;

        public HomeController(IMailService mail, IMessageBoardRepository repo)
        {
            _mail = mail;
            _repo = repo;
        }
        public ActionResult Index()
        {


            var topics = _repo.GetTopics();

            return View(topics);
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }

        [HttpPost]
        public ActionResult Contact(ContactModel model)
        {

            var msg = string.Format("Comment From: {1}{0}Email:{2}{0}omment:{3}",
                Environment.NewLine,
                model.first_name,
                model.email,
                model.message);

            if (_mail.SendMail("noreply@yourdomain.com",
                "foo@yourdomain.com",
                "Website Contact", msg))
            {
                ViewBag.MailSent = true;
            }

            //ViewBag.Message = "Your contact page.";

            return View();
        }

        [Authorize]
        public ActionResult MyMessage()
        {
            return View();
        }


    }
}