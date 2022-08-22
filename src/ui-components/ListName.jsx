/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text } from "@aws-amplify/ui-react";
export default function ListName(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="100px"
      width="1400px"
      justifyContent="center"
      alignItems="center"
      position="relative"
      border="1px SOLID rgba(0,0,0,1)"
      padding="9px 9px 9px 9px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "ListName")}
    >
      <Text
        fontFamily="Inter"
        fontSize="24px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="30px"
        textAlign="center"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        width="200px"
        height="30px"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="picture"
        {...getOverrideProps(overrides, "picture")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="24px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="30px"
        textAlign="center"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        width="200px"
        height="23px"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Name"
        {...getOverrideProps(overrides, "Name")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="24px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="30px"
        textAlign="center"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        width="200px"
        height="23px"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Time"
        {...getOverrideProps(overrides, "Time")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="24px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="30px"
        textAlign="center"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        width="200px"
        height="23px"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Place"
        {...getOverrideProps(overrides, "Place")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="24px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="30px"
        textAlign="center"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        width="200px"
        height="23px"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Similarity"
        {...getOverrideProps(overrides, "Similarity")}
      ></Text>
    </Flex>
  );
}
