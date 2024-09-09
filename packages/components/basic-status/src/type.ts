export type StatusType = "primary" | "success" | "info" | "warning" | "danger";

export interface BasicStatusProps {
  content?: string;
  type?: StatusType;
  color?: string;
}
