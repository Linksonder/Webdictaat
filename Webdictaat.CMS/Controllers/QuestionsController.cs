using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Webdictaat.CMS.Models;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace Webdictaat.CMS.Controllers
{
    public class QuestionVM
    {
        public int Id { get; set; }
        public string Text { get; set; }

        public IList<AnswerVM> Answers { get; set; }

        public QuestionVM()
        {
            Answers = new List<AnswerVM>();
        }
    }

    public class AnswerVM
    {
        public string Text { get; set; }
        public bool isCorrect { get; set; }
    }



    [Route("api/dictaten/{dictaatName}/[controller]")]
    public class QuestionsController : Controller
    {

        public QuestionsController()
        {
            
        }

      
        [HttpPost] 
        public QuestionVM Post(string dictaatName, [FromBody]QuestionVM question)
        {
            question.Id = 1;
            question.Text += ":)";
            return question;
        }

    }
}
