document.addEventListener("DOMContentLoaded", () => {
    const commentList = document.getElementById('comment-list');
    const submitCommentButton = document.getElementById('submit-comment');

    // Simulated post content
    const postContent = document.getElementById('post-content');
    postContent.innerHTML = "<h2>Sample Post Title</h2><p>This is the content of the post.</p>";

    // Comment submission functionality
    submitCommentButton.addEventListener('click', () => {
        const commentText = document.getElementById('comment-text').value;
        if (commentText) {
            const commentElement = document.createElement('li');
            commentElement.textContent = commentText;
            commentList.appendChild(commentElement);
            document.getElementById('comment-text').value = '';
        }
    });
});
