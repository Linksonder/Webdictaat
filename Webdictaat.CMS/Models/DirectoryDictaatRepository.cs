using Microsoft.Extensions.Configuration;
using System;
using System.Linq;
using System.Collections.Generic;
using Webdictaat.Core;
using Webdictaat.CMS.Models.Resources;
using Microsoft.Extensions.Options;

namespace Webdictaat.CMS.Models
{
    public class DirectoryDictaatRepository : IDictaatRepository
    {
        private string _directoryRoot;
        private IDirectory _directory;

        public DirectoryDictaatRepository(IOptions<ConfigVariables> appSettings, IDirectory directory)
        {
            _directoryRoot = appSettings.Value.DictaatRoot;
            _directory = directory;
        }

        public IEnumerable<ViewModels.Dictaat> GetDictaten()
        {
            return _directory.GetDirectories(_directoryRoot).Select(s => new ViewModels.Dictaat(_directory, s));
        }
    }
}