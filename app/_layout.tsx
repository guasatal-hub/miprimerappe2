import { Stack } from "expo-router";

export default function RootLayout() {
  return <Stack 
  screenOptions={{
  /*headerStyle:{
    backgroundColor:'000ff'
  },*/ 
  headerShown:false,
  statusBarAnimation:"slide",
  statusBarStyle:'dark',

  }}

/>;
}