﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Webdictaat.CMS.Models;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace Webdictaat.CMS.Controllers
{
    [Route("api/[controller]")]
    public class DictatenController : Controller
    {
        private IDictaatRepository _dictaatRepo;

        public DictatenController(IDictaatRepository dictaatRepo)
        {
            _dictaatRepo = dictaatRepo;
        }


        // GET: api/values
        [HttpGet]
        public IEnumerable<ViewModels.Dictaat> Get()
        {
            var dictaten = _dictaatRepo.GetDictaten();
            return dictaten;
        }
      
    }
}
