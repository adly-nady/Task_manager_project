let icon = document.getElementsByClassName('setting-icon')[0];
// let icons = document.getElementsByClassName('icons')[0];
let list = document.getElementsByClassName('list')[0];

icon.addEventListener('click', function() {
    list.classList.toggle('hidden');
    // for(let i=0 ;i<icons.length ;i++){
    // icons.classList.toggle('hidden');
    // console.log(icon[i]);}
});