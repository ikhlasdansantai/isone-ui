import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FRAMEWORKS_LABEL } from "@/data/const/frameworks-label";

export function FrameworkSelect({
  state,
  setState,
}: {
  state: string;
  setState: any;
}) {
  return (
    <Select onValueChange={(value) => setState(value)}>
      <label id="framework-label" className="sr-only">
          Select framework
      </label>
      <SelectTrigger
        className="w-24 !bg-transparent text-foreground"
        aria-labelledby="framework-label"
        defaultValue={"HTML"}
      >
        <SelectValue placeholder="HTML" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Techs</SelectLabel>
          {FRAMEWORKS_LABEL.map((framework) => (
            <SelectItem
              key={framework}
              value={framework}
              aria-label={`${state}-tech`}
            >
              {framework[0].toUpperCase() + framework.slice(1)}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
