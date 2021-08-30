import { UserAccount } from './UserAcconut';

export class Bank{
    private accounts: UserAccount[] = []

    constructor(accounts: UserAccount[]){
        this.accounts = accounts
    }

    getAccounts(){
        return this.accounts
    }

    setAccounts(account: UserAccount){
        this.accounts.push(account)
    }
}