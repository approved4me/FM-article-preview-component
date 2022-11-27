let share = document.querySelector(".share");
let user_social  = document.querySelector(".user_social");

share.onclick=function() {
    user_social.classList.toggle("active");
    console.log(user_social);
}