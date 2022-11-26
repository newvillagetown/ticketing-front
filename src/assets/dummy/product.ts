import { ProductItemProps } from "src/components/organisms/product-items/ProductItems.organism";

export function productDummy(count: number) {
  let data: ProductItemProps[] = [];

  for (let i = 0; i < count; i++) {
    data.push({
      key: i.toString(),
      src: "/img/dummy_300x200.png",
      itemName: "더미 제목",
      date: "221111",
    });
  }

  return data;
}
