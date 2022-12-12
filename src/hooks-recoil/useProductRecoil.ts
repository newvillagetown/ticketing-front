import { atom } from "recoil";
import { useRecoilState } from "recoil";

const selectedItemKeyAtom = atom<string>({
  key: "selected-product-key",
  default: "",
});

const useProductRecoil = () => {
  const [selectedItemKey, setSelectedItemKey] =
    useRecoilState<string>(selectedItemKeyAtom);

  const isOpenPreview = !!selectedItemKey;

  return {
    selectedItemKey,
    setSelectedItemKey,
    isOpenPreview,
  };
};

export default useProductRecoil;
