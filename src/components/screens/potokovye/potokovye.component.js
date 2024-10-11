import renderService from '@/core/services/render.service'
import styles from './potokovye.module.scss'
import template from './potokovye.template.html'
import { BaseScreen } from '@/core/component/base-screen.component'

export class Potokovye extends BaseScreen {
	constructor(){
		super({title: ' Потоковые станки'})
	}
	
	render() {
		this.element = renderService.htmlToElement(template, [], styles);
		$(document).ready(function() {   
			$( ".line_box_V5WvTEi" ).animate({
				width: '50%'
			}, 5000)
			$( '.top_banners_text_yPGKZVQ' ).animate({
				left: '+=50', // увеличить на 50
				opacity: 1,
				fontSize: '60px'
			}, 3000)
			$('.left_line_PAIfsjQ').css('display', 'block')
			$('.footer_fEZWD5o').css('display', 'none')
			$('.layout_v_xmSfQ').removeClass('bg_two_oMWZMNR')
})
		return this.element;
	}
}
