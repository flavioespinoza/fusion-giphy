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
