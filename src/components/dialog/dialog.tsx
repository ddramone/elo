"use client"

import { Dialog as HeadlessDialog } from "@headlessui/react"
import { ReactNode } from "react"

type Props = {
  title: ReactNode
  subtitle?: ReactNode
  content: ReactNode
  footer: ReactNode
  onClose: () => void
}

export default function Dialog({ title, subtitle, content, footer, onClose }: Props) {
  return (
    <HeadlessDialog as="div" className="relative z-10" onClose={onClose} open={true}>
      <div className="fixed inset-0 bg-bg/90" />

      <div className="fixed inset-0 overflow-y-auto">
        <div className="flex items-center justify-center min-h-full text-center">
          <HeadlessDialog.Panel className="w-full max-w-lg overflow-hidden text-left align-middle transition-all transform border border-white shadow-xl bg-bg rounded-2xl bg-gradient-to-b from-gray-100/10 to-gray-100/50 ">
            <div className="flex flex-col justify-center gap-10 h-full py-14">
              <HeadlessDialog.Title as="h3" className="text-xl font-bold text-center text-gray-900">
                {title}
              </HeadlessDialog.Title>

              {subtitle && (
                <HeadlessDialog.Description as="div" className="text-center text-gray-500">
                  {subtitle}
                </HeadlessDialog.Description>
              )}

              <div>{content}</div>
            </div>

            <div className="flex justify-between w-full px-6 py-4 mt-2 border-t border-t-gray-200">
              {footer}
            </div>
          </HeadlessDialog.Panel>
        </div>
      </div>
    </HeadlessDialog>
  )
}
