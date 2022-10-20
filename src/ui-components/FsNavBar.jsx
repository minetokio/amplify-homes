/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Icon, Text, View } from "@aws-amplify/ui-react";
export default function FsNavBar(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="0"
      width="636.67px"
      justifyContent="center"
      alignItems="center"
      position="relative"
      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "FsNavBar")}
    >
      <Flex
        gap="20px"
        width="100%"
        justifyContent="center"
        alignItems="center"
        grow="1"
        height="88px"
        position="relative"
        padding="24px 32px 24px 32px"
        backgroundColor="rgba(4,52,149,1)"
        {...getOverrideProps(overrides, "FsNavBar33823058")}
      >
        <Flex
          gap="10px"
          direction="column"
          width="fit-content"
          shrink="0"
          height="39.67px"
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
                fill: "rgba(255,255,255,1)",
                fillRule: "nonzero",
              },
              {
                d: "M20 11.6667C20 7.98333 17.0167 5 13.3333 5C9.65 5 6.66667 7.98333 6.66667 11.6667C6.66667 15.35 9.65 18.3333 13.3333 18.3333C17.0167 18.3333 20 15.35 20 11.6667ZM10 11.6667C10 9.83333 11.5 8.33333 13.3333 8.33333C15.1667 8.33333 16.6667 9.83333 16.6667 11.6667C16.6667 13.5 15.1667 15 13.3333 15C11.5 15 10 13.5 10 11.6667Z",
                fill: "rgba(255,255,255,1)",
                fillRule: "nonzero",
              },
              {
                d: "M23.9833 22.6C21.1833 21.1667 17.55 20 13.3333 20C9.11667 20 5.48333 21.1667 2.68333 22.6C1.01667 23.45 0 25.1667 0 27.0333L0 31.6667L26.6667 31.6667L26.6667 27.0333C26.6667 25.1667 25.65 23.45 23.9833 22.6ZM23.3333 28.3333L3.33333 28.3333C3.33333 27.1333 3.16667 26.1 4.2 25.5667C6.18333 24.55 9.38333 23.3333 13.3333 23.3333C17.2833 23.3333 20.4833 24.55 22.4667 25.5667C23.5167 26.1 23.3333 27.15 23.3333 28.3333Z",
                fill: "rgba(255,255,255,1)",
                fillRule: "nonzero",
              },
            ]}
            shrink="0"
            position="relative"
            {...getOverrideProps(overrides, "Vector33823084")}
          ></Icon>
        </Flex>
        <Flex
          gap="2px"
          width="fit-content"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          height="39px"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Logo33823059")}
        >
          <Text
            fontFamily="Inter"
            fontSize="32px"
            fontWeight="400"
            color="rgba(255,255,255,1)"
            textTransform="capitalize"
            lineHeight="37.5px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="勤怠終業管理"
            {...getOverrideProps(overrides, "Logo33823061")}
          ></Text>
        </Flex>
        <Flex
          gap="10px"
          width="100%"
          justifyContent="flex-end"
          alignItems="center"
          grow="1"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 321")}
        >
          <Flex
            gap="8px"
            width="fit-content"
            justifyContent="flex-end"
            alignItems="center"
            shrink="0"
            height="40px"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "SearchField")}
          >
            <Flex
              gap="0"
              width="300px"
              justifyContent="flex-end"
              alignItems="center"
              shrink="0"
              height="40px"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "InputGroup")}
            >
              <Flex
                gap="10px"
                width="100%"
                alignItems="center"
                grow="1"
                height="42px"
                position="relative"
                border="1px SOLID rgba(255,255,255,1)"
                borderRadius="5px"
                padding="0px 0px 0px 0px"
                {...getOverrideProps(overrides, "Input")}
              >
                <Text
                  fontFamily="Inter"
                  fontSize="16px"
                  fontWeight="400"
                  color="rgba(255,255,255,1)"
                  lineHeight="24px"
                  textAlign="left"
                  display="flex"
                  direction="column"
                  justifyContent="flex-start"
                  width="242px"
                  grow="1"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  whiteSpace="pre-wrap"
                  children="Placeholder"
                  {...getOverrideProps(overrides, "placeholder")}
                ></Text>
                <Flex
                  gap="0"
                  width="fit-content"
                  justifyContent="center"
                  alignItems="center"
                  shrink="0"
                  height="42px"
                  position="relative"
                  border="1px SOLID rgba(255,255,255,1)"
                  borderRadius="1px 5px 5px 1px"
                  padding="8px 16px 8px 16px"
                  {...getOverrideProps(overrides, "Button")}
                >
                  <Text
                    fontFamily="Inter"
                    fontSize="16px"
                    fontWeight="700"
                    color="rgba(255,255,255,1)"
                    lineHeight="24px"
                    textAlign="left"
                    display="flex"
                    direction="column"
                    justifyContent="flex-start"
                    shrink="0"
                    position="relative"
                    padding="0px 0px 0px 0px"
                    whiteSpace="pre-wrap"
                    children=""
                    {...getOverrideProps(overrides, "label")}
                  ></Text>
                  <View
                    width="16px"
                    height="16px"
                    shrink="0"
                    overflow="hidden"
                    position="relative"
                    padding="0px 0px 0px 0px"
                    {...getOverrideProps(overrides, "Button Icon")}
                  >
                    <Icon
                      width="11.66015625px"
                      height="11.65997314453125px"
                      viewBox={{
                        minX: 0,
                        minY: 0,
                        width: 11.66015625,
                        height: 11.65997314453125,
                      }}
                      paths={[
                        {
                          d: "M8.33333 7.33333L7.80667 7.33333L7.62 7.15333C8.27333 6.39333 8.66667 5.40667 8.66667 4.33333C8.66667 1.94 6.72667 0 4.33333 0C1.94 0 0 1.94 0 4.33333C0 6.72667 1.94 8.66667 4.33333 8.66667C5.40667 8.66667 6.39333 8.27333 7.15333 7.62L7.33333 7.80667L7.33333 8.33333L10.6667 11.66L11.66 10.6667L8.33333 7.33333L8.33333 7.33333ZM4.33333 7.33333C2.67333 7.33333 1.33333 5.99333 1.33333 4.33333C1.33333 2.67333 2.67333 1.33333 4.33333 1.33333C5.99333 1.33333 7.33333 2.67333 7.33333 4.33333C7.33333 5.99333 5.99333 7.33333 4.33333 7.33333Z",
                          fill: "rgba(255,255,255,1)",
                          fillRule: "nonzero",
                        },
                      ]}
                      position="absolute"
                      top="12.5%"
                      bottom="14.63%"
                      left="12.5%"
                      right="14.63%"
                      {...getOverrideProps(overrides, "Vector33833053")}
                    ></Icon>
                  </View>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
