function bookMarkHandle(){
let bookmarks = document.querySelectorAll('#bookmark-holder');
    for (let bookmark of bookmarks)
    {
        bookmark.addEventListener('click',function(){
            this.classList.toggle('bookmark-false');
            this.classList.toggle('bookmark-true');
            let value = this.getAttribute("value");
            console.log(value);
        })
    }
}