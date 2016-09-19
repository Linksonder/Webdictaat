using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Webdictaat.CMS.Models;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace Webdictaat.CMS.Controllers
{
    [Route("api/[controller]")]
    public class FileController : Controller
    {
        private IFileRepository _fileRepo;

        public FileController(IFileRepository fileRepo)
        {
            _fileRepo = fileRepo;
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public ViewModels.File Get(string path)
        {
            return _fileRepo.GetFile(path);
        }
    }
}
