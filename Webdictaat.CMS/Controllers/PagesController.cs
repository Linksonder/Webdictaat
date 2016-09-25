using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Webdictaat.Domain;
using Webdictaat.CMS.Models;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace Webdictaat.CMS.Controllers
{
    [Route("api/dictaten/{dictaatName}/[controller]")]
    public class PagesController : Controller
    {
        private IPageRepository _pageRepo;

        public PagesController(IPageRepository pageRepo)
        {
            _pageRepo = pageRepo;
        }

        [HttpGet("{pageName}")]
        public ViewModels.DictaatPage Get(string dictaatName, string pageName)
        {
            return _pageRepo.GetDictaatPage(dictaatName, pageName);
        }

        // GET: api/values
        [HttpGet]
        public IEnumerable<ViewModels.DictaatPageSummary> Get(string dictaatName)
        {
            return _pageRepo.GetDictaatPages(dictaatName);
        }

        // POST api/values
        [HttpPost]
        public ViewModels.DictaatPageSummary Post(string dictaatName, [FromBody]ViewModels.DictaatPageSummary page)
        {
            return _pageRepo.CreateDictaatPage(dictaatName, page);
        }


        // POST api/values
        [HttpDelete("{pageName}")]
        public void Delete(string dictaatName, string pageName)
        {
            _pageRepo.DeleteDictaatPage(dictaatName, pageName);
        }

    }
}
