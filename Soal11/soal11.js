function filterBooksPromise(colorful, amountOfPage) {
    return new Promise(function(resolve, reject) {
        var books = [
            {name: 'shinchan', totalPage: 50, isColorful: true},
            {name: 'Kalkulus', totalPage: 250, isColorful: false},
            {name: 'Doraemon', totalPage: 40, isColorful: true},
            {name: 'algoritma', totalPage: 300, isColorful: false}
        ]
        if (amountOfPage > 0) {
            resolve(books.filter(x=> x.totalPage >= amountOfPage && x.isColorful == colorful));
        } else {
            var reason = new Error('Maaf Parameter Salah');
            reject(reason);
        }
    });
}

function filterData() {
    var i = 0;
    filterBooksPromise(books[i].isColorful, books[i]).then(function filt(totalPage) {
        if (totalPage > 0 ) {
            i+=1;
            if (books.length > i) {
                filterBooksPromise(totalPage, books[i]).then(filt).catch(function(){
                    return
                })
            }
        }
    })
}

filterData();


var books = [
    {name: 'shinchan', totalPage: 50, isColorful: true},
    {name: 'Kalkulus', totalPage: 250, isColorful: false},
    {name: 'Doraemon', totalPage: 40, isColorful: true},
    {name: 'algoritma', totalPage: 300, isColorful: false}
]