function signIn(e) {
    let email = document.getElementById('email').value, pass = document.getElementById('pass').value;
    let DataAnda = JSON.parse(localStorage.getItem('DataAnda')) || [];
    let exist = DataAnda.length && 
    JSON.parse(localStorage.getItem('DataAnda')).some(data => data.email.toLowerCase() == email && data.pass.toLowerCase() == pass);
    alert("Berhasil Login");
    window.location.href = "index.html"
    if(!exist){
        alert("Login Gagal");
    }
    else{
        location.href = "/";
    }
    e.preventDefault();
}
