using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using Webdictaat.CMS.Models.Resources;
using Webdictaat.Core;

namespace Webdictaat.CMS.Models
{
    public interface IFileRepository
    {
        ViewModels.File GetFile(string dictaat, string fileName);
    }

    public class FileRepository : IFileRepository
    {
        private IFileReader _fileReader;

        private string _directoryRoot;
        private string _filesDirectory;

        public FileRepository(IOptions<ConfigVariables> appSettings, IFileReader fileReader)
        {
            _fileReader = fileReader;
            _directoryRoot = appSettings.Value.DictaatRoot;
            _filesDirectory = appSettings.Value.FilesDirectory;
        }

        public ViewModels.File GetFile(string dictaat, string fileName)
        {
            var result = new Core.File();

            string path = String.Format("{0}\\{1}\\{2}\\{3}", _directoryRoot, dictaat, _filesDirectory, fileName);

            if(!_fileReader.TryReadFile(path, out result))
            {
                throw new System.IO.FileNotFoundException();
            }

            return new ViewModels.File(result);
        }
    }
}
