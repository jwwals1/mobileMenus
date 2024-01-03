function toggleMenus(element) {
    let dropdowns = document.getElementsByClassName("dropdown-content");

    let thisDropdown = element.nextSibling.nextSibling

    if (!thisDropdown.classList.contains('show')) {
        let i;
        for (i = 0; i < dropdowns.length; i++) {
            dropdowns[i].classList.remove('show')
        }
    }
    thisDropdown.classList.toggle('show')
}
 