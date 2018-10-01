using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Xml;

public partial class Edit : System.Web.UI.Page
{

    public string gameSubject = "";
    public string timePerQuestion = "";
    public string path = "";
    public string gameCode;
    public XmlNodeList gameQuestions;

    protected void Page_Init(object sender, EventArgs e)
    {
        path = "/project/game[@gameCode=" + Session["theItemIdSession"] + "]/questions/question".ToString();
        XmlDataSource2.XPath = path;

        XmlDocument xmlDoc = XmlDataSource1.GetXmlDocument();
        gameSubject = xmlDoc.SelectSingleNode("/project/game[@gameCode=" + Session["theItemIdSession"] + "]/subject").InnerXml;
    }

    protected void Page_Load(object sender, EventArgs e)
    {
    }

    protected void goBack_Click(object sender, EventArgs e)
    {
       
    }

    protected void saveQuestion_Click(object sender, EventArgs e)
    {
        // loading XML file
        XmlDocument xmlDoc = XmlDataSource1.GetXmlDocument();

        // creating <question> node
        XmlElement newQNode = xmlDoc.CreateElement("question");
        newQNode.SetAttribute("numberOfTries", "0");

        // creating <questionText> node
        XmlElement newQTextNode = xmlDoc.CreateElement("questionText");
        newQTextNode.InnerXml = Server.UrlEncode(qText.Text);

        // insert <questionText> into <question>
        newQNode.AppendChild(newQTextNode);

        // creating <answers> node to hold all answers
        XmlElement newAnswers = xmlDoc.CreateElement("answers");

        // creating <answer1> node
        XmlElement answer1 = xmlDoc.CreateElement("answer");
        answer1.SetAttribute("AnsType", "text");
        answer1.SetAttribute("isCorrect", "True");
        answer1.InnerXml = Server.UrlEncode(option1Text.Text);
        newAnswers.AppendChild(answer1);

        // creating <answer2> node
        if (option2Text.Text.Length > 0)
        {
            XmlElement answer2 = xmlDoc.CreateElement("answer");
            answer2.SetAttribute("AnsType", "text");
            answer2.InnerXml = Server.UrlEncode(option2Text.Text);
            newAnswers.AppendChild(answer2);
        }

        // creating <answer3> node
        if (option3Text.Text.Length > 0)
        {
            XmlElement answer3 = xmlDoc.CreateElement("answer");
            answer3.SetAttribute("AnsType", "text");
            answer3.InnerXml = Server.UrlEncode(option3Text.Text);
            newAnswers.AppendChild(answer3);
        }

        // creating <answer4> node
        if (option4Text.Text.Length > 0)
        {
            XmlElement answer4 = xmlDoc.CreateElement("answer");
            answer4.SetAttribute("AnsType", "text");
            answer4.InnerXml = Server.UrlEncode(option4Text.Text);
            newAnswers.AppendChild(answer4);
        }

        // insert <answers> into <question>
        newQNode.AppendChild(newAnswers);

        // inserting <questions> in XML file
        int questionsNumber = Convert.ToInt16(xmlDoc.SelectSingleNode("/project/game[@gameCode=" + Session["theItemIdSession"] + "]").Attributes["questionsNumber"].InnerText);
        questionsNumber++;
        string newQuestionsNumber = questionsNumber.ToString();

        XmlNode game = xmlDoc.SelectSingleNode("/project/game[@gameCode=" + Session["theItemIdSession"] + "]");
        game.Attributes["questionsNumber"].InnerText = newQuestionsNumber;

        XmlNode gameQuestions = xmlDoc.SelectNodes("/project/game[@gameCode=" + Session["theItemIdSession"] + "]/questions").Item(0);
        gameQuestions.AppendChild(newQNode);
        XmlDataSource1.Save();

        // cleaning the gameName form field
        qText.Text = "";
        option1Text.Text = "";
        option2Text.Text = "";
        option3Text.Text = "";
        option4Text.Text = "";
    }

    protected void rowCommand(object sender, GridViewCommandEventArgs e)
    {
        switch (e.CommandName)
        {
            case "qDelete":
                break;

            case "qEdit":
                break;
        }
    }
}