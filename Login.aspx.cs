using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class Login : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        //if (Session["isAuthenticated"] != null)
        //{
        //    Response.Redirect("GamesList.aspx");
        //}
    }

    protected void Button1_Click(object sender, EventArgs e)
    {
        string userName = Request.Form["userName"];
        string password = Request.Form["password"];

        if (userName == "admin1" && password == "123456")
        {
            Session["isAuthenticated"] = true;
            Response.Redirect("GamesList.aspx");
        }
        else
        {
            var errorLabel = new Label();
            errorLabel.Text = "שגיאה בשם משתמש או בסיסמה, אנא נסה/י שוב";
            errorLabel.CssClass = "error-text";
            formMsg.Controls.Add(errorLabel);
            formMsg.DataBind();
        }
    }
}