import { BaseScreen } from "@/core/component/base-screen.component";
import renderService from "@/core/services/render.service";
import styles from './buksirnye_stanki.module.scss';
import template from './buksirnye_stanki.template.html';



export class BuksirnyeStanki extends BaseScreen {
  constructor() {
    super({title: 'Буксирные станки'})
  }
  
  render() {
    const element = renderService.htmlToElement(template, [], styles)
    $(document).ready(function() {   
      $( '.top_banners_text_ULyCO9h' ).animate({
        left: '+=50',
        opacity: 1,
        fontSize: '60px'
      }, 3000)
      
      if($(document.location)[0].pathname === '/buksirnye_stanki'){
        $('video').css('display', 'none')
        $('.layout_v_xmSfQ').addClass('bg_three_RvHZWOZ')
        $('.left_line_PAIfsjQ').css('display', 'none')
        $('.footer_fEZWD5o').css('display', 'block')
      } 
      var windowHeight = $(window).height();
      $(document).on('scroll', function() {
        $('.one_sep_ItKlOJo').each(function() {
          let self = $(this),
          height = self.offset().top + self.height();
          if ($(document).scrollTop() + windowHeight >= height) {
            $('.line__1rNr_A').addClass('active_i0JaNtb')

          }else {
            $('.line__1rNr_A').removeClass('active_i0JaNtb')
          }
        })
      })
      
      
    })
    return element
  }
  
}

