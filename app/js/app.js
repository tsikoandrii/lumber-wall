import LazyLoad from 'vanilla-lazyload'
import Popup from './components/popup.js'

document.addEventListener('DOMContentLoaded', () => {
	const triggers = document.querySelectorAll('[data-popup="order-popup"]')

	const { open } = new Popup('order-popup')
	triggers.forEach(trigger => trigger.addEventListener('click', open))

	new LazyLoad({
		threshold: 0
	});
})
