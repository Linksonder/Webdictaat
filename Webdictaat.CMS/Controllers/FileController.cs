using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Webdictaat.CMS.Models;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace Webdictaat.CMS.Controllers
{
    [Route("api/Dictaat/{repo}/[controller]")]
    public class FileController : Controller
    {
        private IFileRepository _fileRepo;

        public FileController(IFileRepository fileRepo)
        {
            _fileRepo = fileRepo;
        }

        // GET api/values/5
        [HttpGet("{fileName}")]
        public ViewModels.File Get(string repo, string fileName)
        {
            return _fileRepo.GetFile(repo, fileName);
        }
    }
}
