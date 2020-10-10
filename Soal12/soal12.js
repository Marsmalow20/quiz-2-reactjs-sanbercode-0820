class BangunDatar {
    constructor ( nama ) {
        this._nama = nama;
    }
}

class Persegi extends BangunDatar {
    constructor(nama, sisi) {
        super(nama);
        this._sisi = sisi;
        this.luas = this._sisi * this._sisi;
        this.keliling = this._sisi * 4;
    }

    luas() {
        this.luas =  this._sisi * this._sisi;
    }

    keliling() {
        this.keliling = this._sisi * 4
    }

    get getluas() {        
        return this.luas;
    }

    get getkeliling() {
        return this.keliling;
    }

    set setsisi(x) {
        this.carname = x;
    }
}

let kotak = new Persegi('kotak', 5);
console.log("Persegi");
console.log("Sisi = "+kotak._sisi);
console.log("Luas Persegi = "+kotak.luas);
console.log("keliling Persegi = "+kotak.keliling);