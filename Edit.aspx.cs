using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Xml;

public partial class Edit : System.Web.UI.Page
{
    protected void Page_Init(object sender, EventArgs e)
    {
        var path = "/project/game[@gameCode=" + Session["theItemIdSession"] + "]/questions/question".ToString();
        XmlDataSource2.XPath = path;

        XmlDocument xmlDoc = XmlDataSource1.GetXmlDocument();
        qNumber.Text = Server.UrlDecode(xmlDoc.SelectSingleNode("/project/game[@gameCode=" + Session["theItemIdSession"] + "]").Attributes["questionsNumber"].InnerText);
        gameSubject.Text = Server.UrlDecode(xmlDoc.SelectSingleNode("/project/game[@gameCode=" + Session["theItemIdSession"] + "]/subject").InnerXml);
    }

    void resetForm()
    {
        qText.Text = "";
        option1Text.Text = "";
        option2Text.Text = "";
        option3Text.Text = "";
        option4Text.Text = "";

        saveQBtn.Attributes["qType"] = "newQ";
        saveQBtn.Attributes["qIndex"] = "";
    }

    protected void createNewQ_Click(object sender, EventArgs e)
    {
        resetForm();
    }

    protected void Page_Load(object sender, EventArgs e)
    {
    }

    protected void goBack_Click(object sender, EventArgs e)
    {
       
    }

    protected void saveQuestion_Click(object sender, EventArgs e)
    {
        if(saveQBtn.Attributes["qType"] == "newQ")
        {
            saveNewQuestion();
        }
        else
        {
            updateQuestion(Convert.ToInt16(saveQBtn.Attributes["qIndex"]));
        }
    }

    void saveNewQuestion()
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

        // updating questionsNumber attribute
        int questionsNumber = Convert.ToInt16(xmlDoc.SelectSingleNode("/project/game[@gameCode=" + Session["theItemIdSession"] + "]").Attributes["questionsNumber"].InnerText);
        questionsNumber++;
        string newQuestionsNumber = questionsNumber.ToString();

        XmlNode game = xmlDoc.SelectSingleNode("/project/game[@gameCode=" + Session["theItemIdSession"] + "]");
        game.Attributes["questionsNumber"].InnerText = newQuestionsNumber;

        // inserting <questions> in XML file
        XmlNode gameQuestions = xmlDoc.SelectNodes("/project/game[@gameCode=" + Session["theItemIdSession"] + "]/questions").Item(0);
        gameQuestions.AppendChild(newQNode);
        XmlDataSource1.Save();
        GridView1.DataBind();

