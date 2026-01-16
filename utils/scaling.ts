import { useWindowDimensions } from "react-native";

const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

export function useScale() {
  const { width, height } = useWindowDimensions();

  const horizontalScale = (size: number) => (width / guidelineBaseWidth) * size;

  const verticalScale = (size: number) => (height / guidelineBaseHeight) * size;

  const moderateScale = (size: number, factor = 0.5) =>
    size + (horizontalScale(size) - size) * factor;

  return {
    horizontalScale,
    verticalScale,
    moderateScale,
  };
}
