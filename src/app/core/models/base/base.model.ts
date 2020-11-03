import { State } from '../../enums/state.enum';

export class Base {
  id: string;
  state: State;
  olusturmaZamani: Date;
  duzenlenmeZamani: Date;
  olusturanKullanici: string;
  duzenleyenKullanici: string;
}
