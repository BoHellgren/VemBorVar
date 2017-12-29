// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the MembersProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MembersProvider {

  members: Array<{ lgh: string, lmv: string, membername: string }>;

  // constructor(public http: HttpClient) {
    constructor() {
    console.log('Hello MembersProvider Provider');
  }

  loadMembers():  any{

    this.members = [];
    this.members.push({ lgh: '123', lmv: '1001', membername: 'Tomas Frank' });
    this.members.push({ lgh: '123', lmv: '1001', membername: 'Anna Jansson' });

    this.members.push({ lgh: '131', lmv: '1102', membername: 'Lennart Axelsson' });
    this.members.push({ lgh: '131', lmv: '1102', membername: 'Yvonne Axelsson' });
    this.members.push({ lgh: '132', lmv: '1103', membername: 'Stefan Killander' });
    this.members.push({ lgh: '132', lmv: '1103', membername: 'Cecilia Killander' });
    this.members.push({ lgh: '133', lmv: '1101', membername: 'Clas Halldin' });
    this.members.push({ lgh: '133', lmv: '1101', membername: 'Gunilla Halldin' });

    this.members.push({ lgh: '141', lmv: '1202', membername: 'Anders Nyman' });
    this.members.push({ lgh: '142', lmv: '1203', membername: 'Bo Niveman' });
    this.members.push({ lgh: '142', lmv: '1203', membername: 'Viveca Niveman' });
    this.members.push({ lgh: '143', lmv: '1201', membername: 'Mikael Andersson' });
    this.members.push({ lgh: '143', lmv: '1201', membername: 'Elif Eroglu Andersson' });

    this.members.push({ lgh: '151', lmv: '1302', membername: 'Lennart Andreasson' });
    this.members.push({ lgh: '152', lmv: '1303', membername: 'Martin Bergström' });
    this.members.push({ lgh: '152', lmv: '1303', membername: 'Agnieszka Krysiak-Baltyn' });
    this.members.push({ lgh: '153', lmv: '1301', membername: 'Leif Edvinsson' });
    this.members.push({ lgh: '153', lmv: '1301', membername: 'Gunilla Edvinsson' });

    this.members.push({ lgh: '161', lmv: '1402', membername: 'Ola Ohlson' });
    this.members.push({ lgh: '162', lmv: '1403', membername: 'Bert Conneryd' });
    this.members.push({ lgh: '162', lmv: '1403', membername: 'Barbro Lorentzon' });
    this.members.push({ lgh: '163', lmv: '1401', membername: 'Stefan Söderström' });
    this.members.push({ lgh: '163', lmv: '1401', membername: 'Indira Furniss' });

    this.members.push({ lgh: '171', lmv: '1501', membername: 'Anders Tolleson' });
    this.members.push({ lgh: '171', lmv: '1501', membername: 'Ditte Tolleson' });

    this.members.push({ lgh: '221', lmv: '1101', membername: 'Mikaela Cadstedt' });
    this.members.push({ lgh: '222', lmv: '1002', membername: 'Michael Askebrink' });
    this.members.push({ lgh: '222', lmv: '1002', membername: 'Jannica Askebrink' });

    this.members.push({ lgh: '231', lmv: '1102', membername: 'Erik Kinnander' });
    this.members.push({ lgh: '231', lmv: '1102', membername: 'Marthe Kinnander' });
    this.members.push({ lgh: '232', lmv: '1103', membername: 'André Havas' });
    this.members.push({ lgh: '232', lmv: '1103', membername: 'Helena Havas' });
    this.members.push({ lgh: '233', lmv: '1101', membername: 'Eva Clausen' });

    this.members.push({ lgh: '241', lmv: '1202', membername: 'Jan Norberg' });
    this.members.push({ lgh: '242', lmv: '1203', membername: 'Jens Ahlvarsson' });
    this.members.push({ lgh: '242', lmv: '1203', membername: 'Isabelle Alesund' });
    this.members.push({ lgh: '243', lmv: '1201', membername: 'Emelie Jin' });

    this.members.push({ lgh: '251', lmv: '1302', membername: 'Sebastian Svartz' });
    this.members.push({ lgh: '251', lmv: '1303', membername: 'Amelie Winberg' });
    this.members.push({ lgh: '252', lmv: '1303', membername: 'Jan Arfwidsson' });
    this.members.push({ lgh: '253', lmv: '1301', membername: 'Johan Eriksson' });

    this.members.push({ lgh: '261', lmv: '1402', membername: 'Richard Åvall' });
    this.members.push({ lgh: '261', lmv: '1402', membername: 'Mathias Eriksson' });
    this.members.push({ lgh: '262', lmv: '1403', membername: 'Johan Haag' });
    this.members.push({ lgh: '262', lmv: '1403', membername: 'Johanna Haag' });
    this.members.push({ lgh: '263', lmv: '1401', membername: 'Bo Selling' });
    this.members.push({ lgh: '263', lmv: '1401', membername: 'Hanna Selling' });

    this.members.push({ lgh: '271', lmv: '1502', membername: 'Daniel Granlycke' });
    this.members.push({ lgh: '271', lmv: '1502', membername: 'Sanna Berg' });
    this.members.push({ lgh: '272', lmv: '1503', membername: 'Andrew Taylor' });
    this.members.push({ lgh: '272', lmv: '1503', membername: 'Anja Taylor' });
    this.members.push({ lgh: '273', lmv: '1501', membername: 'Viktor Bodin' });
    this.members.push({ lgh: '273', lmv: '1501', membername: 'Sofia Nordgren' });

    this.members.push({ lgh: '281', lmv: '1601', membername: 'Henrik Ekerbring' });
    this.members.push({ lgh: '281', lmv: '1601', membername: 'Gabriella Silfwerbrand' });
    this.members.push({ lgh: '282', lmv: '1602', membername: 'Bo Hellgren' });
    this.members.push({ lgh: '282', lmv: '1602', membername: 'Ingalill Hellgren' });
 
    console.log(this.members);
    return(this.members);
}

}
