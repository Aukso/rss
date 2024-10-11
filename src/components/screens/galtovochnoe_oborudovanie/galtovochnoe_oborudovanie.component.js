import { BaseScreen } from "@/core/component/base-screen.component";
import renderService from "@/core/services/render.service";
import styles from './galtovochnoe_oborudovanie.module.scss';
import template from './galtovochnoe_oborudovanie.template.html';



export class Galtovochnoe_Oborudovanie extends BaseScreen {
  constructor() {
    super({title: 'Галтовочное оборудование'})
  }
  
  render() {
    const element = renderService.htmlToElement(template, [], styles)
    $(document).ready(function() {   
      $( '.top_banners_text_u9ZodYX' ).animate({
        left: '+=50',
        opacity: 1,
        fontSize: '60px'
      }, 3000)
      
      if($(document.location)[0].pathname === '/galtovochnoe_oborudovanie'){
        $('video').css('display', 'none')
        $('.layout_v_xmSfQ').addClass('bg_one_hrdggt2')
        $('.left_line_PAIfsjQ').css('display', 'none')
        $('.footer_fEZWD5o').css('display', 'block')
      } 
      var windowHeight = $(window).height();
      $(document).on('scroll', function() {
        $('.one_sep_YMQOmw8').each(function() {
          let self = $(this),
          height = self.offset().top + self.height();
          if ($(document).scrollTop() + windowHeight >= height) {
            $('.line_PRFMInX').addClass('active_bio9dgV')

          }else {
            $('.line_PRFMInX').removeClass('active_bio9dgV')
          }
        })
      })
      
      
    })
    return element
  }
  
}
