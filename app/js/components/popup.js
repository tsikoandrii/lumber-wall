class Popup {
	constructor(id, closeTrigger, onClose = () => {}) {
		this.$el = document.getElementById(id)
		if (!this.$el) throw Error('Popup element undefined!')
		
		this.$closeTrigger = this.$el.querySelector('[data-close]')
		if (!this.$el) throw Error('Close element undefined!')
		
		this.open = this.open.bind(this)
		this.close = this.close.bind(this)
		this.onClose = onClose
		this.prepare();
	}

	prepare() {
		this.$closeTrigger.addEventListener('click', this.close)
	}

	open() {
		this.$el.classList.add('active')
		// document.body.classList.add('no-scroll')
	}

	close() {
		this.$el.classList.remove('active')
		// document.body.classList.remove('no-scroll')
		this.onClose()
	}
}

export default Popup;