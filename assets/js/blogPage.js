const element = document.getElementById('md');
const relUrl = new URL(window.location.href)
console.log(relUrl)
element.src = "/raw/blogs/blog"+relUrl.searchParams.get('id')+".md"
