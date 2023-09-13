import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import DownloadIcon from '../../../assets/icons/DownloadIcon'
import fontSize from '../../../constants/fontSize'

interface IProps {
  date: string,
  title: string,
  price: string,
  border?: boolean
}

const InvoiceItem = (props: IProps) => {
  const { date, title, price, border = true } = props;
  return (
    <View className='flex-row justify-between py-2' style={{ borderBottomColor: "#DADADA", borderBottomWidth: border ? 0.5 : 0, borderStyle: "solid" }}>
      <Text style={styles.text}>{date}</Text>
      <Text style={styles.text}>{title}</Text>
      <Text style={styles.text}>{price}</Text>
      <DownloadIcon />
    </View>
  )
}

export default InvoiceItem

const styles = StyleSheet.create({
  text: {
    color: "#625D5D",
    ...fontSize.xs
  }
})