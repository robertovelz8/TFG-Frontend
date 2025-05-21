import { Alumno } from "./alumno";
import { Tarea } from "./tarea";

export interface Sancion {
    id?: number,
    fecha: Date,
    tipoSancion: string,
    duracion: string,
    tareas: Tarea[],
    alumno: Alumno,
    parte: {
        id: number,
        motivo: string
    }
}