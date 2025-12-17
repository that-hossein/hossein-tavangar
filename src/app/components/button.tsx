import clsx from 'clsx'
import Link from 'next/link'
import { HTMLAttributeAnchorTarget, memo } from 'react'

export interface ButtonProps {
  variant?: 'fill' | 'ghost'
  text?: string
  children?: React.ReactNode
  start?: React.ReactNode
  end?: React.ReactNode
  className?: string
  onClick?: () => void
  href?: string
  target?: HTMLAttributeAnchorTarget
  download?: unknown
}

const classes = {
  shared:
    'inline-flex items-center gap-2 px-2.5 py-1 transition-all duration-300 cursor-pointer rounded-lg font-semibold text-sm md:text-base h-9',
  fill: 'bg-foreground/60 text-on-foreground/80 border-foreground hover:bg-foreground hover:text-on-foreground',
  ghost: 'text-on-foreground/80 hover:bg-foreground/30 hover:text-on-foreground'
}

export const Button = memo(function Button(props: ButtonProps) {
  const isLink = !!props.href

  const componentProps = {
    className: clsx(
      classes.shared,
      props.variant === 'ghost' ? classes.ghost : classes.fill,
      props.className
    ),
    onClick: props.onClick
  } as Record<string, unknown>

  if (isLink) {
    componentProps.target = props.target || '_self'
    componentProps.download = props.download
  }

  return isLink ? (
    <Link {...componentProps} href={props.href || ''}>
      {props.start}
      {props.text}
      {props.children}
      {props.end}
    </Link>
  ) : (
    <button {...componentProps}>
      {props.start}
      {props.text}
      {props.children}
      {props.end}
    </button>
  )
})
