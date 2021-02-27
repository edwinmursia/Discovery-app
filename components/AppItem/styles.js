import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
    appContainer: {
        width: "100%",
        height: Dimensions.get("window").height,
      },
    
      image: {
        width: "100%",
        height: "100%",
        resizeMode: "cover",
        position: "absolute"
      },
    
      titles: {
        marginTop: "20%",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
      },
    
      title: {
        fontFamily: "Verdana",
        fontSize: 22,
        fontWeight: "500",
        textTransform: "uppercase",
        padding: 10,
        color: "red",
        textShadowColor: 'black', 
        textShadowOffset: { width: -1, height: 0 },
        textShadowRadius: 1, 
      },
    
      subtitle: {
        fontFamily: "Verdana",
        fontSize: 14,
        textAlign: "center",
        color: "yellow",
        textShadowColor: 'black', 
        width: "95%",
        textShadowOffset: { width: -1, height: 0 },
        textShadowRadius: 1, 
      },

      buttonsContainer: {
        position: "absolute",
        bottom: 50,
        width: "100%"
      },

      arrow: {
        width: "6%",
        height: "3%",
        position: "absolute",
        top: "94%",
        left: "47%",
        shadowOffset: { width: 1, height: 1 },
        shadowColor: '#000',
        shadowOpacity: 0,
      }
});

export default styles;