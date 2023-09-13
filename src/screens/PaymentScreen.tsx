import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import EditIcon from '../assets/icons/EditIcon'
import PlusIcon from '../assets/icons/PlusIcon'
import colors from '../constants/colors'
import PaymentCard from '../components/specific/payment/PaymentCard'
import routes from '../constants/routes'
import { NavigationProp, ParamListBase } from "@react-navigation/native";

interface IProps {
  navigation: NavigationProp<ParamListBase>
}
const PaymentScreen = (props: IProps) => {
  return (
    <View className='flex-1 p-5' style={{ backgroundColor: "white" }}>
      <View className='flex-row justify-between'>
        <TouchableOpacity className='flex-row justify-between items-center gap-2'>
          <EditIcon />
          <Text style={styles.actions} > Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity className='flex-row justify-between items-center gap-2' onPress={() => props.navigation.navigate(routes.addCard)}>
          <PlusIcon />
          <Text style={styles.actions}>Add New Card</Text>
        </TouchableOpacity>
      </View>
      <View className='p-5'>
        <PaymentCard name='Samira Abasi' expire='12/23' type='visa' cardNumber="• • • •        • • • •        • • • •        3282" />
        <PaymentCard name='Samira Abasi' expire='12/23' type='master' cardNumber="• • • •        • • • •        • • • •        3282" />
      </View>
    </View >
  )
}

export default PaymentScreen

const styles = StyleSheet.create({
  actions: {
    ...colors.text.primary
  }
})