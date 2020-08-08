import React from "react";
import { View, Image, Text } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import heartOutlineIcon from "../../assets/images/icons/heart-outline.png";
import unfavoriteIcon from "../../assets/images/icons/unfavorite.png";
import whatsappIcon from "../../assets/images/icons/whatsapp.png";

import styles from "./styles";
import StudyTabs from "../../routes/StudyTabs";

function TeacherItem() {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image
          style={styles.avatar}
          source={{
            uri:
              "https://avatars1.githubusercontent.com/u/53194189?s=460&u=7c16c62ce29cebd1c81e7926f1d37bbac64579c6&v=4",
          }}
        />
        <View style={styles.profileInfo}>
          <Text style={styles.name}>Átila Pinheiro</Text>
          <Text style={styles.subject}>Matemática</Text>
        </View>
      </View>
      <Text style={styles.bio}>
        Traduzido do inglês-Em lingüística, significado é a informação ou
        {"\n"}
        {"\n"}
        Sinônimos de Significado no Dicionário de Sinônimos. Significado é
      </Text>
      <View style={styles.footer}>
        <Text style={styles.price}>
          Preço/Hora {"  "}
          <Text style={styles.priceValue}>R$ 20,00</Text>
        </Text>
        <View style={styles.buttonsCotainer}>
          <RectButton style={[styles.favoriteButton, styles.favorited]}>
            {/* <Image source={heartOutlineIcon} /> */}
            <Image source={unfavoriteIcon} />
          </RectButton>

          <RectButton style={styles.contactButton}>
            <Image source={whatsappIcon} />
            <Text style={styles.contactButtonText}>Entrar em contato</Text>
          </RectButton>
        </View>
      </View>
    </View>
  );
}

export default TeacherItem;
