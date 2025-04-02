import { createContext } from 'react'
import { FileLocation, SymbolInfo } from 'tabby-chat-panel/index'

import { ContextInfo } from '@/lib/gql/generates/graphql'
import { AttachmentCodeItem, FileContext } from '@/lib/types'

export type MessageMarkdownContextValue = {
  onCopyContent?: ((value: string) => void) | undefined
  onApplyInEditor?: (
    content: string,
    opts?: { languageId: string; smart: boolean }
  ) => void
  onCodeCitationClick?: (code: AttachmentCodeItem) => void
  onLinkClick?: (url: string) => void
  contextInfo: ContextInfo | undefined
  fetchingContextInfo: boolean
  canWrapLongLines: boolean
  supportsOnApplyInEditorV2: boolean
  activeSelection?: FileContext
  symbolPositionMap: Map<string, SymbolInfo | null>
  openInEditor?: (target: FileLocation) => void
  lookupSymbol?: (keyword: string) => void
  runShell?: (command: string) => Promise<void>
}

export const MessageMarkdownContext =
  createContext<MessageMarkdownContextValue>({} as MessageMarkdownContextValue)
