import { Client } from './interfaces/Client';
import { Customer } from './entities/Customer';
import { User } from './entities/User';

const user1 = new User('000-1', 'user1@user.com', 'Pedro', '123caralio')

const customer1 = new Customer('000-2', 'c1@customer.com', 'Afonso', '2345678', 'visa')

customer1.introduceYourself()

const client1: Client = {
    name: 'João',
    registrationNumber: 1,
    consumedEnergy: 200,

    calculateBill: () =>{
        return 2
    }
}
