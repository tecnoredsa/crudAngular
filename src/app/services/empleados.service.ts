import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

//Importar el modelo de datos
import { Empleados } from '../models/empleados';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {
  readonly url = 'http://localhost:3000';
  empleado: Empleados; // ära intercambiar datos con el formulario
  empleados: Empleados[]; //Para almacenar todos los empleados

  constructor(public httpClient: HttpClient) {
    this.empleado = new Empleados();
    this.empleados = new Array();
  }

  //Obtenemos todos los empleados
  getEmpleados(){
    return this.httpClient.get(this.url);
  }

  //Agregamos un empleado a la base de datos
  addEmpleado(empleado: Empleados){
    return this.httpClient.post(this.url, empleado);
  }

  //Modificar un empleado
  putEmpleado(empleado: Empleados){
    return this.httpClient.put(this.url+'/'+empleado._id,empleado);
  }

  //Eliminar un empleado
  deleteEmpleado(_id:String){
    return this.httpClient.delete(this.url+'/'+_id);
  }
}
