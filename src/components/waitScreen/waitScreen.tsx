import { useContext } from "react";
import { Loading, LoadingContainer } from "./style";
import { LoadingContext } from "../../contexts/loadingContext/loadingContext";

const WaitScreen = () => {

  const { toggleLoading } = useContext(LoadingContext);

  return(
    <LoadingContainer toggLoading={toggleLoading}>
      <Loading />
    </LoadingContainer>
  );
};

export default WaitScreen;