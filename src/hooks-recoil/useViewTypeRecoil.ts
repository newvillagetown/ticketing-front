import { ViewType } from "../config/enum";
import { atom } from "recoil";
import { useRecoilState } from "recoil";

const viewTypeAtom = atom<ViewType>({
  key: "product-view-type",
  default: ViewType.CARD,
});

const useViewTypeRecoil = () => {
  const [viewType, setViewType] = useRecoilState<ViewType>(viewTypeAtom);

  const isCard = viewType === ViewType.CARD;
  const isList = viewType === ViewType.LIST;

  return {
    viewType,
    setViewType,
    isCard,
    isList,
  };
};

export default useViewTypeRecoil;
