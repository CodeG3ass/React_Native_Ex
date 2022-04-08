# Гибкие элементы в React Native
## Цель работы
Получить навыки работы с адаптивными объектами в React Native.

## Задания для выполнения
```java
xport default function App() {
  return (
    <View style={styles.container}>
      <View style={{ flex: 2, backgroundColor: 'white' }}>
      <Text style={styles.paragraph}>5 книжных новинок октября
      </Text>
      </View>
      <View style={{ flex: 3, backgroundColor: 'skyblue' }}>
      <Text style={styles.text2}>«Кадиш.com» Натан Ингландер. Издательство «Книжники»
      </Text></View>
      <View style={{ flex: 10, backgroundColor: 'steelblue' }}>
      <Text style={styles.text3}>Ироничная новелла Натана Ингландера, две личные истории культовой Патти Смит, репортаж британской журналистки о будущем человечества, дебютный роман Оушена Вуонга и журналистское расследование о создании «Моссада». В нашей подборке рассказываем о пяти захватывающих книжных новинках, которые достойны того, чтобы появиться на ваших полках.
      </Text> 
      <Button style={styles.butt}
        title="Читать далее"
         color="darkblue"
        onPress={() => Alert.alert('Читать далее')}
      /></View>
     
    </View>
  );
}
```
![image](https://user-images.githubusercontent.com/92590831/162346116-a6d9591d-a74c-489e-8f75-4e9ad5a3b6bf.png)
