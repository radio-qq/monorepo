export type StatusType = 'primary' | 'success' | 'info' | 'warning' | 'danger'

interface contentProps {
  content?: string
  type?: StatusType
  color?: string
}

export interface BasicStatusProps extends contentProps {
  contents?: Array<contentProps>
}
