import { Toast } from "@base-ui-components/react";

export function ToastList() {
  const { toasts } = Toast.useToastManager();

  return toasts.map((toast) => (
    <Toast.Root
      key={toast.id}
      toast={toast}
      className="absolute flex flex-col gap-1 right-0 bottom-0 left-auto z-[calc(1000-var(--toast-index))] mr-0 w-full rounded-lg bg-overlay-foreground bg-clip-padding p-6 shadow-lg transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] select-none data-[ending-style]:opacity-0 data-[starting-style]:[transform:translateY(150%)]"
      style={{
        ["--gap" as string]: "1rem",
      }}
    >
      <Toast.Title className="text-[0.975rem] leading-5 font-medium" />
      <Toast.Description className="text-[0.925rem] leading-5 text-foreground/50" />
    </Toast.Root>
  ));
}
