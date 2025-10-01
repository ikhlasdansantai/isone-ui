import { Dispatch, SetStateAction } from "react";

export interface FrameworkSelectProps {
  state: string;
  setState: Dispatch<SetStateAction<string>>;
}
