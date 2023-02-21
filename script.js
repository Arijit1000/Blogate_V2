// Array to store the blog posts
var blogPosts = [];

// Function to add a new blog post to the array
function addBlogPost(title, author, content) {
	var post = {
		title: title,
		author: author,
		content: content
	};
	blogPosts.push(post);
}

// Function to display the latest blog posts in the page
function displayLatestPosts() {
	var latestPostsDiv = document.getElementById("latest-posts");
	var latestPostsHtml = "";
	for (var i = 0; i < blogPosts.length; i++) {
		var post = blogPosts[i];
		latestPostsHtml += "<h3>" + post.title + "</h3>";
		latestPostsHtml += "<p><em>By " + post.author + "</em></p>";
		latestPostsHtml += "<p>" + post.content + "</p>";
	}
	latestPostsDiv.innerHTML = latestPostsHtml;
}

// Function to handle the form submission
function handleFormSubmit(event) {
	event.preventDefault(); // prevent the default form submission
	var title = document.getElementById("blog-title").value;
	var author = document.getElementById("blog-author").value;
	var content = document.getElementById("blog-content").value;
	addBlogPost(title, author, content);
	displayLatestPosts();
	document.getElementById("blog-form").reset(); // reset the form fields
}

// Add event listener to the form submit button
var form = document.getElementById("blog-form");
form.addEventListener("submit", handleFormSubmit);
