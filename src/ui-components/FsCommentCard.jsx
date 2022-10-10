/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import {
  getOverrideProps,
  useDataStoreDeleteAction,
  useStateMutationAction,
} from "@aws-amplify/ui-react/internal";
import { Worker } from "../models";
import { schema } from "../models/schema";
import MyIcon from "./MyIcon";
import { Flex, Image, Text } from "@aws-amplify/ui-react";
export default function FsCommentCard(props) {
  const { item, overrides, ...rest } = props;
  const [
    fsCommentCardThreeThreeSevenThreeThreeZeroFiveOneBackgroundColor,
    setFsCommentCardThreeThreeSevenThreeThreeZeroFiveOneBackgroundColor,
  ] = useStateMutationAction("rgba(255,255,255,1)");
  const fsCommentCardThreeThreeSevenThreeThreeZeroFiveOneOnMouseEnter = () => {
    setFsCommentCardThreeThreeSevenThreeThreeZeroFiveOneBackgroundColor(
      "#F0F0F0"
    );
  };
  const fsCommentCardThreeThreeSevenThreeThreeZeroFiveOneOnMouseLeave = () => {
    setFsCommentCardThreeThreeSevenThreeThreeZeroFiveOneBackgroundColor(
      "#FCFCFC"
    );
  };
  const frameThreeThreeSevenThreeThreeZeroSixFourOnClick =
    useDataStoreDeleteAction({ id: item?.id, model: Worker, schema: schema });
  return (
    <Flex
      gap="0"
      direction="column"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "FsCommentCard")}
    >
      <Flex
        gap="16px"
        direction="column"
        shrink="0"
        position="relative"
        padding="16px 16px 16px 16px"
        backgroundColor={
          fsCommentCardThreeThreeSevenThreeThreeZeroFiveOneBackgroundColor
        }
        onMouseEnter={() => {
          fsCommentCardThreeThreeSevenThreeThreeZeroFiveOneOnMouseEnter();
        }}
        onMouseLeave={() => {
          fsCommentCardThreeThreeSevenThreeThreeZeroFiveOneOnMouseLeave();
        }}
        {...getOverrideProps(overrides, "FsCommentCard33733051")}
      >
        <Flex
          gap="16px"
          alignItems="flex-start"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Liked")}
        >
          <Flex
            gap="9px"
            width="fit-content"
            alignItems="flex-start"
            shrink="0"
            height="24px"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "User Liked")}
          >
            <MyIcon
              width="24px"
              height="24px"
              shrink="0"
              overflow="hidden"
              position="relative"
              padding="0px 0px 0px 0px"
              type="info"
              {...getOverrideProps(overrides, "MyIcon33733054")}
            ></MyIcon>
            <Text
              fontFamily="Inter"
              fontSize="14px"
              fontWeight="400"
              color="rgba(92,102,112,1)"
              lineHeight="24px"
              textAlign="left"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="残業申請提出済"
              {...getOverrideProps(overrides, "status")}
            ></Text>
          </Flex>
        </Flex>
        <Flex
          // gap="16px"
          gap={{ base: "0px", medium: "16px" }}
          direction={{ base: "column", medium: "row" }}
          alignItems={{ base: "center", medium: "flex-start" }}
          // alignItems="flex-start"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Body")}
        >
          <Image
            width="80px"
            height="80px"
            shrink="0"
            position="relative"
            borderRadius="64px"
            padding="0px 0px 0px 0px"
            src={`${""}${item?.imageUrl}`}
            {...getOverrideProps(overrides, "image")}
          ></Image>
          <Flex
            gap="8px"
            direction="column"
            width="354px"
            grow="1"
            //basis="354px"
            basis={{ base: "80px", medium: "354px" }}
            height="80px"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame33733058")}
          >
            <Flex
              gap="16px"
              alignItems="flex-start"
              shrink="0"
              alignSelf="stretch"
              objectFit="cover"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Frame33733059")}
            >
              <Flex
                gap="16px"
                width="fit-content"
                alignItems="flex-start"
                shrink="0"
                height="24px"
                position="relative"
                padding="0px 0px 0px 0px"
                {...getOverrideProps(overrides, "Frame33733060")}
              >
                <Text
                  fontFamily="Inter"
                  fontSize="16px"
                  fontWeight="400"
                  color="rgba(13,26,38,1)"
                  lineHeight="24px"
                  textAlign="left"
                  display="flex"
                  direction="column"
                  justifyContent="flex-start"
                  letterSpacing="0.01px"
                  shrink="0"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  whiteSpace="pre-wrap"
                  children={item?.name}
                  {...getOverrideProps(overrides, "name")}
                ></Text>
              </Flex>
              <Flex
                gap="0"
                width="209px"
                justifyContent="flex-end"
                alignItems="flex-start"
                grow="1"
                basis={{ base: "0px", medium: "209px" }}
                // basis="209px"
                height="24px"
                position="relative"
                padding="0px 0px 0px 0px"
                onClick={() => {
                  frameThreeThreeSevenThreeThreeZeroSixFourOnClick();
                }}
                {...getOverrideProps(overrides, "Frame33733064")}
              >
                <MyIcon
                  width="24px"
                  height="24px"
                  shrink="0"
                  overflow="hidden"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  type="more_horiz"
                  {...getOverrideProps(overrides, "MyIcon33733065")}
                ></MyIcon>
              </Flex>
            </Flex>
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(13,26,38,1)"
              lineHeight="24px"
              textAlign="left"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              letterSpacing="0.01px"
              shrink="0"
              alignSelf="stretch"
              objectFit="cover"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="--- Phase2 用領域 ---&#xA;--- Phase2 用領域 ---"
              {...getOverrideProps(overrides, "message")}
            ></Text>
          </Flex>
        </Flex>
        <Flex
          // gap="45px"
          gap={{ base: "0px", medium: "45px" }}
          direction={{ base: "column", medium: "row" }}
          alignItems="flex-start"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Share33733067")}
        >
          <Flex
            gap="16px"
            width="fit-content"
            alignItems="flex-start"
            shrink="0"
            height="24px"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Share33733068")}
          >
            <MyIcon
              width="24px"
              height="24px"
              shrink="0"
              overflow="hidden"
              position="relative"
              padding="0px 0px 0px 0px"
              type="apartment"
              {...getOverrideProps(overrides, "MyIcon33733069")}
            ></MyIcon>
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(13,26,38,1)"
              lineHeight="24px"
              textAlign="left"
              display="flex"
              direction="column"
              justifyContent="center"
              letterSpacing="0.01px"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="東京事業所"
              {...getOverrideProps(overrides, "place")}
            ></Text>
          </Flex>
          <Flex
            gap="16px"
            width="fit-content"
            alignItems="flex-start"
            shrink="0"
            height="24px"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Repost")}
          >
            <MyIcon
              width="24px"
              height="24px"
              shrink="0"
              overflow="hidden"
              position="relative"
              padding="0px 0px 0px 0px"
              type="access_time"
              {...getOverrideProps(overrides, "MyIcon33733072")}
            ></MyIcon>
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(13,26,38,1)"
              lineHeight="24px"
              textAlign="left"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              letterSpacing="0.01px"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children={item?.dispTime}
              {...getOverrideProps(overrides, "accessTime")}
            ></Text>
          </Flex>
          <Flex
            gap="16px"
            width="fit-content"
            alignItems="flex-start"
            shrink="0"
            height="24px"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Like")}
          >
            <MyIcon
              width="24px"
              height="24px"
              shrink="0"
              overflow="hidden"
              position="relative"
              padding="0px 0px 0px 0px"
              type="favorite_border"
              {...getOverrideProps(overrides, "MyIcon33733075")}
            ></MyIcon>
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(13,26,38,1)"
              lineHeight="24px"
              textAlign="left"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              letterSpacing="0.01px"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children={item?.similarity}
              {...getOverrideProps(overrides, "similarity")}
            ></Text>
          </Flex>
          <MyIcon
            width="24px"
            height="24px"
            shrink="0"
            overflow="hidden"
            position="relative"
            padding="0px 0px 0px 0px"
            type="share"
            {...getOverrideProps(overrides, "MyIcon33733077")}
          ></MyIcon>
        </Flex>
      </Flex>
    </Flex>
  );
}
