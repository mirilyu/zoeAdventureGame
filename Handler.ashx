<%@ WebHandler Language="C#" Class="Handler" %>

using System;
using System.Web;
using System.Xml;
using Newtonsoft.Json;

public class Handler : IHttpHandler {

    public void ProcessRequest (HttpContext context)
    {
        context.Response.ContentType = "text/plain";
        XmlDocument myDoc = new XmlDocument();
        myDoc.Load(context.Server.MapPath("~/XML/XMLFile.xml"));
        string gameCode = context.Request["gameCode"];
        XmlNode gameNode = myDoc.SelectSingleNode("//game[@gameCode='" + gameCode + "']");
        if (gameNode != null)
        {
            //gameNode.SelectNodes("answers/answer")[qIndex].Attributes["img"].InnerText
            if(gameNode.Attributes["isPublished"].InnerText != "False")
            {
                string jsonText = JsonConvert.SerializeXmlNode(gameNode);
                context.Response.Write(jsonText);
            }
            else
            {
                context.Response.Write("game not found");
            }
        }
        else
        {
            context.Response.Write("game not found");
        }
    }

    public bool IsReusable {
        get {
            return true;
        }
    }

}