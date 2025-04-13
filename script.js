document.addEventListener('DOMContentLoaded', function() {
  function getCookie(name) {
    let cookieArray = document.cookie.split('; ');
    let cookie = cookieArray.find((row) => row.startsWith(name + '='));
    return cookie ? cookie.split('=')[1] : null;
  }


  function setCookie(name, value, daysToExpire) {
    let date = new Date();
    date.setTime(date.getTime() + daysToExpire * 24 * 60 * 60 * 1000);
    document.cookie =
      name + '=' + value + ';expires=' + date.toUTCString() + ';path=/';
  }




  let count = getCookie('count');
  

  if (count === null) {
    count = 0;
  } else {

    count = parseInt(count);
  }
  

  count++;
  
 
  setCookie('count', count, 30);
  

  const countDisplay = document.createElement('div');
  countDisplay.innerHTML = `<h2>You have visited this page ${count} time${count !== 1 ? 's' : ''}!</h2>`;
  document.body.appendChild(countDisplay);
});