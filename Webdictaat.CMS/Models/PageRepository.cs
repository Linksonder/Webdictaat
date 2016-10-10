﻿using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using Webdictaat.CMS.Models.Resources;
using Webdictaat.CMS.ViewModels;

namespace Webdictaat.CMS.Models
{
    public interface IPageRepository
    {
        ViewModels.DictaatPage GetDictaatPage(string dictaatName, string fileName);
        IEnumerable<ViewModels.DictaatPageSummary> GetDictaatPages(string dictaatName);
        DictaatPageSummary CreateDictaatPage(string dictaatName, DictaatPageSummary page);
        void DeleteDictaatPage(string dictaatName, string page);
        DictaatPage EditDictaatPage(string dictaatName, DictaatPage page);
    }

    public class PageRepository : IPageRepository
    {
        private Core.IFile _file;
        private Core.IDirectory _directory;

        private string _directoryRoot;
        private string _pagesDirectory;

        public PageRepository(
            IOptions<ConfigVariables> appSettings, 
            Core.IDirectory directory,
            Core.IFile file)
        {
            _file = file;
            _directory = directory;
            _directoryRoot = appSettings.Value.DictaatRoot;
            _pagesDirectory = appSettings.Value.PagesDirectory;
        }


        public IEnumerable<ViewModels.DictaatPageSummary> GetDictaatPages(string dictaatName)
        {
            string path = String.Format("{0}\\{1}\\{2}", _directoryRoot, dictaatName, _pagesDirectory);
            return _directory.GetFilesSummary(path)
                .Select(f => new ViewModels.DictaatPageSummary(f));
                
        }

        public ViewModels.DictaatPage GetDictaatPage(string dictaatName, string fileName)
        {
            string path = String.Format("{0}\\{1}\\{2}\\{3}.html", _directoryRoot, dictaatName, _pagesDirectory, fileName);
            string content = _file.TryReadFile(path);

            if (content == null)
            {
                //wellicht in de toekomst 404 terug sturen? File not found?
                throw new System.IO.FileNotFoundException();
            }

            return new ViewModels.DictaatPage()
            {
                Name = fileName,
                Source = content
            };
        }

        public DictaatPageSummary CreateDictaatPage(string dictaatName, ViewModels.DictaatPageSummary page)
        {
            string path = String.Format("{0}\\{1}\\{2}\\{3}.html", 
                _directoryRoot, dictaatName, _pagesDirectory, page.Name);

            if (!_file.TryCreateFile(path))
            {
                //wellicht in de toekomst 404 terug sturen? File not found?
                throw new Exceptions.PageAlreadyExcistsException();
            }


            return page;
        }

        public void DeleteDictaatPage(string dictaatName, string pageName)
        {
            string path = String.Format("{0}\\{1}\\{2}\\{3}.html",
              _directoryRoot, dictaatName, _pagesDirectory, pageName);

            if (!_file.TryDeleteFile(path))
            {
                //wellicht in de toekomst 404 terug sturen? File not found?
                throw new Exceptions.PageNotFoundException();
            }
        }

        public DictaatPage EditDictaatPage(string dictaatName, DictaatPage page)
        {
            string path = String.Format("{0}\\{1}\\{2}\\{3}.html",
               _directoryRoot, dictaatName, _pagesDirectory, page.Name);

            if (!_file.TryEditFile(path, page.Source))
            {
                //wellicht in de toekomst 404 terug sturen? File not found?
                throw new Exceptions.PageNotFoundException();
            }

            return GetDictaatPage(dictaatName, page.Name); 
        }
    }
}
