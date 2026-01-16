import { images } from "@/constants/images";
import { useScale } from "@/utils/scaling";
import { Image, ImageBackground, Text, View } from "react-native";

export default function TabIcon({ focused, icon, title }: any) {
  const { verticalScale, horizontalScale, moderateScale } = useScale();

  if (focused) {
    return (
      <ImageBackground
        className="flex h-full flex-1 w-full justify-center items-center overflow-hidden flex-row rounded-full"
        style={{
          minHeight: verticalScale(46),
          minWidth: horizontalScale(100),
          marginTop: "45%",
        }}
        source={images.highlight}
      >
        <Image
          style={{
            height: "40%",
          }}
          source={icon}
          tintColor="#151312"
        />
        <Text
          style={{
            fontSize: moderateScale(13),
          }}
          className="text-secondary font-semibold ml-2"
        >
          {title}
        </Text>
      </ImageBackground>
    );
  }

  return (
    <View className="size-full justify-center items-center">
      <Image
        style={{
          height: "80%",
          marginTop: "45%",
        }}
        source={icon}
        tintColor="#A8B5DB"
      />
    </View>
  );
}
