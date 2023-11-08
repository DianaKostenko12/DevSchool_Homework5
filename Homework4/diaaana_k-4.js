class PaginationHelper {
    constructor(collection, itemsPerPage) {
        this.collection = collection;
        this.itemsPerPage = itemsPerPage;
    }

    pageCount() {
        return Math.ceil(this.collection.length / this.itemsPerPage);
    }

    itemCount() {
        return this.collection.length;
    }

    pageItemCount(pageIndex) {
        const totalPages = this.pageCount();
        if (!(pageIndex >= 0 && pageIndex < totalPages)) {
            return -1;
        } else if (pageIndex < totalPages - 1) {
            return this.itemsPerPage;
        } else {
            return this.itemCount() - ((totalPages - 1) * this.itemsPerPage)
        }
    }

    pageIndex(itemIndex) {
        if (itemIndex >= 0 && itemIndex < this.collection.length) {
            return Math.floor(itemIndex / this.itemsPerPage);
        } else {
            return -1;
        }
    }
}

const helper = new PaginationHelper(['a','b','c','d','e','f'], 4);
console.log(helper.pageCount());
console.log(helper.itemCount());
console.log(helper.pageItemCount(0));
console.log(helper.pageItemCount(1));
console.log(helper.pageItemCount(2));


console.log(helper.pageIndex(5));
console.log(helper.pageIndex(2));
console.log(helper.pageIndex(20));
console.log(helper.pageIndex(-10));
