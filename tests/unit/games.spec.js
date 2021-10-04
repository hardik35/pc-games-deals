import hashMapStores from '@/helperFunctions/hashMapStores'

describe("Hasphmap stores data", () => {
  test('getting hashmap stores data', () => {
    expect(hashMapStores(
      [
        {
          isActive: 1,
          storeID: "1",
          storeName: "Steam",
          images: {
            "banner": "/img/stores/banners/0.png",
            "logo": "/img/stores/logos/0.png",
            "icon": "/img/stores/icons/0.png"
          }        
        }
      ]
    )).toEqual(
      {
        "1": {
          isActive: 1,
          storeID: "1",
          storeName: "Steam",
          images: {
            "banner": "/img/stores/banners/0.png",
            "logo": "/img/stores/logos/0.png",
            "icon": "/img/stores/icons/0.png"
          }
        }
      }
    );
  });
 })
