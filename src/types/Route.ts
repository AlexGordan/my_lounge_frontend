import React from "react";

export interface IRoute {
  path: string;
  component: any;
  exact: boolean;
  layout: any;
}
