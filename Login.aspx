﻿<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Login.aspx.cs" Inherits="Login" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Login page</title>
    <link href="styles/bootstrap.css" rel="stylesheet" />
    <link href="styles/main.css" rel="stylesheet" />
    <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
    <link rel="icon" href="/favicon.ico" type="image/x-icon" />
</head>
<body>
    <header class="header container-fluid">
        <div class="row align-items-center">
            <div class="col-4">
                <div class="row justify-content-start">
                    <img src="images/zoe-logo.png" class="logo" alt="Alternate Text" />
                </div>
            </div>

            <nav class="col-8">
                <ul class="nav row justify-content-end">
                    <li class="nav-item">
                        <span class="nav-link disabled">עזרה</span>
                    </li>
                    <li class="nav-item">
                        <a href="/About.aspx" class="nav-link">אודות</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/zoe1.html">למשחק</a>
                    </li>
                </ul>
            </nav>
        </div>
    </header>

    <main>
        <div class="container">
            <div class="row justify-content-center">
                <form class="col-5" id="form1" runat="server">
                    <div class="form-group row text-right">
                        <asp:Label ID="Label1" class="col-4 col-form-label" runat="server" Text="שם משתמש:"></asp:Label>
                        <asp:TextBox ID="userName" class="form-control col-8" runat="server"></asp:TextBox>
                    </div>

                    <div class="form-group row text-right">
                        <asp:Label ID="Label2" class="col-4 col-form-label" runat="server" Text="סיסמה:"></asp:Label>
                        <asp:TextBox ID="password" type="password" class="form-control col-8" runat="server"></asp:TextBox>
                    </div>

                    <asp:Panel class="formMessages" ID="formMsg" runat="server"></asp:Panel>

                    <div class="row justify-content-center">
                        <asp:Button disabled="true" class="btn btn-primary btn-block" ID="Button1" runat="server" Text="כניסה" OnClick="Button1_Click" />
                    </div>
                </form>
            </div>
        </div>
    </main>

    <script>
        var userNameField = document.getElementById("userName");
        var passwordField = document.getElementById("password");
        var btn = document.getElementById("Button1");

        function checkMinChar(num) {
            if ((userNameField.value.length >= num) && (passwordField.value.length >= num)) {
                btn.disabled = false;
            } else {
                btn.disabled = true;
            }
        }

        userNameField.addEventListener("keyup", function (e) {
            checkMinChar();
        })

        passwordField.addEventListener("keyup", function (e) {
            checkMinChar(6);
        })
    </script>
</body>

</html>
