﻿using System;
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
            
        }
        else
        {
            Response.Redirect("Login.aspx");
        }
    }

    protected void createGame_Click(object sender, EventArgs e)
    {

    }
}