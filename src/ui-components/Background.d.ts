/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps } from "@aws-amplify/ui-react";
export declare type BackgroundProps = React.PropsWithChildren<Partial<FlexProps> & {
    header?: React.ReactNode;
    list?: React.ReactNode;
} & {
    overrides?: EscapeHatchProps | undefined | null;
}>;
export default function Background(props: BackgroundProps): React.ReactElement;
