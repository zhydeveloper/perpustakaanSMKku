// humburger active
const navbarNav = document.querySelector('.navbar-nav');
document.querySelector('#humburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

// klik diluar humbuger menu    
document.addEventListener('click', function(e) {
    if (!document.querySelector('#humburger-menu').contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
});

// send whatsapp

function sendwhatsapp() {
    var phonenumber = "+628386802840";

    var email = document.querySelector("#email").value;
    var pesan  = document.querySelector("#pesan").value;

    var message = "Email : " + email + "\n" +
                 "pesan : " + pesan + "\n"


                 var url  = "https://api.whatsapp.com/send?phone=" + phonenumber + "&text=" + encodeURIComponent(message);
                 window.open(url, "_blank");
};