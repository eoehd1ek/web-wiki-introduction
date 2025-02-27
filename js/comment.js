const submitButton = document.getElementById("comment-submit");

function addComment() {
  const input = document.getElementById("comment-context");
  const input_text = input.value;
  if (!input_text) {
    alert("댓글을 입력해주세요.");
    return;
  }

  const commentItem = document.createElement("div");
  commentItem.classList.add("comment-item");

  const commentAuthor = document.createElement("div");
  commentAuthor.classList.add("comment-author");

  const authorIcon = document.createElement("img");
  authorIcon.src = document.getElementById("commenter-image").src;
  authorIcon.alt = "사용자 프로필 이미지";

  const authorName = document.createElement("span");
  authorName.textContent = "방문자";

  const commentContent = document.createElement("div");
  commentContent.classList.add("comment-content");
  commentContent.textContent = input_text;

  commentAuthor.appendChild(authorIcon);
  commentAuthor.appendChild(authorName);
  commentItem.appendChild(commentAuthor);
  commentItem.appendChild(commentContent);

  const comment = document.createElement("li");
  comment.appendChild(commentItem);

  const commentList = document.querySelector(".comment-list");
  commentList.appendChild(comment);

  // 입력창 초기화
  input.value = "";

  alert("댓글이 등록되었습니다.");
}

submitButton.addEventListener("click", addComment);
