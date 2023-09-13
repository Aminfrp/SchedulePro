import { StyleSheet, Text, SafeAreaView, FlatList, View } from 'react-native'
import React from 'react'
import { BusinessItem } from '../components/specific/business/FilteredBusinesses'
import { TouchableOpacity } from 'react-native-gesture-handler';
import routes from '../constants/routes';
import { NavigationProp, ParamListBase } from '@react-navigation/native';

interface IProps {
  navigation: NavigationProp<ParamListBase>;
}

const SavedBusinessScreen = (props: IProps) => {
  const jobs = [
    {
      jobName: "Web Developer",
      description:
        "Responsible for designing and developing web applications using modern technologies.",
      imageUrl:
        "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/gzZpBDV3nX1AWytfLhbgs/d528553697d959544c8ca5b80b6d8beb/web_developer.png?w=1500&h=680&q=60&fit=fill&f=faces&fm=jpg&fl=progressive&auto=format%2Ccompress&dpr=1&w=1000&h=",
    },
    {
      jobName: "Data Analyst",
      description:
        "Analyze large datasets to provide insights and support data-driven decision-making.",
      imageUrl:
        "https://www.simplilearn.com/ice9/free_resources_article_thumb/Data_Analyst_Job_Description.jpg",
    },
    {
      jobName: "Graphic Designer",
      description:
        "Create visually appealing designs for various mediums, including print and digital.",
      imageUrl:
        "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/91c293673ad8b206e7125792c0e422b3-1612436784458/graphic%20design-min.jpg",
    },
    {
      jobName: "Software Engineer",
      description:
        "Design, develop, and maintain software applications to meet specific business requirements.",
      imageUrl:
        "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/4NAwrInfpEhTT3Kti5eMA6/e5e7a301fc824d01dda224830a065135/GettyImages-1341554760.jpg?w=1500&h=680&q=60&fit=fill&f=faces&fm=jpg&fl=progressive&auto=format%2Ccompress&dpr=1&w=1000&h=",
    },
    {
      jobName: "Marketing Manager",
      description:
        "Develop and implement marketing strategies to promote products or services.",
      imageUrl:
        "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/7e5BSigG7s0OI5FnjzNZeu/74ca690e1273d71a118cdc10c2204268/GettyImages-1199434187.jpg?w=1500&h=680&q=60&fit=fill&f=faces&fm=jpg&fl=progressive&auto=format%2Ccompress&dpr=1&w=1000&h=",
    },
  ];

  return (
    <SafeAreaView className="p-5 flex-1" style={{ backgroundColor: "white" }}>
      <FlatList
        data={jobs}
        keyExtractor={(e, i) => "dom" + i.toString()}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => props.navigation.navigate(routes.review)}>
            <Text className='pb-3 font-bold'>Resturants</Text>
            <BusinessItem
              imageUrl={item.imageUrl}
              title={item.jobName}
              location="Italian - American"
              rating={3.0}
            />
          </TouchableOpacity>
        )}
      ></FlatList>
    </SafeAreaView>
  )
}

export default SavedBusinessScreen

const styles = StyleSheet.create({})