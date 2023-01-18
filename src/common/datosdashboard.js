export default class Dash {

  static AperturaMental(data) {
    console.log("Paula", data)
    if (data.length <= 0) {
      return [
        {
          country: "Sin datos",
          medals: 0,
        },
        {
          country: "Sin datos",
          medals: 0,
        },
        {
          country: "Sin datos",
          medals: 0,
        },
        {
          country: "Sin datos",
          medals: 0,
        },
      ];
    } else {
      return [
        {
          country: data.aperturaalaculturan.nombre_tipo,
          medals: data.aperturaalaculturan.peso,
        },
        {
          country: data.aperturaalaculturap.nombre_tipo,
          medals: data.aperturaalaculturap.peso,
        },
        {
          country: data.aperturaalaexperiencian.nombre_tipo,
          medals: data.aperturaalaexperiencian.peso,
        },
        {
          country: data.aperturaalaexperienciap.nombre_tipo,
          medals: data.aperturaalaexperienciap.peso,
        },
      ];
    }
  }

  static EstabilidadEmocional(data) {
    if (data.length <= 0) {
      return [
        {
          country: "Sin datos",
          medals: 0,
        },
        {
          country: "Sin datos",
          medals: 0,
        },
        {
          country: "Sin datos",
          medals: 0,
        },
        {
          country: "Sin datos",
          medals: 0,
        },
      ];
    } else {
      return [
        {
          country: data.controldeemocionesn.nombre_tipo,
          medals: data.controldeemocionesn.peso,
        },
        {
          country: data.controldeemocionesp.nombre_tipo,
          medals: data.controldeemocionesp.peso,
        },
        {
          country: data.controldeimpulsosn.nombre_tipo,
          medals: data.controldeimpulsosn.peso,
        },
        {
          country: data.controldeimpulsosp.nombre_tipo,
          medals: data.controldeimpulsosp.peso,
        },
      ];
    }
  }

  static Afabilidad(data) {
    if (data.length <= 0) {
      return [
        {
          country: "Sin datos",
          medals: 0,
        },
        {
          country: "Sin datos",
          medals: 0,
        },
        {
          country: "Sin datos",
          medals: 0,
        },
        {
          country: "Sin datos",
          medals: 0,
        },
      ];
    } else {
      return [
        {
          country: data.cooperacionn.nombre_tipo,
          medals: data.cooperacionn.peso,
        },
        {
          country: data.cooperacionp.nombre_tipo,
          medals: data.cooperacionp.peso,
        },
        {
          country: data.cordialidadn.nombre_tipo,
          medals: data.cordialidadn.peso,
        },
        {
          country: data.cordialidadp.nombre_tipo,
          medals: data.cordialidadp.peso,
        },
      ];
    }
  }

  static Energia(data) {
    if (data.length <= 0) {
      return [
        {
          country: "Sin datos",
          medals: 0,
        },
        {
          country: "Sin datos",
          medals: 0,
        },
        {
          country: "Sin datos",
          medals: 0,
        },
        {
          country: "Sin datos",
          medals: 0,
        },
      ];
    } else {
      return [
        {
          country: data.dinamismon.nombre_tipo,
          medals: data.dinamismon.peso,
        },
        {
          country: data.dinamismop.nombre_tipo,
          medals: data.dinamismop.peso,
        },
        {
          country: data.dominancian.nombre_tipo,
          medals: data.dominancian.peso,
        },
        {
          country: data.dominanciap.nombre_tipo,
          medals: data.dominanciap.peso,
        },
      ];
    }
  }

  static Distorsion(data) {
    if (data.length <= 0) {
      return [
        {
          country: "Sin datos",
          medals: 0,
        },
        {
          country: "Sin datos",
          medals: 0,
        },
        {
          country: "Sin datos",
          medals: 0,
        },
        {
          country: "Sin datos",
          medals: 0,
        },
      ];
    } else {
      return [
        {
          country: data.distorsion.nombre_tipo,
          medals: data.distorsion.peso,
        },
      ];
    }
  }

  static Teson(data) {
    if (data.length <= 0) {
      return [
        {
          country: "Sin datos",
          medals: 0,
        },
        {
          country: "Sin datos",
          medals: 0,
        },
        {
          country: "Sin datos",
          medals: 0,
        },
        {
          country: "Sin datos",
          medals: 0,
        },
      ];
    } else {
      return [
        {
          country: data.escrupulosidadn.nombre_tipo,
          medals: data.escrupulosidadn.peso,
        },
        {
          country: data.escrupulosidadp.nombre_tipo,
          medals: data.escrupulosidadp.peso,
        },
        {
          country: data.perseverancian.nombre_tipo,
          medals: data.perseverancian.peso,
        },
        {
          country: data.perseveranciap.nombre_tipo,
          medals: data.perseveranciap.peso,
        },
      ];
    }
  }

  static Dimensiones(data) {
    if (data.length <= 0) {
        return [
            {
              id: "1",
              name: "Si datos",
              mass: 0,
            },
            {
              id: "2",
              name: "Si datos",
              mass: 0,
            },
            {
              id: "3",
              name: "Si datos",
              mass: 0,             
            },
            {
              id: "4",
              name: "Si datos",
              mass: 0,
            },
            {
              id: "5",
              name: "Si datos",
              mass: 0,
            },
            {
              id: "6",
              name: "Si datos",
              mass: 0,
            }
          ];
      
    }else{ 
        return [
            {
              id: "1",
              name: data.aperturaalaculturan.nombre_dimension,
              mass: ((36+parseInt(data.aperturaalaculturap.peso)+parseInt(data.aperturaalaexperienciap.peso))-(parseInt(data.aperturaalaculturan.peso)+parseInt(data.aperturaalaexperiencian.peso))),
            },
            {
              id: "2",
              name: data.controldeemocionesn.nombre_dimension,
              mass: ((36+parseInt(data.controldeemocionesp.peso)+parseInt(data.controldeimpulsosp.peso))-(parseInt(data.controldeemocionesn.peso)+parseInt(data.controldeimpulsosn.peso))),              
            },
            {
              id: "3",
              name: data.cooperacionn.nombre_dimension,              
              mass: ((36+parseInt(data.cooperacionp.peso)+parseInt(data.cordialidadp.peso))-(parseInt(data.cooperacionn.peso)+parseInt(data.cordialidadn.peso))),
            },
            {
              id: "4",
              name: data.dinamismon.nombre_dimension,
              mass: ((36+parseInt(data.dinamismop.peso)+parseInt(data.dominanciap.peso))-(parseInt(data.dinamismon.peso)+parseInt(data.dominancian.peso))),
            },
            {
              id: "5",
              name: data.distorsion.nombre_dimension,
              mass: data.distorsion.peso,
            },
            {
              id: "6",
              name: data.escrupulosidadn.nombre_dimension,
              mass: ((36+parseInt(data.escrupulosidadp.peso)+parseInt(data.perseveranciap.peso))-(parseInt(data.escrupulosidadn.peso)+parseInt(data.perseverancian.peso))),
            }
          ];
    }    
  }

  static fileregistrer(data) { 
       let aperturamentar = ((36+parseInt(data.aperturaalaculturap.peso)+parseInt(data.aperturaalaexperienciap.peso))-(parseInt(data.aperturaalaculturan.peso)+parseInt(data.aperturaalaexperiencian.peso)))
       let estabilidademocional = ((36+parseInt(data.controldeemocionesp.peso)+parseInt(data.controldeimpulsosp.peso))-(parseInt(data.controldeemocionesn.peso)+parseInt(data.controldeimpulsosn.peso)))
       let afabilidad = ((36+parseInt(data.cooperacionp.peso)+parseInt(data.cordialidadp.peso))-(parseInt(data.cooperacionn.peso)+parseInt(data.cordialidadn.peso)))
       let energia = ((36+parseInt(data.dinamismop.peso)+parseInt(data.dominanciap.peso))-(parseInt(data.dinamismon.peso)+parseInt(data.dominancian.peso)))
       let distorsion = data.distorsion.peso
       let teson = ((36+parseInt(data.escrupulosidadp.peso)+parseInt(data.perseveranciap.peso))-(parseInt(data.escrupulosidadn.peso)+parseInt(data.perseverancian.peso)))
        
        let muyalto;
        let alto;
        let promedio;
        let bajo;
        let muybajo;
        let muybajo1;

        if(aperturamentar>65){
            muyalto = "Muy Alto";
        }else{
            if(aperturamentar > 55 && aperturamentar<65){
                muyalto = "Alto";
            }else{
                if(aperturamentar > 45 && aperturamentar<55){
                    muyalto = "Promedio";
                }else{
                    if(aperturamentar > 35 && aperturamentar<45){
                        muyalto = "Bajo";
                    }else{
                        if(aperturamentar >= 0  && aperturamentar<35){
                            muyalto = "Muy Bajo";
                        }
                    }
                }
            }
        }

        if(estabilidademocional>65){
            alto = "Muy Alto";
        }else{
            if(estabilidademocional > 55 && estabilidademocional<65){
                alto = "Alto";
            }else{
                if(estabilidademocional > 45 && estabilidademocional<55){
                    alto = "Promedio";
                }else{
                    if(estabilidademocional > 35 && estabilidademocional<45){
                        alto = "Bajo";
                    }else{
                        if(estabilidademocional >= 0  && estabilidademocional<35){
                            alto = "Muy Bajo";
                        }
                    }
                }
            }
        }

        if(afabilidad>65){
            promedio = "Muy Alto";
        }else{
            if(afabilidad > 55 && afabilidad<65){
                promedio = "Alto";
            }else{
                if(afabilidad > 45 && afabilidad<55){
                    promedio = "Promedio";
                }else{
                    if(afabilidad > 35 && afabilidad<45){
                        promedio = "Bajo";
                    }else{
                        if(afabilidad >= 0  && afabilidad<35){
                            promedio = "Muy Bajo";
                        }
                    }
                }
            }
        }

        if(energia>65){
            bajo = "Muy Alto";
        }else{
            if(energia > 55 && energia<65){
                bajo = "Alto";
            }else{
                if(energia > 45 && energia<55){
                    bajo = "Promedio";
                }else{
                    if(energia > 35 && energia<45){
                        bajo = "Bajo";
                    }else{
                        if(energia >= 0  && energia<35){
                            bajo = "Muy Bajo";
                        }
                    }
                }
            }
        }

        if(distorsion>65){
            muybajo = "Muy Alto";
        }else{
            if(distorsion > 55 && distorsion<65){
                muybajo = "Alto";
            }else{
                if(distorsion > 45 && distorsion<55){
                    muybajo = "Promedio";
                }else{
                    if(distorsion > 35 && distorsion<45){
                        muybajo = "Bajo";
                    }else{
                        if(distorsion >= 0  && distorsion<35){
                            muybajo = "Muy Bajo";
                        }
                    }
                }
            }
        }

        if(teson>65){
            muybajo1 = "Muy Alto";
        }else{
            if(teson > 55 && teson<65){
                muybajo1 = "Alto";
            }else{
                if(teson > 45 && teson<55){
                    muybajo1 = "Promedio";
                }else{
                    if(teson > 35 && teson<45){
                        muybajo1 = "Bajo";
                    }else{
                        if(teson >= 0  && teson<35){
                            muybajo1 = "Muy Bajo";
                        }
                    }
                }
            }
        }
    
       return [
            {
              id: muyalto,
              name: data.aperturaalaculturan.nombre_dimension,
              mass: ((36+parseInt(data.aperturaalaculturap.peso)+parseInt(data.aperturaalaexperienciap.peso))-(parseInt(data.aperturaalaculturan.peso)+parseInt(data.aperturaalaexperiencian.peso))),
            },
            {
              id: alto,
              name: data.controldeemocionesn.nombre_dimension,
              mass: ((36+parseInt(data.controldeemocionesp.peso)+parseInt(data.controldeimpulsosp.peso))-(parseInt(data.controldeemocionesn.peso)+parseInt(data.controldeimpulsosn.peso))),              
            },
            {
              id: promedio,
              name: data.cooperacionn.nombre_dimension,              
              mass: ((36+parseInt(data.cooperacionp.peso)+parseInt(data.cordialidadp.peso))-(parseInt(data.cooperacionn.peso)+parseInt(data.cordialidadn.peso))),
            },
            {
              id: bajo,
              name: data.dinamismon.nombre_dimension,
              mass: ((36+parseInt(data.dinamismop.peso)+parseInt(data.dominanciap.peso))-(parseInt(data.dinamismon.peso)+parseInt(data.dominancian.peso))),
            },
            {
              id: muybajo,
              name: data.distorsion.nombre_dimension,
              mass: data.distorsion.peso,
            },
            {
              id: muybajo1,
              name: data.escrupulosidadn.nombre_dimension,
              mass: ((36+parseInt(data.escrupulosidadp.peso)+parseInt(data.perseveranciap.peso))-(parseInt(data.escrupulosidadn.peso)+parseInt(data.perseverancian.peso))),
            }
          ];
  }
}
