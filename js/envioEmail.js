(function(){

    emailjs.init("user_QRpxXpnLcC9wxMgLzB8IL");
})();
const vue = new Vue({
    el: '#app',
    data(){
        return {
            from_name: '',
            from_email: '',
            message: '',
            subject: '',
        }
    },
    methods: {
        enviar(){
            let data = {
                from_name: this.from_name,
                from_email: this.from_email,
                message: this.message,
                subject: this.subject,
            };
            
            emailjs.send("service_ege7r6b","template_tc44l4i", data)
            .then(function(response) {
                if(response.text === 'OK'){
                    alert('CLIENTE AGREGADO EXITOSAMENTE');
                }
                console.log("SUCCESS. status=%d, text=%s", response.status, response.text);
            }, function(err) {
                alert('OCURRIO UN PROBLEMA AL AGREGAR EL NUEVO CLIENTE');
                console.log("FAILED. error=", err);
            });
        }
    }
});