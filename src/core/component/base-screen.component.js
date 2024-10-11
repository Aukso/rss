import { getTitle } from "@/config/seo.config";

export class BaseScreen {
  /**
   * Создаём новый экземпляр BaseScreen.
   * @param {object} options - опции для создания экземпляра BaseScreen.
   * @param {string} options.title - заголовок страницы.
   */
  constructor({title}) {
    document.title = getTitle(title)
  }
/**
 * рендеринг содержимого дочернего компонента
 * @returns {HTMLElement}
 */
  render() {
    throw new Error('Метод Render не реализован в дочернем классе')
  }
}