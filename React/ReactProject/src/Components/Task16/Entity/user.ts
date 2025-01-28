export class User {
    picture!: { large: string };
    name!: { title: string; first: string; last: string };
    email!: string;
    phone!: number;
    location!: {
      city: string;
      street: { name: string; number: number };
    };
    login!: { password: string };
    dob!: { date: string; age: number };
  }
