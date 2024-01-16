import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEvent as createEventApi } from "../../services/apiEvents";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
export function useCreateEvent() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: createEvent, isLoading } = useMutation({
    mutationFn: (newEvent) => createEventApi(newEvent),
    onSuccess: () => {
      toast.success("Event created successfully");
      navigate("/");
      queryClient.invalidateQueries(["events"]);
    },
  });
  return { createEvent, isLoading };
}
