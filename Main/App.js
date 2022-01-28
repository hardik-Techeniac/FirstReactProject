import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponetsScreen from "./src/screens/ComponentsScreen";
import ListScreen from "./src/screens/ListScreen";
import ImageScreen from "./src/screens/ImageScreen";
import CurrentCounter from "./src/screens/CurrentCounter";
import ColorScreen from "./src/screens/ColorScreen";
import PickColor from "./src/screens/PickColor";
import SqureScreen from "./src/SqureScreen";
import TextScreen from "./src/DemoText";
import BoxDemo from "./src/screens/BoxDemo";
import BoxDemo2 from "./src/screens/BoxDemo2";
import GridView from "./src/screens/GreedView.js";
import ReactDemo from "./src/screens/ReactDemo";
import ActivityIndicatorView from "./src/screens/ReactNativeComponent/ActivityIndicator";
import ButtonView from "./src/screens/ReactNativeComponent/ButtonView";
import FlatListDemo from "./src/screens/ReactNativeComponent/FlatListDemo";
import FlatListSingle from "./src/screens/ReactNativeComponent/FlatListSingle";
import FlatListSelected from "./src/screens/ReactNativeComponent/FlatListSelected";
import ImageView from "./src/screens/ReactNativeComponent/ImageView";
import ImageBackGround from "./src/screens/ReactNativeComponent/ImageBackGround";
import KeyboardAvoidingComponent from "./src/screens/ReactNativeComponent/KeyboardAvoid";
import Model from "./src/screens/Model";
import PressableView from "./src/screens/ReactNativeComponent/PressableView";
import RefreshControlView from "./src/screens/ReactNativeComponent/RefreshControlView";
import ScrollViewView from "./src/screens/ReactNativeComponent/ScrollViewView";
import SectionListView from "./src/screens/ReactNativeComponent/SectionListView";
import StatusBarView from "./src/screens/ReactNativeComponent/StatusBarView";
import SwitchDemo from "./src/screens/ReactNativeComponent/SwitchDemo";
import TextInANest from "./src/screens/ReactNativeComponent/TextDemo";
import UselessTextInput from "./src/screens/ReactNativeComponent/TextInputView";
import TouchableHighlightExample from "./src/screens/ReactNativeComponent/TouchableDemo";
import TochableOpacity from "./src/screens/ReactNativeComponent/TochableOpacity";
import TouchableWithoutFeedbackExample from "./src/screens/ReactNativeComponent/TouchDemo";
import ViewBoxesWithColorAndText from "./src/screens/ReactNativeComponent/View";
import VirtualizedListDemo from "./src/screens/ReactNativeComponent/VirtualizedListDemo";
import InputAccessory from "./src/screens/ReactNativeComponent/InputAccessory";
import SlidreVC from "./src/screens/ThirdPartyDemo/SlidreVC";
import Apicall from "./src/screens/ReactNativeComponent/Apicall";



const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    ComponetVC: ComponetsScreen,
    ListScr: ListScreen,
    ImageScreenVC: ImageScreen,
    CurrentCounterVC: CurrentCounter,
    ColorScreenVC: ColorScreen,
    PickColorVC: PickColor,
    SqureScreenVC: SqureScreen,
    TextScreenVC: TextScreen,
    BoxDemoVC: BoxDemo,
    BoxDemo1VC: BoxDemo2,
    GridViewVC: GridView,
    ReactDemoVC: ReactDemo,
    ActivityIndicatorVC: ActivityIndicatorView,
    ButtonViewVC: ButtonView,
    FlatListDemoVC: FlatListDemo,
    FlatListSingleVC: FlatListSingle,
    FlatListSelectedVC: FlatListSelected,
    ImageViewVC: ImageView,
    ImageBackGroundVC: ImageBackGround,
    KeyboardAvoidingComponentVC: KeyboardAvoidingComponent,
    ModelVC: Model,
    PressableViewVC: PressableView,
    RefreshControlViewVC: RefreshControlView,
    ScrollViewViewVC: ScrollViewView,
    SectionListViewVC: SectionListView,
    StatusBarVC: StatusBarView,
    SwitchDemoVC: SwitchDemo,
    TextInANestVC: TextInANest,
    UselessTextInputVC: UselessTextInput,
    TouchableHighlightExampleVC: TouchableHighlightExample,
    TochableOpacityVC: TochableOpacity,
    TouchableWithoutFeedbackExampleVC: TouchableWithoutFeedbackExample,
    ViewBoxesWithColorAndTextVC: ViewBoxesWithColorAndText,
    VirtualizedListDemoVC: VirtualizedListDemo,
    InputAccessoryVC: InputAccessory,
    SlidreVCC: SlidreVC,
    ApicallVC: Apicall,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
