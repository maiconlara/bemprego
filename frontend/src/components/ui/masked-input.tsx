import * as React from "react";

import { cn } from "@/lib/utils";
import { IconType } from "@/lib/icon-type";
import { InputMask, useMask } from "@react-input/mask";

interface MaskProps {
  mask: string;
  input: typeof InputMask;
}
export interface MaskedInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  Icon: IconType;
  maskInput?: MaskProps;
}

const MaskedInput = React.forwardRef<HTMLInputElement, MaskedInputProps>(
  ({ className, Icon, maskInput, type, ...props }, ref) => {
    const inputRef = useMask({
      mask: maskInput?.mask,
      replacement: { _: /\d/ },
    });

    const setRefs = (inputElement: HTMLInputElement) => {
      inputRef.current = inputElement;

      if (typeof ref === "function") {
        ref(inputElement);
      } else if (ref) {
        (ref as React.MutableRefObject<HTMLInputElement>).current =
          inputElement;
      }
    };

    return (
      <div className="relative w-full">
        <div className="absolute left-3 top-1/2 -translate-y-1/2 transform ">
          <Icon className="h-4 w-4 text-ribbon-900" />
        </div>
        <input
          className={cn(
            "flex h-10 w-full rounded-xl border border-divider bg-white  px-4 py-2 pl-9  text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ribbon-800 focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
          ref={setRefs}
          {...props}
        />
      </div>
    );
  }
);
MaskedInput.displayName = "MaskedInput";

export { MaskedInput };
