import { Spinner } from "@/components/ui/spinner";

function Loading() {
  return (
    <div className="flex justify-center items-center flex-1">
      <Spinner className="size-12" />
    </div>
  );
}

export default Loading;
