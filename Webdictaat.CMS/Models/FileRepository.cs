using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using System.Web.Http;
using Webdictaat.Core;

namespace Webdictaat.CMS.Models
{
    public interface IFileRepository
    {
        ViewModels.File GetFile(string path);
    }

    public class FileRepository : IFileRepository
    {
        private IFileReader _fileReader;

        public FileRepository(IFileReader fileReader)
        {
            _fileReader = fileReader;
        }

        public ViewModels.File GetFile(string path)
        {
            var result = new File();
            if(!_fileReader.TryReadFile(path, out result))
            {
                throw new HttpResponseException(HttpStatusCode.BadRequest);
            }

            return new ViewModels.File(result);
        }
    }
}
