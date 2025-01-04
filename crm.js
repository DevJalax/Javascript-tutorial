class Customer {
  constructor(name, email, phone) {
    this.name = name;
    this.email = email;
    this.phone = phone;
  }
}

class CRM {
  constructor() {
    this.customers = [];
  }

  addCustomer(customer) {
    this.customers.push(customer);
  }

  removeCustomer(customer) {
    const index = this.customers.indexOf(customer);
    if (index !== -1) {
      this.customers.splice(index, 1);
    }
  }

  getCustomers() {
    return this.customers;
  }
}

const crm = new CRM();

const customer1 = new Customer('John Doe', 'johndoe@example.com', '555-555-5555');
const customer2 = new Customer('Jane Smith', 'janesmith@example.com', '444-444-4444');

crm.addCustomer(customer1);
crm.addCustomer(customer2);

console.log(crm.getCustomers());  // [customer1, customer2]

crm.removeCustomer(customer1);

console.log(crm.getCustomers());  // [customer2]
