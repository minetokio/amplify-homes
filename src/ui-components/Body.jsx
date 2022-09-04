/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Image, View } from "@aws-amplify/ui-react";
export default function Body(props) {
  const { rightPane, worker, overrides, ...rest } = props;
  return (
    <Flex
      gap="10px"
      alignItems="flex-start"
      position="relative"
      padding="10px 10px 10px 10px"
      backgroundColor="rgba(28,143,248,0.3384)"
      {...rest}
      {...getOverrideProps(overrides, "Body")}
    >
      <Flex
        gap="0"
        width="fit-content"
        alignItems="flex-start"
        shrink="0"
        height="550px"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "leftPane")}
      >
        <Image
          width="550px"
          height="550px"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          src={worker?.tmpUrl}
          {...getOverrideProps(overrides, "picture")}
        ></Image>
      </Flex>
      <Flex
        gap="0"
        direction="column"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        children={rightPane}
        {...getOverrideProps(overrides, "rightPane")}
      >
        {/* <View
          width="1px"
          height="550px"
          grow="1"
          basis="550px"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "component")}
        ></View> */}
      </Flex>
    </Flex>
  );
}
