

// begin:: Nhấn nút đàn hồi
document.addEventListener('DOMContentLoaded', () => {
    const btn = document.querySelector('.btn-2');
    btn.addEventListener('mouseenter', e => {
        e.target.classList.add('is-poyo');
    });
    btn.addEventListener('mouseup', e => {
        e.target.classList.add('is-poyo');
    });
    btn.addEventListener('animationend', e => {
        e.target.classList.remove('is-poyo');
    });
});
// end:: Nhấn nút đàn hồi