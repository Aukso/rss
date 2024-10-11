import {ChildComponent} from '@/core/component/child.component'
import renderService from '@/core/services/render.service'

import styles from './topmenu.module.scss'
import template from './topmenu.template.html'

export class Topmenu extends ChildComponent {
	render() {
		this.element = renderService.htmlToElement(template, [], styles);
		
		return this.element;
	}
}
