import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ReviewsCard from '../components/specific/reviews/ReviewsCard'

const ReviewsScreen = () => {
  return (
    <View className='flex-1 p-5' style={{ backgroundColor: "white" }}>
      <ReviewsCard avatar="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/4NAwrInfpEhTT3Kti5eMA6/e5e7a301fc824d01dda224830a065135/GettyImages-1341554760.jpg?w=1500&h=680&q=60&fit=fill&f=faces&fm=jpg&fl=progressive&auto=format%2Ccompress&dpr=1&w=1000&h=" name="Maria Ray" rate={5} comment="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry." images={["https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/91c293673ad8b206e7125792c0e422b3-1612436784458/graphic%20design-min.jpg", "https://www.simplilearn.com/ice9/free_resources_article_thumb/Data_Analyst_Job_Description.jpg", "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/gzZpBDV3nX1AWytfLhbgs/d528553697d959544c8ca5b80b6d8beb/web_developer.png?w=1500&h=680&q=60&fit=fill&f=faces&fm=jpg&fl=progressive&auto=format%2Ccompress&dpr=1&w=1000&h="]} />
      <ReviewsCard avatar="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/4NAwrInfpEhTT3Kti5eMA6/e5e7a301fc824d01dda224830a065135/GettyImages-1341554760.jpg?w=1500&h=680&q=60&fit=fill&f=faces&fm=jpg&fl=progressive&auto=format%2Ccompress&dpr=1&w=1000&h=" name="Maria Ray" rate={5} comment="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry." images={["https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/91c293673ad8b206e7125792c0e422b3-1612436784458/graphic%20design-min.jpg", "https://www.simplilearn.com/ice9/free_resources_article_thumb/Data_Analyst_Job_Description.jpg", "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/gzZpBDV3nX1AWytfLhbgs/d528553697d959544c8ca5b80b6d8beb/web_developer.png?w=1500&h=680&q=60&fit=fill&f=faces&fm=jpg&fl=progressive&auto=format%2Ccompress&dpr=1&w=1000&h="]} />
    </View>
  )
}

export default ReviewsScreen

const styles = StyleSheet.create({})