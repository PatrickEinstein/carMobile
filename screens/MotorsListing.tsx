import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const MotorsListing = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={[styles.motorsListing, styles.statusBarBg]}>
      <View style={styles.body}>
        <Image
          style={[styles.bodyChild, styles.bodyLayout]}
          contentFit="cover"
          source={require("../assets/line-21.png")}
        />
        <View style={[styles.listing2, styles.listingLayout]}>
          <Text
            style={styles.aventadorS}
          >{`AVENTADOR S | INTERIOR CARBON | TWO TONE INTERIOR `}</Text>
          <View style={[styles.listing2Child, styles.homeIconLayout]} />
          <LinearGradient
            style={[styles.listing2Item, styles.callPosition]}
            locations={[0, 0.25, 0.5, 0.75, 1]}
            colors={["#f06100", "#f04900", "#f03000", "#f00030", "#f0006d"]}
          />
          <Text style={[styles.chat, styles.chatLayout]}>Chat</Text>
          <Text style={[styles.call, styles.callFlexBox]}>Call</Text>
          <Image
            style={[styles.listing2Inner, styles.innerPosition]}
            contentFit="cover"
            source={require("../assets/line-21.png")}
          />
          <Image
            style={[styles.toyotaPicIcon, styles.headerLayout]}
            contentFit="cover"
            source={require("../assets/toyota-pic3.png")}
          />
          <Text style={[styles.aed99000, styles.post1Typo]}>AED 99,000</Text>
          <Text style={[styles.lamborghiniAventador, styles.yearTypo]}>
            Lamborghini Aventador
          </Text>
          <Text style={styles.year2024}>
            <Text style={styles.year2024TxtContainer}>
              <Text style={styles.yearTypo}>Year</Text>
              <Text style={styles.text}>: 2024</Text>
            </Text>
          </Text>
          <Text
            style={[
              styles.locationDeiraDubaiContainer,
              styles.postedContainerLayout,
            ]}
          >
            <Text style={styles.year2024TxtContainer}>
              <Text style={styles.yearTypo}>Location</Text>
              <Text style={styles.text}>
                : Deira, Dubai, United Arab Emirates
              </Text>
            </Text>
          </Text>
          <Text
            style={[
              styles.postedOn14324Container,
              styles.postedContainerLayout,
            ]}
          >
            <Text style={styles.year2024TxtContainer}>
              <Text style={styles.yearTypo}>Posted on</Text>
              <Text style={styles.text}>: 14/3/24</Text>
            </Text>
          </Text>
          <Text
            style={[
              styles.postedByToyotaContainer,
              styles.postedContainerLayout,
            ]}
          >
            <Text style={styles.year2024TxtContainer}>
              <Text style={styles.yearTypo}>Posted By</Text>
              <Text style={styles.text}>: Toyota Motors</Text>
            </Text>
          </Text>
          <Image
            style={[styles.toyotaPicIcon1, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/toyota-pic4.png")}
          />
          <View style={[styles.rectangleView, styles.rectanglePosition]} />
          <Text style={[styles.featured, styles.rectanglePosition]}>
            Featured
          </Text>
          <Image
            style={[styles.heartIcon, styles.heartIconLayout]}
            contentFit="cover"
            source={require("../assets/heart.png")}
          />
          <Image
            style={[styles.share2Icon, styles.iconPosition2]}
            contentFit="cover"
            source={require("../assets/share2.png")}
          />
        </View>
        <Image
          style={[styles.bodyItem, styles.bodyLayout]}
          contentFit="cover"
          source={require("../assets/line-21.png")}
        />
        <View style={[styles.listing3, styles.listingLayout]}>
          <Text
            style={styles.aventadorS}
          >{`AVENTADOR S | INTERIOR CARBON | TWO TONE INTERIOR `}</Text>
          <View style={[styles.listing2Child, styles.homeIconLayout]} />
          <LinearGradient
            style={[styles.listing2Item, styles.callPosition]}
            locations={[0, 0.25, 0.5, 0.75, 1]}
            colors={["#f06100", "#f04900", "#f03000", "#f00030", "#f0006d"]}
          />
          <Text style={[styles.chat, styles.chatLayout]}>Chat</Text>
          <Text style={[styles.call, styles.callFlexBox]}>Call</Text>
          <Image
            style={[styles.listing3Inner, styles.innerPosition]}
            contentFit="cover"
            source={require("../assets/line-21.png")}
          />
          <Image
            style={[styles.toyotaPicIcon, styles.headerLayout]}
            contentFit="cover"
            source={require("../assets/toyota-pic3.png")}
          />
          <Text style={[styles.aed99000, styles.post1Typo]}>AED 99,000</Text>
          <Text style={[styles.lamborghiniAventador, styles.yearTypo]}>
            Lamborghini Aventador
          </Text>
          <Text style={styles.year2024}>
            <Text style={styles.year2024TxtContainer}>
              <Text style={styles.yearTypo}>Year</Text>
              <Text style={styles.text}>: 2024</Text>
            </Text>
          </Text>
          <Text
            style={[
              styles.locationDeiraDubaiContainer,
              styles.postedContainerLayout,
            ]}
          >
            <Text style={styles.year2024TxtContainer}>
              <Text style={styles.yearTypo}>Location</Text>
              <Text style={styles.text}>
                : Deira, Dubai, United Arab Emirates
              </Text>
            </Text>
          </Text>
          <Text
            style={[
              styles.postedOn14324Container,
              styles.postedContainerLayout,
            ]}
          >
            <Text style={styles.year2024TxtContainer}>
              <Text style={styles.yearTypo}>Posted on</Text>
              <Text style={styles.text}>: 14/3/24</Text>
            </Text>
          </Text>
          <Text
            style={[
              styles.postedByToyotaContainer,
              styles.postedContainerLayout,
            ]}
          >
            <Text style={styles.year2024TxtContainer}>
              <Text style={styles.yearTypo}>Posted By</Text>
              <Text style={styles.text}>: Toyota Motors</Text>
            </Text>
          </Text>
          <Image
            style={[styles.toyotaPicIcon1, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/toyota-pic4.png")}
          />
          <Image
            style={[styles.heartIcon, styles.heartIconLayout]}
            contentFit="cover"
            source={require("../assets/heart1.png")}
          />
          <Image
            style={[styles.share2Icon, styles.iconPosition2]}
            contentFit="cover"
            source={require("../assets/share2.png")}
          />
        </View>
        <Image
          style={[styles.bodyInner, styles.bodyLayout]}
          contentFit="cover"
          source={require("../assets/line-20.png")}
        />
        <View style={[styles.listing1, styles.listingLayout]}>
          <Text
            style={styles.aventadorS}
          >{`AVENTADOR S | INTERIOR CARBON | TWO TONE INTERIOR `}</Text>
          <View style={[styles.listing2Child, styles.homeIconLayout]} />
          <LinearGradient
            style={[styles.listing2Item, styles.callPosition]}
            locations={[0, 0.25, 0.5, 0.75, 1]}
            colors={["#f06100", "#f04900", "#f03000", "#f00030", "#f0006d"]}
          />
          <Text style={[styles.chat, styles.chatLayout]}>Chat</Text>
          <Text style={[styles.call, styles.callFlexBox]}>Call</Text>
          <Image
            style={[styles.listing2Inner, styles.innerPosition]}
            contentFit="cover"
            source={require("../assets/line-20.png")}
          />
          <Image
            style={[styles.toyotaPicIcon, styles.headerLayout]}
            contentFit="cover"
            source={require("../assets/toyota-pic3.png")}
          />
          <Text style={[styles.aed99000, styles.post1Typo]}>AED 99,000</Text>
          <Text style={[styles.lamborghiniAventador, styles.yearTypo]}>
            Lamborghini Aventador
          </Text>
          <Text style={styles.year2024}>
            <Text style={styles.year2024TxtContainer}>
              <Text style={styles.yearTypo}>Year</Text>
              <Text style={styles.text}>: 2024</Text>
            </Text>
          </Text>
          <Text
            style={[
              styles.locationDeiraDubaiContainer,
              styles.postedContainerLayout,
            ]}
          >
            <Text style={styles.year2024TxtContainer}>
              <Text style={styles.yearTypo}>Location</Text>
              <Text style={styles.text}>
                : Deira, Dubai, United Arab Emirates
              </Text>
            </Text>
          </Text>
          <Text
            style={[
              styles.postedOn14324Container,
              styles.postedContainerLayout,
            ]}
          >
            <Text style={styles.year2024TxtContainer}>
              <Text style={styles.yearTypo}>Posted on</Text>
              <Text style={styles.text}>: 14/3/24</Text>
            </Text>
          </Text>
          <Text
            style={[
              styles.postedByToyotaContainer,
              styles.postedContainerLayout,
            ]}
          >
            <Text style={styles.year2024TxtContainer}>
              <Text style={styles.yearTypo}>Posted By</Text>
              <Text style={styles.text}>: Toyota Motors</Text>
            </Text>
          </Text>
          <Image
            style={[styles.toyotaPicIcon1, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/toyota-pic4.png")}
          />
          <LinearGradient
            style={[styles.rectangleLineargradient, styles.rectanglePosition]}
            locations={[0, 0.25, 0.5, 0.75, 1]}
            colors={["#f06100", "#f04900", "#f03000", "#f00030", "#f0006d"]}
          />
          <View style={styles.frameView} />
          <Text style={[styles.featured, styles.rectanglePosition]}>
            Premium
          </Text>
          <Image
            style={[styles.heartIcon2, styles.iconPosition2]}
            contentFit="cover"
            source={require("../assets/heart.png")}
          />
          <Image
            style={[styles.share2Icon, styles.iconPosition2]}
            contentFit="cover"
            source={require("../assets/share2.png")}
          />
        </View>
        <Text style={[styles.showing200ResultsContainer, styles.yearTypo]}>
          <Text style={styles.showing}>{`Showing `}</Text>200
          <Text style={styles.showing}> results in Dubai</Text>
        </Text>
      </View>
      <View style={[styles.header, styles.headerLayout]}>
        <Image
          style={[styles.searchDuotoneIcon, styles.iconPosition1]}
          contentFit="cover"
          source={require("../assets/search-duotone1.png")}
        />
        <View style={styles.dubaiParent}>
          <Text style={styles.dubai}>Dubai</Text>
          <Image
            style={styles.arrowDropDownIcon}
            contentFit="cover"
            source={require("../assets/arrow-drop-down.png")}
          />
        </View>
        <Pressable
          style={[styles.filter, styles.iconPosition1]}
          onPress={() => navigation.navigate("Filter")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/filter.png")}
          />
        </Pressable>
        <Image
          style={[styles.headerChild, styles.notchIconLayout]}
          contentFit="cover"
          source={require("../assets/vector-9.png")}
        />
        <Image
          style={[styles.heartIcon3, styles.iconPosition1]}
          contentFit="cover"
          source={require("../assets/heart2.png")}
        />
      </View>
      <View style={[styles.statusBar, styles.statusBarBg]}>
        <Image
          style={[styles.notchIcon, styles.notchIconLayout]}
          contentFit="cover"
          source={require("../assets/notch.png")}
        />
        <View style={styles.leftContainer}>
          <Text style={styles.time}>9:41</Text>
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
      <View style={styles.navbar}>
        <View style={[styles.profile, styles.postBg]}>
          <Text style={[styles.user, styles.userTypo]}>User</Text>
          <Image
            style={[styles.userAltIcon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/user-alt.png")}
          />
        </View>
        <View style={[styles.chats, styles.postBg]}>
          <Text style={[styles.chat3, styles.userTypo]}>Chat</Text>
          <Image
            style={[styles.messageCircleIcon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/messagecircle.png")}
          />
        </View>
        <View style={[styles.post, styles.postBg]}>
          <Text style={[styles.post1, styles.post1Typo]}>Post</Text>
          <Image
            style={[styles.addRingIcon, styles.iconPosition1]}
            contentFit="cover"
            source={require("../assets/add-ring.png")}
          />
        </View>
        <View style={[styles.activity, styles.postBg]}>
          <Text style={[styles.activity1, styles.userTypo]}>Activity</Text>
          <Image
            style={[styles.bellIcon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/bell1.png")}
          />
        </View>
        <View style={[styles.home, styles.postBg]}>
          <Text style={[styles.home1, styles.post1Typo]}>Home</Text>
          <Image
            style={[styles.homeIcon, styles.homeIconLayout]}
            contentFit="cover"
            source={require("../assets/home.png")}
          />
          <LinearGradient
            style={[styles.homeChild, styles.homeChildPosition]}
            locations={[0, 1]}
            colors={["#fd312c", "#fc6242"]}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  statusBarBg: {
    backgroundColor: Color.white,
    overflow: "hidden",
  },
  bodyLayout: {
    height: 2,
    width: 393,
    left: 0,
    position: "absolute",
  },
  listingLayout: {
    height: 432,
    width: 360,
    left: 17,
    position: "absolute",
  },
  homeIconLayout: {
    height: 32,
    position: "absolute",
  },
  callPosition: {
    width: 172,
    left: 188,
    height: 32,
    top: 400,
    position: "absolute",
  },
  chatLayout: {
    height: 24,
    alignItems: "center",
    display: "flex",
  },
  callFlexBox: {
    color: Color.white,
    justifyContent: "center",
    textAlign: "center",
    lineHeight: 38,
    fontSize: FontSize.paragraphMDRegular_size,
    alignItems: "center",
    display: "flex",
  },
  innerPosition: {
    left: -14,
    height: 2,
    width: 393,
    position: "absolute",
  },
  headerLayout: {
    width: 360,
    position: "absolute",
  },
  post1Typo: {
    fontFamily: FontFamily.nunitoBlack,
    fontWeight: "900",
    position: "absolute",
  },
  yearTypo: {
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
  },
  postedContainerLayout: {
    width: 205,
    left: 65,
    fontSize: FontSize.paragraphXSLight_size,
    height: 16,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    color: Color.gray600,
    position: "absolute",
  },
  iconLayout: {
    height: 48,
    width: 48,
  },
  rectanglePosition: {
    height: 23,
    width: 94,
    left: 10,
    top: 9,
    position: "absolute",
  },
  heartIconLayout: {
    width: 24,
    height: 24,
  },
  iconPosition2: {
    top: 16,
    width: 24,
    height: 24,
    position: "absolute",
    overflow: "hidden",
  },
  iconPosition1: {
    top: 5,
    position: "absolute",
  },
  notchIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  batteryIconLayout: {
    height: 13,
    position: "absolute",
  },
  postBg: {
    backgroundColor: Color.colorGray_200,
    position: "absolute",
    overflow: "hidden",
  },
  userTypo: {
    top: 40,
    color: Color.gray900,
    left: "50%",
    textAlign: "center",
    fontFamily: FontFamily.nunitoSemiBold,
    fontWeight: "600",
    fontSize: FontSize.paragraphSMRegular_size,
    position: "absolute",
  },
  iconPosition: {
    top: 15,
    left: "50%",
    width: 24,
    height: 24,
    position: "absolute",
  },
  homeChildPosition: {
    left: 0,
    top: 0,
  },
  bodyChild: {
    top: 974,
  },
  aventadorS: {
    top: 288,
    width: 355,
    height: 16,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontSize: FontSize.paragraphSMRegular_size,
    color: Color.gray600,
    fontFamily: FontFamily.nunitoSemiBold,
    fontWeight: "600",
    left: 5,
    position: "absolute",
  },
  listing2Child: {
    left: -1,
    backgroundColor: Color.statusDanger100,
    borderStyle: "solid",
    borderColor: Color.statusDanger500,
    borderWidth: 0.5,
    width: 173,
    borderRadius: Border.br_5xs,
    top: 400,
    height: 32,
  },
  listing2Item: {
    backgroundColor: Color.zonesso3,
    opacity: 0.9,
    borderRadius: Border.br_5xs,
  },
  chat: {
    top: 404,
    justifyContent: "center",
    height: 24,
    textAlign: "center",
    color: Color.statusDanger500,
    lineHeight: 38,
    fontSize: FontSize.paragraphMDRegular_size,
    width: 172,
    fontFamily: FontFamily.nunitoSemiBold,
    fontWeight: "600",
    left: 0,
    position: "absolute",
  },
  call: {
    fontWeight: "800",
    fontFamily: FontFamily.nunitoExtraBold,
    width: 172,
    left: 188,
    height: 32,
    top: 400,
    position: "absolute",
  },
  listing2Inner: {
    top: 455,
  },
  toyotaPicIcon: {
    height: 223,
    top: 0,
    borderRadius: Border.br_5xs,
    left: 0,
  },
  aed99000: {
    top: 230,
    width: 92,
    fontSize: FontSize.textSmall_size,
    textAlign: "left",
    height: 24,
    alignItems: "center",
    display: "flex",
    left: 5,
  },
  lamborghiniAventador: {
    top: 254,
    color: Color.gray800,
    width: 188,
    fontSize: FontSize.textSmall_size,
    textAlign: "left",
    height: 24,
    alignItems: "center",
    display: "flex",
    left: 5,
    position: "absolute",
  },
  text: {
    fontWeight: "500",
    fontFamily: FontFamily.nunitoMedium,
  },
  year2024TxtContainer: {
    width: "100%",
  },
  year2024: {
    top: 309,
    width: 72,
    fontSize: FontSize.paragraphXSLight_size,
    height: 16,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    color: Color.gray600,
    left: 5,
    position: "absolute",
  },
  locationDeiraDubaiContainer: {
    top: 335,
  },
  postedOn14324Container: {
    top: 351,
  },
  postedByToyotaContainer: {
    top: 367,
  },
  toyotaPicIcon1: {
    borderRadius: Border.br_9xs,
    top: 335,
    left: 5,
    position: "absolute",
  },
  rectangleView: {
    backgroundColor: "#0ba5ec",
    borderRadius: Border.br_9xs,
    opacity: 0.9,
  },
  featured: {
    color: Color.white,
    justifyContent: "center",
    textAlign: "center",
    lineHeight: 38,
    fontSize: FontSize.paragraphMDRegular_size,
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.nunitoSemiBold,
    fontWeight: "600",
    width: 94,
    left: 10,
    top: 9,
  },
  heartIcon: {
    top: 14,
    left: 325,
    position: "absolute",
    overflow: "hidden",
  },
  share2Icon: {
    left: 282,
  },
  listing2: {
    top: 519,
  },
  bodyItem: {
    top: 1454,
  },
  listing3Inner: {
    top: 457,
  },
  listing3: {
    top: 999,
  },
  bodyInner: {
    top: 502,
  },
  rectangleLineargradient: {
    borderRadius: Border.br_9xs,
    backgroundColor: Color.zonesso3,
    opacity: 0.9,
  },
  frameView: {
    top: -43,
    left: 44,
    width: 100,
    height: 100,
    position: "absolute",
    overflow: "hidden",
  },
  heartIcon2: {
    left: 325,
  },
  listing1: {
    top: 47,
  },
  showing: {
    color: Color.gray600,
  },
  showing200ResultsContainer: {
    left: 16,
    width: 361,
    height: 40,
    fontSize: FontSize.textSmall_size,
    textAlign: "left",
    top: 0,
    lineHeight: 38,
    fontWeight: "700",
    position: "absolute",
  },
  body: {
    top: 89,
    height: 655,
    width: 393,
    left: 0,
    position: "absolute",
  },
  searchDuotoneIcon: {
    left: 264,
    width: 24,
    height: 24,
  },
  dubai: {
    lineHeight: 20,
    color: Color.lightText,
    fontSize: FontSize.paragraphMDRegular_size,
    textAlign: "left",
    fontFamily: FontFamily.nunitoSemiBold,
    fontWeight: "600",
  },
  arrowDropDownIcon: {
    width: 16,
    marginLeft: 4,
    height: 16,
  },
  dubaiParent: {
    marginTop: -9.5,
    left: 38,
    flexDirection: "row",
    alignItems: "flex-end",
    top: "50%",
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  filter: {
    left: 300,
    width: 24,
    height: 24,
  },
  headerChild: {
    height: "50%",
    width: "4.17%",
    top: "20.91%",
    right: "93.61%",
    bottom: "29.09%",
    left: "2.22%",
  },
  heartIcon3: {
    left: 336,
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  header: {
    top: 56,
    height: 33,
    left: 17,
    width: 360,
    backgroundColor: Color.white,
  },
  notchIcon: {
    height: "70.21%",
    width: "40%",
    top: "-4.26%",
    right: "30%",
    bottom: "34.04%",
    left: "30%",
    display: "none",
  },
  time: {
    marginLeft: -27,
    fontSize: FontSize.textAutoSuggestion_size,
    letterSpacing: 0,
    lineHeight: 22,
    fontFamily: FontFamily.paragraphMDSemibold,
    color: Color.gray900,
    left: "50%",
    height: 20,
    width: 54,
    top: 0,
    textAlign: "center",
    fontWeight: "600",
    position: "absolute",
  },
  leftContainer: {
    marginTop: -8.5,
    left: 27,
    height: 20,
    width: 54,
    top: "50%",
    position: "absolute",
    overflow: "hidden",
  },
  batteryIcon: {
    marginLeft: 11.3,
    width: 27,
    left: "50%",
    top: 0,
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
  },
  user: {
    marginLeft: -13.5,
  },
  userAltIcon: {
    marginLeft: -12.5,
  },
  profile: {
    right: "-0.31%",
    left: "80.25%",
    borderTopRightRadius: Border.br_9xl,
    borderBottomRightRadius: Border.br_9xl,
    bottom: "0%",
    backgroundColor: Color.colorGray_200,
    top: "0%",
    width: "20.06%",
    height: "100%",
  },
  chat3: {
    marginLeft: -12.9,
  },
  messageCircleIcon: {
    marginLeft: -11.9,
    overflow: "hidden",
  },
  chats: {
    marginTop: -37,
    right: "19.75%",
    left: "60.18%",
    backgroundColor: Color.colorGray_200,
    width: "20.06%",
    height: 74,
    top: "50%",
  },
  post1: {
    marginLeft: -13,
    top: 54,
    left: "50%",
    textAlign: "center",
    color: Color.statusDanger500,
    fontWeight: "900",
    fontSize: FontSize.paragraphSMRegular_size,
  },
  addRingIcon: {
    marginLeft: -24,
    left: "50%",
    height: 48,
    width: 48,
  },
  post: {
    height: "106.22%",
    width: "18.89%",
    right: "40.99%",
    bottom: "-6.22%",
    left: "40.12%",
    top: "0%",
    backgroundColor: Color.colorGray_200,
  },
  activity1: {
    marginLeft: -21.3,
  },
  bellIcon: {
    marginLeft: -12.3,
  },
  activity: {
    right: "59.88%",
    left: "20.06%",
    bottom: "0%",
    backgroundColor: Color.colorGray_200,
    top: "0%",
    width: "20.06%",
    height: "100%",
  },
  home1: {
    marginLeft: -18.3,
    top: 46,
    left: "50%",
    textAlign: "center",
    color: Color.statusDanger500,
    fontWeight: "900",
    fontSize: FontSize.paragraphSMRegular_size,
  },
  homeIcon: {
    marginLeft: -16.3,
    top: 13,
    width: 32,
    left: "50%",
  },
  homeChild: {
    borderBottomRightRadius: Border.br_5xs,
    borderBottomLeftRadius: Border.br_5xs,
    width: 78,
    height: 4,
    top: 0,
    backgroundColor: Color.zonesso3,
    position: "absolute",
  },
  home: {
    right: "79.94%",
    left: "0%",
    borderTopLeftRadius: Border.br_9xl,
    borderBottomLeftRadius: Border.br_9xl,
    bottom: "0%",
    backgroundColor: Color.colorGray_200,
    top: "0%",
    width: "20.06%",
    height: "100%",
  },
  navbar: {
    top: 777,
    borderRadius: Border.br_9xl,
    width: 392,
    height: 74,
    left: 0,
    position: "absolute",
    backgroundColor: Color.white,
  },
  motorsListing: {
    borderRadius: Border.br_13xl,
    flex: 1,
    height: 852,
    overflow: "hidden",
    width: "100%",
  },
});

export default MotorsListing;
