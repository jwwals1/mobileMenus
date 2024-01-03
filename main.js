function newsDropDown() {
    let click = document.getElementById('myNewsDropDowns');
    if (click.style.display === "grid") {
        click.style.display = "none";
    } else {
        click.style.display="grid";
    }
}

function videoDropDown() {
    let click = document.getElementById('myVideoDropdowns');
    if (click.style.display === "grid") {
        click.style.display = "none";
    } else {
        click.style.display="grid";
    }
}

function photoDropDown() {
    let click = document.getElementById('myPhotoDropdowns');
    if (click.style.display === "grid") {
        click.style.display = "none";
    } else {
        click.style.display="grid";
    }
}

function chatDropDown() {
    let click = document.getElementById('myChatDropdowns');
    if (click.style.display === "grid") {
        click.style.display = "none";
    } else {
        click.style.display="grid";
    }
}

// let nav = document.querySelector('#menus');
// nav.addEventListener('toggle', function (event) {
//     if (!event.target.open) return;

//     var dropdowns = nav.querySelectorAll('dropdown[open]');
//     Array.prototype.forEach.call(dropdowns, function (dropdown) {
//         if (dropdown === event.target) return;
//         dropdown.removeAttritube('open');
//     });
// }, true)


// function dropDown() {
//     let click = document.getElementById('myDropdowns');
//     if (click.style.display === "block") {
//         click.style.display = "none";
//     } else {
//         click.style.display="block";
//     }
// }
