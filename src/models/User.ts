type User = {
    fname: string,
    lname: string,
    age: number
}

export const User = {
    getAll: (): User[] => {
        return dataUser;
    },
    getAge: (name: string): User[] =>{
        let user = dataUser.filter(item => (item.fname == name));
        return user;
    }
}

//Dados simulados de retorno

const dataUser: User[] = [
    {fname: 'Alisson', lname: 'Cavalcanti', age: 33},
    {fname: 'Fabiana', lname: 'Silva', age: 32},
    {fname: 'Christian', lname: 'Cavalcanti', age: 1}
]