import { Slot } from '@radix-ui/react-slot'
import clsx from 'clsx'
import React from 'react'

type Props = {
    variant?: 'primary' | 'secondary' | 'outline' | 'link'
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
                // base
                'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium transition-all outline-none disabled:pointer-events-none disabled:opacity-50',
                '[&_svg]:pointer-events-none [&_svg:not([class*="size-"])]:size-4',

                // variants
                {
                    'bg-primary text-primary-foreground hover:bg-primary/90':
                        variant === 'primary',

                    'bg-secondary text-secondary-foreground hover:bg-secondary/80':
                        variant === 'secondary',

                    'border border-primary text-primary hover:bg-primary hover:text-primary-foreground uppercase text-xs font-semibold tracking-wider hover:text-black':
                        variant === 'outline',

                    'text-primary hover:text-primary/80 hover:bg-primary/10':
                        variant === 'link',
                },

                // sizes
                {
                    'h-8 px-3 text-sm': size === 'sm',
                    'h-9 px-4': size === 'md',
                    'h-12 px-6 text-lg': size === 'lg',
                },

                className
            )}
            {...props}
        />
    )
}
