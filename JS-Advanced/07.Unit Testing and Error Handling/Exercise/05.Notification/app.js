function notify(message) {
  let notification = document.getElementById('notification');
  notification.innerText = message;
  notification.style.display = 'block';
  notification.addEventListener('click', onClickDiv);

  function onClickDiv(event) {
    event.target.style.display='none';
  }
}