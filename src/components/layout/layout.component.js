import renderService from '@/core/services/render.service'
import styles from './layout.module.scss'
import template from './layout.template.html'
import { $W } from '@/core/wquery/wquery.lib'
import { Header } from './header/header.component'
import { ChildComponent } from '@/core/component/child.component'
import { Leftmenu} from './leftmenu/leftmenu.component'
import { Footer } from './footer/footer.component'




export class Layout extends ChildComponent {
	
	constructor({ router, children }) {
		super()
		this.router = router
		this.children = children
	}
	
	render() {
		this.element = renderService.htmlToElement(template, [Leftmenu], styles)
		
		const mainElement = $W(this.element).find('main')
		
		const contentContainer = $W(this.element).find('#content')
		contentContainer.append(this.children)
		
		
		
		
		mainElement.before(new Header().render()).append(contentContainer.element)+
		mainElement.after(new Footer().render()).append(contentContainer.element)+
		
		
		
		
		
		$(document).ready(() => {
			$(window).on('load pageshow', function () {
				$('.layout_v_xmSfQ').removeClass("off_RQRLlyp")
				$('.layout_v_xmSfQ').addClass("on_HITwJr2")
			
			});    
			$("a").click(function() {
				$('.layout_v_xmSfQ').removeClass("on_HITwJr2")
				$('.layout_v_xmSfQ').addClass("off_RQRLlyp") 
				window.setTimeout(function() {
					$('.layout_v_xmSfQ').removeClass("off_RQRLlyp")
					$('.layout_v_xmSfQ').addClass("on_HITwJr2") 
					$('.left_line_PAIfsjQ').css('display', 'block')
				}, 400);    
				
			})
			
			
			$('.one_tab').click(() => {
				$(this.element).removeClass('bg_XzYP3i4')
				$(this.element).removeClass('bg_one_hrdggt2')
				$(this.element).removeClass('bg_three_RvHZWOZ')
			})
			$('.two_tab').click(() => {
				$(this.element).removeClass('bg_three_RvHZWOZ')
				$(this.element).addClass('bg_XzYP3i4')
			})
			$('.three_tab').click(() => {
				$(this.element).addClass('bg_XzYP3i4')
				$(this.element).removeClass('bg_one_hrdggt2')
				
				
			})
			
			$('.logo_QJDj0Kk').click(() => {
				$(this.element).removeClass('bg_XzYP3i4')
				$(this.element).removeClass('bg_three_RvHZWOZ')
				$(this.element).removeClass('bg_one_hrdggt2')
				
			})
			
		})
		
		return this.element
	}
}
