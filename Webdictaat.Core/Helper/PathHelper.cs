using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Webdictaat.Core.Helper
{
    public class PathHelper
    {
        private ConfigVariables _configVariables;

        public PathHelper(ConfigVariables configVariables)
        {
            _configVariables = configVariables;
        }

        internal string DictatenPath()
        {
            return String.Format("{0}\\{1}",
                _configVariables.DictaatRoot, _configVariables.DictatenDirectory);
        }

        public string DictaatPath(string dictaatName)
        {
            return String.Format("{0}\\{1}",
                DictatenPath(), dictaatName);

        }

        public string TemplatePath(string templateName)
        {
            return String.Format("{0}\\{1}\\dictaten\\{2}",
               _configVariables.DictaatRoot, _configVariables.TemplatesDirectory, templateName);
        }

        public string PagesPath(string dictaatName)
        {
            return String.Format("{0}\\{1}",
              DictaatPath(dictaatName), _configVariables.PagesDirectory);
        }

        /// <summary>
        /// concacts a string to a valid path to a file with extension.
        /// Default extension value is '.html'
        /// </summary>
        /// <param name="dictaatName"></param>
        /// <param name="pageName"></param>
        /// <param name="extension">Optional parameter, default value .html</param>
        /// <returns></returns>
        public string PagePath(string dictaatName, string pageName, string extension = ".html")
        {
            return String.Format("{0}\\{1}{2}",
                PagesPath(dictaatName),  pageName, extension);
        }

        public string MenuConfigPath(string dictaatName)
        {
            return String.Format("{0}\\{1}",
              DictaatPath(dictaatName), _configVariables.MenuConfigName);
        }

 
    }
}
