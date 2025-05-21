import { Time } from "@angular/common";
import { Sancion } from "./sancion";

export interface Parte {
    id?: number,
    motivo: string,
    fecha: Date,
    hora: Time,
    descripcion: string,
    lugar: string,
    sancion?: Sancion
}