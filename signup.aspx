%@ Page Language="C#" AutoEventWireup="true" CodeFile="signup.aspx.cs" Inherits="_Default" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
    <div>
    <table>
        <tr>
            <td>Name</td><td>
                <asp:TextBox ID="name" runat="server"></asp:TextBox></td>
        </tr>
         <tr>
            <td>Emailid</td><td>
                <asp:TextBox ID="email" runat="server" TextMode="Email"></asp:TextBox></td>
        </tr>
         <tr>
            <td>Mobile</td><td>
                <asp:TextBox ID="mobile" runat="server"></asp:TextBox></td>
        </tr>
         <tr>
            <td>Password</td><td>
                <asp:TextBox ID="password" runat="server" TextMode="Password"></asp:TextBox></td>
        </tr>    
        <tr>
            <td>Address</td><td>
                <asp:TextBox ID="address" runat="server" TextMode="MultiLine"></asp:TextBox></td>
        </tr>         
         <tr>
            <td></td><td>
                <asp:Button ID="submit" runat="server" Text="Submit" OnClick="submit_Click" /></td>
        </tr>               
    </table>
        <asp:SqlDataSource ID="SqlDataSource1" runat="server" ConnectionString="<%$ ConnectionStrings:conn %>" InsertCommand="INSERT INTO customer(address, mobile_no, email, password, f_name) VALUES (@address, @mob, @email,@pass,@name)" SelectCommand="SELECT [f_name], [address], [mobile_no], [email], [password] FROM [customer]">
            <InsertParameters>
                <asp:ControlParameter ControlID="address" Name="address" PropertyName="Text" />
                <asp:ControlParameter ControlID="mobile" Name="mob" PropertyName="Text" />
                <asp:ControlParameter ControlID="email" Name="email" PropertyName="Text" />
                <asp:ControlParameter ControlID="password" Name="pass" PropertyName="Text" />
                <asp:ControlParameter ControlID="name" Name="name" PropertyName="Text" />
            </InsertParameters>
        </asp:SqlDataSource>
    </div>
    </form>
</body>
</html>
