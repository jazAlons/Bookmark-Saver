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
    } else{ // If URL doesn't start with http:// or https://, show alert and stop
        if(!url.startsWith("http://") && !url.startsWith("https://")){
            alert("Please enter a valid URL starting with http:// or https://");
            return;
        } // Add and save the bookmark, then clear input fields
        addBookmark(name, url);
        saveBookmark(name, url);
        bookmarkNameInput.value = "";
        bookmarkUrlInput.value= ""; 
    }
});

function addBookmark(name, url){
    // Create list item and link elements for the bookmark
    const li = document.createElement("li")
    const link = document.createElement("a")
    // Set link href, text and open in new tab
    link.href = url
    link.textContent = name
    link.target = "_blank"
    // Create a remove button for deleting the bookmark
    const removeButton = document.createElement("button")
    removeButton.textContent = "Remove"
    removeButton.addEventListener("click" , function () {
        bookmarkList.removeChild(li)
        removeBookmarkFromStorage(name, url);
    });
    // Add the link and remove button to the list item, then append it to the bookmark list
    li.appendChild(link);
    li.appendChild(removeButton);
    bookmarkList.appendChild(li);
}

// Retrieve bookmarks from localStorage, or return empty array if none
function getBookmarksFromStorage(){
    const bookmarks = localStorage.getItem("bookmarks")
    return bookmarks ? JSON.parse(bookmarks) : []
}

// Save a new bookmark to localStorage by adding it to the existing list
function saveBookmark(name, url){
    const bookmarks = getBookmarksFromStorage()
    bookmarks.push({name, url})
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks))
}
// Load bookmarks from storage and display them by calling addBookmark
function loadBookmarks(){
    const bookmarks = getBookmarksFromStorage();
    bookmarks.forEach((bookmark) => addBookmark(bookmark.name, bookmark.url));
}