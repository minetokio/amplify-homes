/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Icon, Image, Text, View } from "@aws-amplify/ui-react";
export default function SimilarityCard(props) {
  const { worker, overrides, ...rest } = props;
  return (
    <Flex
      gap="0"
      width="465.45px"
      height="150px"
      alignItems="flex-start"
      position="relative"
      border="1px SOLID rgba(0,0,0,1)"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "SimilarityCard")}
    >
      <Image
        width="139.45px"
        height="150px"
        shrink="0"
        position="relative"
        borderRadius="64px"
        padding="0px 0px 0px 0px"
        src={worker?.imageUrl}
        {...getOverrideProps(overrides, "onepiece03_nami 2")}
      ></Image>
      <Flex
        gap="0"
        direction="column"
        width="326px"
        height="150px"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Body")}
      >
        <View
          height="37.5px"
          grow="1"
          alignSelf="stretch"
          objectFit="cover"
          overflow="hidden"
          position="relative"
          border="1px SOLID rgba(0,0,0,1)"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 421")}
        >
          <View
            width="50px"
            height="37px"
            position="absolute"
            top="0px"
            left="-0.45px"
            overflow="hidden"
            border="1px SOLID rgba(0,0,0,1)"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "user")}
          >
            <Icon
              width="33.33349609375px"
              height="9.25px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 33.33349609375,
                height: 9.25,
              }}
              paths={[
                {
                  d: "M32.3333 9.25C32.3333 9.80228 32.7811 10.25 33.3333 10.25C33.8856 10.25 34.3333 9.80228 34.3333 9.25L32.3333 9.25ZM25 0L25 -1L25 0ZM8.33333 0L8.33333 -1L8.33333 0ZM0 6.16667L-1 6.16667L0 6.16667ZM-1 9.25C-1 9.80228 -0.552285 10.25 0 10.25C0.552285 10.25 1 9.80228 1 9.25L-1 9.25ZM34.3333 9.25L34.3333 6.16667L32.3333 6.16667L32.3333 9.25L34.3333 9.25ZM34.3333 6.16667C34.3333 4.15211 33.2507 2.30716 31.4874 1.00233L30.2977 2.61002C31.66 3.61814 32.3333 4.91022 32.3333 6.16667L34.3333 6.16667ZM31.4874 1.00233C29.7294 -0.298601 27.3937 -1 25 -1L25 1C27.0266 1 28.9301 1.598 30.2977 2.61002L31.4874 1.00233ZM25 -1L8.33333 -1L8.33333 1L25 1L25 -1ZM8.33333 -1C5.93961 -1 3.60396 -0.298602 1.84593 1.00233L3.03562 2.61002C4.4032 1.598 6.30678 1 8.33333 1L8.33333 -1ZM1.84593 1.00233C0.0826553 2.30716 -1 4.15211 -1 6.16667L1 6.16667C1 4.91022 1.67329 3.61814 3.03562 2.61002L1.84593 1.00233ZM-1 6.16667L-1 9.25L1 9.25L1 6.16667L-1 6.16667Z",
                  stroke: "rgba(0,0,0,1)",
                  fillRule: "nonzero",
                  strokeLinejoin: "round",
                  strokeWidth: 2,
                },
              ]}
              position="absolute"
              top="62.5%"
              bottom="12.5%"
              left="16.67%"
              right="16.67%"
              {...getOverrideProps(overrides, "Vector33493046")}
            ></Icon>
            <Icon
              width="16.66650390625px"
              height="12.33331298828125px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 16.66650390625,
                height: 12.33331298828125,
              }}
              paths={[
                {
                  d: "M15.6667 6.16667C15.6667 7.4784 14.9504 8.74702 13.631 9.72332C12.3119 10.6995 10.4422 11.3333 8.33333 11.3333L8.33333 13.3333C10.8269 13.3333 13.1238 12.5867 14.8207 11.331C16.5175 10.0754 17.6667 8.26069 17.6667 6.16667L15.6667 6.16667ZM8.33333 11.3333C6.22449 11.3333 4.35474 10.6995 3.03562 9.72332C1.7163 8.74702 1 7.4784 1 6.16667L-1 6.16667C-1 8.26069 0.149184 10.0754 1.84593 11.331C3.54289 12.5867 5.83981 13.3333 8.33333 13.3333L8.33333 11.3333ZM1 6.16667C1 4.85494 1.7163 3.58632 3.03562 2.61002C4.35474 1.63387 6.22449 1 8.33333 1L8.33333 -1C5.83981 -1 3.54289 -0.253414 1.84593 1.00233C0.149184 2.25793 -1 4.07264 -1 6.16667L1 6.16667ZM8.33333 1C10.4422 1 12.3119 1.63387 13.631 2.61002C14.9504 3.58632 15.6667 4.85494 15.6667 6.16667L17.6667 6.16667C17.6667 4.07264 16.5175 2.25793 14.8207 1.00233C13.1238 -0.253414 10.8269 -1 8.33333 -1L8.33333 1Z",
                  stroke: "rgba(0,0,0,1)",
                  fillRule: "nonzero",
                  strokeLinejoin: "round",
                  strokeWidth: 2,
                },
              ]}
              position="absolute"
              top="12.5%"
              bottom="54.17%"
              left="33.33%"
              right="33.33%"
              {...getOverrideProps(overrides, "Vector33493047")}
            ></Icon>
          </View>
          <Text
            fontFamily="Inter"
            fontSize="12px"
            fontWeight="400"
            color="rgba(0,0,0,1)"
            lineHeight="14.0625px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="center"
            width="276px"
            height="38px"
            position="absolute"
            top="0px"
            left="49.55px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={worker?.name}
            {...getOverrideProps(overrides, "Name")}
          ></Text>
        </View>
        <View
          height="37.5px"
          grow="1"
          alignSelf="stretch"
          objectFit="cover"
          overflow="hidden"
          position="relative"
          border="1px SOLID rgba(0,0,0,1)"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 422")}
        >
          <Text
            fontFamily="Inter"
            fontSize="12px"
            fontWeight="400"
            color="rgba(0,0,0,1)"
            lineHeight="14.0625px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="center"
            width="276px"
            height="34px"
            position="absolute"
            top="0.5px"
            left="49.55px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={worker?.dispTime}
            {...getOverrideProps(overrides, "\u6642\u9593")}
          ></Text>
          <View
            width="50px"
            height="37px"
            position="absolute"
            top="0.5px"
            left="-0.45px"
            overflow="hidden"
            border="1px SOLID rgba(0,0,0,1)"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "clock")}
          >
            <Icon
              width="41.66650390625px"
              height="30.83331298828125px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 41.66650390625,
                height: 30.83331298828125,
              }}
              paths={[
                {
                  d: "M40.6667 15.4167C40.6667 19.2827 38.5513 22.8638 34.9699 25.5141C31.3887 28.1641 26.394 29.8333 20.8333 29.8333L20.8333 31.8333C26.7786 31.8333 32.2006 30.0514 36.1596 27.1217C40.1184 24.1922 42.6667 20.065 42.6667 15.4167L40.6667 15.4167ZM20.8333 29.8333C15.2727 29.8333 10.278 28.1641 6.69679 25.5141C3.11541 22.8638 1 19.2827 1 15.4167L-1 15.4167C-1 20.065 1.54829 24.1922 5.5071 27.1217C9.46611 30.0514 14.888 31.8333 20.8333 31.8333L20.8333 29.8333ZM1 15.4167C1 11.5506 3.11541 7.9695 6.69679 5.31928C10.278 2.66921 15.2727 1 20.8333 1L20.8333 -1C14.888 -1 9.46611 0.781928 5.5071 3.7116C1.54829 6.64111 -1 10.7683 -1 15.4167L1 15.4167ZM20.8333 1C26.394 1 31.3887 2.66921 34.9699 5.31928C38.5513 7.9695 40.6667 11.5506 40.6667 15.4167L42.6667 15.4167C42.6667 10.7683 40.1184 6.64111 36.1596 3.7116C32.2006 0.781928 26.7786 -1 20.8333 -1L20.8333 1Z",
                  stroke: "rgba(0,0,0,1)",
                  fillRule: "nonzero",
                  strokeLinejoin: "round",
                  strokeWidth: 2,
                },
              ]}
              position="absolute"
              top="8.33%"
              bottom="8.33%"
              left="8.33%"
              right="8.33%"
              {...getOverrideProps(overrides, "Vector33493033")}
            ></Icon>
            <Icon
              width="8.33349609375px"
              height="12.33331298828125px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 8.33349609375,
                height: 12.33331298828125,
              }}
              paths={[
                {
                  d: "M1 0C1 -0.552285 0.552285 -1 0 -1C-0.552285 -1 -1 -0.552285 -1 0L1 0ZM0 9.25L-1 9.25C-1 9.66845 -0.739459 10.0427 -0.347009 10.1879L0 9.25ZM7.98632 13.2712C8.50429 13.4628 9.07955 13.1983 9.27119 12.6803C9.46284 12.1624 9.19831 11.5871 8.68034 11.3955L7.98632 13.2712ZM-1 0L-1 9.25L1 9.25L1 0L-1 0ZM-0.347009 10.1879L7.98632 13.2712L8.68034 11.3955L0.347009 8.31214L-0.347009 10.1879Z",
                  stroke: "rgba(0,0,0,1)",
                  fillRule: "nonzero",
                  strokeLinejoin: "round",
                  strokeWidth: 2,
                },
              ]}
              position="absolute"
              top="25%"
              bottom="41.67%"
              left="50%"
              right="33.33%"
              {...getOverrideProps(overrides, "Vector33493034")}
            ></Icon>
          </View>
        </View>
        <View
          height="37.5px"
          grow="1"
          alignSelf="stretch"
          objectFit="cover"
          overflow="hidden"
          position="relative"
          border="1px SOLID rgba(0,0,0,1)"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 423")}
        >
          <View
            width="49px"
            height="37px"
            position="absolute"
            top="0px"
            left="0.55px"
            overflow="hidden"
            border="1px SOLID rgba(0,0,0,1)"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "linkedin")}
          >
            <Icon
              width="24.5px"
              height="20.04168701171875px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 24.5,
                height: 20.04168701171875,
              }}
              paths={[
                {
                  d: "M12.25 -1C11.6977 -1 11.25 -0.552285 11.25 0C11.25 0.552285 11.6977 1 12.25 1L12.25 -1ZM24.5 20.0417L24.5 21.0417C25.0523 21.0417 25.5 20.594 25.5 20.0417L24.5 20.0417ZM16.3333 20.0417L15.3333 20.0417C15.3333 20.594 15.781 21.0417 16.3333 21.0417L16.3333 20.0417ZM8.16667 20.0417L8.16667 21.0417C8.71895 21.0417 9.16667 20.594 9.16667 20.0417L8.16667 20.0417ZM0 20.0417L-1 20.0417C-1 20.594 -0.552285 21.0417 2.22045e-16 21.0417L0 20.0417ZM12.25 1C15.3107 1 18.2077 1.92029 20.3095 3.5073L21.5147 1.91122C19.0217 0.0288165 15.6871 -1 12.25 -1L12.25 1ZM20.3095 3.5073C22.4056 5.09009 23.5 7.16714 23.5 9.25L25.5 9.25C25.5 6.42636 24.0132 3.79786 21.5147 1.91122L20.3095 3.5073ZM23.5 9.25L23.5 20.0417L25.5 20.0417L25.5 9.25L23.5 9.25ZM24.5 19.0417L16.3333 19.0417L16.3333 21.0417L24.5 21.0417L24.5 19.0417ZM17.3333 20.0417L17.3333 9.25L15.3333 9.25L15.3333 20.0417L17.3333 20.0417ZM17.3333 9.25C17.3333 8.06186 16.7069 7.00188 15.74 6.27171L14.5347 7.8678C15.0993 8.29411 15.3333 8.80264 15.3333 9.25L17.3333 9.25ZM15.74 6.27171C14.7786 5.54578 13.5211 5.16667 12.25 5.16667L12.25 7.16667C13.1448 7.16667 13.9646 7.43725 14.5347 7.8678L15.74 6.27171ZM12.25 5.16667C10.9789 5.16667 9.72141 5.54578 8.76005 6.27171L9.96525 7.8678C10.5354 7.43725 11.3552 7.16667 12.25 7.16667L12.25 5.16667ZM8.76005 6.27171C7.79307 7.00188 7.16667 8.06186 7.16667 9.25L9.16667 9.25C9.16667 8.80264 9.40068 8.29411 9.96525 7.8678L8.76005 6.27171ZM7.16667 9.25L7.16667 20.0417L9.16667 20.0417L9.16667 9.25L7.16667 9.25ZM8.16667 19.0417L0 19.0417L0 21.0417L8.16667 21.0417L8.16667 19.0417ZM1 20.0417L1 9.25L-1 9.25L-1 20.0417L1 20.0417ZM1 9.25C1 7.16714 2.09442 5.09009 4.19055 3.5073L2.98534 1.91122C0.48682 3.79786 -1 6.42636 -1 9.25L1 9.25ZM4.19055 3.5073C6.29227 1.92029 9.18926 1 12.25 1L12.25 -1C8.81294 -1 5.47825 0.0288166 2.98534 1.91122L4.19055 3.5073Z",
                  stroke: "rgba(0,0,0,1)",
                  fillRule: "nonzero",
                  strokeLinejoin: "round",
                  strokeWidth: 2,
                },
              ]}
              position="absolute"
              top="33.33%"
              bottom="12.5%"
              left="41.67%"
              right="8.33%"
              {...getOverrideProps(overrides, "Vector33493041")}
            ></Icon>
            <Icon
              width="8.16650390625px"
              height="18.5px"
              viewBox={{ minX: 0, minY: 0, width: 8.16650390625, height: 18.5 }}
              paths={[
                {
                  d: "M0 0L0 -1C-0.552285 -1 -1 -0.552285 -1 2.22045e-16L0 0ZM8.16667 0L9.16667 0C9.16667 -0.552285 8.71895 -1 8.16667 -1L8.16667 0ZM8.16667 18.5L8.16667 19.5C8.71895 19.5 9.16667 19.0523 9.16667 18.5L8.16667 18.5ZM0 18.5L-1 18.5C-1 19.0523 -0.552285 19.5 2.22045e-16 19.5L0 18.5ZM0 1L8.16667 1L8.16667 -1L0 -1L0 1ZM7.16667 0L7.16667 18.5L9.16667 18.5L9.16667 0L7.16667 0ZM8.16667 17.5L0 17.5L0 19.5L8.16667 19.5L8.16667 17.5ZM1 18.5L1 0L-1 0L-1 18.5L1 18.5Z",
                  stroke: "rgba(0,0,0,1)",
                  fillRule: "nonzero",
                  strokeLinejoin: "round",
                  strokeWidth: 2,
                },
              ]}
              position="absolute"
              top="37.5%"
              bottom="12.5%"
              left="8.33%"
              right="75%"
              {...getOverrideProps(overrides, "Vector33493042")}
            ></Icon>
            <Icon
              width="8.16650390625px"
              height="6.16668701171875px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 8.16650390625,
                height: 6.16668701171875,
              }}
              paths={[
                {
                  d: "M7.16667 3.08333C7.16667 3.55236 6.91728 4.05084 6.36808 4.46554C5.81834 4.88065 5.01388 5.16667 4.08333 5.16667L4.08333 7.16667C5.40795 7.16667 6.64515 6.76246 7.57329 6.06162C8.50196 5.36037 9.16667 4.31718 9.16667 3.08333L7.16667 3.08333ZM4.08333 5.16667C3.15279 5.16667 2.34832 4.88065 1.79858 4.46554C1.24938 4.05084 1 3.55236 1 3.08333L-1 3.08333C-1 4.31718 -0.335298 5.36037 0.593378 6.06162C1.52152 6.76246 2.75871 7.16667 4.08333 7.16667L4.08333 5.16667ZM1 3.08333C1 2.6143 1.24938 2.11583 1.79858 1.70113C2.34832 1.28602 3.15279 1 4.08333 1L4.08333 -1C2.75871 -1 1.52152 -0.595793 0.593378 0.105046C-0.335298 0.806291 -1 1.84948 -1 3.08333L1 3.08333ZM4.08333 1C5.01388 1 5.81834 1.28602 6.36808 1.70113C6.91728 2.11583 7.16667 2.6143 7.16667 3.08333L9.16667 3.08333C9.16667 1.84948 8.50196 0.806291 7.57329 0.105046C6.64515 -0.595793 5.40795 -1 4.08333 -1L4.08333 1Z",
                  stroke: "rgba(0,0,0,1)",
                  fillRule: "nonzero",
                  strokeLinejoin: "round",
                  strokeWidth: 2,
                },
              ]}
              position="absolute"
              top="8.33%"
              bottom="75%"
              left="8.33%"
              right="75%"
              {...getOverrideProps(overrides, "Vector33493043")}
            ></Icon>
          </View>
          <Text
            fontFamily="Inter"
            fontSize="12px"
            fontWeight="400"
            color="rgba(0,0,0,1)"
            lineHeight="14.0625px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="center"
            width="276px"
            height="38px"
            position="absolute"
            top="0px"
            left="49.55px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={worker?.place}
            {...getOverrideProps(overrides, "place")}
          ></Text>
        </View>
        <View
          height="37.5px"
          grow="1"
          alignSelf="stretch"
          objectFit="cover"
          overflow="hidden"
          position="relative"
          border="1px SOLID rgba(0,0,0,1)"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 424")}
        >
          <Text
            fontFamily="Inter"
            fontSize="12px"
            fontWeight="400"
            color="rgba(0,0,0,1)"
            lineHeight="14.0625px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="center"
            width="276px"
            height="34px"
            position="absolute"
            top="0.5px"
            left="49.55px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={worker?.similarity}
            {...getOverrideProps(overrides, "Similarity")}
          ></Text>
          <View
            width="50px"
            height="37px"
            position="absolute"
            top="0.5px"
            left="-0.45px"
            overflow="hidden"
            border="1px SOLID rgba(0,0,0,1)"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "thumbs-up")}
          >
            <Icon
              width="41.00537109375px"
              height="30.83355712890625px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 41.00537109375,
                height: 30.83355712890625,
              }}
              paths={[
                {
                  d: "M25 10.7917L24 10.7917C24 11.344 24.4477 11.7917 25 11.7917L25 10.7917ZM25 4.625L26 4.625L25 4.625ZM18.75 0L18.75 -1C18.3989 -1 18.0735 -0.815865 17.8927 -0.514874L18.75 0ZM10.4167 13.875L9.5594 13.3601C9.46601 13.5156 9.41667 13.6936 9.41667 13.875L10.4167 13.875ZM10.4167 30.8333L9.41667 30.8333C9.41667 31.3856 9.86438 31.8333 10.4167 31.8333L10.4167 30.8333ZM33.9167 30.8333L33.925 29.8333L33.9167 29.8333L33.9167 30.8333ZM38.0833 28.2125L37.1041 28.0096L37.1037 28.0117L38.0833 28.2125ZM40.9583 14.3375L41.9375 14.5404L41.9379 14.5384L40.9583 14.3375ZM36.7917 10.7917L36.7917 11.7917L36.8 11.7916L36.7917 10.7917ZM10.4167 31.8333C10.969 31.8333 11.4167 31.3856 11.4167 30.8333C11.4167 30.281 10.969 29.8333 10.4167 29.8333L10.4167 31.8333ZM0 27.75L-1 27.75L0 27.75ZM4.16667 13.875L4.16667 14.875L4.16667 13.875ZM10.4167 14.875C10.969 14.875 11.4167 14.4273 11.4167 13.875C11.4167 13.3227 10.969 12.875 10.4167 12.875L10.4167 14.875ZM26 10.7917L26 4.625L24 4.625L24 10.7917L26 10.7917ZM26 4.625C26 3.01932 25.1368 1.5665 23.7643 0.550789L22.5746 2.15847C23.5462 2.87748 24 3.77743 24 4.625L26 4.625ZM23.7643 0.550789C22.3969 -0.461028 20.5912 -1 18.75 -1L18.75 1C20.224 1 21.5977 1.43558 22.5746 2.15847L23.7643 0.550789ZM17.8927 -0.514874L9.5594 13.3601L11.2739 14.3899L19.6073 0.514874L17.8927 -0.514874ZM9.41667 13.875L9.41667 30.8333L11.4167 30.8333L11.4167 13.875L9.41667 13.875ZM10.4167 31.8333L33.9167 31.8333L33.9167 29.8333L10.4167 29.8333L10.4167 31.8333ZM33.9083 31.8333C35.0824 31.8431 36.2495 31.5405 37.1947 30.946L36.1299 29.253C35.5437 29.6217 34.7606 29.8404 33.925 29.8334L33.9083 31.8333ZM37.1947 30.946C38.1403 30.3512 38.8465 29.4695 39.063 28.4133L37.1037 28.0117C37.0188 28.426 36.7157 28.8846 36.1299 29.253L37.1947 30.946ZM39.0625 28.4154L41.9375 14.5404L39.9791 14.1346L37.1041 28.0096L39.0625 28.4154ZM41.9379 14.5384C42.0683 13.9027 42.0086 13.255 41.7712 12.6499L39.9094 13.3804C40.0088 13.6338 40.0296 13.8885 39.9787 14.1366L41.9379 14.5384ZM41.7712 12.6499C41.5352 12.0484 41.1366 11.5202 40.6311 11.09L39.3349 12.6131C39.6222 12.8576 39.8085 13.1233 39.9094 13.3804L41.7712 12.6499ZM40.6311 11.09C40.1262 10.6603 39.5191 10.3316 38.8601 10.1128L38.2297 12.0108C38.6729 12.158 39.0472 12.3683 39.3349 12.6131L40.6311 11.09ZM38.8601 10.1128C38.2006 9.89372 37.4927 9.78576 36.7833 9.7917L36.8 11.7916C37.2986 11.7875 37.7872 11.8638 38.2297 12.0108L38.8601 10.1128ZM36.7917 9.79167L25 9.79167L25 11.7917L36.7917 11.7917L36.7917 9.79167ZM10.4167 29.8333L4.16667 29.8333L4.16667 31.8333L10.4167 31.8333L10.4167 29.8333ZM4.16667 29.8333C3.24519 29.8333 2.40141 29.5602 1.81523 29.1264L0.625545 30.7341C1.60216 31.4568 2.87801 31.8333 4.16667 31.8333L4.16667 29.8333ZM1.81523 29.1264C1.2343 28.6965 1 28.1887 1 27.75L-1 27.75C-1 28.9468 -0.356332 30.0075 0.625545 30.7341L1.81523 29.1264ZM1 27.75L1 16.9583L-1 16.9583L-1 27.75L1 27.75ZM1 16.9583C1 16.5196 1.2343 16.0118 1.81523 15.5819L0.625545 13.9742C-0.356332 14.7008 -1 15.7615 -1 16.9583L1 16.9583ZM1.81523 15.5819C2.40141 15.1482 3.24519 14.875 4.16667 14.875L4.16667 12.875C2.87801 12.875 1.60216 13.2515 0.625545 13.9742L1.81523 15.5819ZM4.16667 14.875L10.4167 14.875L10.4167 12.875L4.16667 12.875L4.16667 14.875Z",
                  stroke: "rgba(0,0,0,1)",
                  fillRule: "nonzero",
                  strokeLinejoin: "round",
                  strokeWidth: 2,
                },
              ]}
              position="absolute"
              top="8.33%"
              bottom="8.33%"
              left="8.33%"
              right="9.66%"
              {...getOverrideProps(overrides, "Vector33493037")}
            ></Icon>
          </View>
        </View>
      </Flex>
    </Flex>
  );
}
