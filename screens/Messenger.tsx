import * as React from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  Pressable,
  View,
  Text,
  ImageBackground,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import Row from "../components/Row";
import ControlStrip from "../components/ControlStrip";
import { FontFamily, Color, FontSize, Border, Padding } from "../GlobalStyles";

const Messenger = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.messenger}>
      <Pressable
        style={[styles.arrowLeft, styles.arrowLeftLayout]}
        onPress={() => navigation.navigate("Chats")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/arrow-left.png")}
        />
      </Pressable>
      <View style={[styles.messengerChild, styles.messengerChildShadowBox]} />
      <Image
        style={[styles.avatarIcon, styles.iconPosition2]}
        contentFit="cover"
        source={require("../assets/avatar1.png")}
      />
      <Text style={styles.arthurLayout}>
        <Text style={styles.arthurTypo}>{`Arthur Pascua
`}</Text>
        <Text style={[styles.online, styles.onlineTypo]}>Online</Text>
      </Text>
      <Text style={[styles.arthurPascua1, styles.arthurTypo]}>
        Arthur Pascua
      </Text>
      <Image
        style={[styles.toyotaPicIcon, styles.toyotaPicIconPosition]}
        contentFit="cover"
        source={require("../assets/toyota-pic8.png")}
      />
      <Text
        style={[
          styles.lamborghiniAventadorAedContainer,
          styles.toyotaPicIconPosition,
        ]}
      >
        <Text style={styles.lamborghiniAventador}>{`Lamborghini Aventador
`}</Text>
        <Text style={styles.aed90000}>{`AED 90,000 `}</Text>
      </Text>
      <View style={[styles.messengerItem, styles.messengerLayout]} />
      <LinearGradient
        style={[styles.messengerInner, styles.messengerLayout]}
        locations={[0, 0.25, 0.5, 0.75, 1]}
        colors={["#f06100", "#f04900", "#f03000", "#f00030", "#f0006d"]}
      />
      <Image
        style={[styles.groupIcon, styles.iconPosition2]}
        contentFit="cover"
        source={require("../assets/group-2.png")}
      />
      <Text style={[styles.makeOffer, styles.smscallLayout]}>Make Offer</Text>
      <Text style={[styles.smscall, styles.smscallLayout]}>SMS/Call</Text>
      <View style={styles.inputSearch}>
        <View style={styles.label}>
          <View style={styles.textContainer}>
            <View style={[styles.iconSolid, styles.iconLayout]}>
              <Text style={[styles.icon1, styles.iconPosition1]}>grin</Text>
            </View>
            <Text style={styles.label1}>Label</Text>
            <Text style={[styles.hint, styles.hintTypo]}>Hint</Text>
          </View>
          <Text style={[styles.subtitle, styles.hintTypo]}>Subtitle</Text>
        </View>
        <View style={[styles.input, styles.inputBorder]}>
          <View style={styles.contentContainer}>
            <View style={[styles.iconSolid1, styles.iconLayout]}>
              <Text style={[styles.icon2, styles.iconPosition1]}>serch</Text>
            </View>
            <View style={styles.placeholderContainer}>
              <Text style={[styles.typeYourMessage, styles.hintLayout]}>
                Type your message here
              </Text>
            </View>
            <View style={styles.valueContainer}>
              <Text style={[styles.value, styles.hintTypo]}>Value</Text>
            </View>
            <View style={[styles.iconSolid2, styles.iconLayout]}>
              <Text style={[styles.icon1, styles.iconPosition1]}>
                info-circle
              </Text>
            </View>
          </View>
        </View>
        <Text style={[styles.status, styles.hintTypo]}>Status</Text>
      </View>
      <Image
        style={[styles.imageIcon, styles.arrowLeftLayout]}
        contentFit="cover"
        source={require("../assets/image1.png")}
      />
      <Image
        style={styles.sendIcon}
        contentFit="cover"
        source={require("../assets/send.png")}
      />
      <ImageBackground
        style={[styles.avatarIcon1, styles.avatarIcon1Layout]}
        resizeMode="cover"
        source={require("../assets/10avatar.png")}
      >
        <View style={[styles.ghostOnlineIndicator, styles.avatarIcon1Layout]} />
      </ImageBackground>
      <Text style={[styles.sent5mAgo, styles.sent5mAgoTypo]}>Sent 5m ago</Text>
      <View style={[styles.rectangleView, styles.rectangleViewBg]} />
      <Text style={[styles.hiImInterested, styles.sent5mAgoTypo]}>
        Hi I’m interested, is this still available? Thanks
      </Text>
      <View style={[styles.messengerChild1, styles.rectangleViewBg]} />
      <Text style={[styles.howMuch, styles.howMuchTypo]}>How much?</Text>
      <View style={styles.messengerChild2} />
      <Text style={[styles.pm, styles.pmTypo]}>{`1:37 PM `}</Text>
      <Text style={[styles.yesStillAvailable, styles.howMuchTypo]}>
        Yes, still available!
      </Text>
      <Text style={[styles.pm1, styles.pmTypo]}>{`1:35 PM `}</Text>
      <View style={[styles.keyboard, styles.keyboardPosition]}>
        <View style={styles.autoSuggestion}>
          <Text style={styles.suggestion}>{`"Design" `}</Text>
          <View style={styles.divider} />
          <Text style={styles.suggestion}>Designed</Text>
          <View style={styles.divider} />
          <Text style={styles.suggestion}>Designer</Text>
        </View>
        <View style={styles.keys}>
          <View style={styles.qwertyPortraitLayout}>
            <Row
              letter="q"
              icon={require("../assets/icon.png")}
              letter1="w"
              icon1={require("../assets/icon1.png")}
              letter2="e"
              icon2={require("../assets/icon.png")}
              letter3="r"
              icon3={require("../assets/icon1.png")}
              letter4="t"
              icon4={require("../assets/icon.png")}
              letter5="y"
              icon5={require("../assets/icon1.png")}
              letter6="u"
              icon6={require("../assets/icon.png")}
              letter7="i"
              icon7={require("../assets/icon1.png")}
              letter8="o"
              icon8={require("../assets/icon.png")}
              letter9="p"
              showKey
              showLetter
              icon11={false}
            />
            <Row
              letter="a"
              icon={require("../assets/icon2.png")}
              letter1="s"
              icon1={require("../assets/icon3.png")}
              letter2="d"
              icon2={require("../assets/icon2.png")}
              letter3="f"
              icon3={require("../assets/icon3.png")}
              letter4="g"
              icon4={require("../assets/icon2.png")}
              letter5="h"
              icon5={require("../assets/icon3.png")}
              letter6="j"
              icon6={require("../assets/icon2.png")}
              letter7="k"
              icon7={require("../assets/icon3.png")}
              letter8="l"
              icon8={require("../assets/icon2.png")}
              showKey={false}
              propMarginTop={12}
              propTextTransform="unset"
              propTextTransform1="unset"
              propTextTransform2="unset"
              propTextTransform3="unset"
              propTextTransform4="unset"
              propTextTransform5="unset"
              propTextTransform6="unset"
              propTextTransform7="unset"
              propTextTransform8="unset"
              propTextTransform9="lowercase"
              showLetter
              icon11={false}
            />
            <View style={styles.row3}>
              <View style={[styles.key, styles.keyShadowBox1]}>
                <Text style={[styles.letter, styles.letterPosition]}>m</Text>
                <Image
                  style={[styles.icon4, styles.iconPosition]}
                  contentFit="cover"
                  source={require("../assets/icon4.png")}
                />
              </View>
              <View style={styles.letters}>
                <View style={[styles.key1, styles.keyShadowBox1]}>
                  <Text style={[styles.letter1, styles.letterPosition]}>z</Text>
                  <Image
                    style={[styles.icon5, styles.iconPosition]}
                    contentFit="cover"
                    source={require("../assets/icon3.png")}
                  />
                </View>
                <View style={styles.keyShadowBox}>
                  <Text style={[styles.letter1, styles.letterPosition]}>x</Text>
                  <Image
                    style={[styles.icon5, styles.iconPosition]}
                    contentFit="cover"
                    source={require("../assets/icon2.png")}
                  />
                </View>
                <View style={styles.keyShadowBox}>
                  <Text style={[styles.letter1, styles.letterPosition]}>c</Text>
                  <Image
                    style={[styles.icon5, styles.iconPosition]}
                    contentFit="cover"
                    source={require("../assets/icon3.png")}
                  />
                </View>
                <View style={styles.keyShadowBox}>
                  <Text style={[styles.letter1, styles.letterPosition]}>v</Text>
                  <Image
                    style={[styles.icon5, styles.iconPosition]}
                    contentFit="cover"
                    source={require("../assets/icon2.png")}
                  />
                </View>
                <View style={styles.keyShadowBox}>
                  <Text style={[styles.letter1, styles.letterPosition]}>b</Text>
                  <Image
                    style={[styles.icon5, styles.iconPosition]}
                    contentFit="cover"
                    source={require("../assets/icon3.png")}
                  />
                </View>
                <View style={styles.keyShadowBox}>
                  <Text style={[styles.letter1, styles.letterPosition]}>n</Text>
                  <Image
                    style={[styles.icon5, styles.iconPosition]}
                    contentFit="cover"
                    source={require("../assets/icon2.png")}
                  />
                </View>
                <View style={styles.keyShadowBox}>
                  <Text style={[styles.letter1, styles.letterPosition]}>m</Text>
                  <Image
                    style={[styles.icon5, styles.iconPosition]}
                    contentFit="cover"
                    source={require("../assets/icon3.png")}
                  />
                </View>
              </View>
              <View style={[styles.key8, styles.keyShadowBox1]}>
                <Text style={[styles.letter, styles.letterPosition]}>m</Text>
                <Image
                  style={[styles.icon4, styles.iconPosition]}
                  contentFit="cover"
                  source={require("../assets/icon5.png")}
                />
              </View>
            </View>
          </View>
        </View>
        <ControlStrip />
      </View>
      <View style={styles.statusBar}>
        <Image
          style={styles.notchIcon}
          contentFit="cover"
          source={require("../assets/notch.png")}
        />
        <View style={[styles.leftContainer, styles.timeLayout]}>
          <Text style={[styles.time, styles.timeLayout]}>9:41</Text>
        </View>
        <View style={[styles.rightContainer, styles.batteryIconLayout]}>
          <Image
            style={[styles.batteryIcon, styles.batteryIconLayout]}
            contentFit="cover"
            source={require("../assets/battery.png")}
          />
          <Image
            style={styles.wifiIcon}
            contentFit="cover"
            source={require("../assets/wifi.png")}
          />
          <Image
            style={styles.mobileSignalIcon}
            contentFit="cover"
            source={require("../assets/mobilesignal.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  arrowLeftLayout: {
    height: 24,
    width: 24,
    position: "absolute",
  },
  messengerChildShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  iconPosition2: {
    top: 56,
    position: "absolute",
  },
  onlineTypo: {
    fontFamily: FontFamily.nunitoRegular,
    color: Color.gray400,
  },
  arthurTypo: {
    color: Color.colorDarkslategray_200,
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
    fontSize: FontSize.paragraphMDRegular_size,
  },
  toyotaPicIconPosition: {
    top: 128,
    position: "absolute",
  },
  messengerLayout: {
    width: 109,
    top: 184,
    borderRadius: Border.br_9xs,
    height: 24,
    position: "absolute",
  },
  smscallLayout: {
    width: 71,
    lineHeight: 38,
    alignItems: "center",
    display: "flex",
    top: 184,
    fontSize: FontSize.paragraphMDRegular_size,
    textAlign: "left",
    height: 24,
    position: "absolute",
  },
  iconLayout: {
    width: 12,
    height: 12,
  },
  iconPosition1: {
    textAlign: "center",
    fontFamily: FontFamily.textSmall,
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  hintTypo: {
    fontFamily: FontFamily.paragraphXSRegular,
    textAlign: "left",
  },
  inputBorder: {
    borderWidth: 1,
    borderColor: Color.white,
    borderStyle: "solid",
    overflow: "hidden",
  },
  hintLayout: {
    lineHeight: 19,
    fontSize: FontSize.paragraphSMRegular_size,
  },
  avatarIcon1Layout: {
    borderRadius: Border.br_980xl,
    position: "absolute",
  },
  sent5mAgoTypo: {
    fontFamily: FontFamily.nunitoMedium,
    fontWeight: "500",
    left: "50%",
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    position: "absolute",
  },
  rectangleViewBg: {
    backgroundColor: Color.statusDanger200,
    borderRadius: Border.br_5xs,
    position: "absolute",
  },
  howMuchTypo: {
    width: 119,
    fontFamily: FontFamily.nunitoMedium,
    fontWeight: "500",
    left: "50%",
    alignItems: "center",
    display: "flex",
    fontSize: FontSize.paragraphMDRegular_size,
    position: "absolute",
  },
  pmTypo: {
    width: 52,
    fontFamily: FontFamily.nunitoMedium,
    fontWeight: "500",
    color: Color.gray900,
    left: "50%",
    alignItems: "center",
    display: "flex",
    fontSize: FontSize.paragraphSMRegular_size,
    textAlign: "left",
    position: "absolute",
  },
  keyboardPosition: {
    left: 0,
    position: "absolute",
  },
  keyShadowBox1: {
    height: 42,
    elevation: 0,
    shadowRadius: 0,
    shadowColor: "rgba(0, 0, 0, 0.3)",
    borderRadius: Border.br_8xs,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  letterPosition: {
    height: 41,
    fontSize: FontSize.textRegularLowercase_size,
    marginTop: -22,
    color: Color.lightText,
    textAlign: "center",
    fontFamily: FontFamily.textSmall,
    top: "50%",
    justifyContent: "center",
    alignItems: "center",
    left: 0,
    position: "absolute",
  },
  iconPosition: {
    marginTop: -16,
    height: 32,
    width: 32,
    top: "50%",
    left: "50%",
    position: "absolute",
    overflow: "hidden",
  },
  timeLayout: {
    height: 20,
    width: 54,
    position: "absolute",
  },
  batteryIconLayout: {
    height: 13,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  arrowLeft: {
    left: 44,
    top: 64,
  },
  messengerChild: {
    top: 120,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowRadius: 4,
    elevation: 4,
    width: 392,
    height: 104,
    borderRadius: Border.br_5xs,
    left: 0,
    position: "absolute",
    backgroundColor: Color.white,
  },
  avatarIcon: {
    left: 110,
    borderRadius: Border.br_181xl,
    width: 48,
    height: 48,
    overflow: "hidden",
  },
  online: {
    color: Color.gray400,
    fontSize: FontSize.paragraphSMRegular_size,
  },
  arthurLayout: {
    height: 29,
    width: 97,
    lineHeight: 16,
    left: 170,
    top: 67,
    textAlign: "left",
    position: "absolute",
  },
  arthurPascua1: {
    height: 29,
    width: 97,
    lineHeight: 16,
    left: 170,
    top: 67,
    textAlign: "left",
    position: "absolute",
  },
  toyotaPicIcon: {
    left: 16,
    width: 111,
    height: 80,
    borderRadius: Border.br_5xs,
  },
  lamborghiniAventador: {
    color: Color.gray800,
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
    fontSize: FontSize.paragraphMDRegular_size,
  },
  aed90000: {
    fontFamily: FontFamily.nunitoExtraBold,
    fontWeight: "800",
    fontSize: FontSize.textSmall_size,
  },
  lamborghiniAventadorAedContainer: {
    lineHeight: 24,
    width: 160,
    left: 143,
    textAlign: "left",
    height: 48,
  },
  messengerItem: {
    backgroundColor: Color.statusDanger100,
    borderColor: Color.statusDanger500,
    borderWidth: 0.5,
    borderStyle: "solid",
    left: 143,
  },
  messengerInner: {
    left: 268,
    opacity: 0.9,
    backgroundColor: Color.zonesso3,
  },
  groupIcon: {
    left: 327,
    width: 40,
    height: 40,
  },
  makeOffer: {
    left: 162,
    fontFamily: FontFamily.nunitoSemiBold,
    color: Color.statusDanger500,
    fontWeight: "600",
    width: 71,
    lineHeight: 38,
  },
  smscall: {
    left: 291,
    color: Color.white,
    width: 71,
    lineHeight: 38,
    fontFamily: FontFamily.nunitoExtraBold,
    fontWeight: "800",
  },
  icon1: {
    marginTop: -7,
    marginLeft: -6,
    color: Color.gray500,
    fontSize: FontSize.paragraphSMRegular_size,
  },
  iconSolid: {
    height: 12,
    display: "none",
  },
  label1: {
    marginLeft: 8,
    color: Color.gray900,
    fontFamily: FontFamily.paragraphMDSemibold,
    lineHeight: 22,
    fontWeight: "600",
    fontSize: FontSize.paragraphMDRegular_size,
    textAlign: "left",
    flex: 1,
  },
  hint: {
    lineHeight: 19,
    fontSize: FontSize.paragraphSMRegular_size,
    marginLeft: 8,
    color: Color.gray500,
    display: "none",
  },
  textContainer: {
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
  },
  subtitle: {
    marginTop: 2,
    lineHeight: 19,
    fontSize: FontSize.paragraphSMRegular_size,
    color: Color.gray500,
    display: "none",
    alignSelf: "stretch",
  },
  label: {
    display: "none",
    justifyContent: "center",
    alignSelf: "stretch",
  },
  icon2: {
    marginTop: -9,
    marginLeft: -21,
    display: "none",
    fontSize: FontSize.textSmall_size,
    textAlign: "center",
    fontFamily: FontFamily.textSmall,
    color: Color.gray400,
  },
  iconSolid1: {
    height: 12,
  },
  typeYourMessage: {
    color: Color.gray400,
    fontFamily: FontFamily.nunitoRegular,
    textAlign: "left",
    flex: 1,
  },
  placeholderContainer: {
    marginLeft: 12,
    width: 139,
    flexDirection: "row",
    alignItems: "center",
  },
  value: {
    color: Color.gray900,
    lineHeight: 22,
    fontFamily: FontFamily.paragraphXSRegular,
    fontSize: FontSize.paragraphMDRegular_size,
    flex: 1,
  },
  valueContainer: {
    marginLeft: 12,
    flexDirection: "row",
    display: "none",
    alignItems: "center",
  },
  iconSolid2: {
    marginLeft: 12,
    height: 12,
    display: "none",
  },
  contentContainer: {
    width: 328,
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_5xs,
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
  },
  input: {
    backgroundColor: Color.gray200,
    marginTop: 8,
    flexDirection: "row",
    width: 232,
    alignItems: "center",
    height: 40,
    borderRadius: Border.br_9xs,
    borderWidth: 1,
    borderColor: Color.white,
  },
  status: {
    fontSize: FontSize.paragraphXSLight_size,
    lineHeight: 16,
    marginTop: 8,
    color: Color.gray500,
    display: "none",
    alignSelf: "stretch",
  },
  inputSearch: {
    marginLeft: -114.5,
    top: 464,
    width: 232,
    left: "50%",
    position: "absolute",
  },
  imageIcon: {
    top: 472,
    left: 37,
    overflow: "hidden",
  },
  sendIcon: {
    top: 468,
    left: 326,
    height: 32,
    width: 32,
    position: "absolute",
  },
  ghostOnlineIndicator: {
    right: 1,
    bottom: 1,
    backgroundColor: Color.statusSuccess500,
    shadowColor: "rgba(0, 0, 0, 0.04)",
    shadowRadius: 2,
    elevation: 2,
    width: 8,
    height: 8,
    borderWidth: 1,
    borderColor: Color.white,
    borderStyle: "solid",
    overflow: "hidden",
    display: "none",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  avatarIcon1: {
    height: "3.29%",
    width: "7.12%",
    top: "39.55%",
    right: "86.01%",
    bottom: "57.16%",
    left: "6.87%",
  },
  sent5mAgo: {
    marginLeft: 92.5,
    top: 434,
    width: 70,
    color: Color.gray400,
    fontSize: FontSize.paragraphSMRegular_size,
  },
  rectangleView: {
    top: 251,
    left: 89,
    width: 271,
    height: 49,
  },
  hiImInterested: {
    marginLeft: -89.5,
    top: 257,
    width: 275,
    color: Color.gray800,
    fontSize: FontSize.paragraphMDRegular_size,
    fontFamily: FontFamily.nunitoMedium,
    fontWeight: "500",
  },
  messengerChild1: {
    top: 402,
    left: 252,
    width: 107,
    height: 32,
  },
  howMuch: {
    marginLeft: 29.5,
    top: 408,
    textAlign: "right",
    color: Color.gray800,
  },
  messengerChild2: {
    top: 335,
    left: 65,
    backgroundColor: "#e1e1e1",
    height: 32,
    width: 139,
    borderRadius: Border.br_5xs,
    position: "absolute",
  },
  pm: {
    marginLeft: -30.5,
    top: 379,
  },
  yesStillAvailable: {
    marginLeft: -120.5,
    top: 342,
    color: Color.gray900,
    textAlign: "left",
  },
  pm1: {
    marginLeft: -29.5,
    top: 311,
  },
  suggestion: {
    color: Color.lightText,
    lineHeight: 22,
    fontSize: FontSize.textAutoSuggestion_size,
    textAlign: "center",
    fontFamily: FontFamily.textSmall,
    flex: 1,
  },
  divider: {
    borderColor: Color.lightText,
    borderRightWidth: 1,
    width: 1,
    height: 26,
    opacity: 0.1,
    borderStyle: "solid",
  },
  autoSuggestion: {
    width: 375,
    paddingTop: Padding.p_5xs,
    paddingBottom: Padding.p_7xs,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  letter: {
    textTransform: "lowercase",
    width: 42,
    display: "none",
  },
  icon4: {
    marginLeft: -16,
  },
  key: {
    width: 42,
    backgroundColor: Color.lightSecondaryKeyBackground,
    height: 42,
    elevation: 0,
    shadowRadius: 0,
    shadowColor: "rgba(0, 0, 0, 0.3)",
    borderRadius: Border.br_8xs,
  },
  letter1: {
    width: 32,
    display: "flex",
    height: 41,
    fontSize: FontSize.textRegularLowercase_size,
    marginTop: -22,
  },
  icon5: {
    marginLeft: -15.75,
    display: "none",
  },
  key1: {
    height: 42,
    elevation: 0,
    shadowRadius: 0,
    shadowColor: "rgba(0, 0, 0, 0.3)",
    borderRadius: Border.br_8xs,
    flex: 1,
    backgroundColor: Color.white,
  },
  keyShadowBox: {
    marginLeft: 6,
    height: 42,
    elevation: 0,
    shadowRadius: 0,
    shadowColor: "rgba(0, 0, 0, 0.3)",
    borderRadius: Border.br_8xs,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    flex: 1,
    backgroundColor: Color.white,
  },
  letters: {
    marginLeft: 14.3,
    flexDirection: "row",
    flex: 1,
  },
  key8: {
    marginLeft: 14.3,
    width: 42,
    backgroundColor: Color.lightSecondaryKeyBackground,
    height: 42,
    elevation: 0,
    shadowRadius: 0,
    shadowColor: "rgba(0, 0, 0, 0.3)",
    borderRadius: Border.br_8xs,
  },
  row3: {
    width: 369,
    marginTop: 12,
    flexDirection: "row",
  },
  qwertyPortraitLayout: {
    padding: Padding.p_10xs,
    justifyContent: "center",
    alignItems: "center",
  },
  keys: {
    marginTop: 6,
  },
  keyboard: {
    top: 516,
    borderBottomRightRadius: Border.br_5xl,
    borderBottomLeftRadius: Border.br_5xl,
    backgroundColor: Color.colorLightgray_200,
    width: 393,
    justifyContent: "flex-end",
    paddingTop: Padding.p_8xs,
    alignItems: "center",
  },
  notchIcon: {
    height: "70.21%",
    width: "40%",
    top: "-4.26%",
    right: "30%",
    bottom: "34.04%",
    left: "30%",
    maxWidth: "100%",
    maxHeight: "100%",
    display: "none",
    position: "absolute",
    overflow: "hidden",
  },
  time: {
    marginLeft: -27,
    letterSpacing: 0,
    top: 0,
    lineHeight: 22,
    fontSize: FontSize.textAutoSuggestion_size,
    width: 54,
    color: Color.gray900,
    fontFamily: FontFamily.paragraphMDSemibold,
    textAlign: "center",
    left: "50%",
    fontWeight: "600",
  },
  leftContainer: {
    marginTop: -8.5,
    left: 27,
    top: "50%",
    overflow: "hidden",
  },
  batteryIcon: {
    marginLeft: 11.3,
    width: 27,
    top: 0,
    left: "50%",
  },
  wifiIcon: {
    width: 17,
    height: 12,
  },
  mobileSignalIcon: {
    marginLeft: -38.7,
    top: 1,
    width: 18,
    height: 12,
    left: "50%",
    position: "absolute",
  },
  rightContainer: {
    marginTop: -4.5,
    right: 27,
    width: 77,
    top: "50%",
    overflow: "hidden",
  },
  statusBar: {
    left: 2,
    width: 390,
    height: 47,
    top: 0,
    position: "absolute",
    overflow: "hidden",
    backgroundColor: Color.white,
  },
  messenger: {
    borderRadius: Border.br_13xl,
    height: 852,
    overflow: "hidden",
    width: "100%",
    flex: 1,
    backgroundColor: Color.white,
  },
});

export default Messenger;
