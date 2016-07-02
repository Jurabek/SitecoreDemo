using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace SitecoreDemo.Web.Base
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            routes.MapRoute(
                "GetTextPages",
                "textdata-result/GetTextPages",
                new { controller = "ContentSearch", action = "GetTextPages" });
        }
    }
}
