/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FsCommentCardProps } from "./FsCommentCard";
import { CollectionProps } from "@aws-amplify/ui-react";
export declare type FsCommentCardCollectionProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => FsCommentCardProps;
} & {
    overrides?: EscapeHatchProps | undefined | null;
}>;
export default function FsCommentCardCollection(props: FsCommentCardCollectionProps): React.ReactElement;
