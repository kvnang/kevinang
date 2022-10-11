import type { ChildNode } from "domhandler";

export type ReactElementLikeProps =
  | {
      children?: (ReactElementLike | undefined)[];
      style?:
        | string
        | number
        | boolean
        | Record<string, string | number>
        | null
        | undefined;
      [key: string]: any;
    }
  | null
  | undefined;

export type ReactElementLike =
  | string
  | {
      type: string;
      props: ReactElementLikeProps;
    };

export type TransformNode = (node: ChildNode) => ReactElementLike | undefined;
