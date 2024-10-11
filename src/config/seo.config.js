 
 const SITE_NAME = 'Промтех - rugaltovki.ru'
 export const getTitle = title => {
  return title ? `${title} | ${SITE_NAME}` : SITE_NAME
 }