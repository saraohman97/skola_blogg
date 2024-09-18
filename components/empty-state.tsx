"use client";

import { useRouter } from "next/navigation";

interface EmptyState {
  title?: string;
  subtitle?: string;
  showReset?: boolean;
}

const EmptyState: React.FC<EmptyState> = ({
  title = "No exact matches",
  subtitle = "Try changing or removing some of your filters",
  showReset,
}) => {
  const router = useRouter();

  return (
    <div className="h-[60vh] bg-neutral-100 w-full flex flex-col gap-2 text-center justify-center items-center">
      <h1 className="text-xl font-bold">{title}</h1>
      <div className="text-neutral-800">{subtitle}</div>

      <div className="w-48 mt-4">
        {showReset && (
          <button
            className="bg-red-800 text-white p-2 rounded"
            onClick={() => router.push("/")}
          >
            Remove all filters
          </button>
        )}
      </div>
    </div>
  );
};

export default EmptyState;
