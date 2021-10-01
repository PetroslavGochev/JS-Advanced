function createSortedList() {
    let list = {
        sortedList: [],
        add(element) {
            this.sortedList.push(element);
            this.sortedList.sort((a, b) => a > b ? 1 : -1);
        },
        remove(index) {
            if (index >= 0 && index < this.size) {
                this.sortedList.splice(index, 1);
            }
        },
        get(index) {
            if (index >= 0 && index < this.size) {
                return this.sortedList[index];
            }
        },
        get size() {
            return this.sortedList.length;
        },
    };

    return list;
}

let list = createSortedList();
list.add(6);
list.add(5);
list.add(4);
list.add(3);
list.add(2);
list.add(1);
console.log(list.get(1));
list.remove(-1);
console.log(list.get(0));
console.log(list.size);
