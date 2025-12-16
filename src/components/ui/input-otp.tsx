import * as React from "react"
import { cn } from "@/lib/utils"

interface InputOTPContextValue {
  slots: SlotProps[]
  isFocused: boolean
  isHovering: boolean
  focusInput: () => void
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
    const inputRef = React.useRef<HTMLInputElement>(null)
    const [isFocused, setIsFocused] = React.useState(false)
    const [isHovering, setIsHovering] = React.useState(false)

    // Sync internal value with controlled value
    const currentValue = value

    const slots: SlotProps[] = Array.from({ length: maxLength }, (_, i) => ({
      isActive: i === currentValue.length && isFocused,
      char: currentValue[i] || null,
      hasFakeCaret: i === currentValue.length && isFocused,
    }))

    const focusInput = () => {
      inputRef.current?.focus()
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value.replace(/\D/g, '').slice(0, maxLength)
      onChange?.(newValue)
      if (newValue.length === maxLength) {
        onComplete?.(newValue)
      }
    }

    // Combine refs
    React.useImperativeHandle(ref, () => inputRef.current!)

    return (
      <InputOTPContext.Provider value={{ slots, isFocused, isHovering, focusInput }}>
        <div
          className={cn("flex items-center gap-2 cursor-text", className)}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          onClick={focusInput}
        >
          <input
            ref={inputRef}
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            autoComplete="one-time-code"
            value={currentValue}
            onChange={handleInputChange}
            maxLength={maxLength}
            className="absolute opacity-0 w-0 h-0 pointer-events-none"
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
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
  const { slots, focusInput } = useInputOTP()
  const slot = slots[index]

  return (
    <div
      ref={ref}
      onClick={focusInput}
      className={cn(
        "relative flex h-10 w-10 items-center justify-center border-y border-r border-input text-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md cursor-text select-none",
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
