using Microsoft.Extensions.Configuration;
using System;
using System.Linq;
using System.Collections.Generic;
using Webdictaat.Core;
using Microsoft.Extensions.Options;
using Webdictaat.CMS.ViewModels;
using Webdictaat.Domain;

namespace Webdictaat.CMS.Models
{
    public interface IQuestionRepository
    {
        QuestionVM CreateQuestion(QuestionVM question);
    }

    public class QuestionRepository : IQuestionRepository
    {
        private DomainContext _context;

        public QuestionRepository(DomainContext context)
        {
            _context = context; 
        }

        public QuestionVM CreateQuestion(QuestionVM question)
        {
            var q = new Question()
            {
                Text = question.Text,
                Answers = question.Answers.Select(a =>
                    new Answer() { Text = a.Text, isCorrect = a.isCorrect }).ToList()
            };

            _context.Questions.Add(q);
            _context.SaveChanges();
            question.Id = q.Id;
            return question;
                
        }
    }
}