# Навигация в React Native
## Цель работы
В этой работе мы рассмотрим стандартный метод навигации, называемый навигацией по стеку.

## Задания для выполнения
```java
function Feed({ navigation }) {
  return (
    <View style={{justifyContent: 'center', alignItems: 'center', padding: 24, }}>
      <Text style={styles.paragraph}>Мои данные</Text>
      <Image style={styles.logo} source={require('./assets/geas.jpg')}/>
      <Text style={styles.textread}>Мой телефон:</Text>
      <Text style={styles.phonetext}>13-13-13</Text>
      <Text style={styles.text_cont, {marginBottom:25}}>Частые контакты </Text>
      <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      
      >
      <View>
         <Image style={styles.logo2} source={require('./assets/pain.jpg')}/>
         <Text style={styles.text_forcont}>Pain 1</Text>
         <Text style ={styles.text_phone2, {marginBottom:-5}}>6(391)533-78</Text>
         <Pressable
        onPress={() => navigation.navigate('Z Z Z')}
        style={{ alignItems: 'center', padding: 10, marginBottom: 10, marginTop: 10, }}
      >
      <Text>Profile</Text>
      </Pressable>
      </View>
      <View style={{marginStart:80,}}>
         <Image style={styles.logo2} source={require('./assets/pain2.jpeg')}/>
         <Text style={styles.text_forcont}>Pain 2</Text>
         <Text style ={styles.text_phone2, {marginBottom:-5}}>6(491)663-18</Text>
          <Pressable
        onPress={() => navigation.navigate('Geass 1')}
        style={{ alignItems: 'center', padding: 10, marginBottom: 10, marginTop: 10, }}
      >
      <Text>Profile</Text>
      </Pressable>
      </View>
      </ScrollView>
      <View style={{justifyContent: 'center', alignItems: 'center', marginTop:70, }}>
      <Text style={{textAlign: 'center',marginBottom:0, fontSize:15,}}>Навигация</Text>
      <Button color = "darkblue" title="открыть" onPress={() => navigation.openDrawer()} />
      </View>
    </View>
  );
}
const MainStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Killnet" component={Page1} />
       <Stack.Screen name="ZzZ" component={Page2} />
    </Stack.Navigator>
  );
}
function Conference({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Conference Details</Text>
    </View>
  );
}
function Notifications() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <App2 />
      <Text>Notifications Screen</Text>
    </View>
  );
}

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />

    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <NavigationContainer independent={true}>


    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    > 
      <Drawer.Screen name="Главная страница" component={Feed} />
      <Drawer.Screen name = "Профили" component={MainStackNavigator}/>
      <Drawer.Screen name="Основные контакты" component={Notifications} />
    </Drawer.Navigator>
      </NavigationContainer>

  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}
 ```

```java
export default function AssetExample() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>Лелуш Ви Британия</Text>
      <Text style={styles.textread}>Однако, вопреки всем законам физики, целая и невредимая, С.С. через некоторое время приходит к нему домой, где шокированный Лелуш застает её за складыванием оригами вместе с его младшей сестрой, Нанналли. На вопросы Лелуша она отказывается отвечать, лишь сообщив ему, что она - его союзник. С этого момента, С.С. остается тайно жить в доме Лелуша, наблюдая за его действиями. Несмотря на то, что её разыскивает британская армия, она часто показывается на людях, чем крайне раздражает Лелуша. Два раза из-за её присутствия срывается фестиваль академии Эшфорд, на котором делают огромную пиццу. Также, именно из-за неё Мао, владеющий Гиассом, читающим мысли, пытается устранить Лелуша. И все же, она оказывается ему полезной - переодевшись в костюм Зеро, она неоднократно спасает Лелуша из практически безвыходных ситуаций, а также помогает ему реализовать его планы (например, во время переговоров с группировкой Киото).</Text>
    </View>
  );
}
```

```java
const Page1 = ({navigation}) => {
  return (
     <View style={{justifyContent: 'center', alignItems: 'center', padding: 24, }}>
      <Text style={styles.paragraph}>БОЛЬ 2</Text>
      <Image style={styles.logo} source={require('./assets/geas.jpg')}/>
      <Text style={styles.textread}>Telefone:</Text>
      <Text style={styles.phonetext}>13-13-13-13-13</Text>
      <Text style={styles.text_cont, {marginBottom:25}}>Частые контакты </Text>
      <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      
      >
      <View>
         <Image style={styles.logo2} source={require('./assets/pain.jpg')}/>
         <Text style={styles.text_forcont}>БОЛЬ</Text>
         <Text style ={styles.text_phone2}>11-11-11-11</Text>
                 <Pressable
        onPress={() => navigation.navigate('Профиль Кошки раз')}
        style={{ alignItems: 'center', padding: 10, marginBottom: 10, marginTop: 10, }}
      >
      <Text>Profile</Text>
      </Pressable>
      </View>
      </ScrollView>
      <Pressable
        onPress={() => navigation.navigate('Главная страница')}
        style={{ alignItems: 'center', padding: 10, marginBottom: 10, marginTop: 10, }}
      >
      <Text>Назад</Text>
      </Pressable>
    </View>
  );
};
```

```java
const Page2 = ({navigation}) => {
  return (
     <View style={{justifyContent: 'center', alignItems: 'center', padding: 24, }}>
      <Text style={styles.paragraph}>Лелуш Ви Британия</Text>
      <Image style={styles.logo} source={require('./assets/pain3.png')}/>
      <Text style={styles.textread}>Телефон:</Text>
      <Text style={styles.phonetext}>18-18-18-18</Text>
      <Text style={styles.text_cont, {marginBottom:25}}>Частые контакты </Text>
      <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      
      >
      <View>
        
         <Image style={styles.logo2} source={require('./assets/pain2.jpeg')}/>
         <Text style={styles.text_forcont}>C.C</Text>
         <Text style ={styles.text_phone2}>13-13-13</Text>
        <Pressable
        onPress={() => navigation.navigate('Z z Z z Z')}
        style={{ alignItems: 'center', padding: 10, marginBottom: 10, marginTop: 10, }}
      >
      <Text>профиль</Text>
      </Pressable>
      </View>
      </ScrollView>
      <Pressable
        onPress={() => navigation.goBack()}
        style={{ alignItems: 'center', padding: 10, marginBottom: 10, marginTop: 10, }}
      >
      <Text>Назад</Text>
      </Pressable>
    </View>
  );
};

```
![image](https://user-images.githubusercontent.com/92590831/162343310-08659226-bfb8-4d85-92c5-9d1ef2f9387a.png)

![image](https://user-images.githubusercontent.com/92590831/162343386-1e637207-ad6c-412e-8ebc-2f7a2090ccf0.png)

![image](https://user-images.githubusercontent.com/92590831/162343397-f432d8b6-7019-46af-ba00-a372000eb26b.png)

