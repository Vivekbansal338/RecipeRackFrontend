import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { getPurchasedrecipe } from "../services/searchquery";

export const usePurchaseddata = () => {
  const Userid = useSelector((state) => state.useriddata.userid);

  const {
    isFetching: isFetchingpurchased,
    data: purchased,
    error: errorpurchased,
  } = useQuery({
    queryKey: ["purchasedquery"],
    queryFn: () => getPurchasedrecipe(Userid),
  });

  return { isFetchingpurchased, purchased, errorpurchased };
};
