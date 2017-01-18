function Alert(message, time = 5000) {
	const el = document.getElementById('toast_messsage');
	let timeout;
  el.innerHTML = message;
  el.className = "toast_messsage toast_messsage--show";

	timeout = setTimeout(() => {
		el.innerHTML = '';
		el.className = "toast_messsage";
  }, time);
}

export default Alert;