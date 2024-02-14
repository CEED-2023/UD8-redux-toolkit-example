function accionAsincrona(resultado, fallar=false) {
  return new Promise( (resolve, reject) => {



    setTimeout(() => {
      if(fallar) reject('Ha ocurrido un horrible error')
      else resolve(resultado)
    }, 2000);
  })
}

export default accionAsincrona
