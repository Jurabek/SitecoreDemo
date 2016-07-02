using System;
using Sitecore.ContentSearch;
using Sitecore.ContentSearch.SearchTypes;

namespace SitecoreDemo.Web.ContentSearch.SearchResultTypes
{
    public class ContentSearchResultItem : SearchResultItem
    {
        /// <summary>
        /// 
        /// </summary>
        [IndexField("Title")]
        public string Title { get; set; }

        /// <summary>
        /// 
        /// </summary>
        [IndexField("Text")]
        public string Text { get; set; }
    }
}
