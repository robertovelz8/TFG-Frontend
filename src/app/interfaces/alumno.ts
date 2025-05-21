import { Sancion } from "./sancion";

export interface Alumno {
    dni: string,
    nombre: string,
    apellidos: string,
    nombre_tutor_legal: string,
    apellidos_tutor_legal: string,
    email_tutor_legal: string,
    sanciones?: Sancion[];
}