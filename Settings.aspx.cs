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
    public string timePerQuestion = "";

    protected void Page_Init(object sender, EventArgs e)
    {
        XmlDocument xmlDoc = XmlDataSource1.GetXmlDocument();
        gameSubject = xmlDoc.SelectSingleNode("/project/game[@gameCode=" + Session["theItemIdSession"] + "]/subject").InnerXml;
        timePerQuestion = xmlDoc.SelectSingleNode("/project/game[@timePerQuestion]").Attributes["timePerQuestion"].Value;

        gameName.Text = Server.UrlDecode(gameSubject);

        foreach (ListItem item in gameTimeDropdown.Items)
        {
            if (item.Value == timePerQuestion)
            {
                gameTimeDropdown.ClearSelection();
                item.Selected = true;
                break;
            }
        }
    }

    protected void Page_Load(object sender, EventArgs e)
    {
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
        if (Server.UrlEncode(Request.Form["gameName"]) != gameSubject || Server.UrlEncode(Request.Form["gameTimeDropdown"]) != timePerQuestion)
        {
            goBackPopup.Style.Add("display", "block");
            modalBackdrop.Style.Add("display", "block");
        }
        else
        {
            Response.Redirect("GamesList.aspx");
        }
    }

    protected void exitBtn_Click(object sender, EventArgs e)
    {
        Response.Redirect("GamesList.aspx");
    }

    protected void stayBtn_Click(object sender, EventArgs e)
    {
        goBackPopup.Style.Add("display", "none");
        modalBackdrop.Style.Add("display", "none");
    }
}