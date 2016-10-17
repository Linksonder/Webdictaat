using Microsoft.Extensions.Options;
using Moq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Webdictaat.CMS.Models;
using Webdictaat.CMS.Models.Resources;
using Webdictaat.CMS.ViewModels;
using Webdictaat.Core;
using Xunit;

namespace Webdictaat.CMS.Test
{
    public class DictaatFactoryTest
    {
        DictaatFactory _fac;

        public DictaatFactoryTest()
        {
            _fac = new DictaatFactory("C:\\webdictaat.test", "pages", "menu-config.json", new Directory(), new File());


        }

        [Fact]
        public void DictaatFactory_CreateDictaat_Success()
        {
            //arrange
            _fac.CreateDictaat("a");

            //assert
            System.IO.DirectoryInfo dir = new System.IO.DirectoryInfo("C:\\webdictaat.test\\a");
            Assert.True(dir.Exists);
            Assert.Equal(2, dir.GetFiles().Length);


            //clean up
            System.IO.Directory.Delete("C:\\webdictaat.test\\a", true);
        }





    }
}
