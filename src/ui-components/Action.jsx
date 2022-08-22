/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Icon, Text, View } from "@aws-amplify/ui-react";
export default function Action(props) {
  const { worker, overrides, ...rest } = props;
  return (
    <View
      width="750px"
      height="150px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "Action")}
    >
      <View
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        boxShadow="0px 3px 29px rgba(0.23137255012989044, 0.29019609093666077, 0.45490196347236633, 0.13547328114509583)"
        borderRadius="10px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "bg32853514")}
      ></View>
      <View
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        boxShadow="0px 3px 29px rgba(0.23137255012989044, 0.29019609093666077, 0.45490196347236633, 0.13547328114509583)"
        borderRadius="10px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "bg32853515")}
      ></View>
      <View
        padding="0px 0px 0px 0px"
        position="absolute"
        top="8%"
        bottom="8%"
        left="0%"
        right="0%"
        {...getOverrideProps(overrides, "Content/List-Transaction")}
      >
        <View
          padding="0px 0px 0px 0px"
          position="absolute"
          top="30.95%"
          bottom="30.95%"
          left="88.27%"
          right="5.33%"
          {...getOverrideProps(overrides, "bookmark-S-quiet")}
        >
          <Icon
            width="48px"
            height="48px"
            viewBox={{ minX: 0, minY: 0, width: 48, height: 48 }}
            paths={[
              {
                d: "M0 0L0 48L48 48L48 0L0 0Z",
                fill: "rgba(28,143,248,0)",
                fillRule: "evenodd",
              },
            ]}
            position="absolute"
            top="0%"
            bottom="0%"
            left="0%"
            right="0%"
            {...getOverrideProps(overrides, "bounds32853520")}
          ></Icon>
          <View
            padding="0px 0px 0px 0px"
            position="absolute"
            top="20.83%"
            bottom="20.83%"
            left="27.08%"
            right="27.08%"
            {...getOverrideProps(overrides, "bookmark")}
          >
            <Icon
              width="22px"
              height="28px"
              viewBox={{ minX: 0, minY: 0, width: 22, height: 28 }}
              paths={[
                {
                  d: "M22 28L21.4227 28.8165C21.7278 29.0323 22.1278 29.0599 22.4597 28.8881C22.7916 28.7163 23 28.3737 23 28L22 28ZM11 20.2222L11.5773 19.4057C11.2313 19.1611 10.7687 19.1611 10.4227 19.4057L11 20.2222ZM0 28L-1 28C-1 28.3737 -0.791605 28.7163 -0.459711 28.8881C-0.127818 29.0599 0.27218 29.0323 0.577331 28.8165L0 28ZM22.5773 27.1835L11.5773 19.4057L10.4227 21.0387L21.4227 28.8165L22.5773 27.1835ZM10.4227 19.4057L-0.577331 27.1835L0.577331 28.8165L11.5773 21.0387L10.4227 19.4057ZM1 28L1 3.11111L-1 3.11111L-1 28L1 28ZM1 3.11111C1 1.95472 1.94979 1 3.14286 1L3.14286 -1C0.864416 -1 -1 0.83106 -1 3.11111L1 3.11111ZM3.14286 1L18.8571 1L18.8571 -1L3.14286 -1L3.14286 1ZM18.8571 1C20.0502 1 21 1.95472 21 3.11111L23 3.11111C23 0.83106 21.1356 -1 18.8571 -1L18.8571 1ZM21 3.11111L21 28L23 28L23 3.11111L21 3.11111Z",
                  stroke: "rgba(108,123,138,1)",
                  fillRule: "nonzero",
                  strokeLinejoin: "round",
                  strokeWidth: 2,
                },
              ]}
              position="absolute"
              top="0%"
              bottom="0%"
              left="0%"
              right="0%"
              {...getOverrideProps(overrides, "Shape32853522")}
            ></Icon>
          </View>
        </View>
        <View
          position="absolute"
          top="0%"
          bottom="0%"
          left="0%"
          right="0%"
          overflow="hidden"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "transaction-list-item")}
        >
          <Text
            fontFamily="Montserrat"
            fontSize="20px"
            fontWeight="400"
            color="rgba(108,123,138,1)"
            lineHeight="15px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            position="absolute"
            top="calc(50% - 7.5px - -18.5px)"
            left="45.33%"
            right="42.4%"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={worker?.place}
            {...getOverrideProps(overrides, "type")}
          ></Text>
          <Text
            fontFamily="Montserrat"
            fontSize="20px"
            fontWeight="300"
            color="rgba(108,123,138,1)"
            lineHeight="15px"
            textAlign="right"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            position="absolute"
            top="calc(50% - 7.5px - -19.5px)"
            left="69px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={worker?.dispTime}
            {...getOverrideProps(overrides, "\u270F\uFE0Ftime")}
          ></Text>
          <View
            position="absolute"
            top="29.37%"
            bottom="50.79%"
            left="8.67%"
            right="80%"
            overflow="hidden"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "outgoing")}
          >
            <Text
              fontFamily="Montserrat"
              fontSize="35px"
              fontWeight="400"
              color="rgba(20,15,38,1)"
              lineHeight="25px"
              textAlign="right"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              position="absolute"
              top="0px"
              left="85px"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="  "
              {...getOverrideProps(overrides, "-amount")}
            ></Text>
            <Text
              fontFamily="Montserrat"
              fontSize="35px"
              fontWeight="400"
              color="rgba(20,15,38,1)"
              lineHeight="25px"
              textAlign="right"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              position="absolute"
              top="0px"
              left="19px"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="  "
              {...getOverrideProps(overrides, "-")}
            ></Text>
          </View>
          <View
            position="absolute"
            top="31.75%"
            bottom="48.41%"
            left="10.13%"
            right="80%"
            overflow="hidden"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "incoming")}
          >
            <Text
              fontFamily="Montserrat"
              fontSize="35px"
              fontWeight="500"
              color="rgba(20,210,184,1)"
              lineHeight="25px"
              textAlign="right"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              position="absolute"
              top="0px"
              left="0px"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="+ $6"
              {...getOverrideProps(overrides, "+amount")}
            ></Text>
          </View>
          <View
            padding="0px 0px 0px 0px"
            width="30px"
            height="30px"
            position="absolute"
            top="67px"
            left="305px"
            {...getOverrideProps(overrides, "file-XS-quiet")}
          >
            <Icon
              width="30px"
              height="30px"
              viewBox={{ minX: 0, minY: 0, width: 30, height: 30 }}
              paths={[
                {
                  d: "M0 0L0 30L30 30L30 0L0 0Z",
                  fill: "rgba(28,143,248,0)",
                  fillRule: "evenodd",
                },
              ]}
              position="absolute"
              top="0%"
              bottom="0%"
              left="0%"
              right="0%"
              {...getOverrideProps(overrides, "bounds32853533")}
            ></Icon>
            <View
              padding="0px 0px 0px 0px"
              width="15px"
              height="19px"
              position="absolute"
              top="6px"
              left="8px"
              {...getOverrideProps(overrides, "file")}
            >
              <Icon
                width="15px"
                height="19px"
                viewBox={{ minX: 0, minY: 0, width: 15, height: 19 }}
                paths={[
                  {
                    d: "M8.4375 0L9.14927 -0.702409C8.96137 -0.892817 8.70501 -1 8.4375 -1L8.4375 0ZM15 6.65L16 6.65C16 6.38708 15.8965 6.13473 15.7118 5.94759L15 6.65ZM8.4375 -1L1.875 -1L1.875 1L8.4375 1L8.4375 -1ZM1.875 -1C0.274735 -1 -1 0.310903 -1 1.9L1 1.9C1 1.39042 1.4042 1 1.875 1L1.875 -1ZM-1 1.9L-1 17.1L1 17.1L1 1.9L-1 1.9ZM-1 17.1C-1 18.6891 0.274736 20 1.875 20L1.875 18C1.4042 18 1 17.6096 1 17.1L-1 17.1ZM1.875 20L13.125 20L13.125 18L1.875 18L1.875 20ZM13.125 20C14.7253 20 16 18.6891 16 17.1L14 17.1C14 17.6096 13.5958 18 13.125 18L13.125 20ZM16 17.1L16 6.65L14 6.65L14 17.1L16 17.1ZM15.7118 5.94759L9.14927 -0.702409L7.72573 0.702409L14.2882 7.35241L15.7118 5.94759Z",
                    stroke: "rgba(108,123,138,1)",
                    fillRule: "nonzero",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                  },
                ]}
                position="absolute"
                top="0%"
                bottom="0%"
                left="0%"
                right="0%"
                {...getOverrideProps(overrides, "Shape32853535")}
              ></Icon>
              <Icon
                width="6.4287109375px"
                height="6.5771484375px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 6.4287109375,
                  height: 6.5771484375,
                }}
                paths={[
                  {
                    d: "M1 0C1 -0.552285 0.552285 -1 0 -1C-0.552285 -1 -1 -0.552285 -1 0L1 0ZM0 6.57692L-1 6.57692C-1 7.12921 -0.552285 7.57692 2.22045e-16 7.57692L0 6.57692ZM6.42857 7.57692C6.98086 7.57692 7.42857 7.12921 7.42857 6.57692C7.42857 6.02464 6.98086 5.57692 6.42857 5.57692L6.42857 7.57692ZM-1 0L-1 6.57692L1 6.57692L1 0L-1 0ZM0 7.57692L6.42857 7.57692L6.42857 5.57692L0 5.57692L0 7.57692Z",
                    stroke: "rgba(108,123,138,1)",
                    fillRule: "nonzero",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                  },
                ]}
                position="absolute"
                top="0%"
                bottom="65.38%"
                left="57.14%"
                right="0%"
                {...getOverrideProps(overrides, "Shape32853536")}
              ></Icon>
            </View>
          </View>
          <Text
            fontFamily="Montserrat"
            fontSize="27px"
            fontWeight="500"
            color="rgba(20,15,38,1)"
            lineHeight="25px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            position="absolute"
            top="calc(50% - 12.5px - 19.5px)"
            left="41.33%"
            right="37.47%"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={worker?.name}
            {...getOverrideProps(overrides, "\u270F\uFE0Fname")}
          ></Text>
          <View
            padding="0px 0px 0px 0px"
            width="80px"
            height="80px"
            position="absolute"
            top="23px"
            left="190px"
            {...getOverrideProps(overrides, "Content/Image/Profile/Circle")}
          >
            <Icon
              width="100%"
              height="100%"
              viewBox={{ minX: 0, minY: 0, width: 80, height: 80 }}
              paths={[
                {
                  d: "M80 40C80 62.0914 62.0914 80 40 80C17.9086 80 0 62.0914 0 40C0 17.9086 17.9086 0 40 0C62.0914 0 80 17.9086 80 40Z",
                  fillRule: "nonzero",
                },
              ]}
              position="absolute"
              top="0%"
              bottom="0%"
              left="0%"
              right="0%"
              src={worker?.imageUrl}
              {...getOverrideProps(overrides, "\uD83D\uDDBC profile-image")}
            ></Icon>
          </View>
          <View
            padding="0px 0px 0px 0px"
            width="14px"
            height="14px"
            position="absolute"
            top="16px"
            left="257px"
            {...getOverrideProps(overrides, "Component/Badge/Bullet/Red")}
          >
            <Icon
              width="14px"
              height="14px"
              viewBox={{ minX: 0, minY: 0, width: 14, height: 14 }}
              paths={[
                {
                  d: "M7 0C3.13401 0 0 3.13401 0 7L0 7C0 10.866 3.13401 14 7 14L7 14C10.866 14 14 10.866 14 7L14 7C14 3.13401 10.866 0 7 0L7 0Z",
                  fill: "rgba(0,0,0,1)",
                  fillRule: "evenodd",
                },
              ]}
              position="absolute"
              top="0%"
              bottom="0%"
              left="0%"
              right="0%"
              {...getOverrideProps(overrides, "background")}
            ></Icon>
            <View
              padding="0px 0px 0px 0px"
              width="20px"
              height="20px"
              position="absolute"
              top="-3px"
              left="-3px"
              {...getOverrideProps(overrides, "Color/\uD83C\uDFA8watermelon")}
            >
              <View
                position="absolute"
                top="0%"
                bottom="0%"
                left="0%"
                right="0%"
                border="0px SOLID rgba(151,151,151,1)"
                padding="0px 0px 0px 0px"
                backgroundColor="rgba(100,206,238,1)"
                {...getOverrideProps(overrides, "bg32853543")}
              ></View>
            </View>
          </View>
        </View>
      </View>
      <View
        padding="0px 0px 0px 0px"
        position="absolute"
        top="20%"
        bottom="20%"
        left="84%"
        right="4%"
        {...getOverrideProps(overrides, "Button/Icon/Round")}
      >
        <Icon
          width="90px"
          height="90px"
          viewBox={{ minX: 0, minY: 0, width: 90, height: 90 }}
          paths={[
            {
              d: "M0 0L0 90L90 90L90 0L0 0Z",
              fill: "rgba(80,161,255,0.0001)",
              fillRule: "evenodd",
            },
          ]}
          position="absolute"
          top="0%"
          bottom="0%"
          left="0%"
          right="0%"
          {...getOverrideProps(overrides, "bounds copy")}
        ></Icon>
        <View
          padding="0px 0px 0px 0px"
          position="absolute"
          top="0%"
          bottom="0%"
          left="0%"
          right="0%"
          {...getOverrideProps(overrides, "action/icon-round-button")}
        >
          <Icon
            width="90px"
            height="90px"
            viewBox={{ minX: 0, minY: 0, width: 90, height: 90 }}
            paths={[]}
            position="absolute"
            top="0%"
            bottom="0%"
            left="0%"
            right="0%"
            {...getOverrideProps(overrides, "round32853547")}
          ></Icon>
          <Icon
            width="90px"
            height="90px"
            viewBox={{ minX: 0, minY: 0, width: 90, height: 90 }}
            paths={[
              {
                d: "M90 45C90 69.8528 69.8528 90 45 90C20.1472 90 0 69.8528 0 45C0 20.1472 20.1472 0 45 0C69.8528 0 90 20.1472 90 45Z",
                fill: "rgba(0,0,0,1)",
                fillRule: "nonzero",
              },
            ]}
            position="absolute"
            top="0%"
            bottom="0%"
            left="0%"
            right="0%"
            {...getOverrideProps(overrides, "round32853548")}
          ></Icon>
          <View
            padding="0px 0px 0px 0px"
            position="absolute"
            top="0%"
            bottom="0%"
            left="0%"
            right="0%"
            {...getOverrideProps(overrides, "Color/\uD83C\uDFA8white")}
          >
            <View
              position="absolute"
              top="0%"
              bottom="0%"
              left="0%"
              right="0%"
              border="0px SOLID rgba(151,151,151,1)"
              padding="0px 0px 0px 0px"
              backgroundImage="linear-gradient(-47deg, rgba(232,63,148,1), rgba(245,78,94,1))"
              {...getOverrideProps(overrides, "bg32853550")}
            ></View>
          </View>
          <View
            padding="0px 0px 0px 0px"
            position="absolute"
            top="23.33%"
            bottom="23.33%"
            left="23.33%"
            right="23.33%"
            {...getOverrideProps(overrides, "\uD83D\uDDBC Icon/S-placeholder")}
          >
            <Icon
              width="48px"
              height="48px"
              viewBox={{ minX: 0, minY: 0, width: 48, height: 48 }}
              paths={[
                {
                  d: "M0 0L0 48L48 48L48 0L0 0Z",
                  fill: "rgba(28,143,248,0)",
                  fillRule: "evenodd",
                },
              ]}
              position="absolute"
              top="0%"
              bottom="0%"
              left="0%"
              right="0%"
              {...getOverrideProps(overrides, "bounds32853552")}
            ></Icon>
            <View
              padding="0px 0px 0px 0px"
              position="absolute"
              top="16.67%"
              bottom="14.58%"
              left="20.83%"
              right="20.83%"
              {...getOverrideProps(overrides, "trash-2")}
            >
              <Icon
                width="28px"
                height="1.5498046875px"
                viewBox={{ minX: 0, minY: 0, width: 28, height: 1.5498046875 }}
                paths={[
                  {
                    d: "M0 -1C-0.552285 -1 -1 -0.552285 -1 0C-1 0.552285 -0.552285 1 0 1L0 -1ZM28 1C28.5523 1 29 0.552285 29 0C29 -0.552285 28.5523 -1 28 -1L28 1ZM0 1L3.11111 1L3.11111 -1L0 -1L0 1ZM3.11111 1L28 1L28 -1L3.11111 -1L3.11111 1Z",
                    stroke: "rgba(255,255,255,1)",
                    fillRule: "nonzero",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                  },
                ]}
                position="absolute"
                top="21.82%"
                bottom="73.48%"
                left="0%"
                right="0%"
                {...getOverrideProps(overrides, "Shape32853554")}
              ></Icon>
              <Icon
                width="23.77734375px"
                height="33px"
                viewBox={{ minX: 0, minY: 0, width: 23.77734375, height: 33 }}
                paths={[
                  {
                    d: "M3 7.2C3 6.09543 2.10457 5.2 1 5.2L1 7.2L3 7.2ZM3 28.9L3 7.2L1 7.2L1 28.9L3 28.9ZM4.11111 30C3.49119 30 3 29.5013 3 28.9L1 28.9C1 30.6116 2.39241 32 4.11111 32L4.11111 30ZM19.6667 30L4.11111 30L4.11111 32L19.6667 32L19.6667 30ZM20.7778 28.9C20.7778 29.5013 20.2866 30 19.6667 30L19.6667 32C21.3854 32 22.7778 30.6116 22.7778 28.9L20.7778 28.9ZM20.7778 7.2L20.7778 28.9L22.7778 28.9L22.7778 7.2L20.7778 7.2ZM22.7778 5.2C21.6732 5.2 20.7778 6.09543 20.7778 7.2L22.7778 7.2L22.7778 5.2ZM24.7778 7.2C24.7778 6.09543 23.8823 5.2 22.7778 5.2L22.7778 7.2L24.7778 7.2ZM24.7778 28.9L24.7778 7.2L22.7778 7.2L22.7778 28.9L24.7778 28.9ZM19.6667 34C22.4825 34 24.7778 31.7236 24.7778 28.9L22.7778 28.9C22.7778 30.6118 21.3851 32 19.6667 32L19.6667 34ZM4.11111 34L19.6667 34L19.6667 32L4.11111 32L4.11111 34ZM-1 28.9C-1 31.7236 1.29533 34 4.11111 34L4.11111 32C2.39264 32 1 30.6118 1 28.9L-1 28.9ZM-1 7.2L-1 28.9L1 28.9L1 7.2L-1 7.2ZM1 5.2C-0.10457 5.2 -1 6.09543 -1 7.2L1 7.2L1 5.2ZM7.66667 4.1C7.66667 3.49874 8.15786 3 8.77778 3L8.77778 1C7.05907 1 5.66667 2.3884 5.66667 4.1L7.66667 4.1ZM7.66667 7.2L7.66667 4.1L5.66667 4.1L5.66667 7.2L7.66667 7.2ZM5.66667 9.2C6.77124 9.2 7.66667 8.30457 7.66667 7.2L5.66667 7.2L5.66667 9.2ZM3.66667 7.2C3.66667 8.30457 4.5621 9.2 5.66667 9.2L5.66667 7.2L3.66667 7.2ZM3.66667 4.1L3.66667 7.2L5.66667 7.2L5.66667 4.1L3.66667 4.1ZM8.77778 -1C5.96199 -1 3.66667 1.27636 3.66667 4.1L5.66667 4.1C5.66667 2.38817 7.05931 1 8.77778 1L8.77778 -1ZM15 -1L8.77778 -1L8.77778 1L15 1L15 -1ZM20.1111 4.1C20.1111 1.27636 17.8158 -1 15 -1L15 1C16.7185 1 18.1111 2.38817 18.1111 4.1L20.1111 4.1ZM20.1111 7.2L20.1111 4.1L18.1111 4.1L18.1111 7.2L20.1111 7.2ZM18.1111 9.2C19.2157 9.2 20.1111 8.30457 20.1111 7.2L18.1111 7.2L18.1111 9.2ZM16.1111 7.2C16.1111 8.30457 17.0065 9.2 18.1111 9.2L18.1111 7.2L16.1111 7.2ZM16.1111 4.1L16.1111 7.2L18.1111 7.2L18.1111 4.1L16.1111 4.1ZM15 3C15.6199 3 16.1111 3.49874 16.1111 4.1L18.1111 4.1C18.1111 2.3884 16.7187 1 15 1L15 3ZM8.77778 3L15 3L15 1L8.77778 1L8.77778 3Z",
                    stroke: "rgba(255,255,255,1)",
                    fillRule: "nonzero",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                  },
                ]}
                position="absolute"
                top="0%"
                bottom="0%"
                left="7.54%"
                right="7.54%"
                {...getOverrideProps(overrides, "Shape32853555")}
              >
                <Icon
                  width="21.77734375px"
                  height="24.7998046875px"
                  viewBox={{
                    minX: 0,
                    minY: 0,
                    width: 21.77734375,
                    height: 24.7998046875,
                  }}
                  paths={[
                    {
                      d: "M22.7778 0C22.7778 -0.552285 22.3301 -1 21.7778 -1C21.2255 -1 20.7778 -0.552285 20.7778 0L22.7778 0ZM1 0C1 -0.552285 0.552285 -1 0 -1C-0.552285 -1 -1 -0.552285 -1 0L1 0ZM20.7778 0L20.7778 21.7L22.7778 21.7L22.7778 0L20.7778 0ZM20.7778 21.7C20.7778 22.8564 19.836 23.8 18.6667 23.8L18.6667 25.8C20.9338 25.8 22.7778 23.9677 22.7778 21.7L20.7778 21.7ZM18.6667 23.8L3.11111 23.8L3.11111 25.8L18.6667 25.8L18.6667 23.8ZM3.11111 23.8C1.9418 23.8 1 22.8564 1 21.7L-1 21.7C-1 23.9677 0.843984 25.8 3.11111 25.8L3.11111 23.8ZM1 21.7L1 0L-1 0L-1 21.7L1 21.7Z",
                      stroke: "rgba(255,255,255,1)",
                      fillRule: "nonzero",
                      strokeLinejoin: "round",
                      strokeWidth: 2,
                    },
                  ]}
                  position="absolute"
                  top="21.82%"
                  bottom="3.03%"
                  left="3.57%"
                  right="18.65%"
                  {...getOverrideProps(overrides, "Path32853556")}
                ></Icon>
                <Icon
                  width="12.4443359375px"
                  height="6.2001953125px"
                  viewBox={{
                    minX: 0,
                    minY: 0,
                    width: 12.4443359375,
                    height: 6.2001953125,
                  }}
                  paths={[
                    {
                      d: "M-1 6.2C-1 6.75228 -0.552285 7.2 0 7.2C0.552285 7.2 1 6.75228 1 6.2L-1 6.2ZM11.4444 6.2C11.4444 6.75228 11.8922 7.2 12.4444 7.2C12.9967 7.2 13.4444 6.75228 13.4444 6.2L11.4444 6.2ZM1 6.2L1 3.1L-1 3.1L-1 6.2L1 6.2ZM1 3.1C1 1.94357 1.9418 1 3.11111 1L3.11111 -1C0.843983 -1 -1 0.832262 -1 3.1L1 3.1ZM3.11111 1L9.33333 1L9.33333 -1L3.11111 -1L3.11111 1ZM9.33333 1C10.5026 1 11.4444 1.94357 11.4444 3.1L13.4444 3.1C13.4444 0.832262 11.6005 -1 9.33333 -1L9.33333 1ZM11.4444 3.1L11.4444 6.2L13.4444 6.2L13.4444 3.1L11.4444 3.1Z",
                      stroke: "rgba(255,255,255,1)",
                      fillRule: "nonzero",
                      strokeLinejoin: "round",
                      strokeWidth: 2,
                    },
                  ]}
                  position="absolute"
                  top="3.03%"
                  bottom="78.18%"
                  left="20.24%"
                  right="35.32%"
                  {...getOverrideProps(overrides, "Path32853557")}
                ></Icon>
              </Icon>
              <Icon
                width="1.5556640625px"
                height="9.2998046875px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 1.5556640625,
                  height: 9.2998046875,
                }}
                paths={[
                  {
                    d: "M1 0C1 -0.552285 0.552285 -1 0 -1C-0.552285 -1 -1 -0.552285 -1 0L1 0ZM-1 9.3C-1 9.85229 -0.552285 10.3 0 10.3C0.552285 10.3 1 9.85229 1 9.3L-1 9.3ZM-1 0L-1 9.3L1 9.3L1 0L-1 0Z",
                    stroke: "rgba(255,255,255,1)",
                    fillRule: "nonzero",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                  },
                ]}
                position="absolute"
                top="45.3%"
                bottom="26.52%"
                left="38.89%"
                right="55.56%"
                {...getOverrideProps(overrides, "Shape32853558")}
              ></Icon>
              <Icon
                width="1.5556640625px"
                height="9.2998046875px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 1.5556640625,
                  height: 9.2998046875,
                }}
                paths={[
                  {
                    d: "M1 0C1 -0.552285 0.552285 -1 0 -1C-0.552285 -1 -1 -0.552285 -1 0L1 0ZM-1 9.3C-1 9.85229 -0.552285 10.3 0 10.3C0.552285 10.3 1 9.85229 1 9.3L-1 9.3ZM-1 0L-1 9.3L1 9.3L1 0L-1 0Z",
                    stroke: "rgba(255,255,255,1)",
                    fillRule: "nonzero",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                  },
                ]}
                position="absolute"
                top="45.3%"
                bottom="26.52%"
                left="61.11%"
                right="33.33%"
                {...getOverrideProps(overrides, "Shape32853559")}
              ></Icon>
            </View>
          </View>
          <View
            padding="0px 0px 0px 0px"
            position="absolute"
            top="33.33%"
            bottom="33.33%"
            left="33.33%"
            right="33.33%"
            {...getOverrideProps(overrides, "\uD83D\uDDBC Icon/XS-placeholder")}
          >
            <Icon
              width="30px"
              height="30px"
              viewBox={{ minX: 0, minY: 0, width: 30, height: 30 }}
              paths={[
                {
                  d: "M0 0L0 30L30 30L30 0L0 0Z",
                  fill: "rgba(80,161,255,0.0001)",
                  fillRule: "evenodd",
                },
              ]}
              position="absolute"
              top="0%"
              bottom="0%"
              left="0%"
              right="0%"
              {...getOverrideProps(overrides, "bounds32853561")}
            ></Icon>
          </View>
        </View>
      </View>
    </View>
  );
}
