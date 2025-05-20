import { Time } from "@angular/common";

export interface Parte {
    id?: number,
    motivo: string,
    fecha: Date,
    hora: Time,
    descripcion: string,
    lugar: string
}