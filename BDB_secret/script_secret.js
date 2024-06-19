function addComment() {
    const commentInput = document.getElementById('commentInput');
    const commentList = document.getElementById('commentList');
    
    if (commentInput.value.trim() !== "") {
        // 새로운 댓글 요소 생성
        const newComment = document.createElement('div');
        newComment.classList.add('comment');
        newComment.textContent = commentInput.value;
        
        // 댓글 리스트에 추가
        commentList.appendChild(newComment);
        
        // 입력 필드 초기화
        commentInput.value = "";
    } else {
        alert("댓글을 입력하세요.");
    }
}