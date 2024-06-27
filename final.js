$(document).ready(function() {
    let comments = [];
    
    function renderComments() {
        $('#comments').empty();
        comments.forEach(function(comment, index) {
            $('#comments').prepend(`
                <div class="comment" data-index="${index}">
                    <div class="comment-header">
                        <strong>${comment.displayName}</strong>
                        <div class="comment-actions">
                            <button class="editComment">Edit</button>
                            <button class="deleteComment">Delete</button>
                        </div>
                    </div>
                    <div class="comment-body">${comment.text}</div>
                </div>
            `);
        });
    }

    $('#postComment').click(function() {
        let displayName = $('#displayName').val().trim();
        let commentText = $('#commentText').val().trim();

        if (displayName && commentText) {
            comments.push({ displayName: displayName, text: commentText });
            $('#displayName').val('');
            $('#commentText').val('');
            renderComments();
        }
    });

    $(document).on('click', '.deleteComment', function() {
        let index = $(this).closest('.comment').data('index');
        comments.splice(index, 1);
        renderComments();
    });

    $(document).on('click', '.editComment', function() {
        let index = $(this).closest('.comment').data('index');
        let newText = prompt('Edit your comment:', comments[index].text);
        if (newText !== null) {
            comments[index].text = newText;
            renderComments();
        }
    });

    renderComments();
});
