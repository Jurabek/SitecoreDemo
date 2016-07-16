using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Sitecore.Mvc.Controllers;
using SitecoreDemo.Web.ContentSearch;
using SitecoreDemo.Web.ContentSearch.Search;
using SitecoreDemo.Web.ContentSearch.SearchResultTypes;
using SitecoreDemo.Web.ContentSearch.Extensions;
using Sitecore.Sites;

namespace SitecoreDemo.Web.Base.Controllers
{
    public class ContentSearchController : SitecoreController
    {
        [HttpPost]
        public ActionResult GetTextPages(string lang, string keyword, int page)
        {
            var pageIndex = page - 1;
            var contentSearchResultItems = TextContentSearch.Search(lang, keyword);

            var response = new
            {
                textPages = contentSearchResultItems.Skip(pageIndex * 12).Take(12).ToTextPageItems(),
                itemsTotal = contentSearchResultItems.Count(),
                pagesTotal = contentSearchResultItems.Count() % 12 == 0 ? contentSearchResultItems.Count() / 12 : (contentSearchResultItems.Count() / 12) + 1
            };

            return this.Json(response, JsonRequestBehavior.AllowGet);
        }

        [HttpGet]
        public ActionResult GetCurrentLanguage()
        {
            var response = new
            {
                currentLanguage = SiteContext.Current.Language
            };

            return this.Json(response, JsonRequestBehavior.AllowGet);
        }

    }
}