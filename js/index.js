$(document).ready(function(){
    
    $("#btnLogIn").on("click",function(event){
        if(($("#txtUserName").val().length < 1) || ($("#txtPassword").val().length < 1)){
            if($("#txtUserName").val().length < 1){
                $(".errorDiv").removeClass("displayNone");
                var errorLink='<li> <a href="#" data-linkedElement="txtUserName">Please enter correct Username</a> </li>';
                $(".errorDiv ul").append(errorLink); 

                $("#txtUserName").parent().addClass("error"); 
                $(".errorDiv ul a").focus();
            }        
            if($("#txtPassword").val().length < 1){
                $(".errorDiv").removeClass("displayNone");
                var errorLink='<li> <a href="#" data-linkedElement="txtPassword">Please enter correct Password</a> </li>';
                $(".errorDiv ul").append(errorLink);

                $("#txtPassword").parent().addClass("error");
            }
        } else{
            console.log("success");
        }
    });

    $(document).on("click",".errorDiv a",function(){
        $("#"+$(this).attr("data-linkedelement")).focus();
    });
    
});