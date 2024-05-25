export class User {
    // Constructor de la clase User
    constructor(
        // Identificador único del usuario
        public idUsuario: number,
        // Correo electrónico del usuario
        public email: string = '',
        // Nombre del usuario
        public nombre: string = '',
        // Apellido del usuario
        public apellido: string = '',
        // Nombre de usuario
        public nombreUsuario: string = '',
        // Contraseña del usuario
        public contrasena: string = '',
        // CUIL (Código Único de Identificación Laboral) del usuario
        public cuil: string = '',
        // Situación fiscal del usuario
        public situacionFiscal: string = '',
        // Provincia del usuario
        public provincia: string = '',
        // Ciudad del usuario
        public ciudad: string = '',
        // Código postal del usuario
        public codigoPostal: string = '',
        // Dirección del usuario
        public direccion: string = '',
        // Número de teléfono del usuario
        public telefono: string = '',
        // Indica si el usuario es editable o no (por defecto, false)
        public editable: boolean = false
    ) { }
}
