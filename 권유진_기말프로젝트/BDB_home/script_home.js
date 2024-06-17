function getToday() {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const date = today.getDate();

    return `${year}년 ${month}월 ${date}일`;
}

document.getElementById('date').textContent = getToday();

function goToLink(url) {
    window.location.href = url;
}