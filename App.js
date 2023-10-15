import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View, Image, Dimensions } from "react-native";

export default function App() {
  const {width , height}= Dimensions.get("screen")
  console.log(height);
  console.log(width);
  return (
    <View style={styles.container}>
      <Text style={styles.mainHeadingSize}>My Self</Text>
      <Text style={styles.text}>I'm Coder Muhammad Hasan </Text>
      <Text style={styles.text1}>This project create in React Native </Text>
      <TouchableOpacity>
      <Image
        style={styles.imageCenter}
        source={{
          uri:
            "https://scontent.fkhi4-4.fna.fbcdn.net/v/t1.6435-9/167848887_277252557321602_3375824928899029398_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=7a1959&_nc_eui2=AeGLW4XWAjabV5uGZsSN1PoP2pf6zWejU6Tal_rNZ6NTpG8BE6Zp1g-Nm0apTzJMJresTp3wJdcfQGpupO-mjC1d&_nc_ohc=AsSKYNkK3U8AX_QZS3B&_nc_ht=scontent.fkhi4-4.fna&oh=00_AfBbN7jFVZTCTuRymVxVkUrlmYgCPb5tq82cnMUqMOqR9g&oe=65535A3E",
        }}
      />
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.btn}>Read More...</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    fontSize: 15,
    fontStyle: "italic",
    marginTop: 10,
  },
  text1: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    fontSize: 15,
    marginTop: 10,
  },

  mainHeadingSize: {
    color: "white",
    fontSize: 25,
  },

  imageCenter: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 280,
    height: 280,
    borderRadius: 150,
    marginTop: 15,
  },

  btn: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 30,
    paddingVertical: 20,
    border: "white",
    color: "black",
    fontSize: 15,
    fontStyle: "italic",
    marginTop: 25,
    textTransform: "uppercase",
    fontWeight: "bold",
    borderRadius: 10,
    backgroundColor: "white",
  },
});
