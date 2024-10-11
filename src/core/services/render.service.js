import { ChildComponent } from "../component/child.component"

class RenderService {
  // htmlToElement

  htmlToElement(html, components = [], styles) {
    const template = document.createElement('template')
    template.innerHTML = html.trim()
    const element = template.content.firstChild

    if (styles) {
      this.#applyModuleStyles(styles, element)
    }

    this.#replaceComponentTags(element, components)
    return element

  }





 #replaceComponentTags(parentElement, components) {
  const componentTagPattern = /^component-/
  const allElements = parentElement.getElementsByTagName('*')
  for (const element of allElements){
    const elementTagName = element.tagName.toLowerCase()
    if (componentTagPattern.test(elementTagName)) {
      const componentName = elementTagName
      .replace(componentTagPattern, '')
      .replace(/-/g, '')

      const foundComponent = components.find(Component => {
        const instance = 
        Component instanceof ChildComponent ? Component : new Component()
        return instance.constructor.name.toLowerCase() === 
        componentName
      })
      

      if (foundComponent) {
        const Component = foundComponent instanceof ChildComponent
         ? foundComponent.render()
         : new foundComponent().render()
         element.replaceWith(Component)
      } else {
        console.error(`Component '${componentName}' not found`)
      }
    }
  }
 }
  #applyModuleStyles(moduleStyles, element){
    if(!element) return

    const applyStyle = element => {
      for (const [key, value] of Object.entries(moduleStyles)) {
        if(element.classList.contains(key)){
          element.classList.remove(key)
          element.classList.add(value)

        }
      }
    }

    if(element.getAttribute('class')){
      applyStyle(element)
    }
    const elements = element.querySelectorAll('*')
    elements.forEach(applyStyle)
  }
}

export default new RenderService()

