using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Webdictaat.CMS.ViewModels
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
}
