using Microsoft.Extensions.Configuration;
using System;
using System.Linq;
using System.Collections.Generic;
using Webdictaat.Core;
using Webdictaat.CMS.Models.Resources;
using Microsoft.Extensions.Options;


namespace Webdictaat.CMS.Models
{
    public interface IDictaatRepository
    {
        IEnumerable<ViewModels.DictaatSummary> GetDictaten();
        ViewModels.Dictaat getDictaat(string name);
    }

    public class DirectoryDictaatRepository : IDictaatRepository
    {
        private string _directoryRoot;
        private IDirectory _directory;

        public DirectoryDictaatRepository(IOptions<ConfigVariables> appSettings, IDirectory directory)
        {
            _directoryRoot = appSettings.Value.DictaatRoot;
            _directory = directory;
        }

        public IEnumerable<ViewModels.DictaatSummary> GetDictaten()
        {
            return _directory.GetDirectoriesSummary(_directoryRoot)
                .Select(s => new ViewModels.DictaatSummary(s));
        }

        public ViewModels.Dictaat getDictaat(string name)
        {
            DirectoryDetails directoryDetails = _directory.GetDirectoryDetails(_directoryRoot, name);
            return new ViewModels.Dictaat(directoryDetails);
                
        }
    }
}