import "react";

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "altcha-widget": any;
    }
  }
}
