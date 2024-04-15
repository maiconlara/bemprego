export interface Candidates {
    name: string,
    email:string,
    postalCode: string,
    phone: string,
    state: string,
    city: string,
    birthday: string,
    job: string,
    salary: string | number,
    plan: string,
}

export interface DbCandidates extends Candidates {
    id?: number;
}