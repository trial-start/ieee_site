import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteEvent as deleteEventApi } from "../../services/apiEvents";
import toast from "react-hot-toast";

export function useDeleteEvent() {
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteEvent } = useMutation({
    mutationFn: (id) => deleteEventApi(id),
    onSuccess: () => {
      toast.success("Event deleted successfully");
      queryClient.invalidateQueries({ queryKey: ["events"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isDeleting, deleteEvent };
}
