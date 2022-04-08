# Гибкие элементы в React Native
## Цель работы
Получить навыки работы с адаптивными объектами в React Native.
## Задания для выполнения
```java
export default function App() {
  return (
       <SafeAreaView style={styles.container}>
      
      
      <ScrollView style={styles.scrollView}
      
          vertical = {true}
          automaticallyAdjustContentInsets={false}
          pagingEnabled={true}
          showsHorizontalScrollIndicator={true}
          bounces={true}
          onMomentumScrollEnd={this.onAnimationEnd}>
          
        <Text style={styles.text}>
          Unlike the more generic ScrollView, the following list view components only render elements that are currently showing on the screen. This makes them a performant choice for displaying long lists of data.
        </Text>
      
      <View>
      <ScrollView
      horizontal={true}
      showsVerticalScrollIndicator={true}>
      <Text>When true, gestures can drive zoom past min/max and the zoom will animate to the min/max value at gesture end, otherwise the zoom will not exceed the limits.</Text>
      </ScrollView>
      </View>
   
      </ScrollView>
       <View style={styles.viewst}>
      <ScrollView>
      <Text style={styles.viewstext}>To render multiple columns, use the numColumns prop. Using this approach instead of a flexWrap layout can prevent conflicts with the item height logic.</Text>
       <Separator/>
       <Button 
        title="Press me"
        color="black"
        
        onPress={() => Alert.alert('Press me')}
      />
       <Separator />
       <Text style={{paddingTop:10, fontSize:39, fontWeight: 'bold'}}>List Views</Text>
        <Text style={{paddingTop:5}}>Many of the following components provide wrappers for commonly used Android classes.</Text>
      </ScrollView>
      </View>
      
    </SafeAreaView>
    
  );
}
 ```
![image](https://user-images.githubusercontent.com/92590831/162338839-cb6c8229-4f71-4d33-a32b-cc347db92d86.png)

