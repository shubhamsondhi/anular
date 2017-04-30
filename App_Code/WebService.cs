using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;
using System.Web.Script.Services;
using System.Data;
using System.Data.SqlClient;
using System.Web.Configuration;
using System.Runtime.Serialization.Json;
using Newtonsoft.Json;
/// <summary>
/// Summary description for WebService
/// </summary>
[WebService(Namespace = "http://tempuri.org/")]
[WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
// To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
[System.Web.Script.Services.ScriptService]
public class WebService : System.Web.Services.WebService {
    
    List<Employee> list = new List<Employee>();

    public WebService () {

        //Uncomment the following line if using designed components 
        //InitializeComponent(); 
    }
    
    [WebMethod]
    public void HelloWorld(string employeeId)
    {
        var result = JsonConvert.DeserializeObject<List<Employee>>(employeeId);
        // getting connection string
        
        
        string conStr = WebConfigurationManager.ConnectionStrings["conn"].ConnectionString;
       
        
        
        int rowsInserted = 0;
        // Creating Sql Connection
        //using (SqlConnection conn = new SqlConnection(conStr))
        //{
        //    SqlCommand cmd = new SqlCommand();
        //    cmd.Connection = conn;
        //    cmd.CommandText = "sp_sample_info";
        //    cmd.CommandType = CommandType.StoredProcedure;

        //    //cmd.Parameters.Add("@id", employeeId);
        //    //cmd.Parameters.Add("@Name", editedName);
        //    //cmd.Parameters.Add("@Email", editedEmail);
        //    //cmd.Parameters.Add("@Phone", editedPhone);
        //    //cmd.Parameters.Add("@Address", editedAddress);
        //    //cmd.Parameters.Add("@Action", action_mode);



        //    conn.Open();
        //    rowsInserted = cmd.ExecuteNonQuery();
        //    conn.Close();
        //    cmd = null;
        //}

        
    }

    public class Employee
    {
        public int id { get; set; }
        public string p_name { get; set; }
        public string price { get; set; }
        public string dec { get; set; }
        public string quantity { get; set; }
    }
    
}
