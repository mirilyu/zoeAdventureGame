using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Xml;

public partial class Settings : System.Web.UI.Page
{
    public string gameSubject = "";
    protected void Page_Load(object sender, EventArgs e)
    {
        XmlDocument xmlDoc = XmlDataSource1.GetXmlDocument();
        gameSubject = xmlDoc.SelectSingleNode("/project/game[@gameCode=" + Session["theItemIdSession"] + "]/subject").InnerXml;
        var timePerQuestion = xmlDoc.SelectSingleNode("/project/game[@timePerQuestion]").Attributes["timePerQuestion"];
        gameName.Text = Server.UrlDecode(gameSubject);

        foreach (ListItem item in gameTimeDropdown.Items)
        {
            if (item.Value == timePerQuestion.Value)
            {
                item.Selected = true;
                break;
            }
        }
    }

    protected void saveGame_Click(object sender, EventArgs e)
    {
        XmlDocument xmlDoc = XmlDataSource1.GetXmlDocument();
        var newSubject = Server.UrlEncode(Request.Form["gameName"]);
        var newTime = Server.UrlEncode(Request.Form["gameTimeDropdown"]);
        var xmlNode = xmlDoc.SelectSingleNode("/project/game[@gameCode=" + Session["theItemIdSession"] + "]");

        xmlDoc.SelectSingleNode("/project/game[@gameCode=" + Session["theItemIdSession"] + "]/subject").InnerXml = newSubject;
        xmlNode.Attributes["timePerQuestion"].Value = newTime;

        XmlDataSource1.Save();

        Response.Redirect("GamesList.aspx");
    }

    protected void goBack_Click(object sender, EventArgs e)
    {
        Response.Redirect("GamesList.aspx");
    }
}