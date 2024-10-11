import {ChildComponent} from '@/core/component/child.component'
import renderService from '@/core/services/render.service'

import styles from './header.module.scss'
import template from './header.template.html'
import { Logo } from './logo/logo.component'
import { Topmenu } from './topmenu/topmenu.component'
import { Burger } from './burger/burger.component'

export class Header extends ChildComponent {
	
	render() {
		this.element = renderService.htmlToElement(template, [
			new Logo(), new Topmenu(), new Burger()
		], styles)

	
		
		

		return this.element
	}
}
