document.getElementById("Search").addEventListener("click", () => {
    let SearchBar = document.getElementById("SearchBar");
    SearchBar.classList.toggle("d-none");
    document.getElementById("Search").classList.toggle("active");
    
})