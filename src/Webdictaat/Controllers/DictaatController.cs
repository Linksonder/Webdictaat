using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using System.IO;
using Webdictaat.Model.Repository;

// For more information on enabling MVC for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace Webdictaat.Controllers
{
    public class DictaatController : Controller
    {
        private IDictaatRepo _dictaatRepo;

        public DictaatController(IDictaatRepo dictaatRepo)
        {
            this._dictaatRepo = dictaatRepo;
        }

        // GET: /<controller>/
        public IActionResult Index()
        {
            string[] dictaten = _dictaatRepo.GetDictaten();
            return View(dictaten);
        }

        [HttpPost]
        public IActionResult Create(string name)
        {
            _dictaatRepo.CreateDictaat(name);
            return RedirectToAction("index");
        }

        [HttpPost]
        public IActionResult Delete(string name)
        {
            _dictaatRepo.DeleteDictaat(name);
            return RedirectToAction("index");
        }

        public IActionResult Detail(string name)
        {
            var vm = _dictaatRepo.GetDictaat(name);
            return View(vm);
        }
    }
}
