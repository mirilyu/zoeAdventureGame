<%@ Page Language="C#" AutoEventWireup="true" CodeFile="GamesList.aspx.cs" Inherits="GamesList" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Games List</title>
    <link href="styles/bootstrap.css" rel="stylesheet" />
    <link href="styles/main.css" rel="stylesheet" />
</head>
<body>
    <header class="row align-items-center">
        <div class="col-4">
            <div class="row justify-content-start">
                <img src="#" alt="Alternate Text" />
                <span>zoe</span>
            </div>
        </div>

        <nav class="col-8">
            <ul class="nav row justify-content-end">
                <li class="nav-item">
                    <span class="nav-link disabled">עזרה</span>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link">אודות</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">למשחק</a>
                </li>
            </ul>
        </nav>
    </header>

    <main>
        <div class="container">
            <h1>המשחקים שלי</h1>

            <h5 class="text-secondary">להוספת משחק חדש הקלד שם משחק:</h5>

            <div class="mt-3">
                <form class="row" id="form1" runat="server">
                    <div class="form-group col-8">
                        <asp:TextBox ID="gameName" placeholder="שם המשחק" class="form-control" runat="server"></asp:TextBox>
                    </div>
                     
                    <div class="col-2">
                        <asp:Button disabled="true" class="btn btn-primary btn-block" ID="createGame" runat="server" Text="צור משחק" OnClick="createGame_Click" />
                    </div>

                    <p class="error-text text-right col-12">2-60 תווים</p>
                    
                    <asp:GridView ID="GridView1" runat="server" AutoGenerateColumns="False" DataSourceID="XmlDataSource1" Width="1034px" OnRowCommand="GridView1_RowCommand">
                        <Columns>
                            <asp:TemplateField HeaderText="שם">
                                <ItemTemplate>
                                    <asp:Label ID="gameSubject" runat="server"
                                        Text='<%#Server.UrlDecode(XPathBinder.Eval(Container.DataItem, "subject").ToString())%>'></asp:Label>
                                </ItemTemplate>
                            </asp:TemplateField>

                            <asp:TemplateField HeaderText="קוד">
                                <ItemTemplate>
                                    <asp:Label ID="gameCode" runat="server"
                                        Text='<%#XPathBinder.Eval(Container.DataItem, "@gameCode") %>'></asp:Label>
                                </ItemTemplate>
                            </asp:TemplateField>

                            <asp:TemplateField HeaderText="מספר שאלות">
                                <ItemTemplate>
                                    <asp:Label ID="questionsNumber" runat="server"
                                        Text='<%#XPathBinder.Eval(Container.DataItem, "@questionsNumber") %>'></asp:Label>
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
                                        runat="server" ImageUrl="~/images/icon-delete.png" /></ItemTemplate>
                            </asp:TemplateField>

                            <asp:TemplateField HeaderText="פרסם">
                                <ItemTemplate>
                                    <asp:CheckBox
                                        ID="isPublished" runat="server"
                                        AutoPostBack="true"
                                        OnCheckedChanged="isPublished_CheckedChanged"
                                        Checked='<%#Convert.ToBoolean(XPathBinder.Eval(Container.DataItem,"@isPublished"))%>'
                                        theItemId='<%#XPathBinder.Eval(Container.DataItem,"@gameCode")%>' />
                                </ItemTemplate>
                            </asp:TemplateField>
                        </Columns>
                    </asp:GridView>
                    
                    <asp:XmlDataSource ID="XmlDataSource1" runat="server" DataFile="~/XML/XMLFile.xml" XPath="/project/game"></asp:XmlDataSource>
                </form>
            </div>
        </div>
    </main>

    <script>
        var gameNameField = document.getElementById("gameName");
        var createGameBtn = document.getElementById("createGame");

        function checkGameNameMinChar() {
            if ((gameNameField.value.length >= 2)) {
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