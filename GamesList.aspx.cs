using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class GamesList : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        if (Session["isAuthenticated"] != null)
        {
            var errorLabel = new Label();
            errorLabel.Text = "is authenticated";
            form1.Controls.Add(errorLabel);
            form1.DataBind();
        }
        else
        {
            var errorLabel = new Label();
            errorLabel.Text = "is not authenticated";
            errorLabel.CssClass = "error-text";
            form1.Controls.Add(errorLabel);
            form1.DataBind();
        }
    }
}