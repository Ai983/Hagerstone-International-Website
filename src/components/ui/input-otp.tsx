import * as React from "react"
import { cn } from "@/lib/utils"

interface InputOTPContextValue {
  slots: SlotProps[]
  isFocused: boolean
  isHovering: boolean
}

interface SlotProps {
  isActive: boolean
  char: string | null
  hasFakeCaret: boolean
}

const InputOTPContext = React.createContext<InputOTPContextValue | null>(null)

const useInputOTP = () => {
  const context = React.useContext(InputOTPContext)
  if (!context) {
    throw new Error("useInputOTP must be used within InputOTP")
  }
  return context
}

interface InputOTPProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  maxLength: number
  value?: string
  onChange?: (value: string) => void
  onComplete?: (value: string) => void
}

const InputOTP = React.forwardRef<HTMLInputElement, InputOTPProps>(
  ({ className, maxLength, value = "", onChange, onComplete, children, ...props }, ref) => {
    const [internalValue, setInternalValue] = React.useState(value)
    const [isFocused, setIsFocused] = React.useState(false)
    const [isHovering, setIsHovering] = React.useState(false)

    const slots: SlotProps[] = Array.from({ length: maxLength }, (_, i) => ({
      isActive: i === internalValue.length,
      char: internalValue[i] || null,
      hasFakeCaret: i === internalValue.length && isFocused,
    }))

    const handleChange = (newValue: string) => {
      if (newValue.length <= maxLength) {
        setInternalValue(newValue)
        onChange?.(newValue)
        if (newValue.length === maxLength) {
          onComplete?.(newValue)
        }
      }
    }

    const handleKeyDown = (e: React.KeyboardEvent) => {
      if (e.key === "Backspace") {
        handleChange(internalValue.slice(0, -1))
      } else if (/^\d$/.test(e.key)) {
        handleChange(internalValue + e.key)
      }
    }

    return (
      <InputOTPContext.Provider value={{ slots, isFocused, isHovering }}>
        <div
          className={cn("flex items-center gap-2", className)}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <input
            ref={ref}
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            value={internalValue}
            maxLength={maxLength}
            className="sr-only"
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onKeyDown={handleKeyDown}
            {...props}
          />
          {children}
        </div>
      </InputOTPContext.Provider>
    )
  }
)
InputOTP.displayName = "InputOTP"

const InputOTPGroup = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex items-center", className)} {...props} />
))
InputOTPGroup.displayName = "InputOTPGroup"

const InputOTPSlot = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { index: number }
>(({ index, className, ...props }, ref) => {
  const { slots } = useInputOTP()
  const slot = slots[index]

  return (
    <div
      ref={ref}
      className={cn(
        "relative flex h-10 w-10 items-center justify-center border-y border-r border-input text-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md",
        slot?.isActive && "z-10 ring-2 ring-ring ring-offset-background",
        className
      )}
      {...props}
    >
      {slot?.char}
      {slot?.hasFakeCaret && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-4 w-px animate-pulse bg-foreground duration-1000" />
        </div>
      )}
    </div>
  )
})
InputOTPSlot.displayName = "InputOTPSlot"

const InputOTPSeparator = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ ...props }, ref) => (
  <div ref={ref} role="separator" {...props}>
    <div className="h-4 w-px bg-border" />
  </div>
))
InputOTPSeparator.displayName = "InputOTPSeparator"

export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator }
