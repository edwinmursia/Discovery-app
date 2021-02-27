import 'react-native-gesture-handler';
import React from 'react';
import {View, Text, ImageBackground, Linking, Image} from 'react-native';
import StyledButton from "../StyledButton";
import styles from "./styles";

const AppItem = (props) => {

  const { name, descriptionScreen, image, button, content, url, imageLogo, arrow } = props.menu;

  return (
    <View style={styles.appContainer}>

        <ImageBackground style={styles.image} source={image}/>

        <View style={styles.titles}>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.subtitle}>{descriptionScreen}</Text>
        </View>

        <View style={styles.buttonsContainer}>

          <StyledButton 
            style={styles.buttonsContainer}
            type="primary" 
            content={content}
            onPress={() => Linking.openURL(url)}
          >{button}</StyledButton>

          </View>

          <Image style={styles.arrow} source={arrow}/>

      </View>
  );
};

export default AppItem;