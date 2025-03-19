import React from "react";

export function FloatingButton({ children }: React.PropsWithChildren) {
  return (
    <div className="fixed right-3 bottom-3 z-50 flex cursor-pointer items-center justify-center rounded-4xl p-6 shadow-2xl">
      {children}
    </div>
  );
}
