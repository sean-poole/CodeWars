/* Pagination Helper */

/*
For this exercise you will be strengthening your page-fu mastery. You will complete the PaginationHelper class, which is a utility class helpful for querying paging information related to an array.

The class is designed to take in an array of values and an integer indicating how many items will be allowed per each page. The types of values contained within the collection/array are not relevant.

The following are some examples of how this class is used:

var helper = new PaginationHelper(['a','b','c','d','e','f'], 4);
helper.pageCount(); //should == 2
helper.itemCount(); //should == 6
helper.pageItemCount(0); //should == 4
helper.pageItemCount(1); // last page - should == 2
helper.pageItemCount(2); // should == -1 since the page is invalid

// pageIndex takes an item index and returns the page that it belongs on
helper.pageIndex(5); //should == 1 (zero based index)
helper.pageIndex(2); //should == 0
helper.pageIndex(20); //should == -1
helper.pageIndex(-10); //should == -1
*/

/*
P - Two arguments. Array of values (types of values is irrelevant) and an integer.
R - Class with methods to provide information regarding the given array.
E - 
P - 
*/

class PaginationHelper {
    constructor(collection, itemsPerPage) {
        this.collection = collection;
        this.itemsPerPage = itemsPerPage;
    }

    itemCount() {
        return this.collection.length;
    }

    pageCount() {
        return Math.ceil(this.itemCount() / this.itemsPerPage);
    }

    pageItemCount(pageIndex) {
        if (pageIndex > this.pageCount() - 1 || pageIndex < 0) return -1;
        return this.itemsPerPage - Math.ceil((((pageIndex + 1) * this.itemsPerPage) % this.itemCount()) % this.itemsPerPage);
    }

    pageIndex(itemIndex) {
        if (itemIndex > this.itemCount() - 1 || itemIndex < 0) return -1;
        return Math.ceil((itemIndex + 1) / this.itemsPerPage) - 1;
    }
}

// Test: 
const collection = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
const helper = new PaginationHelper(collection, 10);

// console.log(helper.pageCount())
// console.log(helper.itemCount())
// console.log(helper.pageItemCount(1))
// console.log(helper.pageItemCount(-1))
// console.log(helper.pageIndex(22))
// console.log(helper.pageIndex(0))
