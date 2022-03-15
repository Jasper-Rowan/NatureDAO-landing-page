// import Carousel from 'react-native-snap-carousel';

// const HomeSection4 = () => {
//     this.state = {
//         activeIndex:0,
//         carouselItems: [
//         {
//             title:"Item 1",
//             text: "Text 1",
//         },
//         {
//             title:"Item 2",
//             text: "Text 2",
//         },
//         {
//             title:"Item 3",
//             text: "Text 3",
//         },
//         {
//             title:"Item 4",
//             text: "Text 4",
//         },
//         {
//             title:"Item 5",
//             text: "Text 5",
//         },
//       ]
//     }


//     _renderItem = ({item, index}) => {
//         return (
//             <View style={styles.slide}>
//                 <Text style={styles.title}>{ item.title }</Text>
//             </View>
//         );
//     }
    
//     return ( 
//         <>
//         <Carousel layout={"default"}
//                   ref={ref => this.carousel = ref}
//                   data={this.state.carouselItems}
//                   sliderWidth={300}
//                   itemWidth={300}
//                   renderItem={this._renderItem}
//                   onSnapToItem = { index => this.setState({activeIndex:index}) } />
//         </>
//      );
// }
 
// export default HomeSection4;