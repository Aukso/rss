import {ChildComponent} from '@/core/component/child.component'
import renderService from '@/core/services/render.service'
import styles from './leftmenu.module.scss'
import template from './leftmenu.template.html'
import { Leftbuttons } from './leftbuttons/leftbuttons.component';

export class Leftmenu extends ChildComponent {

	
	render() {
		this.element = renderService.htmlToElement(template, [Leftbuttons], styles)
	
		return this.element
	}
}
