function sendEmail(){
    /* nombre, mail, fono, partnumber, mensaje */
    Email.send({
    Host : "mail.supplylog.cl",  //smtp.yourisp.com
    Username : "contacto@supplylog.cl",      //username
    Password : "2E95Mm77C.xU",      //password
    To : 'dzarate@pcfriend.cl',    //them@website.com
    From : "contacto@supplylog.cl",       //you@isp.com
    Subject : "Formulario de Contacto",
    Body : "Prueba de correo desde VUE"
    }).then(
        message => alert(message)
    );
/* `${nombre}, te ha enviado el siguiente mensaje: ${mensaje} <br/>El correo de ${nombre} es: ${mail} y su teléfono es: ${fono}. <br/>Part Number consultado: ${partnumber} ` */
}