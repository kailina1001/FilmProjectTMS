import * as React from "react";
import { memo } from "react";
import "./index.css";

interface ISwitch {
  checked: boolean;
  text: string;
  id: number;
  onChange: (id: number, checked: boolean) => void;
}

export const Switch = memo(({ text, id, checked, onChange }: ISwitch) => {
  return (
    <div className="switch-wrapper">
      <p className="switch-text">{text}</p>
      <label className="switch-label">
        <input
          className="switch-input"
          type="checkbox"
          checked={checked}
          onChange={() => onChange(id, checked)}
        />
        <span className="switch-slider" />
      </label>
    </div>
  );
});