        // cleaning the gameName form field
        resetForm();
    }

    void updateQuestion(int RowIndex)
    {
        // loading XML file
        XmlDocument xmlDoc = XmlDataSource1.GetXmlDocument();

        // getting selected question
        XmlNode editedQ = xmlDoc.SelectNodes("/project/game[@gameCode=" + Session["theItemIdSession"] + "]/questions/question")[RowIndex];

        editedQ["questionText"].InnerXml = Server.UrlEncode(qText.Text);

        // option 1
        if(option1Text.Text.Length > 0)
        {
            if (editedQ.SelectNodes("answers/answer")[0] != null)
            {
                editedQ.SelectNodes("answers/answer")[0].InnerXml = option1Text.Text != "" ? Server.UrlEncode(option1Text.Text) : null;
            }
            else
            {
                addAnswerOption(option1Text.Text, editedQ, true);
            }
        }

        if (option1Text.Text.Length == 0)
        {
            if (editedQ.SelectNodes("answers/answer")[0] != null)
            {
                editedQ.LastChild.RemoveChild(editedQ.SelectNodes("answers/answer")[0]);
            }
        }

        // option 2
        if (option2Text.Text.Length > 0)
        {
            if (editedQ.SelectNodes("answers/answer")[1] != null)
            {
                editedQ.SelectNodes("answers/answer")[1].InnerXml = option2Text.Text != "" ? Server.UrlEncode(option2Text.Text) : null;
            }
            else
            {
                addAnswerOption(option2Text.Text, editedQ, false);
            }
        }

        if (option2Text.Text.Length == 0)
        {
            if (editedQ.SelectNodes("answers/answer")[1] != null)
            {
                editedQ.LastChild.RemoveChild(editedQ.SelectNodes("answers/answer")[1]);
            }
        }

        // option 3
        if (option3Text.Text.Length > 0)
        {
            if (editedQ.SelectNodes("answers/answer")[2] != null)
            {
                editedQ.SelectNodes("answers/answer")[2].InnerXml = option3Text.Text != "" ? Server.UrlEncode(option3Text.Text) : null;
            }
            else
            {
                addAnswerOption(option3Text.Text, editedQ, false);
            }
        }

        if (option3Text.Text.Length == 0)
        {
            if (editedQ.SelectNodes("answers/answer")[2] != null)
            {
                editedQ.LastChild.RemoveChild(editedQ.SelectNodes("answers/answer")[2]);
            }
        }

        // option 4
        if (option4Text.Text.Length > 0)
        {
            if (editedQ.SelectNodes("answers/answer")[3] != null)
            {
                editedQ.SelectNodes("answers/answer")[3].InnerXml = option4Text.Text != "" ? Server.UrlEncode(option4Text.Text) : null;
            }
            else
            {
                addAnswerOption(option4Text.Text, editedQ, false);
            }
        }

        if (option4Text.Text.Length == 0)
        {
            if (editedQ.SelectNodes("answers/answer")[3] != null)
            {
                editedQ.LastChild.RemoveChild(editedQ.SelectNodes("answers/answer")[3]);
            }
        }
        

        XmlDataSource1.Save();
        GridView1.DataBind();
    }

    void addAnswerOption(string optionText, XmlNode qNode, bool isCorrect)
    {
        XmlDocument xmlDoc = XmlDataSource1.GetXmlDocument();

        XmlElement answer = xmlDoc.CreateElement("answer");
        answer.SetAttribute("AnsType", "text");
        if(isCorrect == true)
        {
            answer.SetAttribute("isCorrect", "True");
        }
        answer.InnerXml = (optionText != "") ? Server.UrlEncode(optionText) : null;
        qNode.LastChild.AppendChild(answer);
    }

    protected void rowCommand(object sender, GridViewCommandEventArgs e)
    {
        // loading XML file
        XmlDocument xmlDoc = XmlDataSource1.GetXmlDocument();

        // getting selected row index
        GridViewRow gvr = (GridViewRow)(((ImageButton)e.CommandSource).NamingContainer);
        int RowIndex = gvr.RowIndex;

        // getting selected question
        XmlNode selectedQ = xmlDoc.SelectNodes("/project/game[@gameCode=" + Session["theItemIdSession"] + "]/questions/question")[RowIndex];

        switch (e.CommandName)
        {
            case "qDelete":
                // removing question node
                selectedQ.ParentNode.RemoveChild(selectedQ);

                // updating questionsNumber attribute
                int questionsNumber = Convert.ToInt16(xmlDoc.SelectSingleNode("/project/game[@gameCode=" + Session["theItemIdSession"] + "]").Attributes["questionsNumber"].InnerText);
                questionsNumber--;
                string newQuestionsNumber = questionsNumber.ToString();

                XmlNode game = xmlDoc.SelectSingleNode("/project/game[@gameCode=" + Session["theItemIdSession"] + "]");
                game.Attributes["questionsNumber"].InnerText = newQuestionsNumber;

                // saving changes to XML file
                XmlDataSource1.Save();
                GridView1.DataBind();
                break;

            case "qEdit":
                saveQBtn.Attributes["qType"] = "editedQ";
                saveQBtn.Attributes["qIndex"] = RowIndex.ToString();

                qText.Text = Server.UrlDecode(selectedQ["questionText"].InnerXml);
                option1Text.Text = selectedQ.SelectNodes("answers/answer")[0] != null ? Server.UrlDecode(selectedQ.SelectNodes("answers/answer")[0].InnerXml) : "";
                option2Text.Text = selectedQ.SelectNodes("answers/answer")[1] != null ? Server.UrlDecode(selectedQ.SelectNodes("answers/answer")[1].InnerXml) : "";
                option3Text.Text = selectedQ.SelectNodes("answers/answer")[2] != null ? Server.UrlDecode(selectedQ.SelectNodes("answers/answer")[2].InnerXml) : "";
                option4Text.Text = selectedQ.SelectNodes("answers/answer")[3] != null ? Server.UrlDecode(selectedQ.SelectNodes("answers/answer")[3].InnerXml) : "";

                break;
        }
    }
}