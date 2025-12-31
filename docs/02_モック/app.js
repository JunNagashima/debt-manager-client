// わりかんノート - 共通JavaScript

// モーダル制御
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('is-open');
    document.body.style.overflow = '';
  }
}

function closeModalOnOverlay(event) {
  if (event.target.classList.contains('modal-overlay')) {
    event.target.classList.remove('is-open');
    document.body.style.overflow = '';
  }
}

// ESCキーでモーダルを閉じる
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    const openModal = document.querySelector('.modal-overlay.is-open');
    if (openModal) {
      openModal.classList.remove('is-open');
      document.body.style.overflow = '';
    }
  }
});

// 相殺プレビュー表示切替
function toggleOffsetPreview() {
  const select = document.getElementById('offset-select');
  const preview = document.getElementById('offset-preview');
  if (select && preview) {
    preview.style.display = select.value ? 'block' : 'none';
  }
}

// 日付入力の初期化
document.addEventListener('DOMContentLoaded', () => {
  const today = new Date().toISOString().split('T')[0];
  document.querySelectorAll('input[type="date"]').forEach(input => {
    if (!input.value) input.value = today;
    input.setAttribute('max', today);
  });
});
