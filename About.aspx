<%@ Page Language="C#" AutoEventWireup="true" CodeFile="About.aspx.cs" Inherits="_Default" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>About</title>
    <link href="styles/bootstrap.css" rel="stylesheet" />
    <link href="styles/main.css" rel="stylesheet" />
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

    <form id="form1" runat="server">
        <div class="text-center mt-5 font-weight-bold" style="font-size: 20px;">
            <p>אפיון ופיתוח על-ידי מרים ליוברוב וולריה ברון</p>
            <p>אופיין ופותח במסגרת פרויקט בקורסים:</p>
            <p>סביבות לימוד אינטראקטיביות 2 +  תכנות 2 + תכנות אינטראקטיבי 2 תשע"ח</p>
            <img src="images/hit-logo.png" width="160px;" />
            <p class="mt-3"><a href="https://www.hit.ac.il/telem/overview" target="_blank">הפקולטה לטכנולוגיות למידה</a></p>
            <a href="/GamesList.aspx" class="btn btn-primary">חזור</a>
        </div>
    </form>
</body>
</html>
