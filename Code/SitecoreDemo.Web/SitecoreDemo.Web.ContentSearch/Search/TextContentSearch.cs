using System;
using System.Linq;
using System.Configuration;
using System.Collections.Generic;
using Sitecore.ContentSearch;
using Sitecore.ContentSearch.Linq.Utilities;
using SitecoreDemo.Web.ContentSearch.SearchResultTypes;

namespace SitecoreDemo.Web.ContentSearch.Search
{
    public static class TextContentSearch
    {
        /// <summary>
        /// 
        /// </summary>
        private static ISearchIndex index;

        /// <summary>
        /// 
        /// </summary>
        private static ISearchIndex Index
        {
            get
            {
                var searchIndex = ConfigurationManager.AppSettings["Content.Search.Index"];
                return index ?? (index = ContentSearchManager.GetIndex(searchIndex));
            }
        }

        /// <summary>
        /// for test purposes
        /// </summary>
        /// <param name="lang"></param>
        /// <returns></returns>
        public static List<ContentSearchResultItem> Search(string lang)
        {
            using (var context = Index.CreateSearchContext())
            {
                var predicate =
                    PredicateBuilder.True<ContentSearchResultItem>()
                        .And(item => item.Language.Equals(lang, StringComparison.InvariantCultureIgnoreCase));

                var result = context.GetQueryable<ContentSearchResultItem>().Where(predicate.Compile());

                return result.ToList();
            }
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="lang"></param>
        /// <param name="keyword"></param>
        /// <returns></returns>
        public static List<ContentSearchResultItem> Search(string lang, string keyword)
        {
            using (var context = Index.CreateSearchContext())
            {
                var predicate =
                    PredicateBuilder.True<ContentSearchResultItem>()
                        .And(item => item.Language.Equals(lang, StringComparison.InvariantCultureIgnoreCase)
                            && (item.Title.Contains(keyword) || item.Text.Contains(keyword)));

                var result = context.GetQueryable<ContentSearchResultItem>().Where(predicate.Compile());

                return result.ToList();
            }
        }
    }
}
