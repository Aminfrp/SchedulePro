import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import VisaIcon from '../../../assets/icons/payments/VisaIcon'
import MasterIcon from '../../../assets/icons/payments/MasterIcon'
import AppleIcon from '../../../assets/icons/payments/AppleIcon'
import DealIcon from '../../../assets/icons/payments/DealIcon'
import StripIcon from '../../../assets/icons/payments/StripIcon'

interface IProps {
  type: string;
  cardNumber: string;
  expire: string;
  name: string;
}


const PaymentCard = (props: IProps) => {
  const { type, cardNumber, expire, name } = props;

  const renderCardImage = (type) => {
    switch (type) {
      case 'visa':
        return <VisaIcon />
      case 'master':
        return <MasterIcon />
      case 'apple':
        return <AppleIcon />
      case 'deal':
        return <DealIcon />
      case 'strip':
        return <StripIcon />
      default:
        return <VisaIcon />
    }
  }
  const defineColor = (type) => {
    switch (type) {
      case 'visa':
        return "#8688BC"
      case 'master':
        return "#EB7777"
      case 'apple':
        return "#EB7777"
      case 'deal':
        return "#EB7777"
      case 'strip':
        return "#EB7777"
      default:
        return "#EB7777"
    }
  }

  return (
    <View className='my-3 p-3' style={[{ backgroundColor: defineColor(type) }, styles.container]}>
      <View className='self-end' style={{ width: 50, height: 50 }}>
        {renderCardImage(type)}
      </View>
      <View>
        <Text style={styles.text}>{cardNumber}</Text>
      </View>
      <View className='pt-3 mt-auto flex-row justify-between'>
        <Text style={styles.info}>Card Holder</Text>
        <Text style={styles.info}>Expires</Text>
      </View>
      <View className='flex-row justify-between'>
        <Text style={styles.text}>{name}</Text>
        <Text style={styles.text}>{expire}</Text>
      </View>
    </View>
  )
}

export default React.memo(PaymentCard)

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    height: 150
  },
  text: {
    color: 'white',
  },
  info: {
    color: "#FFFFFF",
    fontSize: 10
  }
})