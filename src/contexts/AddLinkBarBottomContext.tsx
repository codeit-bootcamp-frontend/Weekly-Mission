import { createContext } from "react";

type AddLinkBarBottomContextType = {
  isAddLinkBarBottom: boolean;
  setIsAddLinkBarBottom: React.Dispatch<React.SetStateAction<boolean>>;
};

const AddLinkBarBottomContext = createContext<AddLinkBarBottomContextType>({
  isAddLinkBarBottom: false,
  setIsAddLinkBarBottom: () => {},
});

export default AddLinkBarBottomContext;
