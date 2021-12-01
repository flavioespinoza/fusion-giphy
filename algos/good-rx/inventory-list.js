function inventoryList() {
  const items = [];
  return {
    add: (name) => {
      items.push(name);
    },
    remove: (name) => {
      const index = items.findIndex((item) => item === name);
      if (index > -1) {
        items.splice(index, 1);
      }  
    },
    getList: () => {
      return items;
    }
  };
}

const list = inventoryList();
list.add('shirt');
list.add('shirt');
list.add('pants');
list.add('pants');
list.add('pants');
list.remove('shirt');
list.remove('pants');
list.remove('belt');

console.log(list.getList()); // [ 'shirt', 'pants', 'pants' ]
