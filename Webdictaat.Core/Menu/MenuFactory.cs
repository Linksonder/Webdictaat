using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Webdictaat.Core.Extensions;
using Webdictaat.Domain;


namespace Webdictaat.Core
{
    public interface IMenuFactory
    {
        Domain.Menu GetMenu(string dictaatName);

        Domain.Menu EditMenu(string dictaatName, Domain.Menu menu);
    }

    public class MenuFactory : IMenuFactory
    {
        private string _directoryRoot;
        private string _menuConfigName;

        private Core.IFile _file;

        public MenuFactory(string directoryRoot, string menuConfigName, Core.IFile file)
        {
            _directoryRoot = directoryRoot;
            _menuConfigName = menuConfigName;
            _file = file;
        }

        public Menu GetMenu(string dictaatName)
        {
            var path = String.Format("{0}\\{1}\\{2}", _directoryRoot, dictaatName, _menuConfigName);
            Menu menu = null;
            string menuString = _file.TryReadFile(path);

            if(menuString != null)
            {
                menu = Newtonsoft.Json.JsonConvert.DeserializeObject<Menu>(menuString);
            }
            return menu;
        }

        public Menu EditMenu(string dictaatName, Menu menu)
        {
            var path = String.Format("{0}\\{1}\\{2}", _directoryRoot, dictaatName, _menuConfigName);

            var menuString = Newtonsoft.Json.JsonConvert.SerializeObject(menu, Newtonsoft.Json.Formatting.Indented);
            if (_file.TryEditFile(path, menuString))
            {
                return menu;
            }

            return null;
        }
    }
}
