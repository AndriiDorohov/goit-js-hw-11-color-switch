const colors = [
	'#FFFFFF',
	'#2196F3',
	'#4CAF50',
	'#FF9800',
	'#009688',
	'#795548',
  ];
  
  const startBtn = document.querySelector('[data-action="start"]');
  const stopBtn = document.querySelector('[data-action="stop"]');
  
  
  const randomIntegerFromInterval = (min, max) => {
	return Math.floor(Math.random() * (max - min + 1) + min);
  };
  
  const timer = {
	switchColors: null,
	isActive: false,
	start() {
  if (this.isActive) {
		return;
  }
  
		this.isActive = true;
		startBtn.disabled = true;
		
  this.switchColors = setInterval(() => {
		let i = randomIntegerFromInterval(0, colors.length - 1);
		document.body.style.backgroundColor = colors[i];
  }, 1000);
	},
	stop() {
  clearInterval(this.switchColors);
		this.isActive = false;
   startBtn.disabled = false;
  
	},
  };
  
  startBtn.addEventListener("click", timer.start.bind(timer));
  stopBtn.addEventListener("click", timer.stop.bind(timer));