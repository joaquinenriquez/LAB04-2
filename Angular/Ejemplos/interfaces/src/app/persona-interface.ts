export interface PersonaInterface {
  nombre: string;
  apellido?: string;
  fechaNaciomiento: Date;
  getDatosPersonales(nombre: string, apellido: string): string;
}
