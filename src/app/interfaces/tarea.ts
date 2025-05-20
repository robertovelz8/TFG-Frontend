import { Sancion } from "./sancion";

export interface Tarea {
    id?: number,
    titulo: string,
    descripcion: string,
    estado: string,
    fechaCreacion: Date,
    fechaLimite: Date,
    sancion: Sancion
}