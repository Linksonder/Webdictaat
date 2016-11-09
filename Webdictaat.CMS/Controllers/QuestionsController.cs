﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Webdictaat.CMS.Models;
using Webdictaat.CMS.ViewModels;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace Webdictaat.CMS.Controllers
{

    [Route("api/dictaten/{dictaatName}/[controller]")]
    public class QuestionsController : Controller
    {
        private IQuestionRepository _questionRepo;

        public QuestionsController(IQuestionRepository questionRepo)
        {
            _questionRepo = questionRepo;
        }

      
        [HttpPost] 
        public QuestionVM Post(string dictaatName, [FromBody]QuestionVM question)
        {
            var result = _questionRepo.CreateQuestion(question);
            return result;
        }

    }
}
