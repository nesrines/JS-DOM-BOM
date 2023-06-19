document.getElementById("Search").addEventListener("click", () => {
    let SearchBar = document.getElementById("SearchBar");
    SearchBar.classList.toggle("d-none");
    SearchBar.classList.toggle("d-flex");
    document.getElementById("Search").classList.toggle("active");
})
document.querySelector(".fa-xmark").addEventListener("click", () => {
    let SearchBar = document.getElementById("SearchBar");
    SearchBar.classList.replace("d-flex", "d-none");
    document.getElementById("Search").classList.remove("active");
})