document.addEventListener("DOMContentLoaded", () => {
    const postList = document.getElementById('post-list');
    const createPostButton = document.getElementById('create-post');

    // Simulated posts
    const posts = [];

    // Function to display posts
    const renderPosts = () => {
        postList.innerHTML = ''; // Clear the list before rendering
        posts.forEach((post, index) => {
            const postElement = document.createElement('li');
            postElement.innerHTML = `
                <h3>${post.title}</h3>
                <p>${post.content}</p>
                <button onclick="deletePost(${index})">Delete</button>
            `;
            postList.appendChild(postElement);
        });
    };

    // Create new post
    createPostButton.addEventListener('click', () => {
        const postTitle = document.getElementById('post-title').value;
        const postContent = document.getElementById('post-content').value;
        if (postTitle && postContent) {
            posts.push({ title: postTitle, content: postContent });
            renderPosts();
            document.getElementById('post-title').value = '';
            document.getElementById('post-content').value = '';
        }
    });

    // Delete post
    window.deletePost = (index) => {
        posts.splice(index, 1); // Remove the post
        renderPosts();
    };
});
