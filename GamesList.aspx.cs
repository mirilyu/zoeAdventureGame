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
        newGameSubjectNode.InnerXml = Server.UrlEncode(gameName.Text);
        newGameNode.AppendChild(newGameSubjectNode);

        // inserting the new node in XML file
        XmlNode firstGame = xmlDoc.SelectNodes("/project/game").Item(0);
        xmlDoc.SelectSingleNode("/project").InsertBefore(newGameNode, firstGame);
        XmlDataSource1.Save();
        GridView1.DataBind();

        // cleaning the gameName form field
        gameName.Text = "";
    }

    protected void isPublished_CheckedChanged(object sender, EventArgs e)
    {
        // loading XML file
        XmlDocument xmlDoc = XmlDataSource1.GetXmlDocument();

        // getting the relevant id
        CheckBox myCheckBox = (CheckBox)sender;
        string theId = myCheckBox.Attributes["theItemId"];

        // switching the checkbox value
        XmlNode theGame = xmlDoc.SelectSingleNode("/project/game[@gameCode=" + theId + "]");
        bool newIsPublished = myCheckBox.Checked;
        theGame.Attributes["isPublished"].InnerText = newIsPublished.ToString();

        // saving the XML file
        XmlDataSource1.Save();
        GridView1.DataBind();
    }

    protected void GridView1_RowCommand(object sender, GridViewCommandEventArgs e)
    {
        ImageButton i = (ImageButton)e.CommandSource;
        string theId = i.Attributes["theItemId"];
        Session["theItemIdSession"] = i.Attributes["theItemId"];

        switch (e.CommandName)
        {
            case "deleteGame":
                deleteGame(theId);
                break;

            case "editGame":
                Response.Redirect("Edit.aspx");
                break;

            case "goToSettings":
                Response.Redirect("Settings.aspx");
                break;
        }
    }

    void deleteGame(string theId)
    {
        confirmDeleteBtn.Attributes["data-id"] = theId;
        deleteGamePopup.Style.Add("display", "block");
        modalBackdrop.Style.Add("display", "block");
    }

    protected void confirmDeleteBtn_Click(object sender, EventArgs e)
    {
        XmlDocument Document = XmlDataSource1.GetXmlDocument();
        XmlNode node = Document.SelectSingleNode("/project/game[@gameCode='" + confirmDeleteBtn.Attributes["data-id"] + "']");
        node.ParentNode.RemoveChild(node);

        XmlDataSource1.Save();
        GridView1.DataBind();

        deleteGamePopup.Style.Add("display", "none");
        modalBackdrop.Style.Add("display", "none");
    }

    protected void cancelDeleteBtn_Click(object sender, EventArgs e)
    {
        deleteGamePopup.Style.Add("display", "none");
        modalBackdrop.Style.Add("display", "none");
    }
}