class Product {
  //Parent Class
  constructor(productId, name, weight, price, stock) {
    this.productId = productId;
    this.name = name;
    this.weight = weight;
    this.price = price;
    this.stock = stock;
  }
}

class Book extends Product {
  //Child Class of Product
  constructor(productId, name, weight, price, stock, publisher, author) {
    super(productId, name, weight, price, stock);
    this.publisher = publisher;
    this.author = author;
  }
}

class Clothes extends Product {
  //Child Class of Product
  constructor(productId, name, weight, price, stock, size, color, merk) {
    super(productId, name, weight, price, stock);
    this.size = size;
    this.color = color;
    this.merk = merk;
  }
}

const book1 = new Book(
  "B190",
  "Atomic Habit",
  200,
  200000,
  10,
  "Grammedia",
  "James Knapp"
);
const book2 = new Book(
  "B204",
  "Make Time",
  120,
  90000,
  54,
  "Grammedia",
  "Albert Carl"
);
const book3 = new Book("B090", "Quiet", 100, 84000, 7, "Baca", "Susan Cain");

const clothes1 = new Clothes(
  "C801",
  "T-Shirt",
  100,
  1000000,
  4,
  "L",
  "Black",
  "GUCCI"
);
const clothes3 = new Clothes(
  "C502",
  "Jacket",
  150,
  17000000,
  3,
  "M",
  "White",
  "Louis Vuitton"
);

class OnlineShop {
  #products;
  #cart;
  constructor() {
    this.#products = [];
    this.#cart = [];
  }

  addProduct(product) {
    // console.log("Kind of Product: ", product);
    let isExist = this.#products.some((a) => 
                    a.productId === product.productId
    );

    if (isExist) {
      return "Product already in the shop.";
    }

    this.#products.push(product);
    return "Add product success.";
  }

  addToShoppingChart(product, numberOrder) {
    if (!product) {
        return "You gotta choose the product, first!"
    }

    if (numberOrder > product.stock) {
        return "Product sold out."
    }

    const itemInCart = this.#cart.find((item) => 
      item.product.productId === product.productId
      );


    if (this.#cart.includes(product)) {
        return "Product already in your cart.";
    }

    if (numberOrder > product.stock) {
        return "Available stock: " + product.stock
    }

    this.#cart.push(product, numberOrder)
    return "Product success add to cart";
  }

  transaction(userMoney, distance) {
    let totalPayment = 0;

    this.#cart.forEach((item) => {
      totalPayment += item.product.price + item.numberOrder;
    });

    const taxDistance = distance * 2000;
    const yourPayment = totalPayment + taxDistance;

    /**
     * menampilkan total pembayaran, beserta ongkir.
     * example: 1km * 2000.tampilkan juga kembaliannya dan kosongkan cart jika berhasil melakukan transaksi.
     * Harus ada validasi untuk uangUser tidak boleh kurang dari total pembayaran.
     */

    if(!distance) {
      return "You have to input distance!";
    }
    
    if (!userMoney || userMoney < yourPayment) {
      return "No money is not enough.";
    }

    this.#cart = [];

    return {
      message: "Your transaction success."

    }

  }

  showCatalog() {
    return { 
      catalog: this.#products,
      totalCatalog: this.#products.length,       
    }
  }

  showCart() {
    return {
      cart: this.#cart,
      totalCart: this.#cart.length,

    }
  }
}


const shop = new OnlineShop();
console.log(shop.addProduct(book1));
console.log(shop.addProduct(clothes1));
console.log(shop.addProduct(book2));
console.log(shop.addProduct(book3));
console.log(shop.addProduct(clothes3));
console.log(shop.addProduct(clothes3));

console.log(shop.addToShoppingChart(book1, 2));
// console.log(shop.addToShoppingChart(book1, 3));
console.log(shop.addToShoppingChart());
console.log(shop.addToShoppingChart(clothes1, 10));

// console.log(shop.transaction(400000, 10));

console.log(shop.showCatalog());
console.log(shop.showCart());


// transaksi(userMoney, jarak) {
//   let totalBelanja = 0;

//   this.#cart.forEach((item) => {
//     totalBelanja += item.product.price * item.jumlah;
//   });

//   const ongkir = jarak * 2000;
//   const totalHarga = totalBelanja + ongkir;

//   if (!jarak) {
//     return "jarak harus disi";
//   }

//   if (!userMoney || userMoney < totalHarga) {
//     return "uang gak cukup coy, mesti bayar = " + totalHarga;
//   }

//   this.#cart = [];

//   return {
//     message: "transaksi berhasil",
//     totalBelanja: totalBelanja.toLocaleString("id-ID"),
//     onkir: ongkir.toLocaleString("id-ID"),
//     totalHarga: totalHarga.toLocaleString("id-ID"),
//     kembalian: (userMoney - totalHarga).toLocaleString("id-ID"),
//   };
// }