import {ChildComponent} from '@/core/component/child.component'
import renderService from '@/core/services/render.service'

import styles from './footer.module.scss'
import template from './footer.template.html'

export class Footer extends ChildComponent {
	render() {
		this.element = renderService.htmlToElement(template, [], styles);
		
		return this.element;
	}
}
