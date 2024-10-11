import {ChildComponent} from '@/core/component/child.component'
import renderService from '@/core/services/render.service'

import styles from './burger.module.scss'
import template from './burger.template.html'

export class Burger extends ChildComponent {
	render() {
		this.element = renderService.htmlToElement(template, [], styles);
		
		return this.element;
	}
}
