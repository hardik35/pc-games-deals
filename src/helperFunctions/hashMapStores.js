export default function getHashMapStores(storesList) {
    const storeListMap = {};
    for (let i = 0; i < storesList.length; i++) {
        storeListMap[storesList[i].storeID] = storesList[i];
    }
    return storeListMap;
}