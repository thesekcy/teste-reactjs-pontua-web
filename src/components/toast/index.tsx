import { useEffect, useState } from 'react'
import * as Toast from '@radix-ui/react-toast'
import { CancelIcon } from '../../assets/icons/cancel'

interface ToastProps {
  triggerToast: boolean;
  title: string;
  description?: string;
  type: 'success' | 'error' | 'info' | 'warning';
}

const ToastComponent = ({
  triggerToast,
  title,
  description,
  type,
}: ToastProps) => {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setOpen(triggerToast)
  }, [triggerToast])

  return (
    <>
      <Toast.Provider swipeDirection="right">
        <>
          <Toast.Root
            className={`ToastRoot toast-${type}`}
            open={open}
            onOpenChange={setOpen}
          >
            <Toast.Title className="ToastTitle">{title}</Toast.Title>
            <Toast.Description asChild>
              <>
                {description && (
                  <p className="ToastDescription">{description}</p>
                )}
              </>
            </Toast.Description>
            <Toast.Action
              className="ToastAction"
              asChild
              altText="Goto schedule to undo"
            >
              <button className="Button small green">
                <CancelIcon />
              </button>
            </Toast.Action>
          </Toast.Root>
          <Toast.Viewport className="ToastViewport" />
        </>
      </Toast.Provider>
    </>
  )
}

export default ToastComponent
