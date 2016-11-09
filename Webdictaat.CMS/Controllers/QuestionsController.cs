using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Webdictaat.CMS.Models;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace Webdictaat.CMS.Controllers
{
    public class Question
    {
        public int Id { get; set; }
        public string Text { get; set; }
    }

    [Route("api/dictaten/{dictaatName}/[controller]")]
    public class QuestionsController : Controller
    {

        public QuestionsController()
        {
            
        }

      
        [HttpPost] 
        public Question Post(string dictaatName, [FromBody]Question question)
        {
            question.Id = 1;
            question.Text += ":)";
            return question;
        }

    }
}
