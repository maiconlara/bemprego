import Dexie, { Table } from "dexie";
import { DbCandidates } from "./candidates";

export class MySubClassedDexie extends Dexie {
  candidates!: Table<DbCandidates>;

  constructor() {
    super("BempregoDB");
    this.version(1).stores({
      candidates: "++id", 
    });
  }
}

export const db = new MySubClassedDexie();
