
const element = document.getElementById('blog')
// for(i=1;i<=5;i++){
// var v = document.createElement('div');
// v.style.backgroundColor='black';
// v.style.height='100px';
// v.style.color='white';
// v.textContent="Dipayan  os a  asdjaskjf akfjassfkba akjbfkjab"
// var v1 = document.createElement('div');
// v1.style.backgroundColor='black';
// v1.style.height='100px';
// v1.style.color='white';
// v1.textContent="Dipayan  os a  asdjaskjf akfjassfkba akjbfkjab"
// v.append(v1)
// element.append(v)
// console.log(i)
// }
fetch("/raw/blogs/blog.json")
  .then((response) => response.json())
  .then((data) => {
    for (var i = 0; i < data.length; i++) {
        var v = document.createElement('a');
        v.className = "col-lg-4 col-md-6 col-12"
        v.href='/blog.html'
        var v1 = document.createElement('div');
        v1.className = "single-service"
        var v2 = document.createElement('h4');
        v2.className = "text-title"
        v2.textContent = data[i].title;
        v1.append(v2)
        v.append(v1)
        element.append(v)
        console.log(i)
    }
  })
  .catch((error) => console.error("Error loading JSON file", error));

