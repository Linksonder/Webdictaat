using System;
using System.Collections.Generic;


namespace Webdictaat.CMS.Models
{
    public class DummyDictaatRepository : IDictaatRepository
    {
        public IEnumerable<ViewModels.Dictaat> GetDictaten()
        {
            var list = new List<ViewModels.Dictaat>();
            list.Add(new ViewModels.Dictaat() { Name = "Prog1", Location = "root/prog1", LastChange = new DateTime(2016, 9, 4 )});
            list.Add(new ViewModels.Dictaat() { Name = "Prog2", Location = "root/prog2", LastChange = new DateTime(2016, 9, 3 )});
            list.Add(new ViewModels.Dictaat() { Name = "Prog4", Location = "root/prog3", LastChange = new DateTime(2016, 9, 5 )});
            return list;
        }
    }
}