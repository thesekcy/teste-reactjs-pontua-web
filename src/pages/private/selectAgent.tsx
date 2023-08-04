import React, { useContext, useEffect, useState } from 'react'
import * as Select from '@radix-ui/react-select'

import { IUser } from '../../types'

import { AuthContext } from '../../contexts/auth/authContext'
import LoginTemplate from '../../components/loginTemplate'

import { CheckIcon } from '../../assets/icons/check'
import { UpArrowIcon } from '../../assets/icons/upArrow'

import ButtonComponent from '../../components/button'

interface SelectItemProps {
  value: string;
  children: React.ReactNode;
  className?: string;
}

export default function SelectAgent() {
  const [selectedCharacter, setSelectedCharacter] = useState<string>('')
  const { user } = useContext(AuthContext) as { user: IUser | null }
  useState<string>('')

  useEffect(() => {
    const lastCharacterStoraged = localStorage.getItem('lastCharacterId')
    if (lastCharacterStoraged) {
      setSelectedCharacter(lastCharacterStoraged)
    }
  }, [])

  return (
    <LoginTemplate>
      <div className="select-agent">
        <h2 className="mb-4">
          Selecione o seu agente mais legal<span>.</span>
        </h2>
        <p>Tenha a visão completa do seu agente.</p>
        <form action={`/profile/${selectedCharacter}`}>
          <Select.Root
            required
            onValueChange={(value) => setSelectedCharacter(value)}
            value={
              user?.heroes.find((hero) => hero.id === selectedCharacter)
                ? selectedCharacter
                : undefined
            }
          >
            <Select.Trigger className="SelectTrigger" aria-label="Food">
              <div className="content">
                <Select.Value placeholder="Selecione um agente"></Select.Value>
              </div>
              <Select.Icon className="SelectIcon">
                <UpArrowIcon />
              </Select.Icon>
            </Select.Trigger>

            <Select.Portal>
              <Select.Content
                side="bottom"
                position="popper"
                className="SelectContent"
              >
                <Select.Viewport className="SelectViewport">
                  {user?.heroes.map((hero) => {
                    return (
                      <SelectItem key={hero.id} value={hero.id}>
                        <div className="item">
                          <img src={hero.thumbnail} alt={hero.name} />
                          <span>{hero.name}</span>
                        </div>
                      </SelectItem>
                    )
                  })}
                </Select.Viewport>
              </Select.Content>
            </Select.Portal>
          </Select.Root>
          <div className="d-flex justify-content-end mt-4">
            <ButtonComponent title="Entrar" size="sm" />
          </div>
        </form>
      </div>
    </LoginTemplate>
  )
}

const SelectItem = React.forwardRef<HTMLDivElement, SelectItemProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <Select.Item
        className={`SelectItem ${className}`}
        {...props}
        ref={ref as React.Ref<HTMLDivElement>}
      >
        <Select.ItemText>{children}</Select.ItemText>
        <Select.ItemIndicator className="SelectItemIndicator">
          <CheckIcon />
        </Select.ItemIndicator>
      </Select.Item>
    )
  }
)
