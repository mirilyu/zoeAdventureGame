using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Xml;

public partial class GamesList : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        if (Session["isAuthenticated"] != null)
        {
            
        }
        else
        {
            Response.Redirect("Login.aspx");
        }
    }

    protected void createGame_Click(object sender, EventArgs e)
    {
        // loading XML file
        XmlDocument xmlDoc = XmlDataSource1.GetXmlDocument();

        // updating idCounter
        int myId = Convert.ToInt16(xmlDoc.SelectSingleNode("//idCounter").InnerXml);
        myId++;
        string myNewId = myId.ToString();
        xmlDoc.SelectSingleNode("//idCounter").InnerXml = myNewId;

        // creating game node
        XmlElement newGameNode = xmlDoc.CreateElement("game");
        newGameNode.SetAttribute("gameCode", myNewId);
        newGameNode.SetAttribute("isPublished", "false");
        newGameNode.SetAttribute("questionsNumber", "0");
        newGameNode.SetAttribute("timePerQuestion", "50");

        // creating game subject node
        XmlElement newGameSubjectNode = xmlDoc.CreateElement("subject");
        newGameSubjectNode.InnerXml = gameName.Text;
        newGameNode.AppendChild(newGameSubjectNode);

        // inserting the new node in XML file
        XmlNode firstGame = xmlDoc.SelectNodes("/project/game").Item(0);
        xmlDoc.SelectSingleNode("/project").InsertBefore(newGameNode, firstGame);
        XmlDataSource1.Save();
        GridView1.DataBind();

        // cleaning the gameName form field
        gameName.Text = "";
    }
}