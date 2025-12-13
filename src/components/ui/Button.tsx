import * as React from "react"
import { cn } from "../../lib/utils"
import { motion } from "framer-motion"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'gradient' | 'neon';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', isLoading, children, ...props }, ref) => {
    
    const baseStyles = "inline-flex items-center justify-center rounded-lg font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-primary disabled:pointer-events-none disabled:opacity-50 relative overflow-hidden";
    
    const variants = {
      primary: "bg-secondary text-primary-dark hover:bg-white hover:shadow-neon-cyan font-bold",
      
      secondary: "bg-surface text-white hover:bg-surface-light border border-white/10",
      
      outline: "bg-transparent border border-secondary/50 text-secondary hover:bg-secondary/10 hover:border-secondary hover:shadow-neon-cyan",
      
      ghost: "hover:bg-white/5 text-slate-400 hover:text-white",
      
      gradient: "bg-gradient-tech text-white shadow-lg hover:shadow-neon-purple hover:scale-[1.02] active:scale-[0.98]",
      
      neon: "bg-transparent border border-accent text-accent hover:bg-accent hover:text-white hover:shadow-neon-purple transition-all duration-300",
    };

    const sizes = {
      sm: "h-9 px-4 text-xs",
      md: "h-11 px-6 text-sm",
      lg: "h-14 px-8 text-base",
    };

    return (
      <motion.button
        ref={ref}
        whileTap={{ scale: 0.98 }}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        disabled={isLoading || props.disabled}
        {...props}
      >
        {isLoading ? (
          <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
        ) : null}
        {children}
      </motion.button>
    )
  }
)
Button.displayName = "Button"

export { Button }
