using SitecoreDemo.Web.ContentSearch.SearchResultTypes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using SitecoreDemo.Web.ContentSearch.Models;

namespace SitecoreDemo.Web.ContentSearch.Extensions
{
    public static class SearchExtensions
    {
        /// <summary>
        /// 
        /// </summary>
        /// <param name="contentSearchResultItems"></param>
        /// <returns></returns>
        public static IEnumerable<TextPage> ToTextPageItems(this IEnumerable<ContentSearchResultItem> contentSearchResultItems)
        {
            var items = from item in contentSearchResultItems
                        select new TextPage
                        {
                            Title = item.Title,
                            Text = item.Text,
                            Url = item.Url
                        };

            return items;
        }

    }
}
