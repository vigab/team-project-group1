(() => {
  const refs = {
    openModal2Btn: document.querySelectorAll('[data-modal2-open]'),
    closeModal2Btn: document.querySelector('[data-modal2-close]'),
    modal2: document.querySelector('[data-modal2]'),
  };
  refs.openModal2Btn.forEach(el => el.addEventListener('click', toggleModal2));
  refs.closeModal2Btn.addEventListener('click', toggleModal2);
  function toggleModal2() {
    refs.modal2.classList.toggle('backdrop--hidden');
  }
})();