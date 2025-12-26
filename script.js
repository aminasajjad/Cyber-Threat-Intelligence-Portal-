function login(){
    let u = document.getElementById("user").value;
    let p = document.getElementById("pass").value;

    if(u==="admin" && p==="1234"){
        window.location="dashboard.html";
    }else{
        document.getElementById("msg").innerHTML="Invalid Login!";
    }
}
