import { useQuery } from "@tanstack/react-query";
import { getEvent } from "../../services/apiEvents";
import { useParams } from "react-router-dom";

export function useEvent() {
  const { id } = useParams();
  const {
    isLoading,
    data: event,
    error,
  } = useQuery({
    queryKey: ["event"],
    queryFn: () => getEvent(id),
  });
  //   console.log(event);
  return { isLoading, event, error };
}
