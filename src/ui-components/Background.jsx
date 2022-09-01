/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, View } from "@aws-amplify/ui-react";
export default function Background(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="0"
      direction="column"
      width="1029px"
      height="816px"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(28,143,248,0.3384)"
      {...rest}
      {...getOverrideProps(overrides, "Background")}
    >
      <View
        height="100px"
        shrink="0"
        alignSelf="stretch"
        objectFit="cover"
        overflow="hidden"
        position="relative"
        padding="0px 0px 0px 0px"
        children={header}
        {...getOverrideProps(overrides, "Frame 425")}
      ></View>
      <Flex
        gap="27px"
        height="716px"
        alignItems="flex-start"
        grow="1"
        basis="716px"
        alignSelf="stretch"
        objectFit="cover"
        position="relative"
        padding="0px 10px 0px 10px"
        {...getOverrideProps(overrides, "body")}
      >
        <View
          width="393px"
          height="328px"
          shrink="0"
          overflow="hidden"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "temppic")}
        ></View>
        <View
          width="599px"
          height="716px"
          shrink="0"
          overflow="hidden"
          position="relative"
          padding="0px 0px 0px 0px"
          children={list}
          {...getOverrideProps(overrides, "list")}
        ></View>
      </Flex>
    </Flex>
  );
}
