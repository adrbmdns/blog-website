document.addEventListener("DOMContentLoaded", () => {
    const blogList = document.getElementById('blog-list');
    
    // Simulated blog post data
    const posts = [
        { title: "First Post", summary: "This is the first blog post", link: "post.html" },
        { title: "Second Post", summary: "This is the second blog post", link: "post.html" },
    ];

    // Dynamically load blog posts
    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.innerHTML = `
            <h3><a href="${post.link}">${post.title}</a></h3>
            <p>${post.summary}</p>
        `;
        blogList.appendChild(postElement);
    });
});
