﻿<%@ Page Language="C#" AutoEventWireup="true" CodeFile="GamesList.aspx.cs" Inherits="GamesList" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Games List</title>
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
            <h1>המשחקים שלי</h1>

            <h5 class="text-secondary">להוספת משחק חדש הקלד שם משחק:</h5>

            <div class="mt-3">
                <form class="row" id="form1" runat="server">
                    <div class="form-group col-8">
                        <asp:TextBox ID="gameName" placeholder="שם המשחק" class="form-control" runat="server" MaxLength="60"></asp:TextBox>
                    </div>

                    <div class="col-2">
                        <asp:Button disabled="true" class="btn btn-primary btn-block" ID="createGame" runat="server" Text="צור משחק" OnClick="createGame_Click" />
                    </div>

                    <p class="error-text text-right col-12">2-60 תווים</p>

                    <div class="tableWrapper">
                        <asp:GridView ID="GridView1" CssClass="table table-hover table-bordered" runat="server" AutoGenerateColumns="False" DataSourceID="XmlDataSource1" OnRowCommand="GridView1_RowCommand">
                            <Columns>
                                <asp:TemplateField HeaderText="שם">
                                    <ItemTemplate>
                                        <asp:Label ID="gameSubject" runat="server"
                                            Text='<%#Server.UrlDecode(XPathBinder.Eval(Container.DataItem, "subject").ToString())%>'></asp:Label>
                                    </ItemTemplate>
                                </asp:TemplateField>

                                <asp:TemplateField HeaderText="מספר שאלות">
                                    <ItemTemplate>
                                        <asp:Label ID="questionsNumber" runat="server"
                                            Text='<%#XPathBinder.Eval(Container.DataItem, "@questionsNumber") %>'></asp:Label>
                                    </ItemTemplate>
                                </asp:TemplateField>

                                <asp:TemplateField HeaderText="קוד">
                                    <ItemTemplate>
                                        <asp:Label ID="gameCode" runat="server"
                                            Enabled='<%#CheckIfIsPublished(XPathBinder.Eval(Container.DataItem,"@gameCode").ToString())%>'
                                            Text='<%#XPathBinder.Eval(Container.DataItem, "@gameCode") %>'></asp:Label>
                                    </ItemTemplate>
                                </asp:TemplateField>

                                <asp:TemplateField HeaderText="הגדרות">
                                    <ItemTemplate>
                                        <asp:ImageButton
                                            ID="gameSettingsButton"
                                            CommandName="goToSettings"
                                            theItemId='<%#XPathBinder.Eval(Container.DataItem,"@gameCode")%>'
                                            runat="server"
                                            ImageUrl="~/images/icon-properties.png" />
                                    </ItemTemplate>
                                </asp:TemplateField>

                                <asp:TemplateField HeaderText="עריכה">
                                    <ItemTemplate>
                                        <asp:ImageButton
                                            ID="gameEditButton"
                                            CommandName="editGame"
                                            theItemId='<%#XPathBinder.Eval(Container.DataItem,"@gameCode")%>'
                                            runat="server" ImageUrl="~/images/icon-edit.png" />
                                    </ItemTemplate>
                                </asp:TemplateField>

                                <asp:TemplateField HeaderText="מחק">
                                    <ItemTemplate>
                                        <asp:ImageButton
                                            ID="gameDeleteButton"
                                            CommandName="deleteGame"
                                            theItemId='<%#XPathBinder.Eval(Container.DataItem,"@gameCode")%>'
                                            runat="server" ImageUrl="~/images/icon-delete.png" />
                                    </ItemTemplate>
                                </asp:TemplateField>

                                <asp:TemplateField HeaderText="פרסם">
                                    <ItemTemplate>
                                        <asp:CheckBox
                                            ID="isPublished" runat="server"
                                            AutoPostBack="true"
                                            ToolTip="דרושות לפחות  10 שאלות לפרסום"
                                            Enabled='<%#CheckIfCanPublish(XPathBinder.Eval(Container.DataItem,"@gameCode").ToString())%>'
                                            OnCheckedChanged="isPublished_CheckedChanged"
                                            Checked='<%#Convert.ToBoolean(XPathBinder.Eval(Container.DataItem,"@isPublished"))%>'
                                            theItemId='<%#XPathBinder.Eval(Container.DataItem,"@gameCode")%>' />
                                    </ItemTemplate>
                                </asp:TemplateField>
                            </Columns>
                        </asp:GridView>
                    </div>

                    <asp:Panel ID="deleteGamePopup" Style="display: none;" CssClass="modal fade show" runat="server">
                        <div class="modal-dialog modal-dialog-centered">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title">אישור מחיקה</h5>
                                </div>

                                <div class="modal-body">
                                    <p class="popup-text">האם אתה בטוח שברצונך למחוק את המשחק:</p>
                                    <asp:Label ID="deletedGameName" runat="server" Text="Label" class="font-weight-bold"></asp:Label>
                                </div>

                                <div class="modal-footer justify-content-start">
                                    <asp:Button ID="confirmDeleteBtn" data-id="" CssClass="btn btn-primary ml-3" runat="server" Text="כן - מחק" OnClick="confirmDeleteBtn_Click" />
                                    <asp:Button ID="cancelDeleteBtn" CssClass="btn btn-secondary" runat="server" Text="לא - חזור" OnClick="cancelDeleteBtn_Click" />
                                </div>
                            </div>
                        </div>
                    </asp:Panel>

                    <asp:Panel ID="publishGameModal" Style="display: none;" CssClass="modal fade show" runat="server">
                        <div class="modal-dialog modal-dialog-centered">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title">פרסום משחק</h5>
                                </div>

                                <div class="modal-body">
                                    <p class="popup-text">
                                        <span>פורסם משחק:</span>
                                        <asp:Label ID="publishGameModal_gameSubject" runat="server" Text="Label" class="font-weight-bold"></asp:Label>
                                    </p>

                                    <p class="popup-text mt-4">
                                        <span>קוד משחק:</span>
                                        <asp:Label ID="publishGameModal_gameCode" runat="server" Text="Label" class="font-weight-bold"></asp:Label>
                                    </p>
                                </div>

                                <div class="modal-footer justify-content-start">
                                    <asp:Button ID="publishGameModal_okBtn" data-id="" CssClass="btn btn-primary ml-3" runat="server" Text="אישור" OnClick="publishGameModal_Click" />
                                </div>
                            </div>
                        </div>
                    </asp:Panel>

                    <asp:XmlDataSource ID="XmlDataSource1" runat="server" DataFile="~/XML/XMLFile.xml" XPath="/project/game"></asp:XmlDataSource>
                </form>
            </div>
        </div>
    </main>

    <asp:Panel ID="modalBackdrop" Style="display: none;" CssClass="modal-backdrop fade show" runat="server"></asp:Panel>

    <script>
        var gameNameField = document.getElementById("gameName");
        var createGameBtn = document.getElementById("createGame");

        function checkGameNameMinChar() {
            if ((gameNameField.value.length >= 2 && gameNameField.value.length <= 60)) {
                createGameBtn.disabled = false;
            } else {
                createGameBtn.disabled = true;
            }
        }

        gameNameField.addEventListener("keyup", function (e) {
            checkGameNameMinChar();
        })
    </script>
</body>

</html>
