function goToLink(url) {
    window.location.href = url;
}

document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const fairyImg = document.getElementById('fairyImg');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = document.getElementById('user').value;
        const password = document.getElementById('pass').value;

        localStorage.setItem('username', username);
        localStorage.setItem('password', password);

        alert('로그인 정보가 저장되었습니다.');

        window.location.href = '/Kwonyujin04.web/권유진_기말프로젝트/BDB_home/index_home.html';

        showFairyImage();

        setTimeout(function() {
            localStorage.removeItem('username');
            updateProfileLink('');
            hideFairyImage();
            alert('사용자 정보가 삭제되었습니다.');
        }, 10000); 
    });

    document.getElementById('user').addEventListener('input', handleInput);
    document.getElementById('pass').addEventListener('input', handleInput);

    function handleInput(event) {
        console.log(`${event.target.id} 필드에 값이 입력되었습니다: ${event.target.value}`);
    }

    function showFairyImage() {
        fairyImg.style.display = 'block';
    }

    function hideFairyImage() {
        fairyImg.style.display = 'none';
    }
});