// Thêm bình luận mới
function saveComment() {
    var commentText = document.getElementById("commentBox").innerText;
    if(commentText.trim()) {
        var commentDiv = document.createElement('div');
        commentDiv.classList.add('comment');
        commentDiv.innerHTML = `
            <div class="comment-header">
                <span>Người dùng</span>
                <div>
                    <span class="heart" onclick="toggleLike(this)">&#9829;</span>
                    <span class="like-count">0</span>
                </div>
            </div>
            <div class="comment-body">${commentText}</div>
            <div class="comment-actions">
                <button class="response-button" onclick="replyComment(this)">Trả lời</button>
            </div>
            <div class="response-input" contenteditable="true"></div>
            <button class="submit-response-button" onclick="submitResponse(this)">Đăng trả lời</button>
        `;
        document.getElementById('commentsList').appendChild(commentDiv);
        document.getElementById("commentBox").innerText = ""; // Xóa nội dung trong hộp bình luận
    }
}

// Tính năng thả tim
function toggleLike(heart) {
    heart.classList.toggle('liked');
    const likeCount = heart.nextElementSibling;
    let currentCount = parseInt(likeCount.innerText);
    currentCount = heart.classList.contains('liked') ? currentCount + 1 : currentCount - 1;
    likeCount.innerText = currentCount;
}

// Trả lời bình luận
function replyComment(button) {
    const responseInput = button.closest('.comment').querySelector('.response-input');
    responseInput.style.display = 'block';
}

// Đăng trả lời
function submitResponse(button) {
    const responseText = button.closest('.comment').querySelector('.response-input').innerText;
    if (responseText.trim() !== '') {
        alert
    }
    }