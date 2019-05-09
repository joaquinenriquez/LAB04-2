export class Persona {

  private nombre: string;
  private apellido: string;
  private dni: number;

  private calle: string;
  private nro: string;
  private departamento: string;
  private piso: string;

  private tipoDocumento: string;

  private nombresFamilia: string[];

  private telefono: number | string;

  public Persona() {

  }

  public NuevaPersona(nombre: string, apellido: string, dni: number): void {
    this.nombre = nombre;
    this.apellido = apellido;
    this.dni = dni;
  }

  public getDNI(): number {
    return this.dni;
  }

  public setDomicilio(calle: string, nro: string, departamento?: string, piso?: string): void {
    this.calle = calle;
    this.nro = nro;
    this.departamento = departamento;
    this.piso = piso;
  }

  public setDocumento(nro: number, tipo: string = 'DNI'){
    this.dni = nro;
    this.tipoDocumento = tipo;
  }

  public setNombreFamiliares(...nombresFamiliares: string[]) {
    this.nombresFamilia = nombresFamiliares;
  }

  public setTelefono(telefono: number | string) {
    this.telefono = telefono;
  }

}




