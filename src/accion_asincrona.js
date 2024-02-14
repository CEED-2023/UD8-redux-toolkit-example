function accionAsincrona(resultado, fallar=false) {
  return new Promise( (resolve, reject) => {

    if(fallar) {
      reject('Ha ocurrido un horrible error')
      return
    }

    setTimeout(() => {
      resolve(resultado)
    }, 3000);
  })
}

export default accionAsincrona
