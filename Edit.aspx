<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Edit.aspx.cs" Inherits="Edit" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Edit Questions</title>
    <link href="styles/bootstrap.css" rel="stylesheet" />
    <link href="styles/main.css" rel="stylesheet" />
</head>
<body>
    <header class="header container-fluid">
        <div class="row align-items-center">
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
        </div>
    </header>

    <main>
        <div class="container">
            <h1>
                <span>עריכת משחק:</span>
                <span class="text-info"><%=Server.UrlDecode(gameSubject) %></span>
            </h1>

            <form id="form1" class="row" runat="server">
                <div class="col-8">

                    <h5 class="text-secondary">
                        <span>השאלה</span>
                        <small class="text-danger">2-140 תווים</small>
                    </h5>

                    <div class="mt-3">
                        <div>
                            <div class="row">
                                <div class="form-group col-9">
                                    <asp:TextBox class="form-control" MaxLength="140" ID="qText" runat="server" TextMode="MultiLine" Rows="6"></asp:TextBox>
                                </div>
                                <div class="col-3">
                                </div>
                            </div>

                            <p class="mt-3 mb-1 text-danger">עד 70 תווים לתשובה</p>

                            <div class="row">
                                <div class="form-group col-10">
                                    <p class="mb-0 text-success"><b>תשובה נכונה</b></p>
                                    <asp:TextBox class="form-control is-valid" MaxLength="70" ID="option1Text" runat="server" isCorrect="true"></asp:TextBox>
                                </div>
                                <div class="col-2"></div>

                                <div class="form-group col-10">
                                    <asp:TextBox class="form-control" MaxLength="70" ID="option2Text" runat="server"></asp:TextBox>
                                </div>
                                <div class="col-2"></div>

                                <div class="form-group col-10">
                                    <asp:TextBox class="form-control" MaxLength="70" ID="option3Text" runat="server"></asp:TextBox>
                                </div>
                                <div class="col-2"></div>

                                <div class="form-group col-10">
                                    <asp:TextBox class="form-control" MaxLength="70" ID="option4Text" runat="server"></asp:TextBox>
                                </div>
                                <div class="col-2"></div>
                            </div>

                            <div class="row">
                                <div class="col-3">
                                    <asp:Button disabled="true" class="btn btn-primary btn-block" ID="saveQBtn" runat="server" Text="שמור שאלה" OnClick="saveQuestion_Click" />
                                </div>

                                <div class="col-2">
                                    <asp:Button class="btn btn-secondary btn-block" ID="goBackBtn" runat="server" Text="חזור" OnClick="goBack_Click" />
                                </div>
                            </div>

                            <asp:XmlDataSource ID="XmlDataSource1" runat="server" DataFile="~/XML/XMLFile.xml" XPath="/project/game"></asp:XmlDataSource>
                        </div>
                    </div>
                </div>

                <div class="col-4">
                    <h5 class="text-secondary">
                        <span>השאלות</span>
                        <b>3</b>
                        <small class="mr-4 text-danger">לפחות 10 שאלות לפרסום</small>
                    </h5>

                    <asp:Panel ID="gameQuestionsPanel" runat="server">

                    </asp:Panel>

                    <div>
                        <asp:GridView ID="GridView1" CssClass="table table-hover table-bordered" runat="server" AutoGenerateColumns="False" DataSourceID="XmlDataSource2" OnRowCommand="rowCommand">
                            <Columns>
                                <asp:TemplateField HeaderText="שאלות">
                                    <ItemTemplate>
                                        <asp:Label ID="questionText" runat="server" Text='<%#Server.UrlDecode(XPathBinder.Eval(Container.DataItem, "questionText").ToString())%>'></asp:Label>
                                    </ItemTemplate>
                                </asp:TemplateField>

                                <asp:TemplateField HeaderText="מחק">
                                    <ItemTemplate>
                                        <asp:ImageButton
                                            ID="qDeleteBtn"
                                            CommandName="qDelete"
                                            theItemId='<%#XPathBinder.Eval(Container.DataItem,"questionText")%>'
                                            runat="server" ImageUrl="~/images/icon-delete.png" />
                                    </ItemTemplate>
                                </asp:TemplateField>

                                <asp:TemplateField HeaderText="ערוך">
                                    <ItemTemplate>
                                        <asp:ImageButton
                                            ID="qEditBtn"
                                            CommandName="qEdit"
                                            theItemId='<%#XPathBinder.Eval(Container.DataItem,"questionText")%>'
                                            runat="server" ImageUrl="~/images/icon-edit.png" />
                                    </ItemTemplate>
                                </asp:TemplateField>
                            </Columns>
                        </asp:GridView>
                        <asp:XmlDataSource ID="XmlDataSource2" runat="server" DataFile="~/XML/XMLFile.xml"></asp:XmlDataSource>
                    </div>

                </div>
            </form>
        </div>
    </main>

    <script>
        var qText = document.getElementById("qText");
        var option1 = document.getElementById("option1Text");
        var option2 = document.getElementById("option2Text");
        var option3 = document.getElementById("option3Text");
        var option4 = document.getElementById("option4Text");
        var saveQBtn = document.getElementById("saveQBtn");

        var arr = [qText, option1, option2, option3, option4];

        function validateQData() {
            if (qText.value.length >= 2 && option1.value.length > 0) {
                saveQBtn.disabled = false;
            } else {
                saveQBtn.disabled = true;
            }
        }

        arr.forEach(function (e) {
            e.addEventListener("keyup", function (e) {
                validateQData();
            });
        })

    </script>

</body>
</html>
