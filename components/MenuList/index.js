import React from "react";
import { View, FlatList, Dimensions } from "react-native";
import AppItem from "../AppItem";
import styles from "./styles";
import menus from "./menus"

const MenusList = (props) => {
    return(
        <View style={styles.container}>
            <FlatList 
                data={menus}
                renderItem={({item}) => <AppItem menu={item} />}
                showsVerticalScrollIndicator={false}
                snapToAlignment={"start"}
                decelerationRate={"fast"}
                snapToInterval={Dimensions.get("window").height}
            />
        </View>
    );
};

export default MenusList;