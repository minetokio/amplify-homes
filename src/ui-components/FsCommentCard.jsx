/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import {
  getOverrideProps,
  useStateMutationAction,
} from "@aws-amplify/ui-react/internal";
import MyIcon from "./MyIcon";
import { Flex, Image, Text } from "@aws-amplify/ui-react";
export default function FsCommentCard(props) {
  const {
    item,
    home,
    aaa,
    optionAction,
    linkAction,
    sTime,
    overrides,
    ...rest
  } = props;
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
        width="fit-content"
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
              children={sTime?.overtimeApplyString}
              {...getOverrideProps(overrides, "status")}
            ></Text>
          </Flex>
        </Flex>
        <Flex
          gap="16px"
          alignItems="flex-start"
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
            gap="0"
            direction="column"
            width="100%"
            grow="1"
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
              padding="4px 0px 4px 0px"
              {...getOverrideProps(overrides, "Frame33733059")}
            >
              <Flex
                gap="16px"
                width="100%"
                alignItems="flex-start"
                grow="1"
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
                  {...getOverrideProps(overrides, "name33733061")}
                ></Text>
              </Flex>
              <Flex
                gap="0"
                width="fit-content"
                justifyContent="flex-end"
                alignItems="flex-start"
                shrink="0"
                height="24px"
                position="relative"
                padding="0px 0px 0px 0px"
                onClick={optionAction}
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
            <Flex
              gap="8px"
              alignItems="flex-start"
              shrink="0"
              alignSelf="stretch"
              objectFit="cover"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Frame34503029")}
            >
              <Text
                fontFamily="Inter"
                fontSize="14px"
                fontWeight="400"
                color="rgba(13,26,38,1)"
                lineHeight="24px"
                textAlign="left"
                display="flex"
                direction="column"
                justifyContent="flex-start"
                letterSpacing="0px"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="作業累計:"
                {...getOverrideProps(overrides, "name34503030")}
              ></Text>
              <Text
                fontFamily="Inter"
                fontSize="14px"
                fontWeight="400"
                color="rgba(13,26,38,1)"
                lineHeight="24px"
                textAlign="left"
                display="flex"
                direction="column"
                justifyContent="flex-start"
                letterSpacing="0px"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children={sTime?.totalWorkTime}
                {...getOverrideProps(overrides, "name34513035")}
              ></Text>
            </Flex>
            <Flex
              gap="8px"
              alignItems="flex-start"
              shrink="0"
              alignSelf="stretch"
              objectFit="cover"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Frame34503033")}
            >
              <Text
                fontFamily="Inter"
                fontSize="14px"
                fontWeight="400"
                color="rgba(13,26,38,1)"
                lineHeight="24px"
                textAlign="left"
                display="flex"
                direction="column"
                justifyContent="flex-start"
                letterSpacing="0px"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="時間外累計:"
                {...getOverrideProps(overrides, "name34503034")}
              ></Text>
              <Text
                fontFamily="Inter"
                fontSize="14px"
                fontWeight="400"
                color="rgba(13,26,38,1)"
                lineHeight="24px"
                textAlign="left"
                display="flex"
                direction="column"
                justifyContent="flex-start"
                letterSpacing="0px"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children={sTime?.totalOverTime}
                {...getOverrideProps(overrides, "name34513036")}
              ></Text>
            </Flex>
          </Flex>
        </Flex>
        <Flex
          gap="20px"
          alignItems="flex-start"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Share33733067")}
        >
          <Flex
            gap="8px"
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
            gap="8px"
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
            gap="8px"
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
          <Flex
            gap="8px"
            width="fit-content"
            alignItems="flex-start"
            shrink="0"
            height="24px"
            position="relative"
            padding="0px 0px 0px 0px"
            onClick={linkAction}
            {...getOverrideProps(overrides, "Link")}
          >
            <MyIcon
              width="24px"
              height="24px"
              shrink="0"
              overflow="hidden"
              position="relative"
              padding="0px 0px 0px 0px"
              type="share"
              {...getOverrideProps(overrides, "MyIcon34493027")}
            ></MyIcon>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
