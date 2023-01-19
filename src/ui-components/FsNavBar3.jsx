/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Icon, Text, TextField } from "@aws-amplify/ui-react";
export default function FsNavBar3(props) {
  const { doFilter, filterWord, overrides, ...rest } = props;
  return (
    <Flex
      gap="0"
      direction="column"
      width="unset"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "FsNavBar3")}
    >
      <Icon
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        type="search"
        {...getOverrideProps(overrides, "Button Icon")}
      ></Icon>
      <Flex
        gap="0"
        direction="column"
        width="640px"
        height="80px"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        position="relative"
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "FsNavBar36713299")}
      >
        <Flex
          gap="20px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="center"
          alignItems="center"
          grow="1"
          shrink="1"
          basis="0"
          alignSelf="stretch"
          position="relative"
          padding="24px 32px 24px 32px"
          backgroundColor="rgba(230,238,254,1)"
          {...getOverrideProps(overrides, "FsNavBar36713300")}
        >
          <Flex
            gap="10px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="center"
            alignItems="flex-start"
            shrink="0"
            position="relative"
            padding="4px 2px 4px 2px"
            {...getOverrideProps(overrides, "co_present")}
          >
            <Icon
              width="36.67px"
              height="31.67px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 36.66650390625,
                height: 31.66668701171875,
              }}
              paths={[
                {
                  d: "M33.3333 0L3.33333 0C1.5 0 0 1.5 0 3.33333L0 16.6667L3.33333 16.6667L3.33333 3.33333L33.3333 3.33333L33.3333 30C35.1667 30 36.6667 28.5 36.6667 26.6667L36.6667 3.33333C36.6667 1.5 35.1667 0 33.3333 0Z",
                  fill: "rgba(0,0,0,1)",
                  fillRule: "nonzero",
                },
                {
                  d: "M20 11.6667C20 7.98333 17.0167 5 13.3333 5C9.65 5 6.66667 7.98333 6.66667 11.6667C6.66667 15.35 9.65 18.3333 13.3333 18.3333C17.0167 18.3333 20 15.35 20 11.6667ZM10 11.6667C10 9.83333 11.5 8.33333 13.3333 8.33333C15.1667 8.33333 16.6667 9.83333 16.6667 11.6667C16.6667 13.5 15.1667 15 13.3333 15C11.5 15 10 13.5 10 11.6667Z",
                  fill: "rgba(0,0,0,1)",
                  fillRule: "nonzero",
                },
                {
                  d: "M23.9833 22.6C21.1833 21.1667 17.55 20 13.3333 20C9.11667 20 5.48333 21.1667 2.68333 22.6C1.01667 23.45 0 25.1667 0 27.0333L0 31.6667L26.6667 31.6667L26.6667 27.0333C26.6667 25.1667 25.65 23.45 23.9833 22.6ZM23.3333 28.3333L3.33333 28.3333C3.33333 27.1333 3.16667 26.1 4.2 25.5667C6.18333 24.55 9.38333 23.3333 13.3333 23.3333C17.2833 23.3333 20.4833 24.55 22.4667 25.5667C23.5167 26.1 23.3333 27.15 23.3333 28.3333Z",
                  fill: "rgba(0,0,0,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              shrink="0"
              position="relative"
              {...getOverrideProps(overrides, "Vector")}
            ></Icon>
          </Flex>
          <Flex
            gap="2px"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Logo")}
          >
            <Text
              fontFamily="Inter"
              fontSize="24px"
              fontWeight="400"
              color="rgba(0,0,0,1)"
              textTransform="capitalize"
              lineHeight="29.045454025268555px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="在席者一覧"
              {...getOverrideProps(overrides, "\u5728\u5E2D\u8005\u4E00\u89A7")}
            ></Text>
          </Flex>
          <Flex
            gap="5px"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="center"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 321")}
          >
            <TextField
              width="211.33px"
              shrink="0"
              size="default"
              isDisabled={false}
              labelHidden={true}
              variation="default"
              data-filterword={filterWord}
              {...getOverrideProps(overrides, "TextField")}
            ></TextField>
            <Button
              shrink="0"
              size="large"
              isDisabled={false}
              variation="primary"
              children="検索"
              onClick={doFilter}
              {...getOverrideProps(overrides, "Button")}
            ></Button>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
