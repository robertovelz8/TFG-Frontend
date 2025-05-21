import { Alumno } from "./alumno";
import { Parte } from "./parte";
import { Tarea } from "./tarea";

export interface Sancion {
    id?: number,
    fecha: Date,
    tipoSancion: string,
    duracion: string,
    tareas: Tarea[],
    alumno: Alumno,
    parte: Parte
}