const addBookmarkBtn = document.getElementById("add-bookmark");
const bookmarkList = document.getElementById("bookmark-list");
const bookmarkNameInput = document.getElementById("bookmark-name");
const bookmarkUrlInput = document.getElementById("bookmark-url");

document.addEventListener("DOMContentLoaded", loadBookmarks)

addBookmarkBtn.addEventListener("click", function () {

    // Retrieve the user input values for bookmark name and URL, removing any extra spaces
    const name = bookmarkNameInput.value.trim()
    const url = bookmarkUrlInput.value.trim()

    // Show alert and return if any input is empty
    if(!name || !url){
        alert("Please enter both name and URL.");
        return;
    } 

})