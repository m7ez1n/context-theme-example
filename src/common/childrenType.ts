import React from "react";

export type ChildrenType<T = {}> = T & { children?: React.ReactNode };
