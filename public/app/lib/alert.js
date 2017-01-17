function Alert(message, time = 5000) {
	const el = document.getElementById('toast_messsage');
	console.log('el', el);
  el.innerHTML = message;
  el.className = "toast_messsage toast_messsage--show";
  
	setTimeout(() => {
		el.innerHTML = '';
		el.className = "toast_messsage";
  }, time);

}

export default Alert;