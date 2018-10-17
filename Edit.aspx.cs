using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Xml;

public partial class Edit : System.Web.UI.Page
{
    string imagesLibPath = "uploads/";

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

        qImage.ImageUrl = "";
        option1Img.ImageUrl = "";
        option2Img.ImageUrl = "";
        option3Img.ImageUrl = "";
        option4Img.ImageUrl = "";

        qImageFileUpload.Dispose();
        option1ImgUpload.Dispose();
        option2ImgUpload.Dispose();
        option3ImgUpload.Dispose();
        option4ImgUpload.Dispose();
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
        Response.Redirect("GamesList.aspx");
    }

    protected void option1ImgDeleteBtn_Click(object sender, EventArgs e)
    {
        option1Img.ImageUrl = "";
    }

    protected void option2ImgDeleteBtn_Click(object sender, EventArgs e)
    {
        option2Img.ImageUrl = "";
    }

    protected void option3ImgDeleteBtn_Click(object sender, EventArgs e)
    {
        option3Img.ImageUrl = "";
    }

    protected void option4ImgDeleteBtn_Click(object sender, EventArgs e)
    {
        option4Img.ImageUrl = "";
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
        
        // creating question image
        string qImgName = uploadImage(qImageFileUpload, "qImage");
        XmlElement qImg = xmlDoc.CreateElement("img");
        qImg.InnerXml = Server.UrlEncode(qImgName);
        newQNode.AppendChild(qImg);

        // creating <answers> node to hold all answers
        XmlElement newAnswers = xmlDoc.CreateElement("answers");

        // creating <answer1> node
        XmlElement answer1 = addAnswerOption(xmlDoc, option1Text, option1ImgUpload, option1Img, "option1");
        answer1.SetAttribute("isCorrect", "True");
        newAnswers.AppendChild(answer1);

        // creating <answer2> node
        if (option2Text.Text.Length > 0 || option2ImgUpload.PostedFile.ContentLength > 0)
        {
            XmlElement answer2 = addAnswerOption(xmlDoc, option2Text, option2ImgUpload, option2Img, "option2");
            answer2.SetAttribute("isCorrect", "False");
            newAnswers.AppendChild(answer2);
        }

        // creating <answer3> node
        if (option3Text.Text.Length > 0 || option3ImgUpload.PostedFile.ContentLength > 0)
        {
            XmlElement answer3 = addAnswerOption(xmlDoc, option3Text, option3ImgUpload, option3Img, "option3");
            answer3.SetAttribute("isCorrect", "False");
            newAnswers.AppendChild(answer3);
        }

        // creating <answer4> node
        if (option4Text.Text.Length > 0 || option4ImgUpload.PostedFile.ContentLength > 0)
        {
            XmlElement answer4 = addAnswerOption(xmlDoc, option4Text, option4ImgUpload, option4Img, "option4");
            answer4.SetAttribute("isCorrect", "False");
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

    XmlElement addAnswerOption(XmlDocument xmlDoc, TextBox optionInput, FileUpload optionFile, Image optionImg, string prefix)
    {
        XmlElement answer = xmlDoc.CreateElement("answer");
        answer.InnerXml = Server.UrlEncode(optionInput.Text);
        string answerImgName = Server.UrlEncode(uploadImage(optionFile, prefix));
        answer.SetAttribute("img", answerImgName);

        return answer;
    }

    string uploadImage(FileUpload input, string prefix)
    {
        string fileType = input.PostedFile.ContentType;
        if (fileType.Contains("image"))
        {
            string fileName = input.PostedFile.FileName;
            string endOfFileName = fileName.Substring(fileName.LastIndexOf("."));
            string myTime = DateTime.Now.ToString("dd-MM-yy_HH-mm-ss");
            string imageNewName = prefix + "_" + myTime + endOfFileName;
            input.PostedFile.SaveAs(Server.MapPath(imagesLibPath) + imageNewName);

            return imageNewName;
        }
        else
        {
            return "";
        }
    }

    void updateAnswerOption(TextBox optionText, FileUpload optionImgUpload, Image optionImg, XmlNode editedQ, string prefix, int qIndex)
    {
        if (optionText.Text.Length > 0 || optionImg.ImageUrl.Length > 0)
        {   
            // if it is an exising answer option
            if (editedQ.SelectNodes("answers/answer")[qIndex] != null)
            {
                editedQ.SelectNodes("answers/answer")[qIndex].InnerXml = optionText.Text != "" ? Server.UrlEncode(optionText.Text) : null;

                // if a new img is uploaded
                if (optionImgUpload.FileName.Length > 0)
                {
                    editedQ.SelectNodes("answers/answer")[qIndex].Attributes["img"].InnerText = uploadImage(optionImgUpload, "option1");
                } else
                {
                    // if there is an image already
                    if(editedQ.SelectNodes("answers/answer")[qIndex].Attributes["img"].InnerText.Length > 0)
                    {
                        if(optionImg.ImageUrl.Length == 0)
                        {
                            editedQ.SelectNodes("answers/answer")[qIndex].Attributes["img"].InnerText = "";
                        }
                    }
                }
            }
            else
            {
                bool isCorrect = qIndex == 0 ? true : false;
                addAnswerOption(optionText.Text, editedQ, isCorrect, optionImgUpload, optionImg, prefix);
            }
        }

        // if an existing qOption is being deleted
        if (optionText.Text.Length == 0 && optionImgUpload.PostedFile.ContentLength == 0 && optionImg.ImageUrl.Length == 0)
        {
            if (editedQ.SelectNodes("answers/answer")[qIndex] != null)
            {
                editedQ.LastChild.RemoveChild(editedQ.SelectNodes("answers/answer")[qIndex]);
            }
        }
    }

    void updateQuestion(int RowIndex)
    {
        // loading XML file
        XmlDocument xmlDoc = XmlDataSource1.GetXmlDocument();

        // getting selected question
        XmlNode editedQ = xmlDoc.SelectNodes("/project/game[@gameCode=" + Session["theItemIdSession"] + "]/questions/question")[RowIndex];

        editedQ["questionText"].InnerXml = Server.UrlEncode(qText.Text);
        editedQ["img"].InnerXml = uploadImage(qImageFileUpload, "qImg");

        // option 1
        updateAnswerOption(option1Text, option1ImgUpload, option1Img, editedQ, "option1", 0);

        // option 2
        updateAnswerOption(option2Text, option2ImgUpload, option2Img, editedQ, "option2", 1);

        // option 3
        updateAnswerOption(option3Text, option3ImgUpload, option3Img, editedQ, "option3", 2);

        // option 4
        updateAnswerOption(option4Text, option4ImgUpload, option4Img, editedQ, "option4", 3);

        XmlDataSource1.Save();
        GridView1.DataBind();
    }

    void addAnswerOption(string optionText, XmlNode qNode, bool isCorrect, FileUpload optionFile, Image optionImg, string prefix)
    {
        XmlDocument xmlDoc = XmlDataSource1.GetXmlDocument();

        XmlElement answer = xmlDoc.CreateElement("answer");
        if(isCorrect == true)
        {
            answer.SetAttribute("isCorrect", "True");
        } else
        {
            answer.SetAttribute("isCorrect", "False");
        }
        answer.InnerXml = (optionText != "") ? Server.UrlEncode(optionText) : null;
        answer.SetAttribute("img", uploadImage(optionFile, prefix));
        qNode.LastChild.AppendChild(answer);

        XmlDataSource1.Save();
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

                qImage.ImageUrl = selectedQ.SelectNodes("img")[0].InnerText != "" ? imagesLibPath + Server.UrlDecode(selectedQ.SelectNodes("img")[0].InnerXml) : "";

                if(selectedQ.SelectNodes("answers/answer")[0] != null)
                {
                    //selectedQ.SelectNodes("answers/answer")[0].Attributes["img"].InnerText.Length != 0 ? Server.UrlDecode(imagesLibPath + selectedQ.SelectNodes("answers/answer")[0].Attributes["img"].InnerText) : "";
                    option1Img.ImageUrl = selectedQ.SelectNodes("answers/answer")[0].Attributes["img"].InnerText.Length != 0 ? Server.UrlDecode(imagesLibPath + selectedQ.SelectNodes("answers/answer")[0].Attributes["img"].InnerText) : "";
                }

                if(selectedQ.SelectNodes("answers/answer")[1] != null)
                {
                    option2Img.ImageUrl = selectedQ.SelectNodes("answers/answer")[1].Attributes["img"].InnerText.Length != 0 ? Server.UrlDecode(imagesLibPath + selectedQ.SelectNodes("answers/answer")[1].Attributes["img"].InnerText) : "";
                }

                if(selectedQ.SelectNodes("answers/answer")[2] != null)
                {
                    option3Img.ImageUrl = selectedQ.SelectNodes("answers/answer")[2].Attributes["img"].InnerText.Length != 0 ? Server.UrlDecode(imagesLibPath + selectedQ.SelectNodes("answers/answer")[2].Attributes["img"].InnerText) : "";
                }

                if(selectedQ.SelectNodes("answers/answer")[3] != null)
                {
                    option4Img.ImageUrl = selectedQ.SelectNodes("answers/answer")[3].Attributes["img"].InnerText.Length != 0 ? Server.UrlDecode(imagesLibPath + selectedQ.SelectNodes("answers/answer")[3].Attributes["img"].InnerText) : "";
                }

                break;
        }
    }
}