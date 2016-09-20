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
    public interface IPageRepository
    {
        ViewModels.DictaatPage GetDictaatPage(string dictaat, string fileName);
    }

    public class PageRepository : IPageRepository
    {
        private IFileReader _fileReader;

        private string _directoryRoot;
        private string _filesDirectory;

        public PageRepository(IOptions<ConfigVariables> appSettings, IFileReader fileReader)
        {
            _fileReader = fileReader;
            _directoryRoot = appSettings.Value.DictaatRoot;
            _filesDirectory = appSettings.Value.PagesDirectory;
        }

        public ViewModels.DictaatPage GetDictaatPage(string dictaat, string fileName)
        {
            string content = null;
            string path = String.Format("{0}\\{1}\\{2}\\{3}", _directoryRoot, dictaat, _filesDirectory, fileName);

            if (!_fileReader.TryReadFile(path, out content))
            {
                throw new System.IO.FileNotFoundException();
            }


            return new ViewModels.DictaatPage()
            {
                Dictaat = dictaat,
                Name = fileName,
                Source = content
            };
        }
    }
}
