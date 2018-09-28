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