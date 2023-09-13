import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BaseCollapse from '../components/base/BaseCollapse'
import InvoiceItem from '../components/specific/invoices/InvoiceItem'
import fontSize from '../constants/fontSize'

const InvoicesScreen = () => {
  return (
    <View className='flex-1 p-5' style={{ backgroundColor: "white" }}>
      <Text className='pb-3 font-bold' style={{ ...fontSize.md }}>Invoices in 2023</Text>
      <BaseCollapse title='May 2023'>
        <View className='pt-5'>
          <InvoiceItem date='15/05/2023' title='KJLOL1536' price='150 $' />
          <InvoiceItem date='15/05/2023' title='KJLOL1536' price='150 $' />
          <InvoiceItem date='15/05/2023' title='KJLOL1536' price='150 $' border={false} />
        </View>
      </BaseCollapse>
      <Text className='pb-3 font-bold mt-5' style={{ ...fontSize.md }}>Invoices in 2023</Text>
      <BaseCollapse title='May 2023'>
        <View className='pt-5'>
          <InvoiceItem date='15/05/2023' title='KJLOL1536' price='150 $' />
          <InvoiceItem date='15/05/2023' title='KJLOL1536' price='150 $' />
          <InvoiceItem date='15/05/2023' title='KJLOL1536' price='150 $' border={false} />
        </View>
      </BaseCollapse>
      <Text className='pb-3 font-bold mt-5' style={{ ...fontSize.md }}>Invoices in 2023</Text>
      <BaseCollapse title='May 2023'>
        <View className='pt-5'>
          <InvoiceItem date='15/05/2023' title='KJLOL1536' price='150 $' />
          <InvoiceItem date='15/05/2023' title='KJLOL1536' price='150 $' />
          <InvoiceItem date='15/05/2023' title='KJLOL1536' price='150 $' border={false} />
        </View>
      </BaseCollapse>
    </View>
  )
}

export default InvoicesScreen

const styles = StyleSheet.create({})