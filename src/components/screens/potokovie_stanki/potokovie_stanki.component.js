import { BaseScreen } from "@/core/component/base-screen.component";
import renderService from "@/core/services/render.service";
import styles from './potokovie_stanki.module.scss';
import template from './potokovie_stanki.template.html';



export class PotokovieStanki extends BaseScreen {
  constructor() {
    super({title: 'Потоковые станки'})
  }
  
  render() {
    const element = renderService.htmlToElement(template, [], styles)
    $(document).ready(function() {   
      $( '.top_banners_text_v9a4rby' ).animate({
        left: '+=50',
        opacity: 1,
        fontSize: '60px'
      }, 3000)
      
      if($(document.location)[0].pathname === '/potokovie_stanki'){
        $('video').css('display', 'none')
        $('.layout_v_xmSfQ').addClass('bg_two_oMWZMNR')
        $('.left_line_PAIfsjQ').css('display', 'none')
        $('.footer_fEZWD5o').css('display', 'block')
      } 
      var windowHeight = $(window).height();
      
      $(document).on('scroll', function() {
        $('.one_sep_tv7M7l2').each(function() {
          let self = $(this),
          height = self.offset().top + self.height()
          
          if ($(document).scrollTop() + windowHeight >= height) {
            $('.line_nH488yt').addClass('active_Oiiym56')
      
          }else {
            $('.line_nH488yt').removeClass('active_Oiiym56')
          }
        })
      })
      
      
    })
    return element
  }
  
}
