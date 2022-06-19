/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import {
  createDataStorePredicate,
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import { SortDirection } from "@aws-amplify/datastore";
import { Work } from "../models";
import CommentCard from "./CommentCard";
import { Collection } from "@aws-amplify/ui-react";
export default function CommentCardCollection(props) {
  const { items: itemsProp, overrideItems, overrides, ...rest } = props;
  const itemsFilterObj = {
    field: "dispTime",
    operand: "19:02",
    operator: "ge",
  };
  const itemsFilter = createDataStorePredicate(itemsFilterObj);
  const itemsPagination = {
    sort: (s) => s.photoDatetime(SortDirection.ASCENDING),
  };
  const itemsDataStore = useDataStoreBinding({
    type: "collection",
    model: Work,
    criteria: itemsFilter,
    pagination: itemsPagination,
  }).items;
  const items = itemsProp !== undefined ? itemsProp : itemsDataStore;
  return (
    <Collection
      type="list"
      searchPlaceholder="Search..."
      direction="column"
      alignItems="stretch"
      justifyContent="left"
      items={items || []}
      {...rest}
      {...getOverrideProps(overrides, "CommentCardCollection")}
    >
      {(item, index) => (
        <CommentCard
          home={item}
          height="auto"
          width="auto"
          margin="0 0 auto 0"
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></CommentCard>
      )}
    </Collection>
  );
}
