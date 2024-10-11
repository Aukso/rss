import {ChildComponent} from '@/core/component/child.component'
import renderService from '@/core/services/render.service'
import styles from './leftbuttons.module.scss'
import template from './leftbuttons.template.html'


export class Leftbuttons extends ChildComponent {
	render() {
		this.element = renderService.htmlToElement(template, [], styles)
		
		let tab = ($(this.element).children())
		
		$(document).ready(function(){	
			for (let i = 0; i < tab.length; i++) {
				let tab_click = $(tab[i])
				tab_click.click(function() {
					$('.tab_dyM8Wdu').removeClass('active_ZzyO7P5')
					$(this).toggleClass('active_ZzyO7P5')
					if(this !== (tab[0])){
						$('video').css('display','none')
					}else{
						
						$('video').css('display','block')
					}					
				})
			}
			$('.logo_QJDj0Kk').click(function(){
				
				$('video').css('display', 'block');
				$('.tab_dyM8Wdu').removeClass('active_ZzyO7P5')
				$('.one_tab').addClass('active_ZzyO7P5')
			})
		})
		return this.element
	}
}
