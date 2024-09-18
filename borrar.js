function showModal(htmlElement) {
  const shadow = document.createElement('div');
  shadow.classList.add('test-exp-1028-modal-shadow');
  shad
}

(() => {
  const container = document.querySelector('.fa--additional-services');
  if (!container) return;

  const lowerPrice = [...document.querySelectorAll('#test-id-additional-service button')].map((e) => e.textContent).filter((text) => text.includes('$')).map((text) => text.split('$')[1].trim())[0];
  

})();

(() => {
  const container = document.querySelector('.fa--warranty');
  if (!container) return;
  const lowerPrice = [...document.querySelectorAll('#test-id-warranty-option button')].map((e) => e.textContent).filter((text) => text.includes('$')).map((text) => text.split('$')[1].trim())[0];
})();

const style = document.createElement('style');
style.innerHTML = `
#additional-service_up_id, #warranty-option_up_id {
  display: none !important;
}
`;
document.head.appendChild(style);
