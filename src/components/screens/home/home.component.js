import { BaseScreen } from "@/core/component/base-screen.component"
import renderService from "@/core/services/render.service"
import styles from './home.module.scss'
import template from './home.template.html'




export class Home extends BaseScreen {
  constructor() {
    super({ title: 'Галтовочные станки' })
    
  }
  
  render() {
    this.element = renderService.htmlToElement(template, [], styles)
    $(document).ready(function() {   
        $( ".line_box_lw10LwV" ).animate({
          width: '48%'
        }, 3000)
        $( '.top_banners_text_p2DbLCv' ).animate({
          left: '+=50', // увеличить на 50
          opacity: 1,
          fontSize: '60px'
        }, 3000)

        $('.footer_fEZWD5o').css('display', 'none')
        $('.left_line_PAIfsjQ').css('display', 'block')
        $('.layout_v_xmSfQ').removeClass('bg_two_oMWZMNR')
      })
    return this.element
  }
}
