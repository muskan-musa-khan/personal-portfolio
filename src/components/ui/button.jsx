import { cn } from "@/lib/utils";

export function Button({ className, ...props }) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center   font-medium h-10 px-4 py-2",
        
        className
      )}
      {...props}
    />
  );
}
