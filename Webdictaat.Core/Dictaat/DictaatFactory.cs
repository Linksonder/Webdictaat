﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Webdictaat.Core.Extensions;
using Webdictaat.Domain;


namespace Webdictaat.Core
{
    public interface IDictaatFactory
    {
        Domain.Dictaat GetDictaat(string name);
    }

    public class DictaatFactory : IDictaatFactory
    {
        private string _directoryRoot;
        private string _pagesDirectory;

        private Core.IDirectory _directory;
        private Core.IFile _file;
        private Core.IMenuFactory _menuFactory;

        public DictaatFactory(string directoryRoot, string pagesDirectory, string menuConfigName,
            Core.IDirectory directory, Core.IFile file)
        {
            _directoryRoot = directoryRoot;
            _pagesDirectory = pagesDirectory;
            _directory = directory;
            _file = file;
            _menuFactory = new MenuFactory(directoryRoot, menuConfigName, _file);
        }

        public Dictaat GetDictaat(string name)
        {
            Dictaat dictaat = new Dictaat();
            dictaat.PagesDirectory = _pagesDirectory;
            dictaat.Name = name;
            dictaat.Location = String.Format("{0}\\{1}", _directoryRoot, name);
            dictaat.Pages = _directory.GetFilesSummary(dictaat.Location + "\\" + _pagesDirectory);
            dictaat.Menu = _menuFactory.GetMenu(name);

            return dictaat;
        }


    }
}
