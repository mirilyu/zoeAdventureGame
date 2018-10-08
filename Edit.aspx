<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Edit.aspx.cs" Inherits="Edit" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Edit Questions</title>
    <script src="scripts/jquery-1.12.0.min.js"></script>
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
                <asp:Label ID="gameSubject" class="text-info" runat="server" Text="Label"></asp:Label>
            </h1>

            <form id="form1" class="row" runat="server">
                <div class="col-8">

                    <h5 class="text-secondary">
                        <span>השאלה</span>
                        <small class="text-danger">2-140 תווים</small>
                    </h5>

                    <div>
                        <div class="row">
                            <div class="col-9">
                                <asp:TextBox class="form-control" MaxLength="140" ID="qText" runat="server" TextMode="MultiLine" Rows="4"></asp:TextBox>
                            </div>

                            <div id="qImgPanel" class="col-3 d-flex align-items-center">
                                <asp:FileUpload ID="qImageFileUpload" class="uploadFileInput" runat="server" />
                                <button id="qImgUploadIcon" class="uploadImgBtn">
                                    <img src="images/icon-upload.svg" alt="image upload" />
                                </button>

                                <div class="imgPreviewWrapper">
                                    <button id="qImgDeleteBtn" type="button" class="close" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                    <asp:Image ID="qImage" class="imgPreview" runat="server" />
                                </div>
                            </div>
                        </div>

                        <p class="mt-3 mb-1 text-danger">עד 70 תווים לתשובה</p>

                        <div>
                            <div class="row form-group">
                                <div class="col-9">
                                    <p class="mb-0 text-success"><b>תשובה נכונה</b></p>
                                    <asp:TextBox class="form-control is-valid" MaxLength="70" ID="option1Text" runat="server" isCorrect="true"></asp:TextBox>
                                </div>

                                <div id="option1ImgPanel" class="col-3 d-flex align-items-end">
                                    <asp:FileUpload ID="option1ImgUpload" class="uploadFileInput" runat="server" />
                                    <button id="option1ImgUploadIcon" class="uploadImgBtn">
                                        <img src="images/icon-upload-green.svg" alt="image upload" />
                                    </button>

                                    <div class="imgPreviewWrapper">
                                        <button id="option1ImgDeleteBtn" type="button" class="close" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                        <asp:Image ID="option1Img" class="imgPreview" runat="server" />
                                    </div>
                                </div>
                            </div>

                            <div class="row form-group">
                                <div class="col-9">
                                    <asp:TextBox class="form-control" MaxLength="70" ID="option2Text" runat="server"></asp:TextBox>
                                </div>

                                <div id="option2ImgPanel" class="col-3 d-flex align-items-end">
                                    <asp:FileUpload ID="option2ImgUpload" class="uploadFileInput" runat="server" />
                                    <button id="option2ImgUploadIcon" class="uploadImgBtn">
                                        <img src="images/icon-upload.svg" alt="image upload" />
                                    </button>

                                    <div class="imgPreviewWrapper">
                                        <button id="option2ImgDeleteBtn" type="button" class="close" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                        <asp:Image ID="option2Img" class="imgPreview" runat="server" />
                                    </div>
                                </div>
                            </div>

                            <div class="row form-group">
                                <div class="col-9">
                                    <asp:TextBox class="form-control" MaxLength="70" ID="option3Text" runat="server"></asp:TextBox>
                                </div>

                                <div id="option3ImgPanel" class="col-3 d-flex align-items-end">
                                    <asp:FileUpload ID="option3ImgUpload" class="uploadFileInput" runat="server" />
                                    <button id="option3ImgUploadIcon" class="uploadImgBtn">
                                        <img src="images/icon-upload.svg" alt="image upload" />
                                    </button>

                                    <div class="imgPreviewWrapper">
                                        <button id="option3ImgDeleteBtn" type="button" class="close" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                        <asp:Image ID="option3Img" class="imgPreview" runat="server" />
                                    </div>
                                </div>
                            </div>

                            <div class="row form-group">
                                <div class="col-9">
                                    <asp:TextBox class="form-control" MaxLength="70" ID="option4Text" runat="server"></asp:TextBox>
                                </div>

                                <div id="option4ImgPanel" class="col-3 d-flex align-items-end">
                                    <asp:FileUpload ID="option4ImgUpload" class="uploadFileInput" runat="server" />
                                    <button id="option4ImgUploadIcon" class="uploadImgBtn">
                                        <img src="images/icon-upload.svg" alt="image upload" />
                                    </button>

                                    <div class="imgPreviewWrapper">
                                        <button id="option4ImgDeleteBtn" type="button" class="close" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                        <asp:Image ID="option4Img" class="imgPreview" runat="server" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-3">
                                <asp:Button disabled="true" class="btn btn-primary btn-block" ID="saveQBtn" qType="newQ" runat="server" Text="שמור שאלה" OnClick="saveQuestion_Click" />
                            </div>

                            <div class="col-2">
                                <asp:Button class="btn btn-secondary btn-block" ID="goBackBtn" runat="server" Text="חזור" OnClick="goBack_Click" />
                            </div>

                            <div class="col-3">
                                <asp:Button class="btn btn-outline-primary btn-block" ID="createNewQ" runat="server" Text="שאלה חדשה" OnClick="createNewQ_Click" />
                            </div>
                        </div>

                        <asp:XmlDataSource ID="XmlDataSource1" runat="server" DataFile="~/XML/XMLFile.xml" XPath="/project/game"></asp:XmlDataSource>
                    </div>
                </div>

                <div class="col-4">
                    <h5 class="text-secondary">
                        <b>
                            <asp:Label ID="qNumber" runat="server" Text="Label"></asp:Label>
                        </b>
                        <span>שאלות</span>
                        <small class="mr-4 text-danger">לפחות 10 שאלות לפרסום</small>
                    </h5>

                    <asp:Panel ID="gameQuestionsPanel" runat="server">
                    </asp:Panel>

                    <div class="qListTable">
                        <asp:GridView ID="GridView1" CssClass="table table-hover table-bordered" runat="server" AutoGenerateColumns="False" DataSourceID="XmlDataSource2" OnRowCommand="rowCommand">
                            <Columns>
                                <asp:TemplateField HeaderText="שאלות">
                                    <ItemTemplate>
                                        <asp:Label ID="questionText" runat="server"
                                            Title='<%#Server.UrlDecode(XPathBinder.Eval(Container.DataItem, "questionText").ToString())%>'
                                            Text='<%#Server.UrlDecode(XPathBinder.Eval(Container.DataItem, "questionText").ToString())%>'></asp:Label>
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

    <script src="scripts/editPage.js"></script>

</body>
</html>
