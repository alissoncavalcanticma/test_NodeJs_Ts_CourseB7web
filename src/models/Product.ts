//Definição do tipo do objeto
type Product = {
    title: string,
    price: number
};

//Definição dos métodos do tipo de objeto
export const Product = {
    getAll: (): Product[] => {
        return data;
    },
    getPerPrice: (price: number): Product[] => {
        return data.filter(item => (item.price >= price));
            /* Opção 2
            if(item.price >= price){
                return true;
            }else{
                return false;
            }*/
            /* Opção 3
            return (item.price >= price);
            */
    }
};

// Dados fictícios para retorno
const data: Product[] = [
    {title: 'product1', price: 10},
    {title: 'product2', price: 20},
    {title: 'product3', price: 35.12}
];

