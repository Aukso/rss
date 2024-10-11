/**
* Класс для работы с DOM элементами
*/
class WQuery {
  
  constructor(selector) {
    
    
    /**
    * создать новый WQuery экземпляр
    * @param {string|HTMLElement} selector - css селектор строка или HTMLElement
    */
    
    if(typeof selector ==='string') {
      this.element = document.querySelector(selector)
      if(!this.element) {
        throw new Error(`Элемент ${selector} не найден`)
      }
    } else if(selector instanceof HTMLElement) {
      this.element = selector
    } else {
      throw new Error('Не правильный тип селектора')
    }
  }
  
  /**
  * Найти первый элемент, соответствующий указанному селектору в выбранном элементе.
  * @param {string} selector - Строка селектора CSS для поиска в выбранном элементе.
  * @returns {WQuery} Новый экземпляр WQuery для найденного элемента.
  */
  
  find(selector) {
    const element = new WQuery(this.element.querySelector(selector))
    if(element) {
      return element
    } else {
      throw new Error(`Элемент ${selector} не найден`)
    }
  }
  /**
  * Добавить новый элемент как дочерний к выбранному элементу.
  * @param {HTMLElement} childElement — новый дочерний элемент для добавления.
  * @returns {WQuery} Текущий экземпляр WQuery для цепочки.
  */
  
  append(childElement) {
    this.element.appendChild(childElement)
    return this
  }
  
  /**
  * Вставить новый элемент перед выбранным элементом.
  * @param {HTMLElement} newElement — Новый элемент для вставки перед выбранным элементом.
  * @returns {WQuery} Текущий экземпляр WQuery для цепочки.
  */
  
  before(newElement) {
    if (!(newElement instanceof HTMLElement)) {
      throw new Error('Элемент должен быть HTMLElement')
    }
    
    const parentElement = this.element.parentElement
    
    if (parentElement) {
      parentElement.insertBefore(newElement, this.element)
      return this
    } else {
      throw new Error('Элемент не имеет родительского элемента')
    }
  }
 /**
  * Вставить новый элемент после выбранного элемента.
  * @param {HTMLElement} newElement — Новый элемент для вставки после выбранного элемента.
  * @returns {WQuery} Текущий экземпляр WQuery для цепочки.
  */
 
  after(newElement) {
    if (!(newElement instanceof HTMLElement)) {
      throw new Error('Элемент должен быть HTMLElement')
    }
    
    const parentElement = this.element.parentElement
    
    if (parentElement) {
      parentElement.insertBefore(newElement, this.element.nextSibling)
      return this
    } else {
      throw new Error('Элемент не имеет родительского элемента')
    }
  }
  
  /**
  * Получить или задать внутренний HTML выбранного элемента.
  * @param {string} [htmlContent] — Необязательное содержимое HTML для установки. Если не указано, будет возвращен текущий внутренний HTML.
  * @returns {RQuery|string} Текущий экземпляр RQuery для цепочки при установке содержимого HTML или текущий внутренний HTML при получении.
  */
  
  html(htmlContent) {
    if (typeof htmlContent === 'undefined') {
      return this.element.innerHTML
    } else {
      this.element.innerHTML = htmlContent
      return this
    }
  }
  
  text(textContent) {
    if (typeof textContent === 'undefined') {
      return this.element.textContent
    } else {
      this.element.textContent = textContent
      return this
    }
    
  }
  
  /* EVENTS */
  
/**
* Присоедините прослушиватель событий щелчка к выбранному элементу.
* @param {function(Event): void} callback — функция прослушивателя событий, которая будет выполнена при щелчке по выбранному элементу. Функция получит объект события в качестве аргумента.
* @returns {WQuery} Текущий экземпляр WQuery для цепочки.
*/
  click(callback) {
    this.element.addEventListener('click', callback)
    return this
  }
  
  /**
  * 
  * Задайте стиль CSS выбранного элемента.
  * @param {string} property — Свойство CSS для установки.
  * @param {string} value — Значение, которое нужно установить для свойства CSS.
  * @returns {WQuery} Текущий экземпляр RQuery для цепочки. 
  */
  
  css(property, value) {
    if (typeof property !== 'string' || typeof value !== 'string') {
      throw new Error('property и value должны быть строками')
    }
    
    this.element.style[property] = value
    return this
  }
  /**
  * Adds a class or a list of classes to the current element.
  * @param {string | string[]} classNames - A single class name or an array of class names to add to the element.
  * @returns {WQuery} The current WQuery instance for chaining.
  */
  addClass(classNames) {
    if (Array.isArray(classNames)) {
      for (const className of classNames) {
        this.element.classList.add(className)
      }
    } else {
      this.element.classList.add(classNames)
    }
    
    return this
  }
  
  /**
  * Removes a class or a list of classes from the current element.
  * @param {string | string[]} classNames - A single class name or an array of class names to remove from the element.
  * @returns {WQuery} The current WQuery instance for chaining.
  */
  removeClass(classNames) {
    if (Array.isArray(classNames)) {
      for (const className of classNames) {
        this.element.classList.remove(className)
      }
    } else {
      this.element.classList.remove(classNames)
    }
    
    return this
  }
}

/**
* создание нового WQuery экземпляра для  данного селектора
* @param {string|HTMLElement} selector - css селектор строка или HTMLElement
* @param {WQuery} - новый экземпляр WQuery для  данного селектора
*/
export function $W(selector) {
  return new WQuery(selector)
}