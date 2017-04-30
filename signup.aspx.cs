using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data;
public partial class _Default : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        

    }
    protected void submit_Click(object sender, EventArgs e)
    {

        DataView x;
        Boolean flag = false;
        x = (DataView)SqlDataSource1.Select(DataSourceSelectArguments.Empty);
        for (Int32 i = 0; i <= x.Table.Rows.Count - 1; i++)
        {
            if (email.Text.ToLower() == x.Table.Rows[i]["email"].ToString().ToLower())
            {
                flag = true;
                break;
            }
        }
        if (flag == true)
        {
            name.Focus();

            Response.Redirect("inf.aspx");

        }
        else
        {

            SqlDataSource1.Insert();
            Response.Redirect("info/City table.aspx");

        }
    }
}