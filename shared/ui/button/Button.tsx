import { Slot } from '@radix-ui/react-slot'
import clsx from 'clsx'

type Props = {
    variant?: 'primary' | 'secondary' | 'outline'
    size?: 'sm' | 'md' | 'lg'
    asChild?: boolean
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export function Button({
                           variant = 'primary',
                           size = 'md',
                           asChild,
                           className,
                           ...props
                       }: Props) {
    const Comp = asChild ? Slot : 'button'

    return (
        <Comp
            className={clsx(
                'inline-flex items-center justify-center rounded-md font-medium transition',
                {
                    // variants
                    'bg-primary text-white hover:bg-primary/90':
                        variant === 'primary',

                    'bg-secondary text-secondary-foreground hover:bg-secondary/80':
                        variant === 'secondary',

                    'border border-border hover:bg-muted':
                        variant === 'outline',

                    // sizes
                    'h-8 px-3 text-sm': size === 'sm',
                    'h-10 px-4': size === 'md',
                    'h-12 px-6 text-lg': size === 'lg',
                },
                className
            )}
            {...props}
        />
    )
}
