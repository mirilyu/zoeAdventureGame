<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Settings.aspx.cs" Inherits="Settings" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Game Settings</title>
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
            <h1>
                <span>הגדרות משחק:</span>
                <span class="text-info"><%=Server.UrlDecode(gameSubject) %></span>
            </h1>

            <h5 class="text-secondary">שם משחק</h5>

            <div class="mt-3">
                <form id="form1" runat="server">
                    <div class="row">
                        <div class="form-group col-8">
                            <asp:TextBox ID="gameName" MaxLength="60" placeholder="שם המשחק" class="form-control" runat="server"></asp:TextBox>

                            <p class="error-text text-right col-12">2-60 תווים</p>
                        </div>
                    </div>

                    <h5 class="text-secondary">זמן לשאלה</h5>
                    <div class="row">
                        <div class="form-group col-4">
                            <asp:DropDownList ID="gameTimeDropdown" runat="server">
                                <asp:ListItem Value="30">30 שניות</asp:ListItem>
                                <asp:ListItem Value="40">40 שניות</asp:ListItem>
                                <asp:ListItem Value="60">60 שניות</asp:ListItem>
                                <asp:ListItem Value="90">90 שניות</asp:ListItem>
                            </asp:DropDownList>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-2">
                            <asp:Button disabled="true" class="btn btn-primary btn-block" ID="saveGame" runat="server" Text="שמור" OnClick="saveGame_Click" />
                        </div>

                        <div class="col-2">
                            <asp:Button class="btn btn-primary btn-block" ID="goBack" runat="server" Text="חזור" OnClick="goBack_Click" />
                        </div>
                    </div>

                    <asp:XmlDataSource ID="XmlDataSource1" runat="server" DataFile="~/XML/XMLFile.xml" XPath="/project/game"></asp:XmlDataSource>

                    <asp:Panel ID="goBackPopup" Style="display: none;" CssClass="modal fade show" runat="server">
                        <div class="modal-dialog modal-dialog-centered">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title">חזרה למשחקים שלי</h5>
                                </div>

                                <div class="modal-body">
                                    <p class="popup-text">ישנם שינויים שלא נשמרו.</p>
                                    <p class="popup-text">האם ברצונך לחזור לתפריט המשחקים?</p>
                                </div>

                                <div class="modal-footer justify-content-start">
                                    <asp:Button ID="exitBtn" CssClass="btn btn-secondary ml-3" runat="server" Text="כן - לצאת" OnClick="exitBtn_Click" />
                                    <asp:Button ID="stayBtn" CssClass="btn btn-primary" runat="server" Text="לא - להישאר" OnClick="stayBtn_Click" />
                                </div>
                            </div>
                        </div>
                    </asp:Panel>
                </form>
            </div>
        </div>
    </main>


    <asp:Panel ID="modalBackdrop" Style="display: none;" CssClass="modal-backdrop fade show" runat="server"></asp:Panel>


    <script>
        var saveBtn = document.getElementById("saveGame");
        var gameNameField = document.getElementById("gameName");
        var gameTimeDropdown = document.getElementById("gameTimeDropdown");

        gameNameField.addEventListener("keyup", function (e) {
            if (gameNameField.value.length >= 2 && gameNameField.value.length <= 60) {
                saveBtn.disabled = false;
            } else {
                saveBtn.disabled = true;
            }
        });

        gameTimeDropdown.onchange = function (e) {
            if (gameNameField.value.length >= 2 && gameNameField.value.length <= 60) {
                saveBtn.disabled = false;
            }
        };
    </script>
</body>
</html>
