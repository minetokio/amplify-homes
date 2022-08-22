/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import React from "react";
import { Worker } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ViewProps } from "@aws-amplify/ui-react";
export declare type ActionProps = React.PropsWithChildren<Partial<ViewProps> & {
    worker?: Worker;
} & {
    overrides?: EscapeHatchProps | undefined | null;
}>;
export default function Action(props: ActionProps): React.ReactElement;
