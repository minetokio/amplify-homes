/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { Worker } from "../models";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import SimilarityCard from "./SimilarityCard";
import { Collection } from "@aws-amplify/ui-react";
export default function SimilarityCardCollection(props) {
  const { items: itemsProp, overrideItems, overrides, ...rest } = props;
  const itemsDataStore = useDataStoreBinding({
    type: "collection",
    model: Worker,
  }).items;
  const items = itemsProp !== undefined ? itemsProp : itemsDataStore;
  return (
    <Collection
      type="grid"
      isPaginated={true}
      searchPlaceholder="Search..."
      itemsPerPage={9}
      templateColumns="1fr 1fr 1fr"
      autoFlow="row"
      alignItems="stretch"
      justifyContent="stretch"
      items={items || []}
      {...rest}
      {...getOverrideProps(overrides, "SimilarityCardCollection")}
    >
      {(item, index) => (
        <SimilarityCard
          worker={item}
          height="auto"
          width="auto"
          margin="0 0 5px 0"
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></SimilarityCard>
      )}
    </Collection>
  );
}
