
import renderService from '@/core/services/render.service'
import styles from './buksirnye.module.scss'
import template from './buksirnye.template.html'
import { BaseScreen } from '@/core/component/base-screen.component'

export class Buksirnye extends BaseScreen {
	constructor() {
    super({ title: 'Буксирные станки' })
    
  }
	render() {
		this.element = renderService.htmlToElement(template, [], styles);
		$(document).ready(function() {   
			$( ".line_box_W4zlA_F" ).animate({
				width: '50%'
			}, 5000)
			$( '.top_banners_text_nerGGCO' ).animate({
				left: '+=50', // увеличить на 50
				opacity: 1,
				fontSize: '60px'
			}, 3000)
			$('.footer_fEZWD5o').css('display', 'none')
			$('.left_line_PAIfsjQ').css('display', 'block')
})
		return this.element;
	}
}
