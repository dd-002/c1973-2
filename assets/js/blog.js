
const element = document.getElementById('blog')
fetch("/raw/blogs/blog.json")
  .then((response) => response.json())
  .then((data) => {
    for (var i = 0; i < data.length; i++) {
        var v = document.createElement('a');
        v.className = "col-lg-4 col-md-6 col-12"
        v.href='/blog.html?id='+(i+1);
        var v1 = document.createElement('div');
        v1.className = "single-service"
        v1.style.backgroundImage='url(/ass/cover.jpg)'
        var v2 = document.createElement('h4');
        v2.className = "text-title"
        v2.style.margin="auto"
        v2.textContent = data[i].title;
        v1.append(v2)
        v.append(v1)
        element.append(v)
        console.log(i)
    }
  })
  .catch((error) => console.error("Error loading JSON file", error));

