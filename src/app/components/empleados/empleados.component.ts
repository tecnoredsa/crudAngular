import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { EmpleadosService } from '../../services/empleados.service';
import { Empleados } from 'src/app/models/empleados';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

declare var M:any;

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {

  constructor(public empleadoService: EmpleadosService) { }

  ngOnInit(): void {
    this.getEmpleados();
  }


  addEmpleado(empleadoForm: NgForm) {
    //guardarlos en la base de datos

    //si existe un id ya definido dne el formulario
    if(empleadoForm.value._id){//actualizamos
      this.empleadoService.putEmpleado(empleadoForm.value)
      .subscribe(
        res => {
          M.toast({html:'Empleado actualizado correctamente'});
          this.getEmpleados();
        },
        err => {
          M.toast({html:'Error al actualizar el empleado'});
          console.log(err);
        }
      );

    }else{
      //guardamos en la base de datos mediante web service
      this.empleadoService.addEmpleado(empleadoForm.value)
      .subscribe(
        res => {
          M.toast({html:'Empleado guardado correctamente'});
          this.getEmpleados();
          console.log(res);
        },
        err => {
          M.toast({html:'Error al guardar el empleado'});
          console.log(err);
        }
      );
      empleadoForm.reset();
    }

  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
    }
    this.empleadoService.empleado = new Empleados();
  }
  
getEmpleados(){
  //obtener todos los empleados de la base de datos
  this.empleadoService.getEmpleados()
  .subscribe(
    res=>{
      this.empleadoService.empleados = res as Empleados[];
      console.log(res);
    },
    err=>{
      console.log(err);
      M.toast({html: 'Error al guardar el empleado'})
    }
  )
};//fin de getEmpleados

//editar empleado
editarEmpleado(empleado:Empleados){
  this.empleadoService.empleado = empleado;
  //asociasmos los datos del empleado con el modelo de datos para asignarlos al formulario

};//fin de editar

eliminarEmpleado(_id:String){
  if(confirm('¿Está seguro de eliminar al empleado')){
    this.empleadoService.deleteEmpleado(_id)
    .subscribe(
      res => {
        M.toast({html:'Empleado eliminado correctamente'});
        this.getEmpleados();
      },
      err => {
        M.toast({html:'Error al eliminar el empleado'});
        console.log(err);
      }
    );
  }

}//fin de eliminar

}//fin de la clase
