import { PropsWithChildren, Ref } from "react";

interface Props extends PropsWithChildren {
  ref?: Ref<HTMLDivElement>;
}
export function FloatingButton({ children, ref }: Props) {
  return (
    <div
      ref={ref}
      className="fixed right-6 bottom-6 z-50 flex cursor-pointer items-center justify-center rounded-4xl"
    >
      {children}
    </div>
  );
}
