import TabIcon from "@/components/TabIcon";
import { colors } from "@/constants/colors";
import { icons } from "@/constants/icons";
import { useScale } from "@/utils/scaling";
import { Tabs } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function TabsLayout() {
  const { horizontalScale, verticalScale } = useScale();
  const safeArea = useSafeAreaInsets();
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: colors.tabBackground,
          borderRadius: horizontalScale(200),
          height: verticalScale(45),
          bottom: safeArea.bottom + verticalScale(5),
          marginHorizontal: horizontalScale(15),
          position: "absolute",
          overflow: "hidden",
        },
        tabBarItemStyle: {
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          width: "100%",
        },
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: true,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.home} title={"Home"} />
          ),
        }}
      ></Tabs.Screen>
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          headerShown: true,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.search} title={"Search"} />
          ),
        }}
      ></Tabs.Screen>

      <Tabs.Screen
        name="saved"
        options={{
          title: "Saved",
          headerShown: true,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.save} title={"Saved"} />
          ),
        }}
      ></Tabs.Screen>
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: true,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.person} title={"Profile"} />
          ),
        }}
      ></Tabs.Screen>
    </Tabs>
  );
}
