function llamarme() {
    const numero = "+53 51847199";

    const esMovil = /Android|webOS|iPhone|iPad|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    if(esMovil){
        window.location.href = `tel:${numero}`;

    }else{
        const confirmar = confirm(`Llamar al ${numero} ?/n (necesitaras un telefono conectado)`);
        if(confirmar){
            window.location.href = `tel:${numero}`
        }
    }
}
function llamarmeMama() {
    const numero = "+53 53405954";

    const esMovil = /Android|webOS|iPhone|iPad|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    if(esMovil){
        window.location.href = `tel:${numero}`;

    }else{
        const confirmar = confirm(`Llamar al ${numero} ?/n (necesitaras un telefono conectado)`);
        if(confirmar){
            window.location.href = `tel:${numero}`
        }
    }
}
function llamarmePapa() {
    const numero = "+53 53736140";

    const esMovil = /Android|webOS|iPhone|iPad|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    if(esMovil){
        window.location.href = `tel:${numero}`;

    }else{
        const confirmar = confirm(`Llamar al ${numero} ?/n (necesitaras un telefono conectado)`);
        if(confirmar){
            window.location.href = `tel:${numero}`
        }
    }
}
function llamarmePapacorp() {
    const numero = "+53 50927835";

    const esMovil = /Android|webOS|iPhone|iPad|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    if(esMovil){
        window.location.href = `tel:${numero}`;

    }else{
        const confirmar = confirm(`Llamar al ${numero} ?/n (necesitaras un telefono conectado)`);
        if(confirmar){
            window.location.href = `tel:${numero}`
        }
    }
}
function llamarmePadrastro() {
    const numero = "+53 59949729";

    const esMovil = /Android|webOS|iPhone|iPad|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    if(esMovil){
        window.location.href = `tel:${numero}`;

    }else{
        const confirmar = confirm(`Llamar al ${numero} ?/n (necesitaras un telefono conectado)`);
        if(confirmar){
            window.location.href = `tel:${numero}`
        }
    }
}