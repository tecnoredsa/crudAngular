export class Empleados {
    constructor(_id: string = '', nombre: String = '',
        puesto: String = '', departamento: String = '', salario: number = 0) {
        this._id = _id;
        this.nombre = nombre;
        this.puesto = puesto;
        this.departamento = departamento;
        this.salario = salario;

    }
    _id: string;
    nombre: String;
    puesto: String;
    departamento: String;
    salario: number;

}
