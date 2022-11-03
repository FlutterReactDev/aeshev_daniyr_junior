import axios from "axios";
import { addNft } from "../nftDetailReducer";
import { addData } from "../nftReducer";
import { setPageCount } from "../paginationReducer";

export async function fetchNFT(dispatch) {
  const { data } = await axios.get(
    "https://api.opensea.io/api/v1/assets?format=json&limit=30"
  );

  dispatch(addData(data.assets));
  dispatch(setPageCount(data.assets.length / 6));
}

export async function fetchNFTDetail(dispatch, id) {
  const { data } = await axios.get(
    "https://api.opensea.io/api/v1/assets?format=json&limit=30"
  );

  dispatch(addNft(data.assets.filter((nft) => nft.id == id)[0]));
}
