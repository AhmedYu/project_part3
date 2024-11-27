import { Description } from "./Description";
export default function BTN({ title, cssStyle, handler }) {
  return (
    <button onClick={handler} className={cssStyle}>
      {title}
    </button>
  );
}
