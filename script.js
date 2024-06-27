const ACCESS_KEY = "H9E7Cm1F7xUK1tCq2s3UPSFPAXPBA2qQJ6SobC3Svvc"
const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const showMoreBtn = document.getElementById("show-more-btn");
let keyword = "";
let page = 1;
async function searchImages(){
  keyword = searchbox.value;
  const url = "https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${ACCESS_KEY}";
  const response = await fetch(url);
  const data = await response.json();
  console.log(data)
}
searchForm.addEventListener("submit", (e) =>{
  e.preventDefault();
  page = 1;
})
