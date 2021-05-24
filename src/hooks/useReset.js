


export const useReset = (items, target) => {

    let filterItems = items.filter(i => i !== target);

    filterItems.map(item => item = 1);

}