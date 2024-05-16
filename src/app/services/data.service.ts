import {Injectable} from "@angular/core";
import Personal from "../shared/interfaces/Personal";

@Injectable({
  providedIn:'root'
})
export class DataService{
  private personalData: Personal[] = [
    {
      cargo: 'Director de Oficina',
      nombres: 'Juan Carlos Pérez Gonzales',
      nroDoc: '87902134',
      centro: 'Oficina',
      estado: 'Activo'
    },
    {
      cargo: 'Director de Programación',
      nombres: 'María Fernandaz Flores Rodriguez',
      nroDoc: '46572398',
      centro: 'Oficina',
      estado: 'Activo'
    },
    {
      cargo: 'Gerente de oficina',
      nombres: 'Luis Alberto Díaz García',
      nroDoc: '10293847',
      centro: 'Campo',
      estado: 'Inactivo'
    },
    {
      cargo: 'Project Manager',
      nombres: 'Ana Gabriela Torres Vargas',
      nroDoc: '57689123',
      centro: 'Oficina',
      estado: 'Inactivo'
    },
    {
      cargo: 'Analista Programador',
      nombres: 'Jorge Eduardo Sánchez López',
      nroDoc: '34908765',
      centro: 'Oficina',
      estado: 'Activo'
    },
    {
      cargo: 'QA',
      nombres: 'Rosa María Gutiérrez Castro',
      nroDoc: '21548763',
      centro: 'Oficina',
      estado: 'Activo'
    },
    {
      cargo: 'Ingeniero Ambiental',
      nombres: 'Diego Alejandro Ramos Silva',
      nroDoc: '70892316',
      centro: 'Campo',
      estado: 'Inactivo'
    },
    {
      cargo: 'Arquitecto de Software',
      nombres: 'Carmen Cecilia Huamán Pérez',
      nroDoc: '59462837',
      centro: 'Oficina',
      estado: 'Activo'
    },
  ];

  getPersonalData(): Personal[] {
    return this.personalData;
  }

  getCentros():string[]{
    const centros= new Set<string>();
    this.personalData.forEach(personal=>centros.add(personal.centro));
    return Array.from(centros);
  }

  filterPersonalData(cargo: string, nombresDNI: string, centro: string): Personal[] {
    return this.personalData.filter(personal => {
      const cargoMatch = cargo ? personal.cargo.toLowerCase().includes(cargo.toLowerCase()) : true;
      const nombresDNIMatch = nombresDNI ? personal.nombres.toLowerCase().includes(nombresDNI.toLowerCase()) || personal.nroDoc.includes(nombresDNI) : true;
      const centroMatch = centro === 'Todos' ? true : personal.centro === centro;
      return cargoMatch && nombresDNIMatch && centroMatch;
    });
  }
}
