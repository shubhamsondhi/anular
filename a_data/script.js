
    var aa = angular.module('cspExample', []);
    aa.controller('MainController', ['$scope', function ($scope, $http) {

        //------------insilise variables---------------------------------
     
      $scope.sum = 0;
      var list2 = {};
      list2.pp1 = [];
      $scope.checked = false;
      var num = 0;
      var idadd = 1;
      $scope.product1 = product;
      var list = {};            
      list.itemlist = [];
      $scope.ff = {}
      $scope.page = temp[0].url;
        
        //---------------------function section-------------------------------
      
      add = function (id2) {
          id1 = id2.id;
          var id = '#' + id1;

         
          var check = false;
          for (var i in $scope.ff)
          {
              if (id1 === $scope.ff[i].id)
              {
                  check=true
              }

          }
          if (check == false)
              {              

              var new_obj = { 'id': id1, 'p_name': $(id + " .menu_title").text(), 'price': Number($(id + " .menu_price").text().slice(1)), 'dec': $(id + " .post_detail").text(),'quantity':'' };
    //list[num].p_name.push($scope.num);
    list.itemlist.push(new_obj);
    $scope.ff = list.itemlist;
    $(id).addClass("one_a");
    }
        //.attr("onclick", "");
    //$(id).toggleClas;s("main");
    //$(id).wrap('<a href="#" id="' + id + '" onclick="delete1()"></a>');
    //$($('<a href="#" id="' + id + '" onclick="delete1()" ng-click="" >' + $(id).html() + '</a>')).replaceAll(id);
};
   
$scope.sayHello = function () {
    var sum = 0;
    for (var i in list2.pp1) {
        sum = sum + list2.pp1[i].sum;
    }
   
    return sum;
};
$scope.delete1 = function (index)
{
    var s = [];
    
   list2.pp1.splice(index, 1);
    s = $scope.ff.splice(index, 1);
    //s[0].idal
    var id = s[0].id;
    var idh = '#' + id;
    $(idh).removeClass("one_a");
   


   };

$scope.pertotal = function (sum , id_per,quantity)
{
    list2.pp1[id_per] = { "sum": sum, "quantity": quantity}
    $scope.ff[id_per].quantity = quantity;
    return sum;
}
$scope.change_view = function ()
{
    $(this).addClass("one_a");
    if ($scope.sayHello() != 0 && !isNaN($scope.sayHello())) {
        bill = $scope.ff;
        $.ajax({
            type: "POST",
            url: "save.php",
             //data: {
            //    Employee: JSON.stringify($scope.ff)
            //        },

            data: bill,
            success: function () {
                
                $scope.page = 'save.php';

                //BindTable(response.innerHTML);
            },
            failure: function () {
                alert("msg");
            }
        });
       

        //document.getElementById("jsonst").value = JSON.stringify($scope.ff);
        //$scope.page = temp[1].url;
       
 
    }
    else {
        alert(isNaN($scope.sayHello()));
        document.getElementById("alert").innerHTML = "";

    }

}
$scope.isNaN = function (value,limet)
{
    
    if (isNaN(value)) {
      
        if (limet == undefined && limet != 0) {
            
            return 0;

        } else {
            return 0;
        }
    }
    else
    {

        return value;
    }
   

}



      //this.add = function ()
      //{
      //    this.arry1 = [];

      //    this.arry1.firstname=document.getElementById("p_name").innerHTML;
      //    document.getElementById("counter").innerHTML =  this.arry1.firstname;
      //}



     
  }]);

