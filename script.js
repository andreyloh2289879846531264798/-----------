const toggleSwitch = document.querySelector('.theme-switch input[type = "chekbox"]');
function switchTheme(e){

if (e.target.cheked){
document.documentElement.setAttribute('data-theme', 'dark');
}else {

document.documentElement.setAttribute('data-theme', 'light');

}
}

toggleSwitch.addEventListener('change',switchTheme,false);




